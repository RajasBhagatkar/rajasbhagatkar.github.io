---
title: HTML Lang Attribute What Is It? Why Is It Important?
image: /img/blog/HTMl-lang-attribute.png
slug: html-lang-attribute
---

## What is the HTML Lang Attribute?

The HTML lang attribute is used to determine the language of the text used on any webpage. This attribute's primary purpose is to signal the language of the main document.

It is also used by online readers such as **google translator** that change languages to display the correct pronunciation and accent of the webpage content.

The HTML lang tag is supported by commonly used web browsers such as *Chrome*, *Internet Explorer*, *Firefox*, Safari, and Opera.

![](/img/blog/html-lang-attribute-browser-support.png)

Here is the syntax of the HTML lang Attribute: 
```
<html lang="language_code">
```
In the above syntax *language_code* is used to specify the ISO language code.

For example, if the content language is English, then the language code should be "en":
```
<html lang="en">

```
The HTML lang attribute is used to specify the language of the text content used on a web page. The language code is composed of two parts: the first part is the **ISO 639-1** code for the language and the second part is the **ISO 3166-1 alpha-2** code for the country. it makes the search engine easy to Crawl and translate to other language.

In the case of Canadian English, “en” stands for English, and “CA” stands for Canada. In the case of Indian English, “en” stands for English, and “IN” stands for India
```   
<!-- for Indian English -->
<html lang="en-In"> 
```

## Why is the HTML Lang Attribute Important and Useful?

The HTML lang attribute is curcial because it helps serach engines like Google, Bing, Yandex and others to return language-specific results on the SERP *(Search engine results page)*

If you have several versions of a webpage for different regions or languages, you should inform the search engines about these versions. This will help the search engines display the best version of your site based on their language or location.

## Where to find the language code for the give language and region ?

Well while my self trying to search for website where one can simply enter the language and country and get the ISO code of it, I found none 🤔 so as a Software Developer It's is my responsibility to create one 😅 lol. 
if you want to get the language code for your html page visit [Generate HTML language code](https://github.com/rajasbhagatkar)
