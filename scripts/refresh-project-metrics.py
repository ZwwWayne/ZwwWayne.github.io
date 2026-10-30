#!/usr/bin/env python3
"""Refresh GitHub stars and 30-day downloads from official model repositories."""
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
import json
from pathlib import Path
import re
import sys
from urllib.request import Request, urlopen

REPOSITORIES = {
    'mindsearch': 'InternLM/MindSearch',
    'mmdetection': 'open-mmlab/mmdetection',
    'mmdetection3d': 'open-mmlab/mmdetection3d',
}
HF_URL = 'https://huggingface.co/api/models?author=internlm&expand=downloads&limit=1000'
SERIES = {
    'internlm': ('InternLM', re.compile(r'^internlm/internlm(?:\d|-(?:chat-)?\d)', re.I)),
    'intern_s': ('Intern-S', re.compile(r'^internlm/intern-s\d+(?:-|$)', re.I)),
}
OUTPUT = Path(__file__).resolve().parents[1] / '_data/project_metrics.json'


def compact(count):
    for divisor, suffix in [(1_000_000_000, 'b'), (1_000_000, 'm'), (1_000, 'k')]:
        if count >= divisor:
            return f'{count / divisor:.1f}'.rstrip('0').rstrip('.') + suffix
    return str(count)


def timestamp():
    return datetime.now(timezone.utc).isoformat(timespec='seconds').replace('+00:00', 'Z')


def request(url):
    return urlopen(Request(url, headers={
        'Accept': 'application/json', 'User-Agent': 'Academic-homepage-metrics',
    }), timeout=15)


def valid_count(value):
    return type(value) is int and 0 <= value <= 9_007_199_254_740_991


def fetch_stars(item):
    key, repo = item
    try:
        with request(f'https://api.github.com/repos/{repo}') as response:
            stars = json.load(response)['stargazers_count']
        if not valid_count(stars):
            raise ValueError('Invalid star count')
        return key, {
            'repo': repo, 'stars': stars, 'exact': f'{stars:,}',
            'display': compact(stars), 'updated_at': timestamp(),
        }, None
    except Exception as error:
        return key, None, str(error)


def fetch_downloads():
    with request(HF_URL) as response:
        models = json.load(response)
        if re.search(r'rel\s*=\s*[\"\']?next', response.headers.get('Link', ''), re.I):
            raise ValueError('Paginated result; retaining complete previous snapshot')
    if not isinstance(models, list) or len(models) >= 1000:
        raise ValueError('Incomplete model list')
    result = {}
    updated_at = timestamp()
    for key, (label, pattern) in SERIES.items():
        selected = {}
        for model in models:
            model_id = model.get('id', '')
            if not isinstance(model_id, str) or not pattern.match(model_id):
                continue
            if model_id.split('/')[0].lower() != 'internlm':
                continue
            if not valid_count(model.get('downloads')):
                raise ValueError(f'Invalid download count: {model_id}')
            normalized_id = model_id.lower()
            if normalized_id in selected and selected[normalized_id]['downloads'] != model['downloads']:
                raise ValueError(f'Conflicting duplicate: {model_id}')
            selected[normalized_id] = {'id': model_id, 'downloads': model['downloads']}
        if not selected:
            raise ValueError(f'No models matched {label}')
        downloads = sum(item['downloads'] for item in selected.values())
        if not valid_count(downloads):
            raise ValueError('Invalid download total')
        result[key] = {
            'label': label, 'downloads': downloads, 'exact': f'{downloads:,}',
            'display': compact(downloads), 'model_count': len(selected),
            'period': 'rolling 30 days', 'source': 'Hugging Face Hub API',
            'updated_at': updated_at,
            'scope': f'Official {label} model repositories, including official derivatives and quantizations',
            'models': sorted(item['id'] for item in selected.values()),
        }
    return result


def main():
    previous = json.loads(OUTPUT.read_text()) if OUTPUT.exists() else {}
    metrics = previous.get('repositories', {})
    downloads = previous.get('downloads', {})
    updated = 0
    with ThreadPoolExecutor(max_workers=4) as pool:
        downloads_job = pool.submit(fetch_downloads)
        for key, metric, error in pool.map(fetch_stars, REPOSITORIES.items()):
            if metric is not None:
                metrics[key] = metric
                updated += 1
                print(f"{metric['repo']}: {metric['exact']} stars")
            else:
                print(f'{REPOSITORIES[key]}: kept previous snapshot ({error})', file=sys.stderr)
        try:
            downloads = downloads_job.result()
            updated += 1
            for metric in downloads.values():
                print(f"{metric['label']}: {metric['exact']} downloads / 30d ({metric['model_count']} official HF repositories)")
        except Exception as error:
            print(f'Hugging Face: kept previous snapshot ({error})', file=sys.stderr)
    if not updated:
        return 1
    payload = {
        'source': 'GitHub REST API and Hugging Face Hub API',
        'repositories': {key: metrics[key] for key in REPOSITORIES if key in metrics},
        'downloads': downloads,
    }
    temporary = OUTPUT.with_suffix('.tmp')
    temporary.write_text(json.dumps(payload, indent=2) + '\n')
    temporary.replace(OUTPUT)
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
