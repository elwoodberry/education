let mongoose = require('mongoose');

// SCHEMA FOR APPLICATION (not the database)
let candleSchema = mongoose.Schema({
  date:{
    type: Date
  },
  open:{
    type: Number
  },
  high:{
    type: Number
  },
  low:{
    type: Number
  },
  close:{
    type: Number
  }
});

// Make Object Accessible
let m1_2017 = module.exports = mongoose.model('m1_2017', candleSchema);

// FUNC: Get Candles
module.exports.getCandles = function(callback, limit){
  m1_2017.find(callback).limit(limit);
}
