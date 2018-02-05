var mongoose = require('mongoose');

// SCHEMA FOR APPLICATION (not the database)
var genreSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  create_date:{
    type: Date,
    default: Date.now
  }
});

// Make Object Accessible
var Genre = module.exports = mongoose.model('Genre', genreSchema);

// FUNC: Get Genres
module.exports.getGenres = function(callback, limit){
  Genre.find(callback).limit(limit);
}
