# Jade Pug Tutorial
**Author**: [Derek Banas](https://www.youtube.com/user/derekbanas)  
**URL**: [Video](https://youtu.be/l5AXcXAP4r8)  

## Table Of Contents
1. [Get Started](#getting-started)
2. [DOCTYPE](#doctype)
3. [HTML](#html)



#### GETTING STARTED
(00:32)
1. [Node.js](http://www.linkgoeshere.com)
2. Install [Jade](http://www.linkgoeshere.com) Globally
```
$ npm install jade -g
```

#### DOCTYPE
(01:38)

1. To render jade files
```
$ jade file.jade
```

Learn More About [Doctypes In JADE](http://jade-lang.com/reference/doctype)  
**XML**
```
$ doctype xml
```
**Transitional**
```
$ doctype transitional
```
**Strict**
```
$ doctype strict
```
**frameset**
```
$ doctype frameset
```
**Basic**
```
$ doctype basic
```
**Mobile**
```
$ doctype mobile
```

#### HTML
(03:00)  

Include 'html'
```
doctype
html
```

#### HEAD (03:10)

Create a head section
```
head
  title This is the title
  script(src="http://www.linktoscript.js")
```

Include other jade files
```
doctype
html
  include ./head.jade
```

#### BODY (03:38)
Include the body
```
doctype
html
  include ./head.jade
  body
```

#### GENERATE JAVASCRIPT FILE (04:45)
Generate JavaScript file.
```
$ jade --client --no-debug file.jade
```

#### PARAGRAPH (05:33)
A paragraph followed by a space and then the text inside of the paragraph.
```
p(id="one") First Paragraph - Quisque et ....
```

Using the PIPE
```
p(id="two")
  | Second Paragraph - Quisque et felis tortor...
  br
  | Third Paragraph - Quisque et felis .....
  br
```

Using the DOT
```

p(id="three").
  <strong>Fourth Paragraph</strong> - Quisque et felis tortor. <i>Cras</i> id tortor at sapien varius mattis. Sed et dictum enim. Donec <a href="#">suscipit</a> arcu id erat aliquet tincidunt.
```

Adding multiple attributes
```
p(id="four",
  class="special-class").
    <strong>Fifth Paragraph</strong> - Quisque et felis ....
```


#### DIV's (07:53)
If nothing is declared, 'div' is used by default  

DIV with three classes and some style attributes and using DOT
```
.card.classTwo.classThree(style="padding:10px; margin-bottom: 15px;").
  The First DIV - Quisque et felis tortor. ...<br>
```

DIV with an ID and a class.
```
#idOne.with-special-class The Second DIV - Quisque et felis tort....
```

#### LISTS (08:39)
```
ul
  li#first-list-item
    a(href='#') Link One
  li#first-list-item
    a(href='#') Link One
  li#first-list-item
    a(href='#') Link One
```

```
ul
  li#first-list-item: a(href='#') Link One
  li#first-list-item: a(href='#') Link One
  li#first-list-item: a(href='#') Link One
```

#### INTERPOLATION (09:56)

**Comments**
Can't see...
```
//- Can't See Me...
```
Can see...
```
// Can See Me...
```

Use interpolation to execute javascript in a template by using a '- ' in front of the javascript.

Define A Variable
```
- myName = "Whatever"
```

Display Variable
```
p Issa
  span(class="badge badge-primary") #{myName}
```

Math
```
p 10000 x 56 = #{10000 * 56}
```

Set variable and use it as a attribute value
```
- website = "http://www.google.com"
a(href="#{website}" class="btn btn-secondary" target="_blank") Launch This Website!
```

A variable equals an array. Display the array
```
- pairs = ['EURUSD', 'USDCAN', 'EURJPY', 'USDJPY', 'USDGBP']
h4 Major Pairs
ul
 li#first-list-item: a(href='#') #{pairs[0]}
 li#first-list-item: a(href='#') #{pairs[2]}
 li#first-list-item: a(href='#') #{pairs[3]}
```


#### LOGIC OPERATORS (14:49)
