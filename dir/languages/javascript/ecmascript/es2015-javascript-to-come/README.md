# ES2015 - JavaScript To Come


## Table Of Contents
1. [Arrays](#arrays)
    1. [Reading values with Array De-Structuring](#reading-values-with-array-de-structuring)
    1. [Values can be discarded](#values-can-be-discarded)
    1. [Combining De-Structuring With Rest Params](#combining-de-structuring-with-rest-params)
    1. [De-Structuring Arrays From Return Values](#de-structuring-arrays-from-return-values)
    1. [Using for...of to loop over arrays](#using-forof-to-loop-over-arrays)
    1. [Limitations of for...of and objects](#limitations-of-forof-and-objects)
    1. [Finding An Element In An Array](#finding-an-element-in-an-array)
    1. [Array Challenges](#array-challenges)
1. [Maps](#)
1. [Sets](#)
1. [Classes](#)
1. [Modules](#)
1. [Promises](#)
1. [Iterators](#)
1. [Generators](#)
---
---
---
## Arrays
Assigning From Array to Local Variables  
We typically access elements by their index, but doing so, for more than just a couple of elements can quickly turn into a repetitive task.  
```
let candles = [
  "2017-05-may-d20-w20-1m-211",
  "2017-05-may-d20-w20-1m-212",
  "2017-05-may-d20-w20-1m-213"
  ];

  let a = candles[0];
  let b = candles[1];
  let c = candles[2];

  console.log(a, b, c);
```
**RETURNS**  
```
2017-05-may-d20-w20-1m-211 2017-05-may-d20-w20-1m-212 2017-05-may-d20-w20-1m-213
```
This works but it's more code than we actually need. If we add more candles to the array. If we add more candles to the array we will have to remember their exact index number to read the value. This doesn't scale well at all.
```
"let a ..."
"let b ..."
```
This will keep getting longer as we need to extract more candles.

### Reading values with Array De-Structuring
A new feature of javascript is called "Array De-Structuring" allows us to write this code in a much better way.  
Instead of accessing candles by their index we declare our local variables in one line of code and assign them our candles array. Javascript will try to match the number of variables on the left to the number of candles in the array.
```
let candles = [
  "2017-05-may-d20-w20-1m-211",
  "2017-05-may-d20-w20-1m-212",
  "2017-05-may-d20-w20-1m-213"
  ];

let [a, b, c] = candles;

console.log(a, b, c);
```
**RETURNS**  
```
2017-05-may-d20-w20-1m-211", 2017-05-may-d20-w20-1m-212", 2017-05-may-d20-w20-1m-213
```
Still easy to understand and less code.

### Values can be discarded
If there are any values that we are not interested in we can discard them in the assignment operation.
```
let candles = [
  "2017-05-may-d20-w20-1m-211",
  "2017-05-may-d20-w20-1m-212",
  "2017-05-may-d20-w20-1m-213"
  ];

let [a, , b] = candles;

console.log(a, b);
```
**RETURNS**  
```
2017-05-may-d20-w20-1m-211", 2017-05-may-d20-w20-1m-213
```

### Combining De-Structuring With Rest Params
We can do some pretty neat stuff combining array de-structuring with rest parameters.  
We can combine de-structuring with rest parameters to group values into other arrays.
```
let candles = [
	"2017-05-may-d20-w20-1m-211",
	"2017-05-may-d20-w20-1m-212",
	"2017-05-may-d20-w20-1m-213"
	];

let [first, ...rest] = candles;

console.log(first, rest);
```
We assign the first candle in our array to the variable name 'first'. Then we use rest parameters with the '...' syntax to assign all the remaining candles to the 'rest' variable.
**RETURNS**  
```
2017-05-may-d20-w20-1m-211", 2017-05-may-d20-w20-1m-212", 2017-05-may-d20-w20-1m-213
```

### De-Structuring Arrays From Return Values
When returning arrays from functions, we can assign to multiple variables at once.  
Another place we can use array de-structuring is when returning values from functions. We can use them to assign them to multiple variables at once.
```
function sessionCandles(){
	let candles = [
		"2017-05-may-d20-w20-1m-211",
		"2017-05-may-d20-w20-1m-212",
		"2017-05-may-d20-w20-1m-213"
		];

	return candles;
}
```
When we run this function we can assign this function's return value to a variable.  
Returns an array, as expected.
```
let session = sessionCandles();
console.log( session );
```
**RETURNS**  
```
2017-05-may-d20-w20-1m-211", 2017-05-may-d20-w20-1m-212", 2017-05-may-d20-w20-1m-213
```
Instead of using a local variable 'session', we can instead use array de-structuring to assign to multiple individual variables at once.  
Or assign to individual variables.
```
let [a, b, c] = sessionCandles();
console.log(a, b, c);
```
**RETURNS**  
```
2017-05-may-d20-w20-1m-211", 2017-05-may-d20-w20-1m-212", 2017-05-may-d20-w20-1m-213
```
### Using for...of to loop over arrays
The 'for...of' statement iterates over property values, and it's a better way to loop over arrays and other iterate able objects.  
An array of candles
```
let candles = [
	"2017-05-may-d20-w20-1m-211",
	"2017-05-may-d20-w20-1m-212",
	"2017-05-may-d20-w20-1m-213"
];
```
To loop over the candles we use the 'for in' loop. For 'N' returns the value of each candle. We assign it to the index variable of the loop. Then use the index to access the value on the array.
```
for(let index in candles){
	console.log(candles[index]);
}
```
Uses index to read the actual candle.  
First, we are assigning the index value to a variable.  
Second, we are using that value to read from the array.
```
for(let candle of candles){
	console.log(candle);
}
```
With for...of it reads watch candle directly from the array and assigns it to the 'candle' variable.  
Reads candle directly and with less code.  

### Limitations of for...of and objects
The for...of statement cannot be used to iterate over properties in plain javaScript objects out-of-the-box.  
```
let candleProfile = {
	name: "2017-05-may-d20-w20-1m-213"
	candleId: 200,
	profileType: "doji"
}

for(let property of candleProfile){
	console.log("Value: ", property);
}
```
**RETURNS ERROR**  
```
TypeError: candleProfile[Symbol.iterator] is not a function
```
HOW DO WE KNOW WHEN IT IS OKAY TO USE 'For..of'?

### Finding An Element In An Array
Array.find returns the first element in the array that satisfies a provided testing function.  
```
let candles = [
	{
		name: "2017-05-may-d20-w20-1m-213",
		candleId: 213
	},
	{
		name: "2017-05-may-d20-w20-1m-214",
		candleId: 214
	},
	{
		name: "2017-05-may-d20-w20-1m-215",
		candleId: 215
	}
];
```
How can we find the 214th candle in this array of candles?
```
let candleId = candles.find(candle) => {
	return user.candleId;
};
```
### Challenges

#### 4.3 De-Structuring and Rest Parameters
Complete the code so that it assigns the first element of the array to the variable first, and the second and third elements of the array to a single variable called remainingUsers. Remember to use the rest parameter syntax from inside the array de-structuring assignment.  
**ORIGINAL CODE**
```
let = ["Sam", "Tyler", "Brook"];
addActiveUsers(first, remainingUsers);
```
**SOLUTION**
```
let [first, ...remainingUsers] = ["Sam", "Tyler", "Brook"];
addActiveUsers(first, remainingUsers);
```

#### 4.4 De-Structuring From Return Values
Add a return value for the buildTopicInfo() function that will make the rest of the code function correctly.  
**ORIGINAL CODE**
```
function buildTopicInfo(topic){
  let title = `<h1>${topic.title}</h1>`;
  let author = `<small>${topic.author}<small>`;
}

let topic = getCurrentTopic();
let [topicTitle, topicAuthor] = buildTopicInfo(topic);
```
**SOLUTION**
```
function buildTopicInfo(topic){
  let title = `<h1>${topic.title}</h1>`;
  let author = `<small>${topic.author}<small>`;

  return [title, author];
}

let topic = getCurrentTopic();
let [topicTitle, topicAuthor] = buildTopicInfo(topic);
```

#### 4.5 The for...of Loop
Complete the following code using the new for… of loop. For each element in the activeUsers array, pass the current user name as the second argument to the notifyTopicReply() function.  
**ORIGINAL CODE**
```
let topicId = currentTopic();
let activeUsers = ["Sam", "Tyler", "Brook"];

for(  ){
  notifyTopicReply(topicId,  );
}
```
**SOLUTION**
```
let topicId = currentTopic();
let activeUsers = ["Sam", "Tyler", "Brook"];

for(let activeUser of activeUsers){
  notifyTopicReply(topicId, activeUser);
}
```
---
---
---
## Maps

### The Map Data Structure
Maps are a data structure composed of a collection of key/value pairs. They are very useful to store simple data, such as property values. Maps are present in many other programming languages and are used to store simple data like property values.  

A map stores a collection of unique keys mapped to values. Each key is associated to ONLY one value. In order to find a specific value in a map we give it's key and get the value in return.  

Javascript developers are first exposed to maps through objects. While it is possible to use objects as key/value stores, there are some issues with that.  

### Issues with using objects as maps
When using objects as maps, its keys are always converted to strings.  

Two different objects  
This object is used to map candle profiles to the total occurrences.  
```
// Two different objects
let doji = {name: "Doji Candle"};
let shootingStar = {name: "Shooting Star"};

// This object is used to map candle profiles to the total occurrences.
let occurrences = {};

occurrences[doji] = 5;
occurrences[shootingStar] = 42;

console.log(occurrences[doji]); // 42
console.log(occurrences[shootingStar]); // 42
```
Although we are assigning two different values to each one of the keys. The last value always overrides the previous value.

### Storing Kaye/values With Map
The Map object is a simple key/value data structure. Any value may be used as either a key or a value, and objects are not converted to strings  
```
let doji = {name: "Doji Candle"};
let shootingStar = {name: "Shooting Star"};


let occurrences = new Map();

// To add entries to a map, we use the 'set' method.
// Takes two arguments, a key and a value
occurrences.set(doji, 5);
occurrences.set(shootingStar, 42);

// We can read values from a map using a 'get' method.
// This takes the key as it's only argument.
console.log( occurrences.get(doji) ); // 5
console.log( occurrences.get(shootingStar) ); // 42
```

### Use Maps When Keys Are Unknown Until Runtime
MAP  
The keys are unknown until you run the code.
```
let candleProfiles = new Map();

createCandle(newCandle, (data) => {
  candleProfiles.set(data.name, data.description);
});
```
OBJECT  
When storing predefined settings its okay to use an object.  
```
const CANDLES_PER_WEEK = 7200;

let candleSettings = {
	perWeek: CANDLES_PER_WEEK,
	showCandle: true
}
```
USE MAPS WHEN:  
All keys are the same type and all values are the same type.  
Suppose we had another place in the code that added new candles to candle profiles. Like a web socket connection receiving push notifications from the server.  
```
socket.on('new candle', function(data){
  candleProfiles.set(data.name, data.description);
});
```
---
---
---
## Sets
---
---
---
## Classes
---
---
---
## Modules
---
---
---
## Promises
---
---
---
## Iterators
---
---
---
## Generators
