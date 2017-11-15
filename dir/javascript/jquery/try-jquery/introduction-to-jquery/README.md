# Try jQuery
## Introduction To jQuery
**Author**: [Code School](https://www.codeschool.com)   

## Table Of Contents
1. [What is Jquery](#what-is-jquery)
1. [Changing Content](#changing-content)
1. [Document Object Model](#document-object-model)
1. [Loading HTML into the DOM](#loading-html-into-the-dom)
1. [DOM Structure](#dom-structure)
1. [Search The DOM](#search-the-dom)
1. [Find Things](#find-things)
1. [The Catch](#the-catch)
1. [Basic Usage](#basic-usage)
1. [CSS Selectors](#css-selectors)

1. [jQuery to find Nodes](#jquery-to-find-nodes)
1. [By Element Name](#by-element-name)
1. [Before The DOM Loads](#before-the-dom-loads)
1. [The DOM 'ready' event](#the-dom-ready-event)
1. [Listening for document ready](#listening-for-document-ready)
1. [What We Have So Far](#what-we-have-so-far)
## +


## What is Jquery
Five common ways you may use jQuery  

jQuery makes it easy to:  
1. FIND elements in an HTML document
1. CHANGE HTML content
1. LISTEN to what a user does and react accordingly (ie: press a button)
1. ANIMATE content on the page
1. TALK over the network to fetch new content (ie: communicate with a server without refreshing the page)

## Changing Content
```
<!DOCTYPE html>
<html>
<head>
	<title>jQuery Adventures</title>
</head>
<body>
	<h1>Where do you want to go?</h1>
	<p>Plan your next adventure.</p>
</body>
</html>
```

### Objective
How can we modify the text of the h1 element?
1. We need to find it
2. We need to change it

### How can we search through our HTML?
In order to do that we need to understand a little bit better how our browser organizes the HTML it receives.

## Document Object Model
It does this in the Document Object Model ('DOM').  
A tree like structure created by browsers so we can quickly find HTML elements using JavaScript.


## Loading HTML into the DOM
When we go to a URL the browser starts receiving HTML from that web page. It loads it piece by piece into the DOM. As it receives each element it starts building nodes in the DOM.

## DOM Structure
What does that DOM structure look like?  
Inside the DOM, HTML elements become 'nodes' which have relationships with one another.
```
document node
	- html node
		- head node
			- title node
				- 'text' node: 'jQuery Adventures'
		- body node
			- H1 node
				- 'text' node: 'Where do you want to go?'
			- P node
				- 'text' node: 'Plan your next adventure.'
```

## Search The DOM
How do we search through the DOM?  
In order to interact with the DOM all browsers use JavaScript. Thats a standard language that gives developers a way to interact with the DOM.


## Find Things
**How do we find things using the DOM?**
```
WEB SERVER  
   |_ HTML files  
   |_ JavaScript files  
```

WEB BROWSER  
1. Requests a webpage from the Web Server through a URL
1. The Web Server sends back the HTML along with other files needed to load that page.
1. The Web Browser then loads that HTML into the DOM
1. Once loaded we can execute the JavaScript to interact with the DOM

## The Catch
Of Course There Is A Catch...  

Why don't we use JavaScript to interact with every browser? Why do we need jQuery?  

The catch here is that every modern browser has a slightly different DOM interface.  

This is where jQuery comes in. So you can write one piece of code that can communicate with all modern web browsers.  

If our JavaScript uses jQuery to interact with the DOM then it will work on most modern browsers.  

## Basic Usage  
In order to access the DOM using jQuery we will put some code inside the 'jQuery' function
```
jQuery();
```
To access the DOM using jQuery we need to specify the 'document' keyword.
```
jQuery(document);
```
But how can we search through the DOM and find that H1 and P?


## CSS Selectors
We need to use CSS selectors.  

How would we us CSS to decorate the HTML page?
```
<!DOCTYPE html>
<html>
<head>
  <title>jQuery Adventures</title>
</head>
<body>
  <h1>Where do you want to go?</h1>
  <p>Plan your next adventure.</p>
</body>
</html>
```
If we wanted to decorate the H1, we might write a css selector that looks like this:
```
h1{
  font-size: 3em;
}
```
To make the paragraph font color blue we might say...
```
p{
  color: blue;
}
```
We use these same CSS selectors to find elements inside the DOM

## jQuery to find Nodes
If we wanted to find the H1.  
Notice h1 is wrapped in a STRING format  
```
jQuery('h1');
```
To find the paragraph in the DOM
```
jQuery('p');
```
There is a shorter way we can write this code. Instead of specifying 'jQuery' we can just write '$'
```
$('h1');
$('p');
```

### Changing the content of an element
Now we know how to find the H1 but how can we modify the text of the <h1> element?

## By Element Name
Returns the h1 element
```
$('h1');
```
'text' method returns the text node inside the 'h1'
```
$('h1').text();
```
Modify the text of the H1 by passing a string into the 'text' method.
```
$('h1').text('Where to?');
```

## Before The DOM Loads
JavaScript may execute before the DOM loads.  

There is one thing you need to be mindful of when you are running jQuery that interacts with the DOM.  

The jQuery may fire before the HTML has loaded completely. The result is that the jquery can not find the nodes in the DOM because the HTML has not loaded into the DOM yet.

We need to make sure the DOM has finished loading the HTML content before we can reliably use jQuery.  


## The DOM 'ready' event  
When the DOM is finished loading it triggers an event ('ready').  We need to be listening for that signal.  

We only want to fire the jquery once the DOM 'ready' event has occurred.  

## Listening for document ready
Will only run this code once the DOM is 'ready'
```
jQuery(document).ready(function(){
  // code...
});
```

## What We Have So Far
Our completed code
```
jQuery(document).ready(function(){
  $('h1').text('Where to?');
});
```
