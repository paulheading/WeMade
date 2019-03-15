---
layout: none
---
[
  {% for page in site.pages %}
  {% if page.url == '/' or
     page.url contains '404' or
     page.url contains '.js' or
     page.url contains '.css' or
     page.url contains 'search' or
     page.url contains 'menu' %} {}
  {% else %}

    {
      "name"     : "{{ page.title }}",
      "url"      : "{{ page.url | replace: '.html','' | replace: 'index','' }}"
    }

  {% endif %}
  {% unless forloop.last %},{% endunless %}
  {% endfor %},
  {% for page in site.paul %}

    {
      "name"     : "{{ page.title }}",
      "url"      : "{{ page.url | replace: '.html','' | replace: 'index','' }}"
    }

  {% unless forloop.last %},{% endunless %}
  {% endfor %},
  {% for page in site.chloe %}

    {
      "name"     : "{{ page.title }}",
      "url"      : "{{ page.url | replace: '.html','' | replace: 'index','' }}"
    }

  {% unless forloop.last %},{% endunless %}
  {% endfor %},
  {% for page in site.projects %}

    {
      "name"     : "{{ page.title }}",
      "url"      : "{{ page.url | replace: '.html','' | replace: 'index','' }}"
    }

  {% unless forloop.last %},{% endunless %}
  {% endfor %},
  {% for page in site.blog %}

    {
      "name"     : "{{ page.title }}",
      "url"      : "{{ page.url | replace: '.html','' | replace: 'index','' }}"
    }

  {% unless forloop.last %},{% endunless %}
  {% endfor %}
]