'use strict'

const fetchOption = {
  headers: {
    'Content-Type' : 'application/json'
  },
  mode: 'cors'
}

$('form').on('submit', function(e){
  e.preventDefault();
  let types = $('input[type=text]').val().replace(/\s/g, '');
  types = types.split(',');
  let trainerTypesCalls = types.map( elem => {
    return fetch(`https://pokeapi.co/api/v2/type/${ elem }/`, fetchOption)
  });

  getPromiseData(trainerTypesCalls)
    .then(result => {

      // PASSING TO FUNCTION (15:47)
      // console.log(result);
      getDoubleDamagePokemon(result);
    });
});


function getDoubleDamagePokemon(pokemonTypes){

  // Using the map function to return the double damaged array
  pokemonTypes = pokemonTypes.map( types => {
    return type.damage_relations.double_damage_from
  });

  console.log(pokemonTypes)
}



function getPromiseData(promisesArray) {
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

function displayPokemon(pokemon){
  pokemon.forEach( poke => {
    var $container = $('<div>').addClass('pokemon');
    var $image = $('<img>').attr('src', `http://pokeapi.co/media/img/${poke.id}.png`);
    var $title = $('<h2>').text(poke.name);
    $container.append($image, $title);
    $('.poke-container').append($container);
  });
}
