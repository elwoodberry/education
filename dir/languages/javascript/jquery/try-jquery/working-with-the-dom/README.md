# Try jQuery
## ## PART 3: Working With The DOM
**Author**: [Code School](https://www.codeschool.com)   

## Table Of Contents
1. [](#)
## +



// SLIDE 001

	// Vacations Packages
	// Objective:
	// When you click the button it displays the price of the trip.

// SLIDE 002

	// Appending to the DOM
	// Let's write the code that will make this button work.

	// Our DOM
	`
	document
		- 'li' class = 'vacation'
			- h2
				- "Hawaiian Vacations"
			- button
				- "Get Price"
	`

	// We need to do two things:

	// 1: Append a new DOM node ('p' with the price '$399.99')
	// 2: Remove a DOM node (the 'button')

	// FILE: 'app.js'
	// Start with a document ready function
	$(document).ready(function(){
		// ...

		// Creates a node but doesn't add it to the DOM
		var price = $('<p>From $399.99</p>');
	});

// SLIDE 003

	// A few different ways to add it to the DOM
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

// SLIDE 004

	// Before
	$(document).ready(function(){
		// ...

		// Creates a node but doesn't add it to the DOM
		var price = $('<p>From $399.99</p>');

		// Before method
		$('vacation').before(price);

	});

	// This adds it before the 'li'. ... which is not what we want.

// SLIDE 005

	// After
	$(document).ready(function(){
		// ...

		// Creates a node but doesn't add it to the DOM
		var price = $('<p>From $399.99</p>');

		// Before method
		$('vacation').after(price);

	});

	// This adds it after the 'li'. ... which is not what we want.

// SLIDE 006

	// Prepend
	$(document).ready(function(){
		// ...

		// Creates a node but doesn't add it to the DOM
		var price = $('<p>From $399.99</p>');

		// Before method
		$('vacation').prepend(price);

	});

	// This adds it as the first child of the 'li'. ... which is not what we want.

// SLIDE 007

	// Append
	$(document).ready(function(){
		// ...

		// Creates a node but doesn't add it to the DOM
		var price = $('<p>From $399.99</p>');

		// Before method
		$('vacation').append(price);

	});

	// This adds it as the last child of the 'li'. ... which IS what we want.

// SLIDE 008

	// Remove
	$(document).ready(function(){
		// ...

		// Creates a node but doesn't add it to the DOM
		var price = $('<p>From $399.99</p>');

		// Before method
		$('vacation').append(price);

		// Remove the button
		$('button').remove();

	});

// SLIDE 009

	// Additional Methods

	// Append To
	price.appendTo($('.vacation'));

	// Prepend To
	price.prependTo($('.vacation'));

	// Insert After
	price.insertAfter($('.vacation'));

	// Insert Before
	price.insertBefore($('.vacation'));



  // SLIDE 001

  	// Passing In A Function
  	// Listen for when the document is 'ready'
  	$(document).ready(

  		// Inside we pass in an event handler as an argument
  		// It is a function that is executed when the document is ready
  		function(){}

  	);




  // SLIDE 002

  	// Watching for 'click'
  	$(document).ready(function(){}


  		// The 'on' method
  		// To listen for the click on the button
  		// 'on' takes an event and an event handler as an agruement.
  		$('button').on('click', function(){
  			// Code that executes when the button is clicked.
  		});
  	);



  // SLIDE 003

  	//

  	$(document).ready(function(){}
  		$('button').on('click', function(){
  			var price = $('<p>From $99.99</p>');
  			$('.vaction').append(price);
  			$('button').remove();
  		});
  	);


  // SLIDE 004

  	//



  // SLIDE 005

  	//



    // SLIDE 001

    	// An Introduction to '$(this)'
    	$(document).ready(function(){}
    		$('button').on('click', function(){
    			var price = $('<p>From $99.99</p>');
    			$('.vaction').append(price);
    			$('button').remove();
    		});
    	);

    	// This code works but it effects ALL buttons

    	$(document).ready(function(){}
    		$('button').on('click', function(){
    			var price = $('<p>From $99.99</p>');
    			$('.vaction').append(price);
    			$('this').remove();
    		});
    	);

    	// Now you are only effecting the button clicked.

    // SLIDE 002

    	// Transversing '$(this)'

    	// This code works better but it is adding the 'price' everytime to everyone.

    	$(document).ready(function(){}
    		$('button').on('click', function(){
    			var price = $('<p>From $99.99</p>');
    			// $('.vaction').append(price);
    			$('this').after(price);
    			$('this').remove();
    		});
    	);

    	// Adds the price as a sibling after the button

    // SLIDE 003

    	// Using '.closest()' method

    	$(document).ready(function(){}
    		$('button').on('click', function(){
    			var price = $('<p>From $99.99</p>');
    			// $('.vaction').append(price);
    			// $('this').after(price);
    			$(this).closest('vaction').append(price);
    			$('this').remove();
    		});
    	);

    // SLIDE 004

    	//



    // SLIDE 005

    	//



    // SLIDE 006

    	//




      // SLIDE 001

      	// How do we allow vacations to have different prices?

      	// Using a 'data-price' attribute

      	// The 'data' tag is an HTML5 attribute that you can add to any of your elements to give it additional information.
      	`
      	<li class="vacation onsale" data-price="399.99">
      		<h3>Hawaiian Vacation</h3>
      		<button>Get Price</button>
      		<ul>
      			<li>Amazing Deal!</li>
      			<li>Want To Go!</li>
      		</ul>
      	</li>
      	`

      	// Data takes a 'name'
      	.data(name)

      	// Takes a 'name' and value
      	.data(name, value)

      	// This returns the price in the HTML attribute
      	$('.vacation').first().data('price');

      // SLIDE 002

      	// Refactoring 'Get Price'

      	// The old code.. ..
      	$(document).ready(function){
      		$('button').on('click', function(){

      			// The button that was clicked.
      			var price = $('<p>From $399.99</p>');
      			$(this).closest('.vacation').append(price);
      			$(this).remove();
      		});
      	});

      	// The re-factored code
      	$(document).ready(function){
      		$('button').on('click', function(){
      			// Find the closest element with the 'vacation' class and get it's 'price' data.
      			var amount = $(this).closest('.vacation').data('price');

      			// Refactored paragraph dom node with dynamic price
      			var price = $('<p>From $' + amount +'</p>');
      			$(this).closest('.vacation').append(price);
      			$(this).remove();
      		});
      	});

      // SLIDE 003

      	// Reusing jQuery Objects

      	// There is some duplication going on in this code.
      	$(document).ready(function){
      		$('button').on('click', function(){
      			var amount = $(this).closest('.vacation').data('price');
      			var price = $('<p>From $' + amount +'</p>');
      			$(this).closest('.vacation').append(price);
      			$(this).remove();
      		});
      	});

      	// We are fetching the 'vacation' class twice
      	$(this).closest('vacation');


      	// Re-factored without duplication
      	$(document).ready(function){
      		$('button').on('click', function(){
      			var vacation = $(this).closest('.vacation');
      			var amount = vacation.data('price');
      			var price = $('<p>From $' + amount +'</p>');
      			vacation.append(price);
      			$(this).remove();
      		});
      	});

      // SLIDE 004

      	// On With A Selector

      	// The previous code works great but what if we start adding more buttons to the page?

      	// This click handler is going to be called for all of them
      	$(document).ready(function){
      		$('button').on('click', function(){

      			// ...

      		});
      	});

      	// We need to make this more specific
      	// We could use a CSS selector
      	// This only listens for buttons inside our vacation class
      	$('.vacation button').on('click', function(){});


      	// There is a better way to write this...
      	// This technic is called event delecation
      	// Only targeting buttons when they are inside the 'vacation' class.
      	$('.vacation').on('click', 'button', function(){});

      // SLIDE 005

      	// Filtering HTML

      	// HTML for the filters
      	// When 'On Sale Now' is clicked it only shows vacations that are on sale.
      	// When 'Expiring' is clicked it only shows vacations that are expiring.
      	`
      		<div id='filters'>
      			<button class='onsale-filter'>On Sale Now</button>
      			<button class='expiring-filter'>Expiring</button>
      		</div>
      	`

      	// We will write two different event handlers for our buttons
      	// We'll highlight vacations with these traits

      // SLIDE 006

      	// Filtering For Vacations On Sale

      	$('#filters').on('click', '.onsale-filter', function(){

      		// Find all vacations that are on-sale

      		// This works but let's use traversing...
      		$('.vacation.onsale');

      		// Find elements with a class of '.vacation' and '.onsale'
      		$('.vacation').filter('.onsale');

      		// Add a class to these vacations to make them highlight
      		$('.vacation').filter('.onsale').addClass('highlighted');
      	});

      	// We do the same thing for expiring vacations
      	$('#filters').on('click', '.expiring-filter', function(){
      		$('.vacation').filter('.expiring').addClass('highlighted');
      	});

      // SLIDE 007

      	// Unhighlighting vacations
      	// How do we make sure not all vacations are highlighted?

      	$('#filters').on('click', '.expiring-filter', function(){

      		// When a button is clicked, first thing we'll do is remove the highlighted class before adding it back.
      		$('highlighted').removeClass('highlighted');

      		$('.vacation').filter('.expiring').addClass('highlighted');
      	});
