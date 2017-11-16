# Try jQuery
## PART 3: Working With The DOM
**Author**: [Code School](https://www.codeschool.com)   

## Table Of Contents
1. [Appending to the DOM](#appending-to-the-dom)
1. [Before Method](#before-method)
1. [After Method](#after-method)
1. [Prepend Method](#prepend-method)
1. [Append Method](#append-method)
1. [Remove Method](#remove-method)
1. [Append To](#append-to)
1. [Prepend To](#prepend-to)
1. [Insert After](#insert-after)
1. [Insert Before](#insert-before)
1. [Passing In A Function](#passing-in-a-function)
1. [Watching for 'click'](#watching-for-click)
1. [THIS](#this)
1. [Transversing THIS](#transversing-this)
1. [Closest Method](#closest-method)
1. [Data Attribute](#data-attribute)
1. [Refactoring](#refactoring)
1. [Reusing jQuery Objects](#reusing-jquery-objects)
1. [On With A Selector](#on-with-a-selector)
1. [Filtering HTML](#filtering-html)
1. [Filtering For Vacations On Sale](#filtering-for-vacations-on-sale)
1. [Unhighlighting vacations](#unhighlighting-vacations)
## +


## Appending to the DOM

**Vacations Packages**  
Objective:  
When you click the button it displays the price of the trip.  

Let's write the code that will make this button work.  

Our DOM  
```
document
	- 'li' class = 'vacation'
		- h2
			- "Hawaiian Vacations"
		- button
			- "Get Price"
```
We need to do two things:
1. Append a new DOM node ('p' with the price '$399.99')
2. Remove a DOM node (the 'button')

**FILE**: 'js/main.js'  
Start with a document ready function  
```
$(document).ready(function(){
	// ...

	// Creates a node but doesn't add it to the DOM
	var price = $('<p>From $399.99</p>');
});
```

A few different ways to add it to the DOM  
```
$(document).ready(function(){
	// ...

	// Creates a node but doesn't add it to the DOM
	var price = $('<p>From $399.99</p>');

	// Append method
	.append();

	// Pre-pend method
	.prepend();

	// After method
	.after();

	// Before method
	.before();

});
```
## Before Method
```
$(document).ready(function(){
	// ...

	// Creates a node but doesn't add it to the DOM
	var price = $('<p>From $399.99</p>');

	// Before method
	$('vacation').before(price);
});
```
This adds it before the 'li'. ... which is not what we want.  

## After Method
```
$(document).ready(function(){
	// ...

	// Creates a node but doesn't add it to the DOM
	var price = $('<p>From $399.99</p>');

	// Before method
	$('vacation').after(price);

});
```
This adds it after the 'li'. ... which is not what we want.  

## Prepend Method
```
$(document).ready(function(){
	// ...

	// Creates a node but doesn't add it to the DOM
	var price = $('<p>From $399.99</p>');

	// Before method
	$('vacation').prepend(price);

});
```
This adds it as the first child of the 'li'. ... which is not what we want.

## Append Method
```
$(document).ready(function(){
	// ...

	// Creates a node but doesn't add it to the DOM
	var price = $('<p>From $399.99</p>');

	// Before method
	$('vacation').append(price);

});
```
This adds it as the last child of the 'li'. ... which IS what we want.

## Remove Method
```
$(document).ready(function(){
	// ...

	// Creates a node but doesn't add it to the DOM
	var price = $('<p>From $399.99</p>');

	// Before method
	$('vacation').append(price);

	// Remove the button
	$('button').remove();

});
```

Additional Methods

## Append To
```
price.appendTo($('.vacation'));
```

## Prepend To
```
price.prependTo($('.vacation'));
```

## Insert After
```
price.insertAfter($('.vacation'));
```

## Insert Before
```
price.insertBefore($('.vacation'));
```


## Passing In A Function  
Listen for when the document is 'ready'  
```
$(document).ready(

	// Inside we pass in an event handler as an argument
	// It is a function that is executed when the document is ready
	function(){}

);
```


## Watching for 'click'
```
$(document).ready(function(){}

	// The 'on' method
	// To listen for the click on the button
	// 'on' takes an event and an event handler as an argument.
	$('button').on('click', function(){
		// Code that executes when the button is clicked.
	});
);
```

## Where we are
```
$(document).ready(function(){}
	$('button').on('click', function(){
		var price = $('<p>From $99.99</p>');
		$('.vacation').append(price);
		$('button').remove();
	});
);
```



## THIS
An Introduction to '$(this)'
```
$(document).ready(() => {
	$('button').on('click', function(){
		var price = $('<p>From $99.99</p>');
		$('.vacation').append(price);
		$('button').remove();
	});
);
```

This code works but it effects ALL buttons
```
$(document).ready(() => {

	$('.btn').on('click', function(){
		let price = $('<p>From $2,999.99</p>');
		$('.vacation').append(price);
    $(this).remove();
	});

});
```
Now you are only effecting the button clicked.

## Transversing THIS
This code works better but it is adding the 'price' every time to everyone.
```
$(document).ready(() => {

  $('.btn').on('click', function(){
		let price = $('<p>From $2,999.99</p>');
    $(this).after(price);
		$(this).remove();
	});

});
```
Adds the price as a sibling after the button

## Closest Method
```
$(document).ready(() => {

	$('.btn').on('click', function(){
		let price = $('<p>From $2,999.99</p>');
    $(this).closest('.vacation').append(price);
		$(this).remove();
	});

});
```



## Data Attribute
How do we allow vacations to have different prices?  
Using a 'data-price' attribute.  

The 'data' tag is an HTML5 attribute that you can add to any of your elements to give it additional information.  
```
<div data-price="2399.99" class="card-body vacation">
	<h4 class="card-title">Hawaiian Vacation</h4>
	<p>
		<strong>Comments On This Deal</strong><br>
		<i>"Amazing Deal"</i><br>
		<i>"Can't wait to take this trip"</i>
	</p>
	<button class="btn btn-primary">Starts @ $2999.99</button>
</div>
```

Data takes a 'name'
```
.data(name)
```

Takes a 'name' and value
```
.data(name, value)
```
This returns the price in the HTML attribute
```
$('.vacation').first().data('price');
```
## Refactoring
The old code.. ..
```
$(document).ready(() => {

  $('.btn').on('click', function(){
		let price = $('<button class="btn btn-primary">Starts @ $2999.99</button>');
    $(this).closest('.vacation').append(price);
		$(this).remove();
	});

});
```
The re-factored code
1. Find the closest element with the 'vacation' class and get it's 'price' data.
2. Refactored paragraph DOM node with dynamic price
```
$(document).ready(() => {

  $('.btn').on('click', function(){
		let amount = $(this).closest('.vacation').data('price');
		let price = $('<button class="btn btn-primary">Starts @ $' + amount + '</button>');
    $(this).closest('.vacation').append(price);
		$(this).remove();
	});

});
```

## Reusing jQuery Objects
There is some duplication going on in this code.
```
$(document).ready(() => {

  $('.btn').on('click', function(){
		let amount = $(this).closest('.vacation').data('price');
		let price = $('<button class="btn btn-primary">Starts @ $' + amount + '</button>');
    $(this).closest('.vacation').append(price);
		$(this).remove();
	});

});
```
We are fetching the 'vacation' class twice
```
$(this).closest('vacation');
```
Re-factored without duplication
```
$(document).ready(() => {

  $('.btn').on('click', function(){
    let vacation = $(this).closest('.vacation');
		let amount = vacation.data('price');
		let price = $('<button class="btn btn-primary">Starts @ $' + amount + '</button>');
    vacation.append(price);
		$(this).remove();
	});

});
```

## On With A Selector
The previous code works great but what if we   
start adding more buttons to the page?  

This click handler is going to be called for all of them
```
$(document).ready(() => {

  $('.btn').on('click', function(){
    ...
	});

});
```
We need to make this more specific  
We could use a CSS selector..  
This only listens for buttons inside our vacation class
```
$('.vacation button').on('click', function(){});
```
There is a better way to write this...  
This technic is called event delegation.  
Only targeting buttons when they are inside the 'vacation' class.
```	 
$('.vacation').on('click', 'button', function(){});
```
## Filtering HTML
HTML for the filters  
When 'On Sale Now' is clicked it only shows vacations that are on sale.  
When 'Expiring' is clicked it only shows vacations that are expiring.
```
<div id='filters'>
	<button class='onsale-filter'>On Sale Now</button>
	<button class='expiring-filter'>Expiring</button>
</div>
```
We will write two different event handlers for our buttons  
We'll highlight vacations with these traits

## Filtering For Vacations On Sale
Find all vacations that are on-sale
```
$('#filters').on('click', '.onsale-filter', function(){
	$('.vacation.onsale');
});
```
This works but let's use traversing...  
Find elements with a class of '.vacation' and '.onsale'
```
$('#filters').on('click', '.onsale-filter', function(){
	$('.vacation').filter('.onsale');
});
```
Add a class to these vacations to make them highlight
```
$('#filters').on('click', '.onsale-filter', function(){
	$('.vacation').filter('.onsale').addClass('highlighted');
});
```
We do the same thing for expiring vacations
```
$('#filters').on('click', '.expiring-filter', function(){
	$('.vacation').filter('.expiring').addClass('highlighted');
});
```

## Unhighlighting vacations
How do we make sure not all vacations are highlighted?  
When a button is clicked, first thing we'll do is remove the highlighted class before adding it back.
```
$('#filters').on('click', '.expiring-filter', function(){
	$('.highlighted').removeClass('highlighted');
	$('.vacation').filter('.expiring').addClass('highlighted');
});
```
