(function(){
  let candles = [
    "2017-05-may-d20-w20-1m-211",
    "2017-05-may-d20-w20-1m-212",
    "2017-05-may-d20-w20-1m-213"
    ];

    let a = candles[0];
    let b = candles[1];
    let c = candles[2];

    console.log('01.ARRAY');
    console.log(a, b, c);
})();


(function(){
  let candles = [
    "2017-05-may-d20-w20-1m-211",
    "2017-05-may-d20-w20-1m-212",
    "2017-05-may-d20-w20-1m-213"
    ];

  let [a, b, c] = candles;

  console.log('02.DESTRUCTURING');
  console.log(a, b, c);
})();
