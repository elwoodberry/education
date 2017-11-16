# Try jQuery
## PART 4: Listening To DOM Events
**Author**: [Code School](https://www.codeschool.com)   

## Table Of Contents
1. [ On DOM Load](#on-dom-load)
1. [Debugging using Alert and Length](#debugging-using-alert-and-length)
1. [Deciding On An Event](#deciding-on-an-event)
1. [Refactoring Handler Functions](#refactoring-handler-functions)
1. [Keyboard Events](#keyboard-events)
1. [Keyboard and Form Events](#keyboard-and-form-events)
1. [Writing Our Event Handler](#writing-our-event-handler)
1. [Comments Link](#comments-link)
1. [How The Browser Handles The Click](#how-the-browser-handles-the-click)
## +

## On DOM Load
A look at the HTML
```
<div class="col-md-4 confirmation">
	<h4>Hawaiian Vacation</h4>
	<p>Paid #2,999.99 on January 14, 2018</p>
	<button class="btn btn-secondary">Flight Details</button>
	<ul class="ticket">
		<li><strong>Destination:</strong>Honolulu, HI</li>
		<li><strong>Depart Date:</strong> February 20, 2013 at 09:30</li>
		<li><strong>Flight Number: 815</strong></li>
	</ul>
</div>
```
Clicking the button will show the unordered list.  

First set the CSS class of 'ticket' to display none  

```
.ticket{
	display: none;
}
```
1. Watch for the click event
	```
	$('.confirmation').on('click', 'button', function(){

	});
	```
2. Find the ticket
	Search up through the ancestors of the button to the closest 'confirmation' class.  
	Then search down through the children to find elements with the ticket class.  
	```
	$('.confirmation').on('click', 'button', function(){  
		$(this).closest('.confirmation').find('.ticket');  
	});
	```
3. Show the ticket
	We'll now use the 'slideDown' method (verses a 'slideUp' or 'slideToggle').  
	```
	$('.confirmation').on('click', 'button', function(){  
		$(this).closest('.confirmation').find('.ticket').slideDown();  
	});
	```

## Debugging using Alert and Length
The above code isn't working and we need to figure out why.
```
alert($('button').length);
```
Returns '0'.  
We need to wrap the code in a 'document/ready' function.  

```
$(document).ready(() => {

$('.confirmation').on('click', 'button', function(){
	$(this).closest('.confirmation').find('.ticket').slideDown();
});

});
```


## Deciding On An Event
Mouse Events
1. 'click'
1. 'focusin'
1. 'mouseDown'
1. 'mousemove'
1. 'mouseover'
1. 'mouseenter'
1. 'dbclick'
1. 'focusout'
1. 'mouseup'
1. 'mouseout'
1. 'mouseleave'

```
$(document).ready(() => {

// Event: Click
$('.confirmation').on('click', 'button', function(){
	$(this).closest('.confirmation').find('.ticket').slideDown();
});

// Event: MouseEnter
$('.confirmation').on('mouseenter', 'h3', function(){
  $(this).closest('.confirmation').find('.ticket').slideDown();
});

});
```

## Refactoring Handler Functions
This code we have written has some duplication going on...  
```
$(document).ready(() => {

// Event: Click
$('.confirmation').on('click', 'button', showTicket);

// Event: MouseEnter
$('.confirmation').on('mouseenter', 'h3', showTicket);

function showTicket(){
  $(this).closest('.confirmation').find('.ticket').slideDown();
}

});
```
You will notice that even though we are passing in a function we are not using the parentheses because that would make the function fire right away.  


## Keyboard Events
```
<div data-price="399.99" class="vacation">
	<h3>Hawaiian Vacation</h3>
	<p>$399.99 per ticket</p>
	<div class="form-group">
		<label>Tickets:</label>
		<input type="number" value="1" class="form-control quantity">
	</div>
</div>
```
When the tickets value updates, it will update and calculate the price at the bottom.

## Keyboard and Form Events

    	$(document).ready(function(){
    		$('vacation').on('', '.quantity', function(){

    		});
    	});

### Possible Keyboard Events
1. 'keypress'
1. 'keydown'
1. 'keyup'

### Form Events
1. 'blur'
1. 'select'
1. 'change'
1. 'focus'
1. 'submit'


We will us 'keyup'
```
$(document).ready(() => {
	$('.vacation').on('keyup', '.quantity', function(){

	});
});
```
## Writing Our Event Handler
Get the price for this vacation.  
Because this returns a string and we need a number you can place a '+' in front of 'this' and that will return a number.  
```
$(document).ready(() => {
	$('.vacation').on('keyup', '.quantity', function(){
		let price = +$(this).closest('.vacation').data('price');
	});
});
```
Get the quantity entered.  
Helper methods of .val() to get and set data.  
```
$(document).ready(() => {
	$('.vacation').on('keyup', '.quantity', function(){
		let price = +$(this).closest('.vacation').data('price');
		let quantity = +$(this).val();
	});
});
```
Set the total to the price * quantity
```
$(document).ready(() => {
	$('.vacation').on('keyup', '.quantity', function(){
		let price = +$(this).closest('.vacation').data('price');
		let quantity = +$(this).val();
		$('#total').text(price * quantity);
	});
});
```



## Comments Link
'style.css'
```
.comments {
	display: none;
}
```
Fading methods include:
1. 'fadeIn'
1. 'fadeOut'
1. 'fadeToggle'

Find the comments UL and then show the comments UL
```
$(document).ready(() => {
	$('.vacation').on('click', '.expand', function(){
		$(this).closest('.vacation').find('.comments').fadeToggle();
	});
});
```

## How The Browser Handles The Click
'index.html'
```
<a href="#" class="expand">Show Comments</a>
```

Passsed the 'event' as an argument of the function...
```
$('.vacation').on('click', '.expand', function(){
	...
});
```
When the event happens, it prevents any movement up the DOM. This is NOT the solution.
```
$('.vacation').on('click', '.expand', function(e){
	e.stopPropagation();  
	$(this).closest('.vacation').find('.comments').fadeToggle();
});
```
When this happens, it prevents the default behavior of the browser. This IS the solution.
```
$('.vacation').on('click', '.expand', function(e){
	e.preventDefault();  
	$(this).closest('.vacation').find('.comments').fadeToggle();
});
```
