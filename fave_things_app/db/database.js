// mongoose is my ORM
var mongoose = require('mongoose');

// specify protocol://server/dbname
var connectionString = "mongodb://localhost/thingsILove";

// physically connect to mongodb
mongoose.connect(connectionString);

// events to listen to!
mongoose.connection.on('connected', function() {
  console.log('HOLY MACKERAL BATMAN! WE CONNECTED!');
});

mongoose.connection.on('error', function(error) {
  console.log('YOUR PARENTS ARE DEAD! ' + error);
});

mongoose.connection.on('disconnected', function() {
  console.log('HELP ME BATMAN. HOLD ME. THE DB DIED.');
});
