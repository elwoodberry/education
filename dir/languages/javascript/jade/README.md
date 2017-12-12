# Jade
Node Template Engine  

## Table Of Contents
1. [Learning Tasks](#learning-tasks)
1. [Language Reference](#language-reference)
1. [References](#references)
## +

## Learning Tasks
Questions, gray areas and/or any voids I want to address

1. How do you watch the jade file with a task runner?
2. Passing in a token from an external JS file. SEE '[express tutorial](../express/express-tutorial)' by Derek Banas

## Language Reference
See [Language Reference](http://jade-lang.com/reference/iteration) Guide From Jade.  

### Iteration
#### An Object  
The object is coming from the entry point('app.js'). I am iterating over an array of objects('users');
```
const users = [{
  id: 1,
  first_name: 'Jeff',
  last_name: 'Johnson',
  email: 'jeff.johnson@gmail.com'
},{
  id: 2,
  first_name: 'Jill',
  last_name: 'Jameson',
  email: 'jill.jameson@gmail.com'
},{
  id: 3,
  first_name: 'Jane',
  last_name: 'Jeremy',
  email: 'jane.jeremy@gmail.com'
}];
```

#### The Jade File
```
ul
each user in users.length ? users : ['There are no users.']
  li= user.first_name + " " + user.last_name
```


## Common Patterns

### A variable as an attribute
Problem
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
Solution
```
nav: ul
  - var i = 0;
    while (i++ < 4)
      li style #{i}
        ul(class="drop-menu menu-"+i)
          li uno
          li dos
          li tres
          li cuatro
          li cinco
          li seis
```



## References
1. [Jade](http://jade-lang.com/)
1. [NPM: Jade](https://www.npmjs.com/package/jade)
1. [Pug](https://pugjs.org/api/getting-started.html)
1. [Comparison of web template engines](https://en.wikipedia.org/wiki/Comparison_of_web_template_engines)
