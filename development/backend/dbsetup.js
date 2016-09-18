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

// create router
// var router = express.Router();

// middleware to use for all request
// router.use(function(req, res, next){
// 	console.log('Something works');
// 	next();
// });
app.all('/api', function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'X-Requested-With');
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
		console.log(req.body);
		// parse the request body query string parameters
		song.song_url = decodeURIComponent(req.body.url);
		song.song_name = decodeURIComponent(req.body.song_name);
		song.singer = decodeURIComponent(req.body.singer);
		song.album_name = decodeURIComponent(req.body.album);
		song.album_cover = decodeURIComponent(req.body.album_cover);

		song.save(function(err){
		// if some errors occurs when sending the data
			if(err){ 
				res.send(err);
			}else{
				console.log('reached save song area');
			}
		});	
});

app.listen(8080);





