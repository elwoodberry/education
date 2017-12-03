"use strict"

// VARIABLES
// Search the HTML document for the canvas element.
var canvas = document.querySelector('canvas');
// Set the canvas element's width to the width of the screen.
canvas.width = window.innerWidth;
// Set the canvas element's height to the width of the screen.
canvas.height = window.innerHeight;


// 'c' stands for 'context'.
// Returning a drawing context to the variable ('c')
// Within 'c' we are creating a super object
// Passing a ton of methods and functions to the variable 'c'
// You can use these methods and functions to draw on the canvas
var c = canvas.getContext('2d');



// Add a fillStyle property to change colors of fills.
// Takes any css color (rgba, hex or name)
c.fillStyle = 'rgba(250, 250, 250, 0.5)';

// 'fillRect'
// Takes four parameters(arguments).
// 'x, y, width and height'
c.fillRect(100, 100, 100, 100);

// The 'fillRect' takes the color that proceeds it.
c.fillStyle = 'rgba(150, 150, 250, 0.7)';
c.fillRect(200, 200, 100, 100);

c.fillStyle = 'rgba(0, 150, 250, 0.9)';
c.fillRect(300, 300, 100, 100);





// Line
// 'beginPath' lets the canvas know you want to start a path.
// It is saying, 'Do not connect this path to anything proceeding it'
c.beginPath();

// Declare where you want the path to start.
// 'moveTo' takes an 'x' and 'y' coordinate.
c.moveTo(50, 300);

// Create a line to a new point.
// 'lineTo' takes an 'x' and 'y' coordinate.
c.lineTo(300, 100);

// Continue drawing on this line by adding another 'lineTo'.
c.lineTo(400, 300);

// To add color to lines add a property of 'strokeStyle'
// Takes any css color (rgb, hex or name)
c.strokeStyle = '#FFFFFF';

// Must call the stroke method in order for the line to show.
c.stroke();









/*
THE ARCH

c.arc(
  x: Int,
  y: Int,
  r: Int,
  startAngle: Float,
  endAngle: Float,
  drawCounterClockwise: Bool (false)
);
*/

// 'beginPath' to prevent shapes connecting.
// c.beginPath();

// The arc method.
// c.arc(300, 300, 100, 0, Math.PI * 2, false);


// Give the arc a color.
// c.fillStyle = 'rgba(255, 255, 255, 1)';

// Must have a 'stroke' method to see the arc.
// c.stroke();








// Create many Arcs
// FOR loop
// A FOR loop is going to call whatever is inside of it
// however many times you specify.
// Declare a variable and set its value.
// Run this loop as long as the variable is less than 'x'
// Increment the variable by 1
for(var i = 0; i < 100; i++){

  // Change the location of each arc.
  // Math.random() - Returns any value between 0 and 1
  // To randomize the arcs location through out the canvas,
  // multiply the random value times the width and height.
  var x = Math.random() * window.innerWidth,
      y = Math.random() * window.innerHeight;

  c.beginPath();
  c.arc(x, y, 100, 0, Math.PI * 2, false);
  c.fillStyle = 'rgba(255, 255, 255, 1)';
  c.stroke();
}









console.log(canvas);
console.log('ready');
