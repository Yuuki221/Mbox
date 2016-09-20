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

	 	// the maximum number of songs in database, or it will be zero if nothing in the database
	 	this.maxIndex = 2; 

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
	 	this.noLyric = ['Lyric is not available'];
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

	 	// music piece realted properties
	 	this.musicFile = document.getElementsByClassName('mbox-music')[0];
	 	// this.processedLyric = processLyric(this.usrOption['music']['lyric_with_time'], this.usrOption['music']['lyric']);
	 	// music from database, add request later 
	 	this.musicPool = {
	 		_0 : {
	 			second_id : 0, // the id used when actual play, default is the same as original id 
	 			removed : false, // field marked removed song 
	 			deleted : false, // field marked for deleted song 
	 			url : 'development/music/You Need Me-KENN.mp3',
	 			song_name : 'You Need Me',
	 			singer : 'KENN',
	 			album : 'You Need Me',
	 			album_cover : 'development/music/YouNeedMeCover.jpg',
	 			lyric_with_time : false,
	 			lyric : [
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
	 		},

	 		_1 : {
	 			second_id : 1, // the id used when actual play, default is the same as original id 
	 			removed : false, // field marked removed song 
	 			deleted : false, // field marked for deleted song 
	 			url : 'development/music/Anchor-Novo Amor.mp3',
	 			song_name : 'Anchor',
	 			singer : 'Novo Amor',
	 			album : 'Achor',
	 			album_cover : 'development/music/AnchorCover.jpg',
	 			lyric_with_time : false,
	 			lyric : [
	 				'Anchor - Novo Amor',
	 				'',
	 				'Took the breath from my open mouth',
	 				'Never known how it broke me down',
	 				'I went in circles somewhere else',
	 				'',
	 				'Shook the best when your love was home',
	 				'Storing up on your summer glow',
	 				'You went in search of someone else',
	 				'',
	 				"And I hear your ship is comin' in",
	 				'Your tears a sea for me to swim',
	 				"And I hear a storm is comin' in",
	 				'My dear is it all we’ve ever been?',
	 				'',
	 				'Caught the air in your woven mouth',
	 				'Leave it all i’ll be hearing how you went',
	 				'In search of someone else',
	 				'',
	 				'They taught the hand that taut the bride',
	 				'Both our eyes locked to the tide',
	 				'We went in circles somewhere else',
	 				'',
	 				"And I hear your ship is comin' in",
	 				'Your tears a sea for me to swim',
	 				"And I hear a storm is comin' in",
	 				'My dear is it all we’ve ever been?',
	 				'',
	 				'Anchor up to me, love',
	 				'Anchor up to me, love',
	 				'Anchor up to me, love',
	 				'Oh, Anchor up to me',
	 				'My love, my love, my love'
	 			]
	 		},

	 		_2 : {
	 			second_id : 2, // the id used when actual play, default is the same as original id 
	 			removed : false, // field marked removed song 
	 			deleted : false, // field marked for deleted song 
	 			url : 'development/music/M01-梶浦由記.mp3',
	 			song_name : 'M01',
	 			singer : '梶浦由記',
	 			album : '劇場版 空の境界 Vol.2「殺人考察(前)」Original Soundtrack',
	 			album_cover : 'development/music/M01Cover.jpg',
	 			lyric_with_time : false,
	 			lyric : undefined
	 		},

	 		_3 : {
	 			second_id : 3, // the id used when actual play, default is the same as original id 
	 			removed : false, // field marked removed song 
	 			deleted : false, // field marked for deleted song 
	 			url : 'development/music/Signal-TK from 凛として時雨.mp3',
	 			song_name : 'Signal',
	 			singer : 'TK from 凛として時雨',
	 			album : 'Signal',
	 			album_cover : 'development/music/SingnalCover.jpg',
	 			lyric_with_time : false,
	 			lyric : undefined
	 		},

	 		_4 : {
	 			second_id : 4, // the id used when actual play, default is the same as original id 
	 			removed : false, // field marked removed song 
	 			deleted : false, // field marked for deleted song 
	 			url : 'development/music/WAVE-kradness.mp3',
	 			song_name : 'WAVE',
	 			singer : 'kradness',
	 			album : 'KRAD VORTEX',
	 			album_cover : 'development/music/KRADVORTEXCover.jpg',
	 			lyric_with_time : false,
	 			lyric : [
	 				'WAVE - kradness',
	 				'',
	 				'間違（まちが）えて宇宙（うちゅう）終（お）わって',
	 				'青信号（あおしんごう）はいつも通（とお）り',
	 				'飛（と）んでまた止（とま）まって',
	 				'また　飛（と）びそうだ',
	 				'ココロコネクト',
	 				'古代人（こだいじん）と恋（こい）した',
	 				'妄想（もうそう）コレクト',
	 				'化石的（かせきてき）なロマンス',
	 				'はぁ…夢（ゆめ）に踊（おど）るの',
	 				'',
	 				'月（つき）の灯（あか）りが',
	 				'僕（ぼく）を包（つつ）んで',
	 				'鳴（な）り響（ひび）く音（おと）カラダを',
	 				'飲（の）み込（こ）んでいく',
	 				'もう恐（おそ）れることを',
	 				'感（かん）じないくらいの',
	 				'眩（まぶ）しさに',
	 				'今（いま）ココロを',
	 				'狙（ねら）われているの',
	 				'回（まわ）る　回（まわ）る　世界（せかい）は',
	 				'///W/A//VE//',
	 				'',
	 				'考（かんが）えてみて止（と）まって',
	 				'赤信号（あかしんごう）は狙（ねら）い通（とお）り',
	 				'逃（に）げたくて滑（すべ）って',
	 				'また　逃（に）げそうだ',
	 				'開（ひら）けネクスト',
	 				'宇宙人（うちゅうじん）とＳｋｙｐｅ',
	 				'妄想（もうそう）セレクト',
	 				'電波的（でんぱてき）なロマンス',
	 				'はぁ…夜（よる）に眠（ねむ）るの',
	 				'',
	 				'月（つき）の灯（あか）りが',
	 				'僕（ぼく）を包（つつ）んで',
	 				'鳴（な）り響（ひび）く音（おと）カラダを',
	 				'また惑（まど）わせる',
	 				'もう暴（あば）れることを',
	 				'忘（わす）れちゃうくらいの',
	 				'眩（まぶ）しさに',
	 				'今（いま）ココロを',
	 				'狙（ねら）われているの',
	 				'迫（せま）る　迫（せま）る　未来（みらい）は',
	 				'///W/A//VE//',
	 				'',
	 				'はぁーん…',
	 				'夢（ゆめ）に踊（おど）るのー',
	 				'明日（あした）の声（こえ）が',
	 				'僕（ぼく）を誘（さそ）って',
	 				'鳴（な）り響（ひび）く音（おと）ミライを',
	 				'塗（ぬ）り替（か）えていく',
	 				'もう留（とど）まることを',
	 				'許（ゆる）さないくらいの',
	 				'',
	 				'眩（まぶ）しさに',
	 				'今（いま）ココロを',
	 				'狙（ねら）われているの',
	 				'回（まわ）る　回（まわ）る　世界（せかい）から',
	 				'見（み）える　見（み）える',
	 				'未来（みらい）',
	 				'',
	 				'らららーららーららー',
	 				'らららーららーららー',
	 				'らららーららーららー',
	 				'らららーららーららー'
	 			]
	 		},

	 		_5 : {
	 			second_id : 5, // the id used when actual play, default is the same as original id 
	 			removed : false, // field marked removed song 
	 			deleted : false, // field marked for deleted song 
	 			url : 'development/music/夢見る三日月-近藤隆.mp3',
	 			song_name : '夢見る3日月',
	 			singer : '近藤隆',
	 			album : '夕燒けデイズ',
	 			album_cover : 'development/music/JohnCover.jpg',
	 			lyric_with_time : false,
	 			lyric : [
	 				'夢見る三日月 - 近藤隆',
	 				'',
	 				'ちょっと前をゆく人の',
	 				'背中追って 浮かんでた',
	 				'階段の踊り場で',
	 				'見失った 道しるべ',
	 				'',
	 				'なんでかな この場所を',
	 				'知った風で 忘れてた',
	 				'奥にあった 細道で',
	 				'立ち止まって 見上げたら',
	 				'',
	 				'煙を散らして',
	 				'星を渡った',
	 				'',
	 				'ひとりきりの夢の中',
	 				'君がそばにいるだけで',
	 				'声にならない想い 焦がして',
	 				'こんなに 胸が苦しくて',
	 				'だけど 僕は戻れない',
	 				'そうやって今を漂っているんだ',
	 				'',
	 				'寝息 立てる街を',
	 				'風になって すり抜ける',
	 				'勘の冴えた 野良猫が',
	 				'僕の目を見て 鳴いた',
	 				'',
	 				'誰かと話が',
	 				'できたら良いのに',
	 				'',
	 				'ひかり灯す 悪戯で',
	 				'君に何か 伝えたくて',
	 				'猫の手も借りてみようか なんて',
	 				'どうにもならない 哀しみも',
	 				'いつか 前を向けるなら',
	 				'そうやって未来は変わっていくんだ',
	 				'',
	 				'振り返る街並みは 走馬灯のように',
	 				'やり残した願いも すべて抱きしめて',
	 				'La La La...少しのお別れだね',
	 				'La La La...だから 怖がらないで',
	 				'それじゃあ お先に',
	 				'僕は眠っているよ',
	 				'',
	 				'ひとりきりの夢の中',
	 				'君の姿 見つけたら',
	 				'精一杯の笑顔で 手を握って',
	 				'ひかりが宿る 三日月の',
	 				'迎えを待つ その場所で',
	 				'いつか 僕らにも訪れるさ',
	 				'そうやって 命は続いていくんだ'
	 			]
	 		}
	 	};

	 	// generate music playlist 
	 	this.normalOrderedPlaylist = [0,1,2,3,4,5];
	 	this.shufflePlaylist = [];
	 	this.currentPlaylist = [0,1,2,3,4,5];
	 	this.curIdx = 0;

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
	 	// if(!this.usrOption['multi']){
	 	// 	this.displayArea.innerHTML = this.processedLyric;
	 	// }else{
	 		
	 	// }
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
	 						let ct=this.curIdx;
	 						for(ct=this.curIdx+1; ct<this.currentPlaylist.length; ct++){
	 							let curKey = '_' + this.currentPlaylist[ct];
	 							if(!this.musicPool[curKey].removed && !this.musicPool[curKey].deleted){
	 								// if the song is not removed or deleted by user, we find the next song to play 
	 								this.musicFile.src = this.musicPool[curKey].url;
	 								this.usrOption['music'] = this.musicPool[curKey];
	 								this.loadSongInfo();
	 								// this.processedLyric = processLyric(this.usrOption['music']['lyric_with_time'], this.usrOption['music']['lyric']);
	 								// update current playing index 
	 								this.curIdx++;
	 								this.play();
	 								break;
	 							}
	 						}
	 						// if there is no more song to play, stop the player 
	 						if(ct===this.currentPlaylist.length) {
	 							this.clearTime();
	 						}
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

		if(this.usrOption['music']['lyric']===undefined){
			this.usrOption['music']['lyric'] = this.noLyric;
		}

		this.processedLyric = processLyric(this.usrOption['music']['lyric_with_time'], this.usrOption['music']['lyric']);
		if(!this.usrOption['multi']){
	 		this.displayArea.innerHTML = this.processedLyric;
	 	}else{
	 		
	 	}
	}

	/*
		method for add a new song to the database 
		@param {Object} object contains new song's information, has the same foramt as the initial input  
		@return {boolean} notify if the song is added succefully or not 
	*/

	addSong(newSong) {
		// process new id
		let newSecondId = Object.keys(this.musicPool).length;
		let newId = '_' + newSecondId;
		// add music file to current musicPool
		newSong.second_id = newSecondId;
		newSong.removed = false;
		newSong.deleted = false;
		this.musicPool[newId] = newSong;
		// dealing with backend problem here 
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
