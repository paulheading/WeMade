---
title: array-hash
myArray:
 - item 1
 - item 2
 - one more
# or
myArray2: [ item 1, item 2, one more item ]
myHash:
 item1: toto
 "item 2": titi
 item 3: yoyo
---

{% comment %} +++ Shortcuts
  a = page.myArray
  h = page.MyHash
  h2 = page.myArray2
{% endcomment %}

{% assign a = page.myArray %}
{% assign a2 = page.myArray2 %}
{% assign h = page.myHash %}

## Arrays

page.myArray : {{ a }}

page.myArray with inspect : {{ a | inspect }}

page.myArray with join : {{ a | join:", " }}

page.myArray2 : {{ a2 | inspect }}

### Looping the array
<ul>
{% for item in a %}
<li>{{ item | inspect }}</li>
{% endfor %}
</ul>

### Targeting a specific item in the array

{% comment %} arrays start at zero {% endcomment %}
second element in the array = {{ a[1] }}

Note that {% raw %}{{ a["1"] }}{% endraw %} will not work. You need to pass
an integer and not a string.

Test (not working) : { a["1"] }

## Hashes

page.myHash : {{ h }}

#### looping the hash

{% for item in h %}
 {{ item | inspect }}
{% endfor %}

You note that in the loop we get arrays that returns **key as item[0]**
and **value as item[1]**

The loop can then look like :

<ul>
{% for item in h %}
 <li>{{ item[0] }} : {{ item[1] }}</li>
{% endfor %}
</ul>

### Targeting a specific item in the hash

**Item1** due to the absence of space in the key name, can both me accessed
by dot notation (h.item1) or bracket notation (h["item1"]).

hash.item1 : {{ h.item1 }}

hash["item1"] : {{ h.["item1"] }}

Item 2 and 3, containing a space in their key string can only be accessed with
bracket notation :

hash.item 2 (not working) : {{ h.item 2 }}

hash["item 2"] : {{ h.["item 2"] }}

hash.item 3 (not working) : {{ h.item 3 }}

hash["item 3"] : {{ h.["item 3"] }}
