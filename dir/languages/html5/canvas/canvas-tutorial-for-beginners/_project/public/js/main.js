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

// 'fillRect'
// Takes four parameters(arguments).
// 'x, y, width and height'
c.fillRect(100, 100, 100, 100);
c.fillRect(200, 200, 100, 100);
c.fillRect(300, 300, 100, 100);



console.log(canvas);
console.log('ready');
