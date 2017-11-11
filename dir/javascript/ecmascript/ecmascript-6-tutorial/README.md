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
1. [iterate-over-characters](#iterate-over-characters) (09:59)
1. [repeat-a-string](#repeat-a-string) (10:32)
1. [strings-start-with](#strings-start-with) (10:45)
1. [multi-line-strings](#multi-line-strings) (11:22)
1. [functions-default-values](#functions-default-values) (12:33)
1. [functions-rest-parameters](#functions-rest-parameters) (13:49)
1. [functions-pass-array](#functions-pass-array) (14:59)
1. [arrow-functions](#arrow-functions) (15:12)
1. [object-literals](#object-literals) (19:10)
1. [object-destructoring](#object-destructoring) (21:50)
1. [class](#class) (24:11)
1. [symbols](#symbols) (31:47)
1. [arrays](#arrays) (34:30)
1. [sets](#sets) (36:19)
1. [maps](#maps) (38:07)
1. [promises](#promises) (40:06)
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
EXAMPLE 1
```
let fName = "Steve";
let lName = "Berry";

document.write("<strong>" + `${fName} ${lName}` + "</strong><br/>");
```
**RESULT**  
'Steve Berry'


EXAMPLE 2
```
let num1 = 10;
let num2 = 20;

document.write("Two Hundred: " + `${num1 * num2}`);
```
## TAG TEMPLATE LITERALS
Modify an output using a function
'strings' is an array  
'values' is an array  
```
function doMath(strings, ...values){
  if(strings[0] == "Add"){
    document.write(`${values[0]} + ${values[1]} = ${values[0] + values[1]}<br/>`);
  }else if(strings[0] == "Sub"){
    document.write(`${values[0]} - ${values[1]} = ${values[0] - values[1]}<br/>`);
  }
}

doMath `Add${10} ${20}`;
doMath `Sub${20} ${10}`;
```
**RESULT**  
10 + 20 = 30  
20 - 10 = 10  

## ITERATE OVER CHARACTERS
```
let fName = "Constantine";
let lName = "The Great";

for(let c of fName){
  document.write(`${c}<br/>`);
}
```
## REPEAT A STRING
```
document.write("Hello ".repeat(3));
```
**RESULT**  
'Hello Hello Hello'
## STRING START WITH
```
let fName = "Constantine";
let lName = "The Great";

// Starts With...  
document.write(fName.startsWith("Con") + "<br/>"); // True  

// Ends With...  
document.write(fName.endsWith("Con") + "<br/>"); // False  

// Includes...  
document.write(fName.includes("Fuck") + "<br/>"); // False  
```
## MULTI LINE STRINGS
```
let multiLine1 = "I am a variable\
 this is a multi\
  line string...";

let multiLine2 = `I am ALSO a variable
 this is a multi
  line string...`;

// Multi Line String One
document.write(`${multiLine1}<br/><br/>`);

// Multi Line String Two
document.write(`${multiLine2}`);
```

## FUNCTIONS DEFAULT VALUES
```
function getSum(num1 = 1, num2 = 2){
  document.write(`${num1} + ${num2} = ${num1 + num2}<br/><br/>`);

  // The reserved 'arguments' keyword
  document.write(`${arguments[0]} + ${arguments[1]}`);
}

getSum(3);
```
**RESULT**  
'3 + 2 = 5' (No value was supplied for the second value so it filled it in with the default value.)  
'3 + undefined' (Arguments does not use the default value.)  

## FUNCTION REST PARAMETERS
```
function getSumMore(...vals){
  let sum = 0;

  for(let i = 0, len = vals.length; i < len; i++){
    sum += vals[i];
  }

  document.write(`The sum is ${sum}`);
}

getSumMore(1,2,3,40);
```

## FUNCTIONS PASS ARRAY
Pass an array
```
let anArray = [1,2,3,40];

function getSumMore(...vals){
  let sum = 0;

  for(let i = 0, len = vals.length; i < len; i++){
    sum += vals[i];
  }

  document.write(`The sum is ${sum}`);
}

getSumMore(...anArray);
```

## ARROW FUNCTIONS
Define parameters followed by the body of a function
```
let difference = (num1, num2) => num1 - num2;

document.write(`1000 - 200 = <strong>${difference(1000, 200)}</strong><br/><br/>`);
```

Using the arrow function with more than one statement.
```
let multiStatement = (membership, gross) => {
  let net = membership * gross;
  document.write(`$${membership} * ${gross} members = $${net} per month<br/><br/>`);
}

multiStatement(49.99, 1000);
```

##### REDUCE
Apply a function against an accumulator to get a single result
In this case we sum all the values
```
let reduceArray = [100, 200, 300, 4, 20];
let sumArray = reduceArray.reduce((a, b) => a + b);
let reduceString = "Using REDUCE to sum the values until there are no more values."

document.write(`${reduceString}<br/><strong>${sumArray}</strong><br/><br/>`);
```

##### FILTER
Returns the values that meet the condition
```
let filterArray = [100, 201, 300, 41, 29];
let evens = filterArray.filter(v => v % 2 == 0);
let filterString = "Using FILTER to return the values that meet the condition.";

document.write(`${filterString}<br/><strong>${evens}</strong><br/><br/>`);
```

##### MAP
Perform an action on every item passed to it
```
let mapArray = [100, 201, 300, 41, 29];
let doubleAll = mapArray.map(v => v * 2);
let mapString = "Using MAP to perform an action on every item passed to it";

document.write(`${mapString}<br/><strong>${doubleAll}</strong><br/><br/>`);
```

## OBJECT LITERALS
```
function createCandle(open, high, low, close){
  return {
    open,
    high,
    low,
    close,
    getInfo(){
      return `Open: ${this.open}<br/> High: ${this.high}<br/> Low: ${this.low}<br/> Close: ${this.close}`;
    },
    session: {
      name: "New York",
      date: "September 1st, 2017",
      time: "6:00 pm"
    }
  };
}

var candle = createCandle(1.00000, 2.00000, 0.00001, 1.00100);

document.write(`${candle.getInfo()}<br/>`);

document.write(`Session: ${candle.session.name}<br/>Date: ${candle.session.date}<br/><br/>`);

// Get properties and methods of an Object
document.write(`${Object.getOwnPropertyNames(candle).join(" ")}`);
```
## OBJECT DESTRUCTORING
```
function createCandle(open, high, low, close){
  return {
    open,
    high,
    low,
    close,
    getInfo(){
      return `Open: ${this.open}<br/> High: ${this.high}<br/> Low: ${this.low}<br/> Close: ${this.close}`;
    },
    session: {
      name: "New York",
      date: "September 1st, 2017",
      time: "6:00 pm"
    }
  };
}

var candle = createCandle(1.00001, 2.00001, 0.00001, 1.00101);
```

##### Get the values from the returned object.
```
let {open, high, low, close} = candle;
document.write(`Open: ${open}<br/><br/>`);
```

##### Get an inner class value.
```
let {session} = candle;
document.write(`Session: ${session.name}<br/><br/>`);
```

##### Destructuring arrays
```
let anotherArray = [1,2,3,4,5];
```

##### Get the last value of the array.
```
let [,,boom] = anotherArray;
document.write(`Boom = ${boom}<br/><br/>`);
```

##### Using the REST parameter to grab part of an item
```
let [, ...last2] = anotherArray;
document.write(`2nd Number In The Array Is: ${last2[0]}<br/><br/>`);
```

##### Switch values
```
let val1 = 100,
    val2 = 200;

[val1, val2] = [val2, val1];
document.write(`Value 2: ${val2}<br/><br/>`);
```


## CLASS
Define a Class
```
class Mammal {

  // Constructors
  constructor(name){
    // 'this' refers to the object you create
    // Protect this object by using the underscore followed by variable name.
    this._name = name;
  }

  // Getters
  get name(){
    return this._name;
  }

  // Setters
  set name(name){
    this._name = name;
  }

  // Static Methods
  // Create mammel objects and pass them back.
  static makeMammal(name){
    return new Mammal(name);
  }

  // Simple Methods
  // Return a string about our object
  getInfo(){
    return `${this.name} is a mammel.`;
  }
}
```

##### Create an object...
```
let monkey = new Mammal("Fred");
```
##### Change the name...
```
monkey.name = "Mark";
```
##### Call the Getters
```
document.write(`Mammal 1: ${monkey.name}<br/><br/>`);
```
##### Create an object using our static method...
```
let chipmunk = Mammal.makeMammal("Chipper");
document.write(`Mammal 2: ${chipmunk.name}<br/><br/>`);
```


##### Extending a class
Inherit all the properties and methods.
```
class Marsupial extends Mammal {

  // New constructor..
  // Takes an additional argument of 'hasPouch'
  constructor(name, hasPouch){

    // Calling the super constructor from the original 'Mammel' class.
    // Takes care of the 'name'
    super(name);

    // New protected variable...
    this._hasPouch = hasPouch
  }
  // Getters
  get hasPouch(){
    return this._hasPouch;
  }

  // Setter
  set hasPouch(hasPouch){
    this._hasPouch = hasPouch;
  }

  // Override Simple Method
  getInfo(){
    return `<strong>${this.name}</strong> is a Marsupial class.`;
  }
}
```

##### Test out the extended class.
Create an object...
```
let kangaroo = new Marsupial("Paul", true);
document.write(`It is ${kangaroo.hasPouch} that ${kangaroo.name} has a pouch.<br/><br/><br/><br/>`);
```

##### Test the overridden method
```
document.write(`${chipmunk.getInfo()}<br/>`);
document.write(`${kangaroo.getInfo()}<br/>`);
```

##### Dynamically inherit from classes
```
function getClass(classType){
  if(classType == 1){
    return Mammal;
  }else {
    return Marsupial;
  }
}

class Kola extends getClass(2){
  constructor(name){
    super(name);
  }
}
```

##### Test the Dynamically inherited class.
```
let carl = new Kola("Carl");
document.write(`${carl.getInfo()}<br/>`);
```


## SYMBOLS
Immutable = Can't Be Changed
```
let capital = Symbol("State Capital");

let michigan = {};

michigan[capital] = "Ann Arbor";

document.write(`Capital of MI: ${michigan[capital]}</br></br>`);

document.write(`Symbol Capital: ${capital.toString()}</br></br>`);
```


```
let employNum = Symbol.for("Employee Number");

let bobSmith = {};

bobSmith[employNum] = 10;

let sallyMarks = {};

sallyMarks[employNum] = 10;

document.write(`Bob Smith: ${bobSmith[employNum]}</br></br>`);

document.write(`Sally Marks: ${sallyMarks[employNum]}</br></br>`);
```

## ARRAYS
##### Create arrays..
```
let array1 = Array.of(1,2,3);
```

##### Change an object into an array...
```
let array2 = Array.from("word");
```

##### To manipulate values...
```
let array3 = Array.from(array1, (value) => value * 2);

for(let val of array1)

document.write(`Array Val: ${val}<br/><br/>`);

for(let val of array2)

document.write(`Array Val: ${val}<br/><br/>`);

for(let val of array3)

document.write(`Array Val: ${val}<br/><br/>`);
```

## SETS
##### A list of values with no duplications.
```
var randSet = new Set();

randSet.add(10);

randSet.add("Word");

document.write(`Has 10: ${randSet.has(10)}<br/><br/>`);

document.write(`Set Size: ${randSet.size}<br/><br/>`);

randSet.delete(10);

for(let val of randSet)

document.write(`Set Value: ${val}<br/><br/>`);
```

## MAPS
A collection of key value pairs.
```
var randMap = new Map();

randMap.set("key1", "Random String...");

randMap.set("key2", 1000);

document.write(`Key 1: ${randMap.get("key1")}<br></br>`);

document.write(`Key 2: ${randMap.get("key2")}<br></br>`);

// Get the size...
document.write(`Map Size: ${randMap.size}<br></br>`);

// Iterate over...
randMap.forEach(function(value, key){
  document.write(`${key} / ${value}<br></br>`);
});
```

## PROMISES
Promises define code that will be executed later...   
They only 'succeed' or 'fail' once   
They will have a state of 'fulfilled', 'rejected', 'pending', or 'settled'   

##### EXAMPLE 1
A promise that is handled immediately.  
'then' function takes optional arguments, callback for success & callback for failure.  
```
var p1 = Promise.resolve("Resolve Me");
p1.then((res) => document.write(`${res}<br></br>`));
```
##### EXAMPLE 2
A promise that will execute after 2 seconds
```
var p2 = new Promise(function(resolve, reject){
  setTimeout(() => resolve('What Up Mutha Fucka??'), 2000);
});

p2.then((res) => document.write(`${res}<br/><br/>`));
```


##### A promise can be fulfilled or rejected
```
let randomValue = 2000;
var p3 = new Promise(function(resolve, reject){
  if(randomValue == 2000){
    resolve("Good Value");
  }else{
    reject("Bad Value");
  }
});

p3.then((val) => document.write(`${val}<br></br>`),
(err) => document.write(`${err}<br></br>`));
```

##### Add a catch to the chain to handle all errors
```
let newValue = 300001;

var p4 = new Promise(function(resolve, reject){
  if(newValue <= 12){
    throw new Error("Can Not Vote");
  }else {
    resolve("Can Vote");
  }
});

p4.then((val) => document.write(`${val}<br/>`))
.catch((err) => document.write(`${err.message}<br/>`));
```
