'use strict'

// CONFIG OPTIONS
// fetch(url, options)
// [Preflight request](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request)
const fetchOption = {
  headers: {
    'Content-Type' : 'application/json'
  },
  mode: 'cors'
}


$('form').on('submit', function(e){

  // Prevent default behavior
  e.preventDefault();

  // Find the element's value
  // Replace spaces with no spaces
  // Make an array from the values. New value when you find a comma
  let types = $('input[type=text]').val().replace(/\s/g, '');
  types = types.split(',');
  // console.log(types);

  // MAP (05:32)
  // We will use the map command to map over our 'types' array.
  // Return fetch calls to return('fetch') the information.
  let trainerTypesCalls = types.map( elem => {

    // FETCH (06:30)
    // Browser API that allows us to... fetch data.
    // fetch(url, options)
    return fetch(`https://pokeapi.co/api/v2/type/${ elem }/`, fetchOption)
  });
  //console.log(trainerTypesCalls);

  // PROMISE (08:30)
  // Using the 'promise' constructor's static method, 'all'
  // 'all' takes an array of promises
  // It will wait until all of them are done(resolved) and return their data.

  // JSON METHOD
  // Returns another promise.

  // Method #1 for solving this problem.
  // This is the dirty way. .lol.
  /*
  Promise.all(trainerTypesCalls)
  .then(data => {
    //console.log(data);

    data = data.map( singleData => singleData.json() );
    Promise.all(data)
      .then( res => {
        console.log(res);
      });
  });
  */

  // Method #2
  // A little less dirty...
  getPromiseData(trainerTypesCalls)
    .then(result => {
      console.log(result);
    });
});

// Promise Data Function
// 'getPromiseData' takes an array of fetch calls.
function getPromiseData(promisesArray){
  // using a new promise
  return new Promise((resolve, reject) => {
    // call 'promisesArray' on our array of fetch calls.
    Promise.all(promisesArray)
      // when that fetch call comes back
      .then(res => {
        // map over the array and retrieve the json.
        return res.map( type => type.json() );
      })
      // 'res' is now equal to an array of json calls
      .then(res => {
        // when they all resolve
        Promise.all(res)
          // pass them to the callback
          .then(resolve);
      })
      .catch(reject);
  });
}




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
