# CSS Animations Series
**Author**: [DevTips](https://www.youtube.com/channel/UCyIe-61Y8C4_o-zZCtO4ETQ)  

**Video Series**  
1. [Transitions](https://youtu.be/wz3kElLbEHE) (00:00)
1. [Animation and Keyframes]()
---

## Table Of Contents
1. [Transitions](#transitions)
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
#trigger {
  ...

  #element-01 {
    ...
    transition: transform 300ms ease-in-out;
    pointer-events: none;
  }
}
#trigger:hover #element-01 {
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
#trigger {
  ...

  .element-02 {
    ...
    transition: transform 300ms ease-in-out;
    pointer-events: none;
  }
}
#trigger:hover element-02 {
  ...
  transform: translate(200px, 150px) rotate(20deg)
}
```
