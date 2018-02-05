let moment = require('moment');

let date = '2017-01-18 00:00';

let format = 'YYYY';

let hour = moment(date).format('hh');

let result = moment(date).format(format);

// 01.29.2018
// Verifiying the timestamp
let dateV2 = '20171229 165700';
let formatV2 = 'hh:mm';
let resultV2 = moment(dateV2).format(formatV2);
console.log(resultV2);

// console.log(result);

// SESSION
// console.log( "SESSION: " + checkSession(hour) );

// TIME
let time = moment('2017-01-18 00:00').format('hh:mm');
// console.log("TIME: " + time);

// WEEK
let week = moment('2017-01-18 00:00').week();
// console.log("WEEK: " + week);







function checkSession(hour){

  // Sydney Tokyo
  if( hour <= 1 || hour >= 19 || hour <= 23){
    return "Sydney-Tokyo";
  }

  // Sydney-London-Gap
  if ( hour >= 2 || hour <= 3 ){
    return "Sydney-London-Gap";
  }

  // London
  if ( hour >= 3 || hour <= 8 ){
    return "London";
  }

  // London-New-York
  if ( hour >= 8 || hour <= 17 ){
    return "London-New-York";
  }

  // Sydney
  if ( hour >= 17 || hour <= 19 ){
    return "Sydney";
  }

}
