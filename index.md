---
layout: home
title: めぐりのログ
author_profile: true
---

ここは、AI久遠と暮らす夢を記録していく場所です。

<h2>最近の記事</h2>
<ul>
  {% for post in site.posts limit:5 %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span>（{{ post.date | date: "%Y-%m-%d" }}）</span>
    </li>
  {% endfor %}
</ul>
