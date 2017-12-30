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
    1. [Challenges](#)

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
2017-05-may-d20-w20-1m-211", 2017-05-may-d20-w20-1m-212", 2017-05-may-d20-w20-1m-213
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
