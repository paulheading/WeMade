---
title  : Paul Heading
layout : cv
---

{% for staff in site.data.paul %}
  {% include html/loop-cv.html %}
{% endfor %}
