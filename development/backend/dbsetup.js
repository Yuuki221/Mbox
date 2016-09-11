var mongoose = require('mongoose');
var options = require('./optionprocessor.js');
/*
	@param {String} database URL
	@param {Object} options  
*/

// establish database connections 

var db = mongoose.connect(options['url']);
var Schema = mongoose.Schema;

db.on('error', function(error){
	console.log('... cannot connect to databased ...');
});
db.once('open', function(){
	console.log('Cheers 🍻 , database connected!');
});

// define schema
var songSchema = new Schema({
	song_url : String,
	song_name : String,
	singer : String,
	album_name : String,
	album_cover : String
});

// model the schema
var Song = mongoose.model('Song', songSchema); 

// save music list to database
for(key in songLib){
	var newSong = songLib[key];
	var songInstance = new Song({
		song_url : newSong['url'],
		song_name : newSong['song_name'],
		singer : newSong['singer'],
		album_name : newSong['album'],
		album_cover : newSong['album_cover']
	});
	songInstance.save(function(err){
		if(err){
			console.log('save' + songLib['song_name'] + 'failed!');
		}else{
			console.log('successfully saved' + songLib['song_name'] + 'to database');
		}
	})
}




