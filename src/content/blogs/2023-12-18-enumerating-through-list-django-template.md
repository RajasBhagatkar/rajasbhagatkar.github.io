---
title: Enumerating Through Lists in a Django Template
slug: enumerating through lists in a django template jnm
lang: en-In
---

## Environment
python 3.9.5  
django4 4.2.8

--------------
--------------

I recently started learning django for my new project, through a awesome youtube video by free code camp on django which convers the basic to advance topics on django and it's template engine. while going through I had problem where I had to enumerate a list passed from the view to the template. You can use these methods below.

```python
# view.py
def product_list_all(request):
    queryset = [
                {title: "Product 1"},
                {title: "Product 1"},
                {title: "Product 1"}
            ]
    context = {
        "products": queryset
    }
    return render(request, "product_list.html",context)
```

these function handles the request on the *`products/all`* for **GET** request handled by url.py in the root project. Your's url.py file should look something to this, at lease it would have the the route as same as *list_all_products_in_db*

```python
# urls.py
from django.contrib import admin;
from django.urls import path;

urlpatterns = [
    path('admin/', admin.site.urls),

    path("products/list/", product_list_all, name="list_all_products_in_db")
]
```

to enumerate through a list passed from the view to the template. You can use these methods below

|           variable            |             defination                       |
|:------------------------------|:---------------------------------------------|
| `forloop.counter`               | enumerating index starting from 1            |
| `forloop.counter0`              | enumerating index starting from 0            |
| `forloop.revcounter`            | enumerating index starting from the tail     |
| `forloop.revcounter0`           | enumerating index starting from 0            |
| `forloop.first`                 | true when index is at 0                      |
| `forloop.last`                  | true when index is at tail                   |
| `forloop.parentloop`            | enumerates through the parent loop           |





An example of the `forloop.counter` will be:

```python
{% for product in products %}
   \{{ forloop.counter }} : \{{ product.title }}
{% endfor %}
```
Output:
```
1: Product 1
2: Product 2
3: Product 3
```

For `forloop.counter0` it will be:
```python
{% for product in products %}
    \{{ forloop.counter0 }} : \{{ product.title }}
{% endfor %}
```

```
0: Product 1
1: Product 2
2: Product 3
```

As for the length of a list, ` products|length ` can be used.

```html
\{{ products | length }}
```
```
3
```