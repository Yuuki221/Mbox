var mongoose = require('mongoose');
var url = require('url');
var express = require('express');
var querystring = require('querystring');

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
	song_id : Number,
	second_id : Number,
	song_url : String,
	song_name : String,
	singer : String,
	album_name : String,
	album_cover : String,
	like : Boolean,
	lyric_with_time : Boolean,
	lyric : Array
});

// model the schema
var Song = mongoose.model('Song', songSchema);

// find the current maximum id
var currentMaxID = -1;
var maxIDQuery = Song.find().sort({song_id : -1}).limit(1);
maxIDQuery.exec(function(err, maxResult){
	if(err) {
		console.log(err);
		return;
	}else{
		// currentMaxID = maxResult.song_id;
		if(maxResult.length===0){
			currentMaxID = 0;
		}else{
			currentMaxID = maxResult.song_id;
		}
	}
});

app.all('/getSongPool', function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
	res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	next();
	console.log('server configured');
}); 

app.all('/addSong', function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
	res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	next();
	console.log('server configured');
}); 

// router.route('/')
// set all information for app

// save music list to database
app.post('/addSong', function(req, res){
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
			song.song_id = ++currentMaxID;
			song.second_id = 0;
			song.song_url = body.url;
			song.song_name = body.song_name;
			song.singer = body.singer;
			song.album_name = body.album;
			song.album_cover = body.album_cover;
			song.lyric_with_time = body.lyric_with_time;
			song.like = false;

			song.lyric = body.lyric;
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

app.get('/getSongPool', function(req, res){
	console.log('in the GET section');
	// var songInformation = [];
	Song.find(function(err, allSongs){
		if(err){
			console.log(err);
			res.send(err);
			return;
		}else{
			var songInformation = {};
			// console.log(allSongs);

			for(var i=0; i<allSongs.length; i++){
				// console.log(song);
				var item = {};
				item._id = allSongs[i].song_id-1;
				item.second_id = 0;
				item.removed = false;
				item.deleted = false;
				item.url = allSongs[i].song_url;
				item.song_name = allSongs[i].song_name;
				item.singer = allSongs[i].singer;
				item.album = allSongs[i].album_name;
				item.album_cover = allSongs[i].album_cover;
				item.like = allSongs[i].like;
				item.lyric_with_time = false;
				item.lyric = allSongs[i].lyric;
				songInformation['_' + item._id] = item;
			}
		}
		res.send(songInformation);
	});
	//res.send({songInformation});
});

app.all('/removeSong', function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
	res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	next();
	console.log('ALL DELETE server configured');
});

// app.options('/removeSong/:removeId', function(req, res, next){
// 	res.header('Access-Control-Allow-Origin', '*');
// 	res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
// 	res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
// 	next();
// 	console.log('OPTION server configured');

// });

app.delete('/removeSong', function(req, res){
	console.log('in DELETE processing');
	var idToDelete = req.query.removeId;
	console.log(idToDelete);
	var deleteQuery = Song.remove({song_id : idToDelete});
	deleteQuery.exec(function(err, result){
		if(err){
			console.log(err);
			res.send(err);
			return;
		}else{
			console.log("Successfully delete song!");
			res.send(result);
		}
	});
});

app.listen(8080);





