# Jade Pug Tutorial
**Author**: [Derek Banas](https://www.youtube.com/user/derekbanas)  
**URL**: [Video](https://youtu.be/l5AXcXAP4r8)
**Duration**: 26:14

## Table Of Contents
1. [Get Started](#getting-started) (00:32)
2. [DOCTYPE](#doctype) (01:38)
3. [HTML](#html) (03:00)
4. [HEAD](#head) (03:10)
4. [BODY](#body) (03:38)
4. [Generate JavaScript File](#generate-javascript-file) (04:45)
4. [PARAGRAPH](#paragraph) (05:33)
4. [DIV's](#divs) (07:53)
4. [LISTS](#lists) (08:39)
4. [Interpolation](#interpolation) (09:56)
4. [Logic Operators](#logic-operators) (14:49)
##.

### GETTING STARTED
1. [Node.js](http://www.linkgoeshere.com)
2. Install [Jade](http://www.linkgoeshere.com) Globally
```
$ npm install jade -g
```
### DOCTYPE
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

### HTML
Include 'html'
```
doctype
html
```

### HEAD
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

### BODY
Include the body
```
doctype
html
  include ./head.jade
  body
```
### GENERATE JAVASCRIPT FILE
Generate JavaScript file.
```
$ jade --client --no-debug file.jade
```

### PARAGRAPH
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


### DIV's
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

### LISTS
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

### INTERPOLATION
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

Block Quotes
```
- bq = "block Quote"
#{bq} is a bad idea because no one will know what it means.
```

Display Data From A Variable
```
- contentData = "Quisque et felis tortor. Cras id tortor at sapien varius mattis. Sed et dictum enim. Donec suscipit arcu id erat aliquet tincidunt"

div(class="card")= contentData
```

Variable stores the values for the attributes of an input.
```
- firstNameValues = {"type": "text", "name":"FNAME"}
div(class="form-group")
  label First Name
  input(class="form-control" type=firstNameValues.type, name=firstNameValues.name)
```

Tags are encoded for security reasons
```
- someInfo = "<i>Some Information As Is</i>"
```

Encoding ON
```
p= someInfo
```

Encoding OFF
```
p!= someInfo
```

OR
```
p !{someInfo}
```

### LOGIC OPERATORS


Using the '- '
```
- date = new Date()
- hour = date.getHours()

- if((hour >= 6) && (hour <= 17)){
  h3 Day Time
- } else {
  h3 Night Time
- }
```

Using indentation
```
- age = 18

if((age >= 16) && (age < 18))
  h3 You can drive!
else if age >= 18
  h3 You can drive and vote
else
  h3 You can wait until you are 16.
```
