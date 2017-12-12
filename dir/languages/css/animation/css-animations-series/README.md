# CSS Animations Series
**Author**: [DevTips](https://www.youtube.com/channel/UCyIe-61Y8C4_o-zZCtO4ETQ)  
**Donate**: [Patreon](https://www.patreon.com/DevTips)  

**Video Series**  
1. [Transitions](https://youtu.be/8kK-cA99SA0) (27:29)
1. [Animation and Keyframes](https://youtu.be/f1WMjDx4snI) (23:52)
1. [Animating the Moments](https://youtu.be/GeuNIOuIEDA) (18:13)
1. [Drop Down Menus](https://youtu.be/AIdslaUj9wg) (22:47)
---

## Table Of Contents
1. [Transitions](#transitions)
1. [Animation and Keyframes](#animation-and-keyframes)
1. [Animating the Moments](#animating-the-moments)
1. [Drop Down Menus](drop-down-menus)
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

---
---
---

## Animating the Moments
Why you should be animating certain things and why you shouldn't be animating other things.

### Orientation  
**Answers the Question**: Where Am I Now?  
Animation allows you to understand that you have traveled from somewhere.  

**These are all moments**  
If you look deeper into what is happening you will see that there is something that ties all these moments together. That is the idea of change.
1. When the user performs a command
1. Hovers over a button
1. clicks a target
1. open a modal
1. send a form
1. drop a menu
1. check a box
1. navigate to a new page

These are all actions where the user is asking/expecting things to change. These are all moments of change. Animation is all about motion of changing one state into another and helping the user understand what has just happened and wha they should be doing now.



---
![Orientation](https://raw.github.com/elwoodberry/education/master/_img/diagrams/transitions__005.png)
---
1. Giving the user information about what they are going through right now (ie: form with email, cc info, etc).
1. The UI is saying
    1. "I've that, lets move to the next thing I need."
    1. "I understand(and accept) your input, here is the next thing I need from you..."
    1. "This is a sequence of events"
    1. "You are doing great, move forward"
    1. "This is part of a series"

Other Use Cases For The Orientation Principle:
1. Click on something and expands
1. Click on a link and the page slides out.
1. Models





### Functional Change
**Answers the Question**: What Does It Do Now?  
The thing we have clicked on, after we clicked on it, it has a different function.

---
![Functional Change](https://raw.github.com/elwoodberry/education/master/_img/diagrams/transitions__006.png)
---

1. A toggle animation
1. Hamburger menu icon that changes to an 'X' to close
1. Mute music to unmute




### New Element
**Answers the Question**: What Should I Look At?

---
![New Element](https://raw.github.com/elwoodberry/education/master/_img/diagrams/transitions__007.png)
---
When we introduce a new element to the page... we are trying to let the user know that something new is on the page and try to let them know why it is there.
1. What this thing is...
1. Why is it here...
1. Is it temporary (modal)
1. Is it a new interface element (alert, success, error, dropdown menu, add a friend)



### Highlight
**Answers the Question**: What Is Important Here?

---
![Highlight](https://raw.github.com/elwoodberry/education/master/_img/diagrams/transitions__008.png)
---
UX demo or marketing page with beakons that give more information once hovered over.
1. Bringing attention to a certain spot.
1. Motion rises above all other things in terms of getting the user's attention
1. Using motion to make things stand out in a crowded page
1. Dropping down, popping up,


### Visual Feedback
**Answers the Question**: Is The Layout Understanding What I Am Asking It To Do?

---
![Visual Feedback](https://raw.github.com/elwoodberry/education/master/_img/diagrams/transitions__009.png)
---
I as the user am giving the page information(forms) and I am done. Using animation to indicate that the action has been completed and we are ready to move on (success, error, warning).  
1. When animation embodies the concept of what is actually happening(sending an email)


### System Status
**Answers the Question**: Is This Working? How Long Will It Take?

---
![System Status](https://raw.github.com/elwoodberry/education/master/_img/diagrams/transitions__010.png)
---
Building a backend where information has to be processed(pulling a report, submitting a form, processing a credit card).
1. Letting the user know that things are running smoothing without errors.
1. Things are working, something is being processed.
1. Google voice, when you speak, balls start jumping... is a system status. Visual feedback


---
---
---

## Drop Down Menus

Markup (jade)
```
nav: ul
  - var i = 0;
    while (i++ < 4)
      li style #{i}
        ul(class="drop-menu menu-#{i}")
          li uno
          li dos
          li tres
          li cuatro
          li cinco
          li seis
```

CSS
```
// Structure
nav {
  padding: 50px 0px;
  text-align: center;

  > ul {
    @include ul-default;
    height: 65px;
    border-radius: 2px;

    > li {
      @include li-default;
      border: 2px #ffffff solid;
      height: 65px;
      line-height: 65px;
      text-transform: uppercase;
      font-size: 14px;
      color: rgba(0,0,0,0.7);
      cursor: pointer;

      &:hover {
        background: #D5D5D5;
        border-radius: 2px;
      }
    }
  }
}


ul.drop-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 0;

  li {
    background: #666;
    color: rgba(255,255,255,0.7);

    &:hover {
      background: #606060;
    }

    &:last-child {
      border-radius: 0px 0px 5px 5px;
    }
  }
}

// Default Trigger
ul.drop-menu li {
  display: none; // Hide
}


li:hover > ul.drop-menu li {
  display: block;
}

```
### Menu 1

CSS (scss)
```
li:hover > ul.drop-menu.menu-1 li {
  opacity: 0;

  @for $i from 1 through 6 {
    &:nth-child(#{$i}) {
      @include animation-default(menu1, 300ms * $i, ease-in-out, (150ms * $i) - 300, null, null, forwards, null);
    }
  }

}
```

Keyframes
```
@keyframes menu1 {
  0% {
    opacity: 0;
    transform: rotateY(-90deg) translateY(30px);
  }
  100% {
    opacity: 1;
    transform: rotateY(0deg) translateY(0px);
  }
}
```
### Menu 2
