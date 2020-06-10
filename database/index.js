var mongoose = require('mongoose');
var schema = require('./schema')


mongoose.connect('mongodb://localhost/workout', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to database")
});



var Workouts = mongoose.model('Workouts', schema);



module.exports = Workouts;