# Try jQuery
## ## PART 4: Listening To DOM Events
**Author**: [Code School](https://www.codeschool.com)   

## Table Of Contents
1. [](#)
## +

// On DOM Load



// SLIDE 001

	`
	<li>
		<button>Flight Details</button>
		<ul class="ticket">

		</ul>
	</li>
	`

	// Clicking the button will show the unordered list.

	// First set the CSS class of 'ticket' to display none

	`
	.ticket{
		display: none;
	}
	`

	// 1. Watch for the click event
	// 2. Find the ticket
	// 3. Show the ticket

	//
	$('.confirmation').on('click', 'button', function(){

		// Search up through the ansestors of the button to the closest 'confirmation' class.

		// Then search down through the children to find elements with the ticket class

		$(this).closest('.confirmation').find('.ticket');


		// We'll now use the 'slideDown' method (vesrses a 'slideUp' or 'slideToggle').

		$(this).closest('.confirmation').find('.ticket').slideDown();


	})


// SLIDE 002

	// Debugging using Alert and Length

	// The above code isn't working and we need to figure out why

	alert($('button').length);

	// Returns '0'

	// We need to wrap the code in a 'document/ready' function


	$(document).ready(function(){
		$('.confirmation').on('click', 'button', function(){
			$(this).closest('.confirmation').find('.ticket').slideDown();
		})
	});






  // 4.7 Expanding on on()

  // SLIDE 001

  	// Deciding On An Event

  	// Mouse Events

  		// 'click'
  		// 'focusin'
  		// 'mouseDown'
  		// 'mousemove'
  		// 'mouseover'
  		// 'mouseenter'
  		// 'dbclick'
  		// 'focusout'
  		// 'mouseup'
  		// 'mouseout'
  		// 'mouseleave'

  	$(document).ready(function(){
  		//
  		$('.confirmation').on('click', 'button', function(){
  			$(this).closest('.confirmation').find('.ticket').slideDown();
  		});

  		//
  		$('.confirmation').on('mouseenter', 'h3', function(){
  			$(this).closest('.confirmation').find('.ticket').slideDown();
  		});
  	});


  // SLIDE 002

  	// Refactoring Handler Functions
  	// This code we have written has some duplication going on...

  	function showTicket(){
  		$(this).closest('.confirmation').find('.ticket').slideDown();
  	}

  	$(document).ready(function(){
  		//
  		$('.confirmation').on('click', 'button', showTicket);

  		//
  		$('.confirmation').on('mouseenter', 'h3', showTicket;
  	});



  	// You will notice that even though we are passing in a function we are not using the parentheses because that would make the function fire right away.


    // 4.12 Keyboard Events

    // SLIDE 001

    	`
    	<div class="vacation" data-price="399.99">
    		<h3>Hawaiian Vacation</h3>
    		<p>$399.99 per ticket</p>
    		<p>
    			Tickets:
    			<input type="number" class="quantity" value="1"/>
    		</p>
    	</div>

    	<p>Total Price: $<span id="total">399.99</span></p>
    	`

    	// When the tickets value updates, it wil update the calculate the price at the botton

    // SLIDE 002

    	// Keyboard and Form Events

    	$(document).ready(function(){
    		$('vacation').on('', '.quantity', function(){

    		});
    	});

    	// Possible Keyboard Events
    	// 'keypress'
    	// 'keydown'
    	// 'keyup'

    	// Form Events
    	// 'blur'
    	// 'select'
    	// 'change'
    	// 'focus'
    	// 'submit'


    	// We will us 'keyup'
    	$(document).ready(function(){
    		$('vacation').on('keyup', '.quantity', function(){

    		});
    	});

    // SLIDE 003

    	// Writing Our Event Handler
    	$(document).ready(function(){
    		$('vacation').on('keyup', '.quantity', function(){

    			// Get the price for this vacation
    			// Because this returns a string and we need a number you can place a '+' in front of 'this' and that will return a number.
    			var price = +$(this).closest('.vacation').data('price');

    			// Get the quantity entered
    			// Helper methods of .val() to get and set data
    			var quantity = +$(this).val();

    			// Set the total to the price * quantity
    			$('#total').text(price * quantity);

    		});
    	});






      // 4.17 Link Layover


      //SLIDE 001

      	// 'style.css'
      	`
      		.comments {
      			display: none;
      		}
      	`

      	// 'script.js'
      	// Fading methods include:
      	// 'fadeIn'
      	// 'fadeOut'
      	// 'fadeToggle'
      	$(document).ready(function(){
      		$('.vacation').on('click', '.expand', function(){

      			// 1. Find the comments UL
      			// 2. Show the comments UL
      			$(this).closest('.vacation').find('.comments').fadeToggle();
      		});
      	});


      // SLIDE 002

      	// How The Browser Handles The Click

      	// 'index.html'
      	`
      		<a href="#" class="expand">Show Comments</a>
      	`

      	$(document).ready(function(){

      		// Passsed the 'event' as an argument of the function...
      		$('.vacation').on('click', '.expand', function(event){

      			// When the event happens, it prevents any movement up the DOM. This is NOT the solution.
      			event.stopPropagation();

      			// When this happens, it prevents the default behavior of the browser. This IS the solution.
      			event.preventDefault();

      			$(this).closest('.vacation').find('.comments').fadeToggle();
      		});
      	});
