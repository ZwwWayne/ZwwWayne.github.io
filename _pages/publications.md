---
layout: research-home
title: "Selected Publications"
excerpt: "Selected publications by Wenwei Zhang on AI agents, foundation models and computer vision."
permalink: /publications/
author_profile: false
---

<header class="publications-intro">
  <p class="research-kicker">Research &amp; publications</p>
  <h1>Selected publications</h1>
  <p>A selection of my work on AI agents, foundation models and computer vision. For a complete list, visit <a href="{{ site.author.googlescholar }}">Google Scholar <span aria-hidden="true">↗</span></a>.</p>
</header>

{%- capture publication_years -%}
  {%- for post in site.publications -%}
    {%- unless post.selected == false -%}{{ post.year | append: "" | slice: 0, 4 }}|{%- endunless -%}
  {%- endfor -%}
{%- endcapture -%}
{% assign publication_years = publication_years | split: "|" | uniq | sort | reverse %}
<div class="publications-list">
  {% for publication_year in publication_years %}
    <section class="publication-year" aria-labelledby="year-{{ publication_year }}">
      <h2 id="year-{{ publication_year }}">{{ publication_year }}</h2>
      <div class="publication-year__items">
        {% for post in site.publications reversed %}
          {% unless post.selected == false %}
            {% assign post_year = post.year | append: "" | slice: 0, 4 %}
            {% if post_year == publication_year %}{% include research-publication.html %}{% endif %}
          {% endunless %}
        {% endfor %}
      </div>
    </section>
  {% endfor %}
</div>
