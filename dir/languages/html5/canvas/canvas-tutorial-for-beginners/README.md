# HTML5 Canvas Tutorial for Beginners  
> An Intro to Becoming a Pro - Ep. 1  

---  
**Author**: [Chris Courses](https://www.youtube.com/channel/UC9Yp2yz6-pwhQuPlIDV_mjA)  
**URL**(s)
1. [Episode 1: Creating And Resizing Your Canvas](https://youtu.be/EO6OkltgudE)  
1. [Episode 2: Drawing On the Canvas](https://youtu.be/83L6B13ixQ0)  
1. [Episode 3: Animating The Canvas](https://youtu.be/83L6B13ixQ0)  
1. [Episode 4: Interacting With The Canvas](https://youtu.be/83L6B13ixQ0)  
1. [Episode 5: How To Code Gravity](https://youtu.be/83L6B13ixQ0)  
1. [Episode 6: Collision Detection Pt 1](https://youtu.be/83L6B13ixQ0)  
1. [Episode 7: Collision Detection Pt 2](https://youtu.be/83L6B13ixQ0)
1. [Episode 8: Circular motion](https://youtu.be/83L6B13ixQ0)
**Duration**: 14:54
---
## Episode 1
1. [Creating And Resizing Your Canvas](#Creating And Resizing Your Canvas) (00:00)
## +

## Episode 2
1. [Creating And Resizing Your Canvas](#Creating And Resizing Your Canvas) (00:00)
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

Canvas Objects Include:
1. Rectangles
1. Lines
1. Arcs/Circles
1. Bezier Curves
1. Images
1. Text
