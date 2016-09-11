/*
	modules for process options for backend use 

	@param {Object} rawOption: the original user's option, contain a url of database and music list  
	@return {Object} processedOption: the options object after processing 
*/

var rawOption = {
	'url' : 'mongodbconnection',
	'music_list' : [
		{
			'url' : 'linktofirstsong',
			'song_name': 'firstsong',
			'singer': 'firstsingler',
			'album' : 'firstalbum',
			'album_cover' : 'firstcover'
		},

		{
			'url' : 'linktosecondsong',
			'song_name': 'secondsong',
			'singer': 'secondsinger',
			'album' : 'secondalbum',
			'album_cover' : 'secondcover'
		}
	]
};


function getDbURL (rawOption){
	return rawOption['url'];
}

function getMusicList (rawOption){
	return rawOption['music_list'];
}