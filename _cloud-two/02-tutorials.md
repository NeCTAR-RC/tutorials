---
title: Tutorials
order: 2
duration: 1
---

{% include tutorials.html -%}

{% assign curriculum = "Cloud Two" %}

{% comment %}
To facilitate proper ordering of tutorials for cloud starter pages, we loop
through our ordered list of categories and build the list of tutorials from
there
{% endcomment -%}

{% assign sortcategories = "" | split: "" %}

{% comment %}
Add categories used by tutorials with the assigned curriculum in the order
specified in the site config
{% endcomment %}
{% for category in site.tutorial_categories -%}
  {% for tutorial in tutorials -%}
    {% if tutorial.curriculum == curriculum and tutorial.category == category -%}
      {% unless sortcategories contains category %}
        {% assign sortcategories = sortcategories | push: category %}
      {% endunless %}
    {% endif %}
  {% endfor %}
{% endfor %}

{% comment %}
Add any missing categories to the end of the list
{% endcomment %}
{% for tutorial in tutorials -%}
  {% if tutorial.curriculum == curriculum -%}
    {% unless sortcategories contains tutorial.category %}
      {% assign sortcategories = sortcategories | push: category %}
    {% endunless %}
  {% endif %}
{% endfor %}

{% for category in sortcategories -%}
### {{ category }}
{% for tutorial in tutorials -%}
{% if tutorial.curriculum == curriculum and tutorial.category == category -%}
* [{{ tutorial.title }}]({{ tutorial.label | relative_url }})
{% endif -%}
{% endfor %}
{% endfor %}
