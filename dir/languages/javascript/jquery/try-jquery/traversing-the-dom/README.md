# Try jQuery
## PART 2: Traversing The DOM
**Author**: [Code School](https://www.codeschool.com)   

## Table Of Contents
1. [Selecting Descendants](#selecting-descendants)
1. [Using the descendant selector](#using-the-descendant-selector)
1. [Selecting Direct Children](#selecting-direct-children)
1. [Selecting Multiple Elements](#selecting-multiple-elements)
1. [CSS-like pseudo class](#css-like-pseudo-class)
1. [Traversing the DOM](#traversing-the-dom)
1. [Walking the DOM](#walking-the-dom)
1. [Walking up the DOM](#walking-up-the-dom)
1. [Walking Down The DOM](#walking-down-the-dom)
## +









## Selecting Descendants

Where we left off...
```
<h1>Where do you want to go?</h1>
<h2>Travel Destinations</h2>
<p>Plan your next adventure.</p>
<ul id="destinations">
	<li>Rome</li>
	<li>Paris</li>
	<li class='promo'>Rio</li>
</ul>
```
How do we find the 'li' elements that are inside of the 'ul' with a 'destinations' ID?


## Using the descendant selector
We'll use the descendant selector...
```
$('destinations li');
```


## Selecting Direct Children
How do we find only the 'li' elements that are children of the 'destinations' 'ul'?

```
<h1>Where do you want to go?</h1>
<h2>Travel Destinations</h2>
<p>Plan your next adventure.</p>
<ul id="destinations">
	<li>Rome</li>
	<li>
		<ul id="france">
			<li>Paris</li>
		</ul>
	</li>
	<li class='promo'>Rio</li>
</ul>
```

We'll do this with the child selector
```
$('destinations > li');
```


## Selecting Multiple Elements
How do we find only elements with either a 'promo' class or a 'France' ID?

The 'Multiple' Selector
```
$('.promo, #france');
```
Allows you to select multiple items.


## CSS-like pseudo class
What if you wanted to select the FIRST item in the list?
```
$('#destinations li:first');
```
What if you wanted to select the LAST item in the list?
```
$('#destinations li:last');
```
What if you wanted to select the EVER OTHER item in the list?
```
$('#destinations li:odd');
```
What if you wanted to select the EVEN item in the list?
```
$('#destinations li:even');
```



## Traversing the DOM
Up until now we have used CSS selectors to select different parts of the DOM. However sometimes it is faster to use something we call traversing.  

Walking the DOM by traversing it.  

Can we find all the li elements that the 'destinations' list contains without using a descendant selector?

Filter by traversing...
```
$('#destinations').find('li');
```
Using the 'first' method
```
$('li').first();
```
Using the 'last' method
```
$('li').last();
```
## Walking the DOM
Can we find the middle list item, knowing there is no filter to find it unlike ':first' or ':last'?  

First list item
```
$('li').first();
```
Middle list item
```
$('li').first().next();
```
next and then the previous
```
$('li').first().next().prev();
```
This is referred to as method chaining  

## Walking up the DOM
If we started by selecting a child, can we figure out what element is its direct parent?  

Traversing Up The DOM  
```
$('li').first().parent();
```

## Walking Down The DOM
With a parent that has many children who in turn have their own children, how could we find only the first generation of children?  

Traverse down the DOM...  
```
$('#destinations').children('li');
```
