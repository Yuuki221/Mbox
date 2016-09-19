var mongoose = require('mongoose');
var url = require('url');
var express = require('express');
// var options = require('./optionprocessor.js');
/*
	@param {String} database URL
	@param {Object} options  
*/
var app = express();
// establish database connections 

var db = mongoose.connect('mongodb://localhost:27017/test');
var Schema = mongoose.Schema;

mongoose.connection.on('error', function(error){
	console.log('... cannot connect to databased ...');
});
mongoose.connection.once('open', function(){
	console.log('Cheers 🍻 , database connected!');
});

/*
	Define Schema for our application 
*/

// define schema
var songSchema = new Schema({
	// song_id : Number,
	song_url : String,
	song_name : String,
	singer : String,
	album_name : String,
	album_cover : String
});

// model the schema
var Song = mongoose.model('Song', songSchema);

app.all('/api', function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
	res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	next();
	console.log('server configured');
}); 

// router.route('/')
// set all information for app

// save music list to database
app.post('/api', function(req, res){
		console.log('in the post method');
		var song = new Song();
		// console.log(req.body); need body parser to use this 
		var body = '';
		req.on('data', function(chunk){
			// console.log(chunk);
			body+=chunk;
		}).on('end', function(){
			body = JSON.parse(body);
			console.log(body.url);
			// parse the request body query string parameters
			song.song_url = body.url;
			song.song_name = body.song_name;
			song.singer = body.singer;
			song.album_name = body.album;
			song.album_cover = body.album_cover;
			song.save(function(err){
				// if some errors occurs when sending the data
				if(err){ 
					res.send(err);
				}else{
					res.send({ message : 'Successfully save song data'});
				}
			});
		});
		// res.send({'message' : 'connect sucessfully'});
});

app.listen(8080);





