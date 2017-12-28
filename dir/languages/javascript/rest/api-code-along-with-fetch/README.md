Let's Learn ES6 - API Code Along with Fetch


API
[pokeapi.co](https://pokeapi.co/)


## Getting Started
Find the element's value.  
Replace spaces with no spaces.  
Make an array from the values.   
New value when you find a comma.  
```
'use strict'
$('form').on('submit', function(e){
  e.preventDefault();

  let types = $('input[type=text]').val().replace(/\s/g, '');
  types = types.split(',');
  console.log(types);
});

function displayPokemon(pokemon){

  // Loop through and display the pokemon.
  pokemon.forEach( poke => {

    var $container = $('<div>').addClass('pokemon');

    var $image = $('<img>').attr('src', `http://pokeapi.co/media/img/${poke.id}.png`);

    var $title = $('<h2>').text(poke.name);

    $container.append($image, $title);

    $('.poke-container').append($container);

  });
}
```

## HTML (pug)
```
form(method="" action='')
  p Enter A Comma Separated List Of Pokemon Types (EX: 'fire', 'ground', etc).
  input(type='text' placeholder='Enter Trainer Pokemon Types')

main(class="poke-container")
```

## MAP
We will use the map command to map over our 'types' array.  
Return fetch calls to return('fetch') the information.  
```
let trainerTypesCalls = types.map( elem => {  });
```

## FETCH
Browser API that allows us to... fetch data.  
fetch(url, options)  
Fetch returns an array of promises.  
```
let trainerTypesCalls = types.map( elem => {
  return fetch(`https://pokeapi.co/api/v2/type/${ elem }/`, fetchOption)
});
```
Options    
CONFIG OPTIONS   
fetch(url, options)   
[Preflight request](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request)   
```
const fetchOption = {
  headers: {
    'Content-Type' : 'application/json'
  },
  mode: 'cors'
}
```

## PROMISE
Using the 'promise' constructor's static method, 'all'  
'all' takes an array of promises  
It will wait until all of them are done(resolved) and return their data.  
```
Promise.all(trainerTypesCalls)
.then(data => {
  console.log(data);
});
```
### JSON METHOD  
Returns another promise.  

Method 1 for solving this problem.  
This is the dirty way. .lol.  
```
Promise.all(trainerTypesCalls)
.then(data => {
  //console.log(data);

  data = data.map( singleData => singleData.json() );
  Promise.all(data)
    .then( res => {
      console.log(res);
    });
});
```

### Reusable Method
Method 2.  
A little less dirty...  

Form  
```
$('form').on('submit', function(e){

  ...

  getPromiseData(trainerTypesCalls)
    .then(result => {
      console.log(result);
    });
});
```

Promise Data Function
'getPromiseData' takes an array of fetch calls.  
using a new promise  
call 'promisesArray' on our array of fetch calls.   
when that fetch call comes back  
map over the array and retrieve the json.  
'res' is now equal to an array of json calls  
when they all resolve   
```
function getPromiseData(promisesArray){
  return new Promise((resolve, reject) => {
    Promise.all(promisesArray)
      .then(res => {
        return res.map( type => type.json() );
      })
      .then(res => {
        Promise.all(res)
          .then(resolve);
      })
      .catch(reject);
  });
}
```
