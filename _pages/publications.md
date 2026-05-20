---
layout: archive
title: "Selected Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}
<hr width="80%">
{% for post in site.publications reversed %}
  {% unless post.selected == false %}
    {% include archive-pub.html %}
  {% endunless %}
{% endfor %}
