/*
	build playlist User Interface
*/
let svgInfo = require('./svginfo.js');

class BuildPlayList {

	constructor(playlist, songPool){
		// set the currentPlayList
		this.currentPlaylist = playlist;
		this.songsInList = songPool;
		this.svgInfo = svgInfo;
	}

	initPlaylist(){
		let playlistUI = '';
		for(let i=0; i<this.currentPlaylist.length; i++){
			let curSong = this.songsInList['_'+this.currentPlaylist[i]];
			if(curSong!==undefined && !curSong.removed && !curSong.deleted){
				playlistUI += this.getRowUI(curSong.song_name, curSong.singer);
			}
		}
		return `<div class="mbox-multidisplay-playlist-area hide">
					<ul class="mbox-multidisplay-playlist-ul"> 
						${ playlistUI===undefined? '<span class="mbox-no-song-message">No song to display</span>' : playlistUI }
					</ul> 
				</div>`;
	}

	addSongRow(rowElement, like) {
		console.log('in addSongRow');
		return this.getRowUI(rowElement.song_name, rowElement.singer, rowElement.song_id, like);
	}

	removeSongRow(songID) {
		let rowToRemove = document.getElementById(''+song.song_id);
		let parentUL = document.getElementsByClassName('mbox-multidisplay-playlist-ul')[0];
		parentUL.removeChild(rowToRemove);
	}


	/*
		@param {String} songname
		@param {String} singer
		@param {Array} an array contains svg icons to the end of each row
		@return {String} html code to be inserted 
	*/
	getRowUI(songname, singer, songID, like){
		// console.log(like);
		return `
			<li id=${songID} class="mbox-song-row">
				<span class="mbox-song-row-songinfo">${songname} - ${singer}</span>
				<span class="mbox-song-row-setting-buttons">
				<button class="icon mbox-row-buttons mbox-row-heart">
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999" width="16" height="16" viewBox="${this.svgInfo.viewBox['heart']}" style="fill : ${like? '#f0717d' : '#828a95'};">
						<path d="${this.svgInfo.svg['heart']}" />
					</svg>
				</button>
				<button class="icon mbox-row-buttons mbox-row-garbage">
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999" width="16" height="16" viewBox="${this.svgInfo.viewBox['garbage']}">
						<path d="${this.svgInfo.svg['garbage']}" />
					</svg>
				</button>
				<button class="icon mbox-row-buttons mbox-row-remove">
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999" width="16" height="16" viewBox="${this.svgInfo.viewBox['delete']}">
						<path d="${this.svgInfo.svg['delete']}" />
					</svg>
				</button>
				</span>
			</li>
		`;
	}
}
module.exports = BuildPlayList;