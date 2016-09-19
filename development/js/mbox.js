let transformTime = require('./getplaytime.js');
let iconInfo = require('./svginfo.js');
let uiHtml = require('./buildui.js');
let getPosition = require('./getpositions.js');
let processLyric = require('./lyricprocessor.js');

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
	 		4. multi : multiple song or single song 
	 		5. music : music information (lyric is optional)

	 		// if the option is empty, then we could use defaultSetting 

	 		// need add api url here 
	 		4. song_ids: match the song_id in database that we would like to retrieve, this is an optional selection 
	 	*/
	 	const noLyric = ['Lyric is not available'];
	 	const defaultSetting = {
	 		element : document.getElementsByClassName('plyr-container')[0],
	 		foreground_color : '#828a95',
	 		background_color : '#4a525a',
	 		multi : false,
	 		music : {
	 			'url' : 'development/music/You Need Me-KENN.mp3',
	 			'song_name' : 'You Need Me',
	 			'singer' : 'KENN',
	 			'album' : 'You Need Me',
	 			'album_cover' : 'development/music/YouNeedMeCover.jpg',
	 			'lyric_with_time' : false,
	 			'lyric' :  [
	 				'You Need Me - KENN',
	 				'',
	 				'君は　覚えているかい',
	 				'はじめて 出会えた時',
	 				'(Baby I need you)',
	 				'何故か　ふいに横切る',
	 				'おそれや　不安を確かめる',
	 				'',
	 				'上手く言葉じゃ君に',
	 				'伝えられないけれと',
	 				"(I'm missing you)",
	 				'誤解しないで　悲しまないで',
	 				'勇気出して　歩き出すよ',
	 				'So Feeling my heart',
	 				'',
	 				'君の名前を（呼んでいるよ)',
	 				'僕のメロディー　この歌に乗せて',
	 				'大好きだから（心つなぐ）',
	 				'この道をゆこう　永久に',
	 				'例えどんなに　苦しい時も',
	 				'もう　離れないから',
	 				'これからもずっと',
	 				'',
	 				'愛に 終わりはあるか',
	 				'はじめて 考えたよ',
	 				"(So Don't you fake me?)",
	 				'そうさ 失うことが',
	 				'怖くて 不安を抱きしめる',
	 				'',
	 				'君に　触れた瞬間（聞こえる)',
	 				'鼓動　揺らめいた瞳が',
	 				"(Don't be afraid)",
	 				'僕を見つめて　変わらぬまま',
	 				'2人で　愛を誓い合おう',
	 				'So just stay with me',
	 				'',
	 				'君への愛を（叫んでるよ）',
	 				'僕のメロディー　この声に乗せて',
	 				'大好きだから（溢れるほど）',
	 				'この道を行こう　永久に',
	 				'例えどんなに　苦しい時も',
	 				'もう　迷わないから',
	 				'これからもずっと',
	 				'',
	 				'I miss you　消えないで',
	 				'(Oh my sweet baby)',
	 				'僕が守るから',
	 				'',
	 				'そばにいるよ···',
	 				'',
	 				'君の名前を（呼んでいるよ）',
	 				'僕のメロディー　この歌に乗せて',
	 				'大好きだから（心つなぐ）',
	 				'この道をゆこう　永久に',
	 				'',
	 				'例えどんなに　苦しい時も',
	 				'もう　離さないから',
	 				'もう　迷わないから',
	 				'これからもずっと',
	 				'',
	 				"I don't wanna leave you"
	 			]
	 		}
	 	};

	 	// set the global options 
	 	this.usrOption = option || defaultSetting;

	 	// load the interface 
		this.usrOption['element'].innerHTML = uiHtml;

		// process lyrics 
		if(this.usrOption['music']['lyric']===undefined){
			this.usrOption['music']['lyric'] = noLyric;
		}

	 	// music piece realted properties
	 	this.musicFile = document.getElementsByClassName('mbox-music')[0];
	 	this.processedLyric = processLyric(this.usrOption['music']['lyric_with_time'], this.usrOption['music']['lyric']);
	 	// bar length 
	 	this.volumeBarLen = 50;
	 	this.progressBarLen = 225;
	 	/*
			player related elements 
	 	*/
	 	// icons 
	 	this.playBtn = document.getElementsByClassName('mbox-play-icon')[0];
	 	this.volumeBtn = document.getElementsByClassName('mbox-volume-icon')[0];
	 	// album related information 
	 	this.coverArea = document.getElementsByClassName('mbox-album-cover-wrap')[0];
	 	this.songInfo = document.getElementsByClassName('mbox-song-info')[0];
	 	this.albumName = document.getElementsByClassName('mbox-album-name')[0];
	 	// volume realted 
	 	this.volumeIcon = document.getElementsByClassName('mbox-volume-icon')[0];
	 	this.volumeBar = document.getElementsByClassName('mbox-volume-bar-inner')[0];
	 	this.volumeBarOutter = document.getElementsByClassName('mbox-volume-bar')[0];
	 	// play progress related
	 	this.playProgressBar = document.getElementsByClassName('mbox-play-progress-inner')[0];
	 	this.playProgressOuter = document.getElementsByClassName('mbox-play-progress-wrap')[0];
	 	// play time related
	 	this.playedTime = document.getElementsByClassName('mbox-time-played')[0];
	 	this.totalTime = document.getElementsByClassName('mbox-time-total')[0];
	 	// display area
	 	this.displayArea = document.getElementsByClassName('mbox-multidisplay-area')[0];

	 	// insert lyric or play list 
	 	if(!this.usrOption['multi']){
	 		this.displayArea.innerHTML = this.processedLyric;
	 	}else{
	 		
	 	}
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
	 		if(curVolume === 0.0) {
	 			this.volumeIcon.innerHTML = this.getSvg(this.viewBox['mute'], this.svg['mute']);
	 		}else if(curVolume > 0 && curVolume<0.6) {
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

	 	/*
			add listener to volume bar 
	 	*/
	 	this.volumeBarOutter.addEventListener('click',(event) => {
	 		let clickX = event.clientX,
	 			barX = getPosition(this.volumeBarOutter, 'left'),
	 			percentage = (clickX - barX)/this.volumeBarLen;
	 		this.musicFile.volume = percentage>1? 1 : (percentage<0? 0 : percentage);
	 		this.watchVolume();
	 		this.updateProgressBar('volume', percentage, 'width');
	 	});

	 	/*
			add listener to progress bar 
	 	*/
	 	this.playProgressOuter.addEventListener('click', (event) => {
	 		let clickX = event.clientX,
	 			barX = getPosition(this.playProgressOuter, 'left'),
	 			percentage = (clickX - barX)/this.progressBarLen;
	 		this.musicFile.currentTime = (percentage>1? 1 : (percentage<0? 0 : percentage))*this.musicFile.duration;
	 		this.updateProgressBar('playPorgress', percentage, 'width');
	 	});

	 	/*
			add listener to volume icon, when click volume icon, turn the music to mute 
	 	*/
	 	this.volumeBtn.addEventListener('click', () => {
	 		this.volumeBtn.innerHTML = this.getSvg(this.viewBox['mute'], this.svg['mute']);
	 		this.musicFile.volume = 0;
	 		this.updateProgressBar('volume', 0, 'width');
	 	});

	 	/*
			XMLHttp Request Retrieve Playlist from database 
			if the user want to have backend support 
	 	*/
	 /**
	 	let xhrq = new XMLHttpRequest();
	 	// string represent url 
	 	let url = `http://localhost:8080/api`;
	 	let playlistData = {
	 			url : this.usrOption['music']['url'],
	 			song_name : this.usrOption['music']['song_name'],
	 			singer : this.usrOption['music']['singer'],
	 			album : this.usrOption['music']['album'],
	 			album_cover : this.usrOption['music']['album_cover']
	 	};
	 	xhrq.open('post', url, true);
	  	// xhrq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	  	xhrq.setRequestHeader('Content-type', 'application/json')
	 	xhrq.onreadystatechange = () => {
	 		if(xhrq.readyState === XMLHttpRequest.DONE){
	 			alert(xhrq.responseText);
	 			console.log("Sucessfully send song information.");
	 		// playlistData here 
	 		}
	 	};
	 	xhrq.send(JSON.stringify(playlistData));
	 	*/
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
