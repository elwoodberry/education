# CSS Animations Series
**Author**: [DevTips](https://www.youtube.com/channel/UCyIe-61Y8C4_o-zZCtO4ETQ)  
**Donate**: [Patreon](https://www.patreon.com/DevTips)  

**Video Series**  
1. [Transitions](https://youtu.be/8kK-cA99SA0) (00:00)
1. [Animation and Keyframes](https://youtu.be/f1WMjDx4snI) (23:52)
1.
---

## Table Of Contents
1. [Transitions](#transitions)
1. [Animation and Keyframes](#animation-and-keyframes)
---


# Transitions
Animation - Instill with life. Having the appearance of movement.  
CSS Movement
1. Transition Property
2. Animation Property + Keyframes

## Transition Property
![element](https://raw.github.com/elwoodberry/education/master/_img/diagrams/transitions__001.png)
### Syntax
We declare 'transition' on an element. It takes the following parameters:
1. Property - The other property this transition is going to animate.
1. Duration - How long is this transition happening..
1. Ease - How is this transition distributed over time...
1. Delay - How long before this transition starts happening..

## Animatable Properties
See [CSS Animatable Properties](http://oli.jp/2010/css-animatable-properties/)  

#### Performant Properties
When you animate properties you have to consider which properties are the best properties to animate.  
1. Position
1. Scale
1. Rotation
1. Opacity

"If you animate anything else, its at your own risk, and the chances are you're not going to hit a silk smooth 60 frames per second." - Paul Lewis & Irish  

These properties do not cause the browser to re-paint or a re-flow of the layout.

## Triggering
How do you trigger a transform? How do you make one happen?
1. Hover
1. Class change

## Code

### On HOVER
HTML (jade)
```
ul(id="example-01")
  li(id="trigger-01") Element 1
    span(id="element-01") Element 1
```
CSS (SCSS)
```
#trigger-01 {
  ...

  #element-01 {
    ...
    transition: transform 300ms ease-in-out;
    pointer-events: none;
  }
}
#trigger-01:hover #element-01 {
  ...
  transform: translate(200px, 150px) rotate(20deg)
}
```
### On Class Change
HTML (jade)
```
ul(id="example-01")
  li(id="trigger-02") Element 1
    span(id="element-02") Element 1
```
CSS (SCSS)
```
#trigger-02 {
  ...

  .element-02 {
    ...
    transition: transform 300ms ease-in-out;
    pointer-events: none;
  }
}
#trigger-02:hover element-02 {
  ...
  transform: translate(200px, 150px) rotate(20deg)
}
```
JS (jQuery)
```
$('#trigger-02').on('click', function(){
  $(this).toggleClass('clicked');
});
```
### Cubic Bezier
---
![element](https://raw.github.com/elwoodberry/education/master/_img/diagrams/transitions__002.png)
---
HTML (jade)
```
ul(id="example-01")
  li(id="trigger-03") Element 1
    span(id="element-03") Element 1
```
CSS (SCSS)
```
#trigger-03 {
  ...

  .element-03 {
    ...
    transition: transform 300ms cubic-bezier(0, 0.56, 0, 0.85);
    pointer-events: none;
  }
}
#trigger-02:hover element-02 {
  ...
  transform: translate(200px, 150px) rotate(20deg)
}
```

---
---
---

## Animation and Keyframes

### Keyframes
---
![keyframes](https://raw.github.com/elwoodberry/education/master/_img/diagrams/transitions__003.png)
---
1. Keyframes  
    Do not have any selectors on them. They are not nested into anything. They are on the root of the css document.  
2. From  
    Start here
3. To  
    End Here
4. Styles  
    What attributes are changing?

**Example**
```
@keyframe myframes {
  from {
    height: 200px;
    background: orange;
  }
  to {
    height: 400px;
    background: pink;
  }
}
```
Using 'From' and 'To'
```
@keyframes kyfrmElement01 {
  from{
    border-top-width: 0px;
    background-color: #ffa3fb;
  }
  to {
    border-top-width: 5px;
    background-color: rgba(255, 163, 251, 0);
  }
}
```
Using Percentages
```
@keyframes kyfrmElement02 {
  0% {
    border-top-color: #FF0000;
    border-top-width: 0px;
    background-color: #6cffd8;
  }

  75% {
    border-top-width: 5px;
    background-color: rgba(255, 163, 251, .75);
  }

  100% {
    border-top-color: #FF0000;
    border-top-width: 1px;
    background-color: rgba(255, 163, 251, 0);
  }
}
```
### Animation Property
---
![keyframes](https://raw.github.com/elwoodberry/education/master/_img/diagrams/transitions__004.png)
---
#### Syntax   
Animation is an attribute of the selector.  
See [Animation](https://developer.mozilla.org/en-US/docs/Web/CSS/animation) by Mozilla
1. **Name**  
    The name of the keyframe.
1. **Duration**  
    Duration of the animation
1. **Timing Function**  
    The transition of the animation
1. **Delay**  
    How long are we going to wait once this animation is trigger before the visuals start happening. This relates to the animation in its entirety. Not the start of each iteration.
1. **Iteration Count**  
    How many times will this animation happen?
1. **Direction**  
    In terms of a timeline, which direction on the timeline are we moving?  
1. **Fill Mode** (See [Animation Fill Mode](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode))  
    Controls what the animation will look like after it has been animated.
1. **Play State**  
    Running or paused.

#### Example  
Keep in mind the below example is shorthand. In a mixin you could spell out all these in greater detail.
```
.element {
  animation: myframes 2s ease-in-out 0s infinite normal forwards paused;
}
```
Long Hand
```
.element {
  animation-name: $name;
  animation-duration: $duration;
  animation-timing-function: $timing;
  animation-delay: $delay;
  animation-iteration-count: $iteration;
  animation-direction: $direction;
  animation-fill-mode: $fill;
  animation-play-state: $state;
}
```

#### Triggering
main.js  
This will pause the animation. When the class is removed the animation continues.  
```
$('#kyfrm-anchor-04').on('click', function(){
  $('#kyfrm-element-04').toggleClass('is-paused');
});
```

Append an animated element to the screen every time the button is clicked.
```
$('#kyfrm-element-04').on('click', function(){
  $('#kyfrm-grid').append('<div class="grid-item">Grid Item</div>');
});
```
