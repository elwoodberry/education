# HTML5 Canvas Tutorial for Beginners  
> An Intro to Becoming a Pro - Ep. 1  

---  
**Author**: [Chris Courses](https://www.youtube.com/channel/UC9Yp2yz6-pwhQuPlIDV_mjA)  
**URL**(s) || **Duration**  
1. [Episode 1: Creating And Resizing Your Canvas](https://youtu.be/EO6OkltgudE) (14:54)
1. [Episode 2: Drawing On the Canvas](https://youtu.be/83L6B13ixQ0) (16:29)
1. [Episode 3: Animating The Canvas](https://youtu.be/83L6B13ixQ0)  
1. [Episode 4: Interacting With The Canvas](https://youtu.be/83L6B13ixQ0)  
1. [Episode 5: How To Code Gravity](https://youtu.be/83L6B13ixQ0)  
1. [Episode 6: Collision Detection Pt 1](https://youtu.be/83L6B13ixQ0)  
1. [Episode 7: Collision Detection Pt 2](https://youtu.be/83L6B13ixQ0)
1. [Episode 8: Circular motion](https://youtu.be/83L6B13ixQ0)

---
## Episode 1
1. [Creating And Resizing Your Canvas](#Creating And Resizing Your Canvas) (00:00)
## +

## Episode 2 : Drawing On the Canvas
1. [Canvas Objects](#canvas-objects) (00:00)
1. [Drawing A Line](#drawing-a-line) (02:15)
1. [Adding Color To Lines And Fills](#adding-color-to-lines-and-fills) (04:37)
1. [Creating An Arch](#creating-an-arch) (07:10)
1. [Creating Hundreds Of Circles](#creating-hundreds-of-circles) (10:17)
## +

## Creating And Resizing Your Canvas
> **Note**  
> I used the Express CLI to generate a project with PUG as the view engine.  
```
$ express --view=pug --css=sass _project
```
---

Create A New Project
```
$ touch _project
```
Create An Index.html
```
$ touch index.html
```
Create A 'canvas.js' file
```
$ touch canvas.js
```
Index.html File
```
extends layout

block content
  canvas(id="default")

  script(src="js/main.js")
```
Create style.css
```
$ touch style.css
```
Canva.js File
```
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
```

## Drawing On the Canvas

## Canvas Objects
1. Rectangles
1. Lines
1. Arcs/Circles
1. Bezier Curves
1. Images
1. Text


## Drawing A Line
```
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

// Must call the stroke method in order for the line to show.
c.stroke();
```

## Adding Color To Lines And Fills

Lines
```
...

// To add color to lines add a property of 'strokeStyle'
// Takes any css color (rgba, hex or name)
c.strokeStyle = '#FFFFFF'

c.stroke();
```

Fills
```
...

// Add a fillStyle property to change colors of fills.
// Takes any css color (rgba, hex or name)
c.fillStyle = 'rgba(250, 250, 250, 0.5)';

...

```

Change the color of a specific fill
```
...

// The 'fillRect' takes the color that proceeds it.
c.fillStyle = 'rgba(150, 150, 250, 0.5)';
c.fillRect(200, 200, 100, 100);
...

```

## Creating An Arch

Create An Arch
1. 'x' - The 'x' axis
1. 'y' - The 'y' axis
1. 'r' - The radius
1. 'startAngle'
   This doe not take degrees. It takes radiants. "What angle would you like to start drawing this arch."
1. 'endAngle'
  This doe not take degrees. It takes radiants. "How long would we like the arch to go on for."
1. 'drawCounterClockwise' - Which direction should the arc be drawn in?
See [HTML Canvas Tutorials](http://www.html5canvastutorials.com/)  
See [Intro To Radians](https://www.khanacademy.org/math/algebra2/trig-functions/intro-to-radians-alg2/v/introduction-to-radians)  

```
...

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
c.beginPath();

// The arc method.
c.arc(300, 300, 100, 0, Math.PI * 2, false);


// Give the arc a color.
c.fillStyle = 'rgba(255, 255, 255, 1)';

// Must have a 'stroke' method to see the arc.
c.stroke();
...

```

## Creating Hundreds Of Circles

```
// Create many Arcs
// FOR loop
// A FOR loop is going to call whatever is inside of it
// however many times you specify.
// Declare a variable and set its value.
// Run this loop as long as the variable is less than 'x'
// Increment the variable by 1
for(var i = 0; i < 3; i++){

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
```
