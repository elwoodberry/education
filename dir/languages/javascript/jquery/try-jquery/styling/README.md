# Try jQuery
## ## PART 5: Styling
**Author**: [Code School](https://www.codeschool.com)   

## Table Of Contents
1. [](#)
## +

// 5.2 Taming CSS


// SLIDE 001

	// Seperation Of Concens
	// Changing Our Style

	// Let's make all '.vacation' elements clickable and allow people to click on the '<li>' element.

	$(document).ready(function(){
		$('.vacations').on('click', '.vacation', function(){


			// There are a few ways to get and set CSS.
			// Set it by specifing the attribute and the value
			$('class').css('display', 'block');

			// Get it's current value by specifing the attribute
			$('class').css('display');

			// We can also send in a function.


		});
	});

// SLIDE 002

	// Changing the style

	$(document).ready(function(){
		$('.vacations').on('click', '.vacation', function(){

			// Set background color for this list item
			$(this).css('background-color', '#FF0000');

			// Set the border color for this list item
			$(this).css('background-color', '1px solid #967');

			// Method chaining technique
			$(this).css('background-color', '#FF0000').css('background-color', '1px solid #967');

			// Object Method
			$(this).css({
				'background-color', '#FF0000',
				'background-color', '1px solid #967'
			});
		});
	});

// SLIDE 003

	// Showing The Price

	$(document).ready(function(){
		$('.vacations').on('click', '.vacation', function(){
			$(this).css({
				'background-color': '#252B30',
				'background-color', '1px solid #967'
			});
		});
	});

	// When our vacations are clicked, show the price for that vacation.
	// One way to handle this. ..
	$(this).find('.price').css('display', 'block');

	// jquery has object methods that handle the 'display' behavior
	// 'show'
	// 'hide'
	$(this).find('.price').show();


	// The code
	$(document).ready(function(){
		$('.vacations').on('click', '.vacation', function(){
			$(this).css({
				'background-color': '#252B30',
				'background-color', '1px solid #967'
			});
			$(this).find('.price').show();
		});
	});

// SLIDE 004

	// Moving Styles to External CSS

	// The old code...
	$(document).ready(function(){
		$('.vacations').on('click', '.vacation', function(){
			$(this).css({
				'background-color': '#252B30',
				'background-color', '1px solid #967'
			});
			$(this).find('.price').show();
		});
	});

	// Create two new classes
	`
		.highlighted {
			background-color: #000;
			border-color: 1px solid #000;
		}
		.highlighted .price {
			display: block;
		}
	`

	// Refactored Code
	$(document).ready(function(){
		$('.vacations').on('click', '.vacation', function(){
			$(this).addClass('.highlighted');
		});
	});


	// Refactored Code with 'toggleClass'
	$(document).ready(function(){
		$('.vacations').on('click', '.vacation', function(){
			$(this).toggleClass('.highlighted');
		});
	});
// SLIDE 005

	//


  // 5.7 Animation


  // SLIDE 001

  	// Adding Movement

  	// Old Code...
  	$(document).ready(function(){
  		$('#vacations').on('click', '.vacation', function(){
  			$(this).toggleClass('highlighted');

  			// jQuery Object Methods
  			// 'animate(<object>)' Expects an object of CSS
  			$(this).animate({'top': '-10px'});
  		});
  	});

  // SLIDE 002

  	// Moving Back Down

  	// When this event handler is called we only want it to animate up if we just added the 'highlight' class. If the class is removed we want it to animate back down.

  	$(document).ready(function(){
  		$('#vacations').on('click', '.vacation', function(){
  			$(this).toggleClass('highlighted');

  			// jQuery Method: 'hasClass'. Expects a string
  			if( $(this).hasClass('highlighted') ){
  				// Animate the vacation up
  				$(this).animate({'top': '-10px'});
  			}
  			else{
  				// Animate the vacation back down
  				$(this).animate({'top': '0px'});
  			}
  		});
  	});

  // SLIDE 003

  	// Changing the speed

  	// We can optionally pass in the speed as a second argument to 'animate()'
  	$(document).ready(function(){
  		$('#vacations').on('click', '.vacation', function(){
  			$(this).toggleClass('highlighted');

  			if( $(this).hasClass('highlighted') ){

  				// Defualt Speed. 400 Milliseconds
  				$(this).animate({'top': '-10px'}, 400);

  				// 'Fast'. 200 Milliseconds
  				$(this).animate({'top': '-10px'}, 'fast');			

  				// 'Slow'. 600 Milliseconds
  				$(this).animate({'top': '-10px'}, 'slow');

  			}else{

  				$(this).animate({'top': '0px'});
  			}
  		});
  	});

  	// Effects methods like 'animate', 'slideToggle()' and 'fadeToggle()' can also be given a specific speed as a string or in milliseconds.



  // SLIDE 004

  	// The Next Step with CSS Animations

  	// The old code is dirty.. . we need to refactor
  	$(document).ready(function(){
  		$('#vacations').on('click', '.vacation', function(){
  			$(this).toggleClass('highlighted');

  			if( $(this).hasClass('highlighted') ){
  				$(this).animate({'top': '-10px'}, 'fast');
  			}else{

  				$(this).animate({'top': '0px'}, 'fast');
  			}
  		});
  	});

  	// You can do these animations in the CSS
  	`
  		.vacation {
  			-moz-transition: top 0.2s;
  			-o-transition: top 0.2s;
  			-webkit-transition: top 0.2s;
  			transition: top 0.2s;
  		}
  		.highlighted {
  			top: -10px;
  		}
  	`

  	// Unlike jQuery, with CSS we need to take into account the different browsers and how they handle transitions.
