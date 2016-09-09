let transformTime = require('./getplaytime.js');
let iconInfo = require('./svginfo.js');
let uiHtml = require('./buildui.js');

class MBox {
	/**
	 *  MBox constructor function 
	 */
	 constructor(option) {
	 	
	 	// viewBox information 
	 	this.viewBox = iconInfo['viewBox'];
	 	
	 	// svg path information 
	 	this.svg = iconInfo['svg'];

	 	/**
	 		> options: 
	 		1. element to load the Player
	 		2. foreground color
	 		3. background color 
	 		// if the option is empty, then we could use defaultSetting 
	 	*/
	 	const defaultSetting = {
	 		element : document.getElementsByClassName('plyr-container')[0],
	 		foreground_color : '#828a95',
	 		background_color : '#4a525a',
	 		music : {
	 			'url' : 'development/music/You Need Me-KENN.mp3',
	 			'song_name' : 'You Need Me',
	 			'singer' : 'KENN',
	 			'album' : 'You Need Me',
	 			'album_cover' : 'development/music/YouNeedMeCover.jpg' 
	 		}
	 	};

	 	// set the global options 
	 	this.usrOption = option || defaultSetting;

	 	// load the interface 
		this.usrOption['element'].innerHTML = uiHtml;

	 	// music piece realted properties
	 	this.musicFile = document.getElementsByClassName('mbox-music')[0];

	 	// transform time function 
	 	this.transformTime = new transformTime();

	 	/*
			player related elements 
	 	*/
	 	// icons 
	 	this.playBtn = document.getElementsByClassName('mbox-play-icon')[0];
	 	// album related information 
	 	this.coverArea = document.getElementsByClassName('mbox-album-cover-wrap')[0];
	 	this.songInfo = document.getElementsByClassName('mbox-song-info')[0];
	 	this.albumName = document.getElementsByClassName('mbox-album-name')[0];
	 	// volume realted 
	 	this.volumeIcon = document.getElementsByClassName('mbox-volume-icon')[0];
	 	this.volumeBar = document.getElementsByClassName('mbox-volume-bar-inner')[0];
	 	// play progress related
	 	this.playProgressBar = document.getElementsByClassName('mbox-play-progress-inner')[0];
	 	this.playProgressOuter = document.getElementsByClassName('mbox-play-progress-wrap')[0];
	 	// play time related
	 	this.playedTime = document.getElementsByClassName('mbox-time-played')[0];
	 	this.totalTime = document.getElementsByClassName('mbox-time-total')[0];
	 	/*
			@param {Object} progress bar needs to be update 
			@param {Number} percentage that needs to be update 
			@param {String} the property that needs to be updated on  
		*/

		this.updateProgressBar = (barname, percentage, prop) => {
			// test if the percentage is between 0 and 1 
			percentage = percentage<0? 0 : percentage;
			percentage = percentage>1? 1 : percentage;
		
			this['' + barname + 'Bar'].style[prop] = '' + percentage*100 + '%';
		}

		/*
			method for build needed svg html block
			@param [String] svg viewBox
			@param [String] svg path dimension 
		*/

		this.getSvg = (viewBox, svgPath) => {
			let svgHead = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="${viewBox}">`,
				svgTail = `</svg>`,
				pathTemplate = `<path d="${svgPath}">`;
			return svgHead  + pathTemplate + svgTail;
		};

	 	/*
			method for detect the playing status 
	 	*/
	 	let musicCurrentTime = 0,
	 		musicLastTime = 0,
	 		musicTotalTime = 0,
	 		buffering = false;

	 	this.detectPlayStatus = () => {
	 		// if the audio is not buffering, paused or ended then we check the status
	 		if(!buffering && !this.musicFile.paused){
	 			this.detectIdx = setInterval(()=>{
	 				musicCurrentTime = Math.floor(this.musicFile.currentTime);
	 				musicTotalTime = Math.floor(this.musicFile.duration);
	 				this.playedTime.innerHTML = '' + transformTime(musicCurrentTime);
	 				this.totalTime.innerHTML = '' + transformTime(musicTotalTime);
	 					let playPercent = musicCurrentTime/musicTotalTime;
	 					this.updateProgressBar('playProgress', playPercent, 'width');
	 					if(!buffering && (musicCurrentTime-musicLastTime)<0.2 && !this.musicFile.paused && !this.musicFile.ended){
	 						// the audio is buffering for some reason 
	 						buffering = true;
	 					}
	 					if(buffering && (musicCurrentTime-musicLastTime)>=0.2) buffering = false;
	 					musicLastTime = musicCurrentTime;
	 					if(this.musicFile.ended){
	 						this.playBtn.innerHTML = this.getSvg(this.viewBox['play'], this.svg['play']);
	 						this.clearTime();
	 					}
	 			},200);
	 		}
	 	};

	 	/*
			method dealing with toggle play button 
	 	*/
	 	this.togglePlay = () => {
	 		if(this.musicFile.paused){
	 			this.playBtn.innerHTML = this.getSvg(this.viewBox['pause'], this.svg['pause']);
	 			this.play();
	 		}else{
	 			this.playBtn.innerHTML = this.getSvg(this.viewBox['play'], this.svg['play']);
	 			this.pause();
	 		}
	 	}

	 	// add eventListener to play/pause button 
	 	this.playBtn.addEventListener('click',() => {
	 		this.togglePlay();
	 	});

	 	/*
			method for dealing with volume change
	 	*/
	 	this.watchVolume = () => {
	 		// get the volume between 0.0 to 1.0
	 		let curVolume = this.musicFile.volume;
	 		this.updateProgressBar('volume', curVolume, 'width');
	 		if(curVolume === 0) {
	 			this.volumeIcon.innerHTML = this.getSvg(this.viewBox['mute'], this.svg['mute']);
	 		}else if(curVolume > 0.3 && curVolume<0.6) {
	 			this.volumeIcon.innerHTML = this.getSvg(this.viewBox['volume'], this.svg['volume']);
	 		}else {
	 			this.volumeIcon.innerHTML = this.getSvg(this.viewBox['high_volume'], this.svg['high_volume']);
	 		}
	 	}
	 	/*
			method for clearInterval 
	 	*/
	 	this.clearTime = () => {
	 		clearInterval(this.detectIdx);
	 	}
	}
	/*
		method for initialize the music player 
	*/
	init(){
		this.loadSongInfo();
	}

	/*
		method for loading the UI components for player 
	*/
	loadSongInfo() {
		// load the album cover 
		this.coverArea.innerHTML = `<img src="${this.usrOption['music']['album_cover']}" width="70px" height="70px">`;
		this.songInfo.innerText = '' + this.usrOption['music']['song_name'] + ' - ' + this.usrOption['music']['singer'];
		this.albumName.innerText = '' + this.usrOption['music']['album']; 
	}

	/*
		method for playing music 
	*/
	play() {
		if(this.musicFile.paused){
			this.musicFile.play();
			this.watchVolume();
			this.detectPlayStatus();
			this.playBtn.innerHTML = this.getSvg(this.viewBox['pause'], this.svg['pause']);
		}
	}

	/*
		method for pause music 
	*/
	pause() {
		if(!this.musicFile.paused && !this.musicFile.ended){
			this.musicFile.pause();
			this.clearTime();
			this.playBtn.innerHTML = this.getSvg(this.viewBox['play'], this.svg['play']);
		}
	}
}

if(typeof window === 'undefined') {
	module.exports = MBox;
}else{
	window.MBox = MBox;
}


// var test = new MBox();
// test.load();
