---
title  : Paul Heading
layout : cv
---

{% for staff in site.data.paul %}
  {% include html/area-cv.html %}
{% endfor %}
