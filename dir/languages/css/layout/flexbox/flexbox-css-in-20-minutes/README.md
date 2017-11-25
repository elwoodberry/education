# Flexbox CSS In 20 Minutes
**Author**: [Traversy Media](https://www.youtube.com/user/TechGuyWeb)  
**URL**: [Video](https://youtu.be/JJSoEo8JSnc)  
**Duration**: 19:58
**Donate to Author**: [Patreon](https://www.patreon.com/traversymedia)  

## Table Of Contents
1. [](#) (00:00)
## +

## What Is Flexbox?
A CSS3 layout mode that provides an easy and clean way to arrange items within a container.
* No Floats!
* Responsive and mobile friendly
* Positioning child elements is much easier
* Flex container's margins do not collapse with the margins of its contents.
* Order of elements can easily be changed without editing the source HTML.

## Flexible Box Model Concept
* The ability to alter item width and height to best fit in its containers available free space.
* Flexbox is direction-agnostic
* Built for small-scale layouts while the upcoming 'Grid' specification is for more large scale.

## How Flexbox Looks
![Layout](https://raw.github.com/elwoodberry/javascript/master/_img/diagrams/flexbox-css-in-20-minutes__001.png)

## Properties
Display  
Goes on the main container element.  
```
display: flex | inline-flex;
```
Direction  
Row = Horizontal  
Column = Vertical  
```
flex-direction: row | column
```
Wrap  
Wrap elements based on the width of the window?
```
flex-wrap: wrap | nowrap | wrapreverse
```
Basis  
Similar to width.
```
flex-basis: <length>
```
Justify  
Start = Left  
End = Right  
Center = Center
```
justify-content: flex-start | flex-end | center
```
Align Self  
Start = Left  
End = Right  
Center = Center
```
align-self : flex-start | flex-end | center
```
Align Items  
Start = Left  
End = Right  
Center = Center
```
align-items : flex-start | flex-end | center
```
Align Content  
Start = Left  
End = Right  
Center = Center
```
align-content : flex-start | flex-end | center
```
Grow  
Different elements have different sizes.
```
flex-grow: <number>
```
Shrink  
Different elements have different sizes.
```
flex-shrink: <number>
```
Flex
```
flex: <integer>
```
Order
```
order: <integer>
```

## Code Examples
### Example 1
![Layout](https://raw.github.com/elwoodberry/javascript/master/_img/diagrams/flexbox-css-in-20-minutes__002.png)
HTML
```
.container-1
  .box-1
    h3 box.one
    p Lorem ipsum dolor sit amet, consectetur adipisicing ...

  .box-2
    h3 box.two
    p Lorem ipsum dolor sit amet, consectetur adipisicing ...

  .box-3
    h3 box.three
    p Lorem ipsum dolor sit amet, consectetur adipisicing ...

```
CSS
```
.container-1 {
  display: flex;

  div {
    border: 1px #CCCCCC solid;
    padding: 11px;
  }
}
```
### Example 2
![Layout](https://raw.github.com/elwoodberry/javascript/master/_img/diagrams/flexbox-css-in-20-minutes__003.png)
HTML
```
(same as above)
```
CSS
```
.container-1 {
  display: flex;

  div {
    border: 1px #CCCCCC solid;
    padding: 11px;
  }
  .box-1 {
    flex: 1;
  }
  .box-2 {
    flex: 2;
  }
  .box-3 {
    flex: 1;
  }
}
```
### Example 3
![Layout](https://raw.github.com/elwoodberry/javascript/master/_img/diagrams/flexbox-css-in-20-minutes__004.png)
HTML
```
(same as above)
```
CSS
```
.container-1 {
  display: flex;

  div {
    border: 1px #CCCCCC solid;
    padding: 11px;
  }
  .box-1 {
    flex: 2;
    order: 2;
  }
  .box-2 {
    flex: 1;
    order: 1;
  }
  .box-3 {
    flex: 1;
    order: 3;
  }
}
```
### Example 4
![Layout](https://raw.github.com/elwoodberry/javascript/master/_img/diagrams/flexbox-css-in-20-minutes__005.png)
HTML
```
(same as above)
```
CSS
```
.container-1 {
  display: flex;
  align-items: center;

  div {
    border: 1px #CCCCCC solid;
    padding: 11px;
  }
  .box-1 {
    flex: 2;
    order: 2;
  }
  .box-2 {
    flex: 1;
    order: 1;
  }
  .box-3 {
    flex: 1;
    order: 3;
  }
}
```
### Example 5
![Layout](https://raw.github.com/elwoodberry/javascript/master/_img/diagrams/flexbox-css-in-20-minutes__006.png)
HTML
```
(same as above)
```
CSS
```
.container-1 {
  align-items: center;
  display: flex;
  flex-direction: column;

  div {
    border: 1px #CCCCCC solid;
    padding: 11px;
  }
  .box-1 {
    flex: 2;
    order: 2;
  }
  .box-2 {
    flex: 1;
    order: 1;
  }
  .box-3 {
    flex: 1;
    order: 3;
  }
}
```
### Example 6
![Layout](https://raw.github.com/elwoodberry/javascript/master/_img/diagrams/flexbox-css-in-20-minutes__007.png)
HTML
```
(same as above)
```
CSS
```
.container-1 {
  display: flex;
  justify-content: space-between;

  div {
    border: 1px #CCCCCC solid;
    padding: 11px;
  }
  .box-1 {
    width: 27%;
  }
  .box-2 {
    width: 27%;
  }
  .box-3 {
    width: 27%;
  }
}
```
