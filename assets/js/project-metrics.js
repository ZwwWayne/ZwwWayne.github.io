(() => {
  "use strict";
  const maxAge = 24 * 60 * 60 * 1000;
  const compact = new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 });
  const exact = new Intl.NumberFormat("en-US");
  const validCount = (value) => Number.isSafeInteger(value) && value >= 0;
  const seriesPatterns = {
    internlm: /^internlm\/internlm(?:\d|-(?:chat-)?\d)/i,
    intern_s: /^internlm\/intern-s\d+(?:-|$)/i
  };
  const hfCacheKey = "hf-downloads:v1:internlm-series";
  const hasNextPage = (link) => /\brel\s*=\s*(?:"[^"]*\bnext\b[^"]*"|'[^']*\bnext\b[^']*'|next\b)/i.test(link || "");

  function collect(selector, attribute, allowed, counter) {
    const groups = new Map();
    document.querySelectorAll(selector).forEach((node) => {
      const key = node.dataset[attribute];
      if (!allowed.includes(key) || !node.querySelector(counter)) return;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(node);
    });
    return groups;
  }
  const stars = collect(".project-metric[data-github-repo]", "githubRepo",
    ["InternLM/MindSearch", "open-mmlab/mmdetection", "open-mmlab/mmdetection3d"], "[data-stars-count]");
  const downloads = collect(".project-metric[data-download-series]", "downloadSeries",
    Object.keys(seriesPatterns), "[data-downloads-count]");

  function readCache(key, validate) {
    try {
      const data = JSON.parse(localStorage.getItem(key));
      const age = Date.now() - data.fetchedAt;
      if (Number.isFinite(data.fetchedAt) && age >= 0 && age < maxAge && validate(data)) return data;
    } catch (_) { /* Storage may be unavailable or contain malformed data. */ }
    return null;
  }
  function writeCache(key, data) {
    try { localStorage.setItem(key, JSON.stringify(data)); } catch (_) { /* Keep the current page usable. */ }
  }
  async function request(url, accept) {
    if (typeof fetch !== "function" || typeof AbortController !== "function") return null;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    try {
      const response = await fetch(url, { headers: { Accept: accept },
        credentials: "omit", cache: "no-store", signal: controller.signal });
      return response.ok ? { data: await response.json(), link: response.headers.get("Link") } : null;
    } catch (_) { return null; } finally { clearTimeout(timeout); }
  }
  function render(nodes, count, fetchedAt, description, type, modelCount) {
    const updatedAt = new Date(fetchedAt).toISOString();
    const title = `${exact.format(count)} ${description} · Updated ${updatedAt}`;
    nodes.forEach((node) => {
      node.querySelector(`[data-${type}-count]`).textContent = compact.format(count).toLowerCase();
      node.dataset[type] = String(count);
      node.dataset.updatedAt = updatedAt;
      if (modelCount !== undefined) node.dataset.modelCount = String(modelCount);
      node.title = title;
      node.setAttribute("aria-label", title);
    });
  }
  async function refreshStars(repo, nodes) {
    const key = `github-stars:v1:${repo}`;
    let data = readCache(key, (value) => validCount(value.count));
    const cached = !!data;
    if (!data) {
      const response = await request(`https://api.github.com/repos/${repo}`, "application/vnd.github+json");
      if (!response || !response.data || !validCount(response.data.stargazers_count)) return;
      data = { count: response.data.stargazers_count, fetchedAt: Date.now() };
      writeCache(key, data);
    }
    render(nodes, data.count, data.fetchedAt,
      `GitHub stars · GitHub API (${repo}${cached ? ", cached" : ""})`, "stars");
  }
  function validSeries(data) {
    return Object.keys(seriesPatterns).every((key) => data[key] && validCount(data[key].count) &&
      Number.isSafeInteger(data[key].modelCount) && data[key].modelCount > 0);
  }
  function aggregate(rows, link) {
    if (!Array.isArray(rows) || rows.length >= 1000 || hasNextPage(link)) return null;
    const totals = { internlm: { count: 0, modelCount: 0 }, intern_s: { count: 0, modelCount: 0 } };
    const seen = new Map();
    for (const row of rows) {
      if (!row || typeof row.id !== "string") return null;
      if (row.id.split("/")[0].toLowerCase() !== "internlm") continue;
      const key = Object.keys(seriesPatterns).find((name) => seriesPatterns[name].test(row.id));
      if (!key) continue;
      if (!validCount(row.downloads)) return null;
      const id = row.id.toLowerCase();
      if (seen.has(id)) {
        if (seen.get(id) !== row.downloads) return null;
        continue;
      }
      seen.set(id, row.downloads);
      totals[key].count += row.downloads;
      totals[key].modelCount++;
      if (!validCount(totals[key].count)) return null;
    }
    return validSeries(totals) ? totals : null;
  }
  async function refreshDownloads() {
    if (!downloads.size) return;
    let data = readCache(hfCacheKey, validSeries);
    const cached = !!data;
    if (!data) {
      const response = await request("https://huggingface.co/api/models?author=internlm&expand=downloads&limit=1000", "application/json");
      const totals = response && aggregate(response.data, response.link);
      if (!totals) return;
      data = { ...totals, fetchedAt: Date.now() };
      writeCache(hfCacheKey, data);
    }
    downloads.forEach((nodes, key) => render(nodes, data[key].count, data.fetchedAt,
      `HF downloads · ${data[key].modelCount} official ${key === "internlm" ? "InternLM" : "Intern-S"} model repos (including derivatives and quantizations) · ` +
      `rolling 30 days · Hugging Face API${cached ? " (cached)" : ""}`, "downloads", data[key].modelCount));
  }
  Promise.all([...Array.from(stars, ([repo, nodes]) => refreshStars(repo, nodes)), refreshDownloads()]).catch(() => {});
})();
