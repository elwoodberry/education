# Try jQuery
## PART 5: Styling
**Author**: [Code School](https://www.codeschool.com)   

## Table Of Contents
1. [](#)
## +

## Separation Of Concerns
Changing Our Style  
Let's make all '.vacation' elements clickable and allow people to click on the 'li' element.
```
$(document).ready(() => {
  $('#vacation').on('click', '.vacation', function(){

  });
});
```
There are a few ways to get and set CSS.  
Set it by specifying the attribute and the value
```
$(document).ready(() => {
	$('#vacation').on('click', '.vacation', function(){
		$(this).css('background-color', 'rgb(109, 189, 255)')
		$(this).css('border-color', '1px solid #947');
  });
});
```
Method chaining
```
$(document).ready(() => {
	$('#vacation').on('click', '.vacation', function(){
		$(this).css('background-color', 'rgb(109, 189, 255)').css('border-color', '1px solid #947');
  });
});
```
Using A JavaScript Object
```
$(document).ready(() => {
	$('#vacation').on('click', '.vacation', function(){
		$(this).css({
			'background-color': 'rgb(109, 189, 255',
			'border-color': '1px solid #947'
	  });
	});
});
```

## Showing The Price
When our vacations are clicked, show the price for that vacation.  
One way to handle this...  
```
$(document).ready(() => {
	$('#vacation').on('click', '.vacation', function(){
		$(this).css({
			'background-color': 'rgb(109, 189, 255',
			'border-color': '1px solid #947'
	  });

		// Show Price  
		$(this).find('.price').css('display', 'block');
	});
});
```
jquery has object methods that handle the 'display' behavior
1. 'show'
1. 'hide'
```
$(document).ready(() => {
	$('#vacation').on('click', '.vacation', function(){
		$(this).css({
			'background-color': 'rgb(109, 189, 255',
			'border-color': '1px solid #947'
	  });

		// Show Price  
		$(this).find('.price').show();
	});
});
```

## Moving Styles to External CSS
Create two new classes
```
.highlighted {
	background-color: rgb(109, 189, 255);
	border-color: 3px solid #947;
}
.highlighted .price {
	display: block;
}
```
Refactored Code
```
$(document).ready(() => {
	$('#vacation').on('click', '.vacation', function(){
		$(this).addClass('highlighted');

		// Show Price
		$(this).find('.price').show();
	});
});
```
Refactored Code with 'toggleClass'
```
$(document).ready(() => {
	$('#vacation').on('click', '.vacation', function(){
		$(this).toggleClass('highlighted');

		// Show Price
		$(this).find('.price').show();
	});
});
```

## Animation
Adding Movement  
Using CSS
```
$(document).ready(() => {
	$('#vacation').on('click', '.vacation', function(){
		$(this).toggleClass('highlighted');
		$(this).find('.price').show();

		$(this).css({'top': '-10px'});
	});
});
```
jQuery Object Methods  
'animate(<object>)' Expects an object of CSS
```
$(document).ready(() => {
	$('#vacation').on('click', '.vacation', function(){
		$(this).toggleClass('highlighted');
		$(this).find('.price').show();

		$(this).animate({'top': '-10px'});
	});
});
```

## Moving Back Down
When this event handler is called we only want it to animate up if we just added the 'highlight' class. If the class is removed we want it to animate back down.  

jQuery Method: 'hasClass'. Expects a string.  
Animate the vacation back down
```
$(document).ready(() => {
	$('#vacation').on('click', '.vacation', function(){
		$(this).toggleClass('highlighted');
		$(this).find('.price').show();

		if( $(this).hasClass('highlighted') ){
			$(this).animate({'top': '-10px'});
		}else {
			$(this).animate({'top': '0px'});
		}
	});
});
```
## Changing the speed
We can optionally pass in the speed as a second argument to 'animate()'.  
Defualt Speed. 400 Milliseconds
```
$(document).ready(() => {
	$('#vacation').on('click', '.vacation', function(){
		$(this).toggleClass('highlighted');
		$(this).find('.price').show();

		if( $(this).hasClass('highlighted') ){
			$(this).animate({'top': '-10px'}, 400);
		}else {
			$(this).animate({'top': '0px'}, 400);
		}
	});
});
```
Using 'Fast'. 200 Milliseconds
```
$(document).ready(() => {
	$('#vacation').on('click', '.vacation', function(){
		$(this).toggleClass('highlighted');
		$(this).find('.price').show();

		if( $(this).hasClass('highlighted') ){
			$(this).animate({'top': '-10px'}, 'fast');
		}else {
			$(this).animate({'top': '0px'}, 'fast');
		}
	});
});
```
Using 'Slow'. 600 Milliseconds
```
$(document).ready(() => {
	$('#vacation').on('click', '.vacation', function(){
		$(this).toggleClass('highlighted');
		$(this).find('.price').show();

		if( $(this).hasClass('highlighted') ){
			$(this).animate({'top': '-10px'}, 'slow');
		}else {
			$(this).animate({'top': '0px'}, 'slow');
		}
	});
});
```
Effects methods like 'animate', 'slideToggle()' and 'fadeToggle()' can also be given a specific speed as a string or in milliseconds.


## The Next Step with CSS Animations
The old code is dirty.. . we need to refactor.  
The CSS  
```
.vacation {
  transition: top 0.2s;
}
.highlighted {
	background-color: rgb(109, 189, 255);
  border: 3px solid rgba(0, 90, 171, 0.29);
  top: -10px;
}
```
The CSS w/ browser prefixes
```
.vacation {
	-moz-transition: top 0.2s;
	-o-transition: top 0.2s;
	-webkit-transition: top 0.2s;
	top: 0px;
  transition: top 0.2s;
}
.highlighted {
	background-color: rgb(109, 189, 255);
  border: 3px solid rgba(0, 90, 171, 0.29);
  top: -10px;
}
```
Unlike jQuery, with CSS we need to take into account the different browsers and how they handle transitions.
