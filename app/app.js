// we want to require our database connection
// for our app to use!

// requiring a persistent db connection for my app
// no variable or module required
require('./db/database');
var Song = require('./models/Song');
// use the Song model
// to .find() (db.songs.find() in mongo console)
// two paramets: error! oh shit
// songs! our songs
Song.find(function(error, songs) {
  if (error) console.log(error);
  console.log(songs);
});
