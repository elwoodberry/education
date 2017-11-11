# ECMAScript 6 Tutorial
**Author**: [Derek Banas](https://www.youtube.com/user/derekbanas)  
**URL**: [Video](https://youtu.be/Jakoi0G8lBg)  
**Duration**: 45:30   
**Donate to Author**: [Patreon](https://www.patreon.com/derekbanas)  

## Table Of Contents
1. [let](#let) (01:10)
1. [const](#const) (03:10)
1. [data-types](#data-types) (04:20)
1. [strings-template-literals](#strings-template-literals) (00:00)
1. [tag-template-literals](#tag-template-literals) (07:13)
1. [iterate-over-characters](#iterate-over-characters) (00:00)
1. [repeat-a-string](#repeat-a-string) (00:00)
1. [strings-start-with](#strings-start-with) (00:00)
1. [multi-line-strings](#multi-line-strings) (00:00)
1. [functions-default-values](#functions-default-values) (00:00)
1. [functions-rest-parameters](#functions-rest-parameters) (00:00)
1. [functions-pass-array](#functions-pass-array) (00:00)
1. [arrow-functions](#arrow-functions) (00:00)
1. [object-literals](#object-literals) (00:00)
1. [object-destructoring](#object-destructoring) (00:00)
1. [class](#class) (00:00)
1. [symbols](#symbols) (00:00)
1. [arrays](#arrays) (00:00)
1. [sets](#sets) (00:00)
1. [maps](#maps) (00:00)
1. [promises](#promises) (00:00)
## +

## LET
**"What is the difference between 'let" and 'var'?**  
VAR = A variable that is available globally.  
LET = A variable that is only available to its block's scope  

##### VAR
```
if(true){
  var x = 10;

  document.write("x = " + x + "<br/>");
}

document.write("x = " + x + "<br/>");
```
**RESULT**  
"x = 10"  
"x = 10"  

##### LET
```
if(true){
  let x = 10;

  document.write("x = " + x + "<br/>");
}

document.write("x = " + x + "<br/>");
```
**RESULT**
"x = 10"  
console error: 'x is undefined...'  


**Why This Is Important**  
Global variables are all over the place & can cause conflicts or effect other variables and functions.

##### Another Example
```
var y = 10;

if(true){
  let y = 20;
}

document.write("Y = " + y);
```
**RESULT**  
'Y = 10'  


## CONST
A variable that is not going to change
```
const PI = 3.15;

if(true){
  const PI = 2.15;
  document.write("PI = " + PI);
}
document.write("PI = " + PI);
```
**RESULT**  
"PI = 3.15"  
"PI = 2.15"

## DATA TYPES
```
document.write(typeof true + "<br/>"); // boolean  
document.write(typeof 3.15 + "<br/>"); // number  
document.write(typeof "string" + "<br/>"); // string  
document.write(typeof Symbol() + "<br/>"); // symbol  
document.write(typeof {a:1} + "<br/>"); // object  
document.write(typeof [1,2,3] + "<br/>"); // object  
document.write(typeof undefined + "<br/>"); // undefined  
```
## STRING TEMPLATE LITERALS
```
```
## TAG TEMPLATE LITERALS
```
```
## ITERATE OVER CHARACTERS
```
```
## REPEAT A STRING
```
```
## STRING START WITH
```
```
## MULTI LINE STRINGS
```
```
## FUNCTIONS DEFAULT VALUES
```
```
## FUNCTION REST PARAMETERS
```
```
## FUNCTIONS PASS ARRAY
```
```
## ARROW FUNCTIONS
```
```
## OBJECT LITERALS
```
```
## OBJECT DESTRUCTORING
```
```
## CLASS
```
```
## SYMBOLS
```
```
## ARRAYS
```
```
## SETS
```
```
## MAPS
```
```
## PROMISES
```
```
