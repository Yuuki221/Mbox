"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function e(t, n, r) {
	function s(o, u) {
		if (!n[o]) {
			if (!t[o]) {
				var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);throw new Error("Cannot find module '" + o + "'");
			}var f = n[o] = { exports: {} };t[o][0].call(f.exports, function (e) {
				var n = t[o][1][e];return s(n ? n : e);
			}, f, f.exports, e, t, n, r);
		}return n[o].exports;
	}var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
		s(r[o]);
	}return s;
})({ 1: [function (require, module, exports) {
		/*
  	build playlist User Interface
  */
		var svgInfo = require('./svginfo.js');

		var BuildPlayList = function () {
			function BuildPlayList(playlist, songPool) {
				_classCallCheck(this, BuildPlayList);

				// set the currentPlayList
				this.currentPlaylist = playlist;
				this.songsInList = songPool;
				this.svgInfo = svgInfo;
			}

			_createClass(BuildPlayList, [{
				key: "initPlaylist",
				value: function initPlaylist() {
					var playlistUI = '';
					for (var i = 0; i < this.currentPlaylist.length; i++) {
						var curSong = this.songsInList['_' + this.currentPlaylist[i]];
						if (curSong !== undefined && !curSong.removed && !curSong.deleted) {
							playlistUI += this.getRowUI(curSong.song_name, curSong.singer);
						}
					}
					return "<div class=\"mbox-multidisplay-playlist-area hide\">\n\t\t\t\t\t<ul class=\"mbox-multidisplay-playlist-ul\"> \n\t\t\t\t\t\t" + (playlistUI === undefined ? '<span class="mbox-no-song-message">No song to display</span>' : playlistUI) + "\n\t\t\t\t\t</ul> \n\t\t\t\t</div>";
				}
			}, {
				key: "addSongRow",
				value: function addSongRow(rowElement, like) {
					console.log('in addSongRow');
					// console.log(rowElement);
					return this.getRowUI(rowElement.song_name, rowElement.singer, rowElement._id, like);
				}
			}, {
				key: "removeSongRow",
				value: function removeSongRow(songID) {
					var rowToRemove = document.getElementById('' + songID);
					var parentUL = document.getElementsByClassName('mbox-multidisplay-playlist-ul')[0];
					parentUL.removeChild(rowToRemove);
				}

				/*
    	@param {String} songname
    	@param {String} singer
    	@param {Array} an array contains svg icons to the end of each row
    	@return {String} html code to be inserted 
    */

			}, {
				key: "getRowUI",
				value: function getRowUI(songname, singer, songID, like) {
					// console.log(like);
					return "\n\t\t\t<li id=\"" + songID + "\" class=\"mbox-song-row\">\n\t\t\t\t<span class=\"mbox-song-row-songinfo\">" + songname + " - " + singer + "</span>\n\t\t\t\t<span class=\"mbox-song-row-setting-buttons\">\n\t\t\t\t<button class=\"icon mbox-row-buttons mbox-row-heart\">\n\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999\" width=\"16\" height=\"16\" viewBox=\"" + this.svgInfo.viewBox['heart'] + "\" style=\"fill : " + (like ? '#f0717d' : '#828a95') + ";\">\n\t\t\t\t\t\t<path d=\"" + this.svgInfo.svg['heart'] + "\" />\n\t\t\t\t\t</svg>\n\t\t\t\t</button>\n\t\t\t\t<button class=\"icon mbox-row-buttons mbox-row-garbage\">\n\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999\" width=\"16\" height=\"16\" viewBox=\"" + this.svgInfo.viewBox['garbage'] + "\">\n\t\t\t\t\t\t<path d=\"" + this.svgInfo.svg['garbage'] + "\" />\n\t\t\t\t\t</svg>\n\t\t\t\t</button>\n\t\t\t\t<button class=\"icon mbox-row-buttons mbox-row-remove\">\n\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999\" width=\"16\" height=\"16\" viewBox=\"" + this.svgInfo.viewBox['delete'] + "\">\n\t\t\t\t\t\t<path d=\"" + this.svgInfo.svg['delete'] + "\" />\n\t\t\t\t\t</svg>\n\t\t\t\t</button>\n\t\t\t\t</span>\n\t\t\t</li>\n\t\t";
				}
			}]);

			return BuildPlayList;
		}();

		module.exports = BuildPlayList;
	}, { "./svginfo.js": 7 }], 2: [function (require, module, exports) {
		/*
  	method for load html content for the player
  */

		var iconInfo = require('./svginfo.js');
		var svg = iconInfo['svg'];
		var viewBox = iconInfo['viewBox'];

		// object for svg viewbox
		module.exports = "<div class=\"magic-box\">\n\t\t\t\t\t<div class=\"magic-box-upper-wrap\">\n\t\t\t\t\t\t<div class=\"mbox-music-wrap\">\n\t\t\t\t\t\t\t<audio class=\"mbox-music\" src=\"development/music/You Need Me-KENN.mp3\"></audio>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- audio file links are here --> \n\t\t\t\t\t\t<div class=\"mbox-album-cover-wrap\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"mbox-controller-wrap-wrap\">\n\t\t\t\t\t\t\t<div class=\"mbox-controller-wrap\">\n\t\t\t\t\t\t\t\t<div class=\"mbox-songinfo\">\n\t\t\t\t\t\t\t\t<span class=\"mbox-song-info\" style=\"color: #dff3e3;\">Unknown</span><br>\n\t\t\t\t\t\t\t\t<span class=\"mbox-album-name\" style=\"color: #dff3e3;\">Unknown</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mbox-controlBtn-wrap-wrap\">\n\t\t\t\t\t\t\t\t<div class=\"mbox-previous-song-wrap\">\n\t\t\t\t\t\t\t\t\t<button class=\"mbox-previous-song-icon icon\">\n\t\t\t\t\t\t\t\t\t\t<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"16\" height=\"16\" viewBox=\"" + viewBox['previous'] + "\">\n\t\t\t\t\t\t\t\t\t\t\t<path d=\"" + svg['previous'] + "\" />\n\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mbox-play-icon-wrap\">\n\t\t\t\t\t\t\t\t\t<button class=\"mbox-play-icon icon\">\n\t\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"16\" height=\"16\" viewBox=\"" + viewBox['play'] + "\">\n\t\t\t\t\t\t\t\t\t\t\t<path d=\"" + svg['play'] + "\"/>\n\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mbox-next-song-icon-wrap\">\n\t\t\t\t\t\t\t\t\t<button class=\"mbox-next-song-icon icon\">\n\t\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"16\" height=\"16\" viewBox=\"" + viewBox['next'] + "\">\n\t\t\t\t\t\t\t\t\t\t\t<path d=\"" + svg['next'] + "\" />\n\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mbox-play-mode-icon-wrap\">\n\t\t\t\t\t\t\t\t\t<button class=\"mbox-play-mode-icon icon\">\n\t\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"16\" height=\"16\" viewBox=\"" + viewBox['playmode'] + "\">\n\t\t\t\t\t\t\t\t\t\t\t<path d=\"" + svg['playmode_cycle'] + "\" />\n\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mbox-volume-icon-wrap\">\n\t\t\t\t\t\t\t\t\t<button class=\"mbox-volume-icon icon\">\n\t\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"16\" height=\"16\" viewBox=\"" + viewBox['volume'] + "\">\n\t\t\t\t\t\t\t\t\t\t\t<path d=\"" + svg['volume'] + "\" />\n\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mbox-volume-bar-wrap\">\n\t\t\t\t\t\t\t\t\t<div class=\"mbox-volume-bar\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"mbox-volume-bar-inner\" style=\"width: 0; background: #dff3e3;\"></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mbox-share-icon-wrap\">\n\t\t\t\t\t\t\t\t\t<button class=\"mbox-share-icon icon\">\n\t\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999\" width=\"16\" height=\"16\" viewBox=\"" + viewBox['share'] + "\">\n\t\t\t\t\t\t\t\t\t\t\t<path d=\"" + svg['share'] + "\" />\n\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mbox-play-info-wrap\">\n\t\t\t\t\t\t<div class=\"mbox-play-progress-wrap\">\n\t\t\t\t\t\t\t<span class=\"mbox-play-progress-inner\" style=\"width: 0; background: #dff3e3;\"></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"mbox-play-time\">\n\t\t\t\t\t\t\t<span class=\"mbox-played-time\">\n\t\t\t\t\t\t\t<span class=\"mbox-time-played\">00:00</span>/<span class=\"mbox-time-total\">00:00</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mbox-multidisplay-area-wrap\">\n\t\t\t\t\t\t<div class=\"mbox-multidisplay-area\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mbox-options-wrap\">\n\t\t\t\t\t\t<div class=\"mbox-setting-item mbox-setting-wrap\">\n\t\t\t\t\t\t\t<div class=\"mbox-setting-icon\" style=\"background: #dff3e3;\">\n\t\t\t\t\t\t\t<input id=\"trigger\" class=\"mbox-setting-trigger\" type=\"checkbox\" />\n\t\t\t\t\t\t\t\t<label for=\"trigger\" class=\"mbox-setting-bars\">\n\t\t\t\t\t\t\t\t\t<div class=\"toggle-bar setting-first-bar\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"toggle-bar setting-second-bar\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"toggle-bar setting-third-bar\"></div>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"mbox-setting-item mbox-playlist-wrap\" style=\"background: #dff3e3;\">\n\t\t\t\t\t\t\t<button class=\"mbox-menu-icon mbox-playlistBtn\">\n\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999\" width=\"16\" height=\"16\" viewBox=\"" + viewBox['playlist'] + "\">\n\t\t\t\t\t\t\t\t\t<path d=\"" + svg['playlist'] + "\" />\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"mbox-setting-item mbox-lovelist-wrap\" style=\"background: #dff3e3;\">\n\t\t\t\t\t\t\t<button class=\"mbox-menu-icon mbox-lovelistBtn\">\n\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999\" width=\"16\" height=\"16\" viewBox=\"" + viewBox['heart'] + "\">\n\t\t\t\t\t\t\t\t\t<path d=\"" + svg['heart'] + "\" />\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"mbox-setting-item mbox-lyric-show-wrap\" style=\"background: #dff3e3;\">\n\t\t\t\t\t\t\t<button class=\"mbox-menu-icon mbox-lyricBtn\">\n\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999\" width=\"16\" height=\"16\" viewBox=\"" + viewBox['lyric'] + "\">\n\t\t\t\t\t\t\t\t\t<path d=\"" + svg['lyric'] + "\" />\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>";
	}, { "./svginfo.js": 7 }], 3: [function (require, module, exports) {
		var transformTime = require('./getplaytime.js');
		var iconInfo = require('./svginfo.js');
		var uiHtml = require('./buildui.js');
		var getPosition = require('./getpositions.js');
		var processLyric = require('./lyricprocessor.js');
		var BuildPlayList = require('./buildplaylist.js');

		var MBox = function () {
			/**
    *  MBox constructor function 
    */
			function MBox(option) {
				var _this = this;

				_classCallCheck(this, MBox);

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
				var defaultSetting = {
					element: document.getElementsByClassName('plyr-container')[0],
					foreground_color: '#828a95',
					background_color: '#4a525a',
					multi: false,
					music: {
						'url': 'development/music/You Need Me-KENN.mp3',
						'song_name': 'You Need Me',
						'singer': 'KENN',
						'album': 'You Need Me',
						'album_cover': 'development/music/YouNeedMeCover.jpg',
						'lyric_with_time': false,
						'lyric': ['You Need Me - KENN', '', '君は　覚えているかい', 'はじめて 出会えた時', '(Baby I need you)', '何故か　ふいに横切る', 'おそれや　不安を確かめる', '', '上手く言葉じゃ君に', '伝えられないけれと', "(I'm missing you)", '誤解しないで　悲しまないで', '勇気出して　歩き出すよ', 'So Feeling my heart', '', '君の名前を（呼んでいるよ)', '僕のメロディー　この歌に乗せて', '大好きだから（心つなぐ）', 'この道をゆこう　永久に', '例えどんなに　苦しい時も', 'もう　離れないから', 'これからもずっと', '', '愛に 終わりはあるか', 'はじめて 考えたよ', "(So Don't you fake me?)", 'そうさ 失うことが', '怖くて 不安を抱きしめる', '', '君に　触れた瞬間（聞こえる)', '鼓動　揺らめいた瞳が', "(Don't be afraid)", '僕を見つめて　変わらぬまま', '2人で　愛を誓い合おう', 'So just stay with me', '', '君への愛を（叫んでるよ）', '僕のメロディー　この声に乗せて', '大好きだから（溢れるほど）', 'この道を行こう　永久に', '例えどんなに　苦しい時も', 'もう　迷わないから', 'これからもずっと', '', 'I miss you　消えないで', '(Oh my sweet baby)', '僕が守るから', '', 'そばにいるよ···', '', '君の名前を（呼んでいるよ）', '僕のメロディー　この歌に乗せて', '大好きだから（心つなぐ）', 'この道をゆこう　永久に', '', '例えどんなに　苦しい時も', 'もう　離さないから', 'もう　迷わないから', 'これからもずっと', '', "I don't wanna leave you"]
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
				this.musicPool = {};
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

				// generate music playlist 
				// this.normalOrderedPlaylist = [0,1,2,3,4,5];
				this.shufflePlaylist = [];
				this.heartPlaylist = [];
				this.currentPlaylist = [];
				this.curIdx = 0;
				// initialize the playlist 
				this.iniPlaylist = new BuildPlayList(this.currentPlaylist, this.musicPool);

				// bar length 
				this.volumeBarLen = 50;
				this.progressBarLen = 225;

				// body part flag 
				this.LyricOn = true;

				// lyric block line height for scroll dynamic music use 
				this.lyricLineHeight = 0;
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
				this.displayAreaWrap = document.getElementsByClassName('mbox-multidisplay-area-wrap')[0];

				// play next and play previous icon 
				this.playNext = document.getElementsByClassName('mbox-next-song-icon')[0];
				this.playPre = document.getElementsByClassName('mbox-previous-song-icon')[0];

				// song row menu
				this.showLyric = document.getElementsByClassName('mbox-lyricBtn')[0];
				this.showHeartList = document.getElementsByClassName('mbox-lovelistBtn')[0];
				this.shwoPlaylist = document.getElementsByClassName('mbox-playlistBtn')[0];
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

				this.updateProgressBar = function (barname, percentage, prop) {
					// test if the percentage is between 0 and 1 
					percentage = percentage < 0 ? 0 : percentage;
					percentage = percentage > 1 ? 1 : percentage;

					_this['' + barname + 'Bar'].style[prop] = '' + percentage * 100 + '%';
				};

				/*
    	method for build needed svg html block
    	@param [String] svg viewBox
    	@param [String] svg path dimension 
    */

				this.getSvg = function (viewBox, svgPath) {
					var svgHead = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"16\" height=\"16\" viewBox=\"" + viewBox + "\">",
					    svgTail = "</svg>",
					    pathTemplate = "<path d=\"" + svgPath + "\">";
					return svgHead + pathTemplate + svgTail;
				};

				/*
    method for detect the playing status 
    */
				var musicCurrentTime = 0,
				    musicLastTime = 0,
				    musicTotalTime = 0,
				    buffering = false;

				this.detectPlayStatus = function () {
					// if the audio is not buffering, paused or ended then we check the status
					if (!buffering && !_this.musicFile.paused) {
						_this.detectIdx = setInterval(function () {
							musicCurrentTime = Math.floor(_this.musicFile.currentTime);
							musicTotalTime = Math.floor(_this.musicFile.duration);
							var currentTimeKey = '' + transformTime(musicCurrentTime);
							_this.playedTime.innerHTML = currentTimeKey;
							_this.totalTime.innerHTML = '' + transformTime(musicTotalTime);
							// dealing with moving lyric
							if (true) {
								var theLyr = document.getElementsByClassName('mbox-multidisplay-area')[0];
								// console.log(this.musicPool['_' + this.currentPlaylist[this.curIdx]].lyricTime[currentTimeKey]);
								if (_this.musicPool['_' + _this.currentPlaylist[_this.curIdx]].lyricTime[currentTimeKey]) {
									theLyr.scrollTop += 16;
									_this.musicPool['_' + _this.currentPlaylist[_this.curIdx]].lyricTime[currentTimeKey] = false;
									var curLyricLine = document.getElementById(currentTimeKey);
									curLyricLine.style.color = '#dff3e3';
									// console.log(theLyr.scrollTop);
								}
							}
							var playPercent = musicCurrentTime / musicTotalTime;
							_this.updateProgressBar('playProgress', playPercent, 'width');
							if (!buffering && musicCurrentTime - musicLastTime < 0.2 && !_this.musicFile.paused && !_this.musicFile.ended) {
								// the audio is buffering for some reason 
								buffering = true;
							}
							if (buffering && musicCurrentTime - musicLastTime >= 0.2) buffering = false;
							musicLastTime = musicCurrentTime;
							if (_this.musicFile.ended) {
								_this.playBtn.innerHTML = _this.getSvg(_this.viewBox['play'], _this.svg['play']);
								var ct = _this.curIdx;
								// set back lyric time to true 
								var endedSong = _this.musicPool['_' + _this.currentPlaylist[_this.curIdx]];
								if (endedSong.lyric_with_time) {
									for (var key in endedSong.lyricTime) {
										endedSong.lyricTime[key] = true;
									}
								}
								for (ct = _this.curIdx + 1; ct < _this.currentPlaylist.length; ct++) {
									var curKey = '_' + _this.currentPlaylist[ct];
									if (!_this.musicPool[curKey].removed && !_this.musicPool[curKey].deleted) {
										// if the song is not removed or deleted by user, we find the next song to play 
										_this.musicFile.src = _this.musicPool[curKey].url;
										// this.usrOption['music'] = this.musicPool[curKey];
										_this.loadSongInfo(_this.musicPool[curKey], _this.LyricOn);
										// this.processedLyric = processLyric(this.usrOption['music']['lyric_with_time'], this.usrOption['music']['lyric']);
										// update current playing index 
										_this.curIdx = ct;
										_this.play();
										break;
									}
								}
								// if there is no more song to play, stop the player 
								if (ct === _this.currentPlaylist.length) {
									_this.clearTime();
									_this.pause();
								}
							}
						}, 200);
					}
				};

				/*
    method dealing with toggle play button 
    */
				this.togglePlay = function () {
					if (_this.musicFile.paused) {
						_this.playBtn.innerHTML = _this.getSvg(_this.viewBox['pause'], _this.svg['pause']);
						_this.play();
					} else {
						_this.playBtn.innerHTML = _this.getSvg(_this.viewBox['play'], _this.svg['play']);
						_this.pause();
					}
				};

				// add eventListener to play/pause button 
				this.playBtn.addEventListener('click', function () {
					_this.togglePlay();
				});

				/*
    method for dealing with volume change
    */
				this.watchVolume = function () {
					// get the volume between 0.0 to 1.0
					var curVolume = _this.musicFile.volume;
					_this.updateProgressBar('volume', curVolume, 'width');
					if (curVolume === 0.0) {
						_this.volumeIcon.innerHTML = _this.getSvg(_this.viewBox['mute'], _this.svg['mute']);
					} else if (curVolume > 0 && curVolume < 0.6) {
						_this.volumeIcon.innerHTML = _this.getSvg(_this.viewBox['volume'], _this.svg['volume']);
					} else {
						_this.volumeIcon.innerHTML = _this.getSvg(_this.viewBox['high_volume'], _this.svg['high_volume']);
					}
				};
				/*
    method for clearInterval 
    */
				this.clearTime = function () {
					clearInterval(_this.detectIdx);
				};

				/*
    compute the lyric line height
    */
				this.getLyricLineHeight = function () {
					if (_this.LyricOn) {
						var lyricArea = document.getElementsByClassName('mbox-multidisplay-area')[0];
						var cssLineHeight = pareseInt(getStyle(lyricArea, 'line-height'), 10);
						var clone = undefined;
						var computedLineHeigh = undefined;
						if (isNaN(cssLineHeight)) {
							clone = element.cloneNode();
							clone.innerHTML = '<br><br>';
							element.appendChild(clone);
							var twoline = clone.offsetHeight;
							clone.innerHTML = '<br><br><br><br>';
							var fourline = clone.offsetHeigh;
							element.removeChild(clone);
							computedLineHeigh = fourline - twoline;
						}
						return computedLineHeigh;
					}
					return 0;
				};

				/*
    add listener to play next button
    */

				this.playNext.addEventListener('click', function () {
					var i = 0;
					for (i = _this.curIdx + 1; i < _this.currentPlaylist.length; i++) {
						var nextSongToPlay = _this.musicPool['_' + _this.currentPlaylist[i]];
						if (nextSongToPlay !== undefined && !nextSongToPlay.removed && !nextSongToPlay.deleted) {
							_this.musicFile.src = nextSongToPlay.url;
							_this.loadSongInfo(nextSongToPlay, _this.LyricOn);
							_this.play();
							_this.curIdx = i;
							break;
						}
					}
					if (i === _this.currentPlaylist.length) alert('no more song to play');
				});

				/*
    add listener to play previous button
    */

				this.playPre.addEventListener('click', function () {
					var i = 0;
					for (i = _this.curIdx - 1; i >= 0; i--) {
						var previousSong = _this.musicPool['_' + _this.currentPlaylist[i]];
						if (previousSong !== undefined && !previousSong.removed && !previousSong.deleted) {
							_this.musicFile.src = previousSong.url;
							_this.loadSongInfo(previousSong, _this.LyricOn);
							_this.play();
							_this.curIdx = i;
							break;
						}
					}
					if (i === -1) alert('This is the first song already');
				});

				/*
    add listener to volume bar 
    */
				this.volumeBarOutter.addEventListener('click', function (event) {
					var clickX = event.clientX,
					    barX = getPosition(_this.volumeBarOutter, 'left'),
					    percentage = (clickX - barX) / _this.volumeBarLen;
					_this.musicFile.volume = percentage > 1 ? 1 : percentage < 0 ? 0 : percentage;
					_this.watchVolume();
					_this.updateProgressBar('volume', percentage, 'width');
				});

				/*
    add listener to progress bar 
    */
				this.playProgressOuter.addEventListener('click', function (event) {
					var clickX = event.clientX,
					    barX = getPosition(_this.playProgressOuter, 'left'),
					    percentage = (clickX - barX) / _this.progressBarLen,
					    previousTime = transformTime(_this.musicFile.currentTime),
					    preserveTime = transformTime((percentage > 1 ? 1 : percentage < 0 ? 0 : percentage) * _this.musicFile.duration);
					_this.musicFile.currentTime = (percentage > 1 ? 1 : percentage < 0 ? 0 : percentage) * _this.musicFile.duration;
					// dealing with lyric problem 
					// let playToTime = transformTime(this.musicFile.currentTime);
					var curSong = _this.musicPool['_' + _this.currentPlaylist[_this.curIdx]];
					// if the lyric window is on and the lyric is a lyric file with time 
					// if(curSong.lyric_with_time && this.lyricOn){
					if (true) {
						// console.log('in adjusting lyric area');
						// if the song has timed lyrics
						var timePool = curSong.lyricTime,
						    lineCt = 0;
						var theLyr = document.getElementsByClassName('mbox-multidisplay-area')[0];
						// console.log(theLyr.children[1].children);
						var lyrics = theLyr.children[1].children;
						if (previousTime < preserveTime) {
							for (var i = 0; i < lyrics.length; i++) {
								if (lyrics[i].id !== "" && lyrics[i].id < preserveTime && lyrics[i].id > previousTime) {
									lyrics[i].style.color = '#dff3e3';
									theLyr.scrollTop += 16;
								}
							}
						} else {
							for (var _i = 0; _i < lyrics.length; _i++) {
								if (lyrics[_i].id !== "" && lyrics[_i].id > preserveTime && lyrics[_i].id < previousTime) {
									lyrics[_i].style.color = '#828a95';
									theLyr.scrollTop -= 16;
								}
							}
						}
					}
					_this.updateProgressBar('playPorgress', percentage, 'width');
				});

				/*
    add listener to volume icon, when click volume icon, turn the music to mute 
    */
				this.volumeBtn.addEventListener('click', function () {
					_this.volumeBtn.innerHTML = _this.getSvg(_this.viewBox['mute'], _this.svg['mute']);
					_this.musicFile.volume = 0;
					_this.updateProgressBar('volume', 0, 'width');
				});

				this.shwoPlaylist.addEventListener('click', function () {
					_this.LyricOn = _this.LyricOn ? false : true;
					_this.displayAreaWrap.innerHTML = _this.iniPlaylist.initPlaylist();
					for (var key in _this.musicPool) {
						if (!_this.musicPool[key].removed && !_this.musicPool[key].deleted) {
							var rowUI = _this.iniPlaylist.addSongRow(_this.musicPool[key], _this.musicPool[key].like);
							//console.log(rowUI);
							var fakeEle = document.createElement('li');
							fakeEle.innerHTML = rowUI;
							var rowEle = fakeEle.children[0];
							// console.log(rowEle);
							var node = document.getElementsByClassName('mbox-multidisplay-playlist-ul')[0];
							// console.log(node);
							node.appendChild(rowEle);
						}
					}
					// define method for row buttons
					_this.rowHeartIcons = document.getElementsByClassName('mbox-row-heart');
					_this.rowDeleteIcons = document.getElementsByClassName('mbox-row-garbage');
					_this.rowRemoveIcons = document.getElementsByClassName('mbox-row-remove');

					// function handling click event for heart symbol 
					var clickBind = function clickBind(songId, i) {
						return function () {
							_this.likeSong(songId);
							_this.rowHeartIcons[i].children[0].style['fill'] = _this.musicPool['_' + songId].like ? '#f0717d' : '#828a95';
						};
					};

					// function handling click event for remove symbol
					var clickRemoveBind = function clickRemoveBind(songId) {
						return function () {
							_this.removeSong(songId);
						};
					};

					// function handling click event for delete symbol 
					var clickDeleteBind = function clickDeleteBind(songId) {
						return function () {
							_this.deleteSong(songId);
						};
					};

					// add listener to the icon
					for (var i = 0; i < _this.rowHeartIcons.length; i++) {
						// console.log(this.rowHeartIcons[i].parentElement.parentElement);
						var curID = _this.rowHeartIcons[i].parentElement.parentElement.id;
						_this.rowHeartIcons[i].addEventListener('click', clickBind(curID, i));
						_this.rowRemoveIcons[i].addEventListener('click', clickRemoveBind(curID));
						_this.rowDeleteIcons[i].addEventListener('click', clickDeleteBind(curID));
					}
					// this.rowHeartIcons.addEventListener('click', (event)=>{
					// 	// dealing with IE6-8 later
					// 	let currentHeart = event.target;
					// 	let songLikeID = currentHeart.parent.parent.id;
					// 	this.likeSong(songLikeID);
					// });
				});

				this.showLyric.addEventListener('click', function () {
					if (!_this.LyricOn) _this.LyricOn = true;
					var currentSong = _this.musicPool['_' + _this.currentPlaylist[_this.curIdx]];
					// console.log(currentSong);
					// this.processedLyric = processLyric(currentSong['lyric_with_time'], currentSong['lyric']);
					// let fakeElement = document.createElement('div');
					_this.displayAreaWrap.innerHTML = '<div class="mbox-multidisplay-area"><div class="mbox-lyric-prefix"></div><div>' + currentSong.lyric + '</div><div class="mbox-lyric-prefix"></div></div>';
					// console.log(currentSong['lyric']);
				});

				this.showHeartList.addEventListener('click', function () {
					_this.LyricOn = _this.LyricOn ? false : true;
					_this.displayAreaWrap.innerHTML = _this.iniPlaylist.initPlaylist();
					for (var i = 0; i < _this.currentPlaylist.length; i++) {
						var currentSong = _this.musicPool['_' + _this.currentPlaylist[i]];
						if (currentSong.like && !currentSong.removed && !currentSong.deleted) {
							// double check for validation 
							var rowUI = _this.iniPlaylist.addSongRow(currentSong, true);
							var fakeEle = document.createElement('li');
							fakeEle.innerHTML = rowUI;
							var rowEle = fakeEle.children[0];
							// console.log(rowEle);
							var node = document.getElementsByClassName('mbox-multidisplay-playlist-ul')[0];
							// console.log(node);
							node.appendChild(rowEle);
						}
					}

					// define method for row buttons
					_this.rowHeartIcons = document.getElementsByClassName('mbox-row-heart');
					_this.rowDeleteIcons = document.getElementsByClassName('mbox-row-garbage');
					_this.rowRemoveIcons = document.getElementsByClassName('mbox-row-delete');

					// function handling click event
					var clickBind = function clickBind(songId, i) {
						return function () {
							_this.likeSong(songId);
							// this.rowHeartIcons[i].children[0].style['fill'] = this.musicPool['_'+songId].like? '#f0717d' : '#828a95';
							var rowEle = document.getElementById('' + songId);
							rowEle.remove();
						};
					};

					// add listners to the icon
					for (var _i2 = 0; _i2 < _this.rowHeartIcons.length; _i2++) {
						// console.log(this.rowHeartIcons[i].parentElement.parentElement);
						var curID = _this.rowHeartIcons[_i2].parentElement.parentElement.id;
						_this.rowHeartIcons[_i2].addEventListener('click', clickBind(curID, _i2));
					}
				});
			}

			/*
   	method for initialize the music player 
   */


			_createClass(MBox, [{
				key: "init",
				value: function init() {
					var _this2 = this;

					// this.loadSongInfo();
					// this.addSong(this.usrOption['music']);
					/*
     	XMLHttp Request Retrieve Playlist from database 
     	if the user want to have backend support 
     	*/
					var getSongPoolxhrq = new XMLHttpRequest();
					var getSongPoolURL = 'http://localhost:8080/getSongPool';
					getSongPoolxhrq.open('get', getSongPoolURL, true);
					getSongPoolxhrq.setRequestHeader('Content-type', 'application/json');
					getSongPoolxhrq.onreadystatechange = function () {
						if (getSongPoolxhrq.readyState === XMLHttpRequest.DONE) {

							_this2.musicPool = JSON.parse(getSongPoolxhrq.responseText);
							for (var key in _this2.musicPool) {
								var currentSong = _this2.musicPool[key];
								_this2.currentPlaylist.push(Number(key.substring(1)));
								if (currentSong.like) _this2.heartPlaylist.push(Number(key.substring(1)));
								// process the lyric once they enter the API 
								var returnedLyric = processLyric(currentSong['lyric_with_time'], currentSong['lyric']);
								currentSong.lyric = returnedLyric.processedText;
								// console.log(currentSong.lyric);
								currentSong.lyricTime = returnedLyric.lyricObj;
								// console.log(currentSong.lyricTime);
								//this.iniPlaylist.addSongRow(this.musicPool[key]);
								/**
        let rowUI = this.iniPlaylist.addSongRow(this.musicPool[key]);
        //console.log(rowUI);
        	let fakeEle = document.createElement('li');
        	fakeEle.innerHTML = rowUI;
        	let rowEle = fakeEle.children[0];
        	// console.log(rowEle);
        	let node = document.getElementsByClassName('mbox-multidisplay-playlist-ul')[0];
        	// console.log(node);
        	node.appendChild(rowEle);
        */
							}
							// console.log(typeof(this.musicPool));

							_this2.musicFile.src = _this2.musicPool['_' + _this2.currentPlaylist[0]]['url'];

							// console.log(this.musicPool);
							_this2.loadSongInfo(_this2.musicPool['_' + _this2.currentPlaylist[0]], true);
							// this.play();

							// console.log(this.musicPool);
							// this.likeSong(1);
						}
					};

					getSongPoolxhrq.send(null);

					// this.addSong(this.usrOption['music']);
				}

				/*
    	method for loading the UI components for player 
    */

			}, {
				key: "loadSongInfo",
				value: function loadSongInfo(song, lyricOn) {
					// load the album cover 
					this.coverArea.innerHTML = "<img src=\"" + song['album_cover'] + "\" width=\"70px\" height=\"70px\">";
					this.songInfo.innerText = '' + song['song_name'] + ' - ' + song['singer'];
					this.albumName.innerText = '' + song['album'];
					if (lyricOn) {
						if (this.usrOption['music']['lyric'] === undefined) {
							this.usrOption['music']['lyric'] = this.noLyric;
						} else {
							this.displayAreaWrap.innerHTML = '<div class="mbox-multidisplay-area"><div class="mbox-lyric-prefix"></div><div>' + song.lyric + '</div><div class="mbox-lyric-prefix"></div></div>';
						}
					}
				}

				/*
    	method for add a new song to the database 
    	@param {Object} object contains new song's information, has the same foramt as the initial input  
    	@return {boolean} notify if the song is added succefully or not 
    */

			}, {
				key: "addSong",
				value: function addSong(newSong) {
					// process new id

					// let newSecondId = Object.keys(this.musicPool).length;
					// find the largest id
					var maxId = 0;
					for (var key in this.musicPool) {
						maxId = Math.max(maxId, this.musicPool[key]._id);
					}
					// add music file to current musicPool
					// newSong.second_id = newSecondId;
					/**
     let rowUI = this.iniPlaylist.addSongRow(newSong, false);
     //console.log(rowUI);
     	let fakeEle = document.createElement('li');
     	fakeEle.innerHTML = rowUI;
     	let rowEle = fakeEle.children[0];
     	// console.log(rowEle);
     	let node = document.getElementsByClassName('mbox-multidisplay-playlist-ul')[0];
     	// console.log(node);
     	node.appendChild(rowEle);
     	*/

					// dealing with backend problem here 
					var xhrq = new XMLHttpRequest();
					// string represent url 
					var url = "http://localhost:8080/addSong";
					xhrq.open('post', url, true);
					// xhrq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
					xhrq.setRequestHeader('Content-type', 'application/json');
					xhrq.onreadystatechange = function () {
						if (xhrq.readyState === XMLHttpRequest.DONE) {
							alert(xhrq.responseText);
							console.log("Sucessfully send song information.");
							// playlistData here 
						}
					};
					xhrq.send(JSON.stringify(newSong));

					// add the song to current playlist
					var newId = '_' + (maxId + 1);
					this.musicPool[newId] = newSong;
					newSong._id = maxId + 1;
					newSong.removed = false;
					newSong.deleted = false;
					var returnedLyric = processLyric(newSong['lyric_with_time'], newSong['lyric']);
					newSong.lyric = returnedLyric.processedText;
					newSong.lyticTime = returnedLyric.lyricObj;
					newsong.like = false;
					this.musicPool[newId] = newSong;
					this.currentPlaylist.push(maxId + 1);
				}

				/*
    	method for remove a song from current playlist 
    */

			}, {
				key: "removeSong",
				value: function removeSong(songID) {
					var originID = songID;
					this.musicPool['_' + originID].removed = true;
					this.iniPlaylist.removeSongRow(songID);
				}

				/*
    	method for deleting the song 
    */

			}, {
				key: "deleteSong",
				value: function deleteSong(songID) {
					var originID = songID;
					this.musicPool['_' + originID].deleted = true;
					// deleted song from database, or add gargbage place later 
					var xhrq = new XMLHttpRequest();
					var url = "http://localhost:8080/removeSong?removeId=" + encodeURIComponent(songID);
					xhrq.onreadystatechange = function () {
						if (xhrq.readyState === XMLHttpRequest.DONE) {
							alert(xhrq.responseText);
							console.log("Successfully delete song");
							// handle the request status here 
							//this.iniPlaylist.removeSongRow(song);
						}
					};
					xhrq.open('delete', url, true);
					xhrq.send(null);

					// remove the song row 
					this.iniPlaylist.removeSongRow(songID);
				}

				/*
    	method for like a song 
    */

			}, {
				key: "likeSong",
				value: function likeSong(songID) {
					console.log(this.musicPool);
					this.musicPool['_' + songID].like = this.musicPool['_' + songID].like ? false : true;
					var xmrq = new XMLHttpRequest();
					var url = "http://localhost:8080/likeSong?songId=" + encodeURIComponent(songID);
					xmrq.onreadystatechange = function () {
						if (xmrq.readyState === XMLHttpRequest.DONE) {
							alert(xmrq.responseText);
							console.log("I like this song");
						}
					};
					xmrq.open('put', url, true);
					xmrq.send(null);
				}

				/*
    	method for playing music 
    */

			}, {
				key: "play",
				value: function play() {
					if (this.musicFile.paused) {
						this.musicFile.play();
						this.watchVolume();
						this.detectPlayStatus();
						this.playBtn.innerHTML = this.getSvg(this.viewBox['pause'], this.svg['pause']);
					}
				}

				/*
    	method for pause music 
    */

			}, {
				key: "pause",
				value: function pause() {
					if (!this.musicFile.paused && !this.musicFile.ended) {
						this.musicFile.pause();
						this.clearTime();
						this.playBtn.innerHTML = this.getSvg(this.viewBox['play'], this.svg['play']);
					}
				}
			}]);

			return MBox;
		}();

		if (typeof window === 'undefined') {
			module.exports = MBox;
		} else {
			window.MBox = MBox;
		}

		// var test = new MBox();
		// test.load();
	}, { "./buildplaylist.js": 1, "./buildui.js": 2, "./getplaytime.js": 4, "./getpositions.js": 5, "./lyricprocessor.js": 6, "./svginfo.js": 7 }], 4: [function (require, module, exports) {
		/**
  	method to transform playtime to 00:00:00 format 
  	@param {Number} seconds
  	@return {String} time format in 00:00:00
  *
  */
		function transformTime(secTime) {
			var strRes = '';
			for (var i = 0; i < 2; i++) {
				var subres = secTime % 60;
				secTime = Math.floor(secTime / 60);
				strRes = ':' + (subres < 10 ? '0' + subres : '' + subres) + strRes;
			}
			return strRes.substring(1);
		};

		//console.log(transformTime(1298));
		module.exports = transformTime;
	}, {}], 5: [function (require, module, exports) {
		/*
  	modules for compute the current element position 
  
  	@param {Object} element
  	@param {String} direction 'left' or 'right', upper or lower case not a problem 
  */

		function getPos(element, direction) {
			// left position 
			if (direction.trim().toLowerCase() === 'left') {
				// deal with body element
				var xPos = 0;
				while (element) {
					if (element.tagName == 'BODY') {
						var xScroll = element.scrollLeft || document.documentElement.scrollLeft;

						xPos += element.offsetLeft - xScroll + element.clientLeft;
					} else {
						xPos += element.offsetLeft - element.scrollLeft + element.clientLeft;
					}
					element = element.offsetParent;
				}
				return xPos;
			} else {
				// top position 
				var yPos = 0;
				while (element) {
					if (element.tagName === 'BODY') {
						var yScroll = element.scrollTop || document.documentElement.scrollTop;
						yPos += element.offsetTop - yScroll + element.clientTop;
					} else {
						yPos += element.offsetTop - element.scrollTop + element.clientTop;
					}
					element = element.offsetParent;
				}
				return yPos;
			}
		}

		module.exports = getPos;
	}, {}], 6: [function (require, module, exports) {
		/*
  	@param {Boolean} time: showing this lyric is with time or not 
  	@param {Array} lyric: array contains the lyric file
  */

		var processLyric = function processLyric(time, lyrics) {
			var processedLyrics = '',
			    lyricObj = {};
			if (!time) {
				// process with lyrics without time information 
				// if the entry is empty then replace with a new line symbol
				for (var i = 0; i < lyrics.length; i++) {
					if (!lyrics[i]) {
						lyrics[i] = '<br>';
					} else {
						lyrics[i] += '<br>';
					}
				}
				processedLyrics = lyrics.join('');
				// console.log('processed?');
			} else {
				var processedText = [];
				for (var _i3 = 0; _i3 < lyrics.length; _i3++) {
					if (lyrics[_i3]) {
						// processedText.push('<br><br>');
						// }else{
						// generate lyrics text now
						processedText.push("<span id=\"" + lyrics[_i3][0] + "\" class=\"mbox-lyric-line\">" + lyrics[_i3][1] + '</span><br>');
						// generate lyric object 
						lyricObj[lyrics[_i3][0]] = true;
					}
				}
				processedLyrics = processedText.join('');
			}
			// console.log(processedLyrics);
			return {
				'processedText': processedLyrics,
				'lyricObj': lyricObj
			};
		};

		module.exports = processLyric;
		/**
  var testLyric = [
  	 				['00:00', 'WAVE - kradness'],
  	 				'',
  	 				['00:31', '間違（まちが）えて宇宙（うちゅう）終（お）わって'],
  	 				['00:32', '青信号（あおしんごう）はいつも通（とお）り'],
  	 				['00:35', '飛（と）んでまた止（とま）まって'],
  	 				['00:37', 'また　飛（と）びそうだ'],
  	 				['00:39', 'ココロコネクト'],
  	 				['00:40', '古代人（こだいじん）と恋（こい）した'],
  	 				['00:42', '妄想（もうそう）コレクト'],
  	 				['00:44', '化石的（かせきてき）なロマンス'],
  	 				['00:46', 'はぁ…夢（ゆめ）に踊（おど）るの'],
  	 				'',
  	 				['00:49', '月（つき）の灯（あか）りが'],
  	 				['00:51', '僕（ぼく）を包（つつ）んで'],
  	 				['00:53', '鳴（な）り響（ひび）く音（おと）カラダを'],
  	 				['00:55', '飲（の）み込（こ）んでいく'],
  	 				['00:57', 'もう恐（おそ）れることを'],
  	 				['00:59', '感（かん）じないくらいの'],
  	 				['01:01', '眩（まぶ）しさに'],
  	 				['01:02', '今（いま）ココロを'],
  	 				['01:03', '狙（ねら）われているの'],
  	 				['01:05', '回（まわ）る　回（まわ）る　世界（せかい）は'],
  	 				['01:08', '///W/A//VE//'],
  	 				'',
  	 				['01:22', '考（かんが）えてみて止（と）まって'],
  	 				['01:24', '赤信号（あかしんごう）は狙（ねら）い通（とお）り'],
  	 				['01:27', '逃（に）げたくて滑（すべ）って'],
  	 				['01:29', 'また　逃（に）げそうだ'],
  	 				['01:31', '開（ひら）けネクスト'],
  	 				['01:32', '宇宙人（うちゅうじん）とＳｋｙｐｅ'],
  	 				['01:34', '妄想（もうそう）セレクト'],
  	 				['01:36', '電波的（でんぱてき）なロマンス'],
  	 				['01:38', 'はぁ…夜（よる）に眠（ねむ）るの'],
  	 				'',
  	 				['01:41', '月（つき）の灯（あか）りが'],
  	 				['01:43', '僕（ぼく）を包（つつ）んで'],
  	 				['01:45', '鳴（な）り響（ひび）く音（おと）カラダを'],
  	 				['01:47', 'また惑（まど）わせる'],
  	 				['01:48', 'もう暴（あば）れることを'],
  	 				['01:50', '忘（わす）れちゃうくらいの'],
  	 				['01:52', '眩（まぶ）しさに'],
  	 				['01:53', '今（いま）ココロを'],
  	 				['01:54', '狙（ねら）われているの'],
  	 				['01:56', '迫（せま）る　迫（せま）る　未来（みらい）は'],
  	 				'///W/A//VE//',
  	 				'',
  	 				['02:00', 'はぁーん…'],
  	 				['02:23', '夢（ゆめ）に踊（おど）るのー'],
  	 				['02:25', '明日（あした）の声（こえ）が'],
  	 				['02:27', '僕（ぼく）を誘（さそ）って'],
  	 				['02:29', '鳴（な）り響（ひび）く音（おと）ミライを'],
  	 				['02:31', '塗（ぬ）り替（か）えていく'],
  	 				['02:33', 'もう留（とど）まることを'],
  	 				['02:35', '許（ゆる）さないくらいの'],
  	 				'',
  	 				['02:37', '眩（まぶ）しさに'],
  	 				['02:38', '今（いま）ココロを'],
  	 				['02:39', '狙（ねら）われているの'],
  	 				['02:41', '回（まわ）る　回（まわ）る　世界（せかい）から'],
  	 				['02:44', '見（み）える　見（み）える'],
  	 				['02:46', '未来（みらい）'],
  	 				'',
  	 				['02:48', 'らららーららーららー'],
  	 				['02:49', 'らららーららーららー'],
  	 				['02:55', 'らららーららーららー'],
  	 				['02:57', 'らららーららーららー']
  	 			];
  console.log(processLyric(true, testLyric));
  */
	}, {}], 7: [function (require, module, exports) {
		/*
  	svg icon path and viewBox information 
  */
		module.exports = {
			viewBox: {
				'previous': '0 0 16 16',
				'play': '0 0 30.598 30.598',
				'pause': '0 0 42 42',
				'next': '0 0 16 16',
				'playmode': '0 0 24.547 24.547',
				'volume': '0 0 72.805 72.805',
				'mute': '0 0 72.786 72.786',
				'high_volume': '0 0 508.514 508.514',
				'share': '0 0 475.082 475.081',
				'heart': '0 0 510 510',
				'playlist': '0 0 298.274 298.274',
				'lovelist': '0 0 33.293 33.293',
				'lyric': '0 0 48.75 48.75',
				'popSong': '0 0 516.45 516.45',
				'garbage': '0 0 408.483 408.483',
				'delete': '0 0 60 60'
			},

			// object for svg 
			svg: {
				'previous': 'M14 15v-14l-10 7z M2 1h2v14h-2v-14z',
				'play': 'M2.806,30.598c-0.151,0-0.303-0.039-0.438-0.118c-0.271-0.155-0.437-0.444-0.437-0.757V0.875c0-0.312,0.167-0.602,0.437-0.757c0.27-0.157,0.605-0.157,0.874,0l24.986,14.425c0.271,0.155,0.439,0.443,0.439,0.757c0,0.312-0.167,0.601-0.439,0.757L3.243,30.48C3.108,30.559,2.958,30.598,2.806,30.598z M3.681,2.389v25.819L26.043,15.3L3.681,2.389z',
				'pause': 'M14.5,0c-0.552,0-1,0.447-1,1v40c0,0.553,0.448,1,1,1s1-0.447,1-1V1C15.5,0.447,15.052,0,14.5,0z M27.5,0c-0.552,0-1,0.447-1,1v40c0,0.553,0.448,1,1,1s1-0.447,1-1V1C28.5,0.447,28.052,0,27.5,0z',
				'next': 'M2 1v14l10-7z M12 1h2v14h-2v-14z',
				'playmode_cycle': 'M5.285,24.082c-0.111,0-0.217-0.041-0.298-0.12l-4.866-4.879c-0.161-0.159-0.161-0.422,0-0.585l4.866-4.885c0.119-0.117,0.298-0.155,0.454-0.089c0.156,0.06,0.256,0.215,0.256,0.384v3.021h13.335c0.369,0,0.67-0.301,0.67-0.668v-3.4c0-0.111,0.043-0.216,0.119-0.295l3.256-3.269c0.118-0.118,0.3-0.156,0.454-0.091c0.157,0.066,0.258,0.22,0.258,0.386v7.391c0,2.64-1.395,4.034-4.033,4.034H5.698v2.652c0,0.167-0.1,0.318-0.256,0.38C5.392,24.07,5.335,24.082,5.285,24.082z M1.171,15.378c-0.055,0-0.108-0.012-0.159-0.033c-0.156-0.063-0.258-0.213-0.258-0.383v-7.39c0-2.641,1.392-4.033,4.033-4.033h14.064V0.88c0-0.165,0.101-0.317,0.256-0.385c0.158-0.061,0.335-0.031,0.455,0.092l4.864,4.875c0.162,0.162,0.162,0.427,0,0.588l-4.864,4.882c-0.119,0.121-0.296,0.158-0.454,0.091c-0.155-0.063-0.256-0.216-0.256-0.386V7.623H5.508c-0.367,0-0.664,0.3-0.664,0.669v3.401c0,0.11-0.043,0.213-0.124,0.296l-3.258,3.265C1.385,15.334,1.281,15.378,1.171,15.378z',
				'volume': 'M39.924,2.332c-1.322-0.7-2.93-0.625-4.178,0.203L14.377,16.629h-2.162C5.479,16.629,0,22.052,0,28.724v15.441C0,50.837,5.479,56.26,12.215,56.26h2.166L35.754,70.28c0.681,0.443,1.463,0.669,2.248,0.669c0.662,0,1.324-0.157,1.926-0.48c1.324-0.699,2.148-2.062,2.148-3.55V5.889C42.076,4.399,41.248,3.039,39.924,2.332z M72.771,35.026c-0.608-11.169-9.541-18.403-9.922-18.713c-1.748-1.392-4.291-1.112-5.705,0.603c-1.414,1.729-1.146,4.265,0.584,5.671c0.066,0.053,6.535,5.386,6.912,12.937c0.248,4.957-2.182,9.996-7.225,14.983c-1.588,1.572-1.588,4.122,0,5.694c0.797,0.788,1.838,1.18,2.881,1.18c1.041,0,2.083-0.392,2.877-1.18C69.943,49.505,73.17,42.383,72.771,35.026z',
				'mute': 'M38.479,4.216c-1.273-0.661-2.819-0.594-4.026,0.188L13.858,17.718h-2.084C5.28,17.718,0,22.84,0,29.135v14.592 c0,6.296,5.28,11.418,11.774,11.418h2.088L34.46,68.39c0.654,0.421,1.41,0.632,2.17,0.632c0.636,0,1.274-0.149,1.854-0.45 c1.274-0.662,2.067-1.948,2.067-3.354V7.572C40.552,6.172,39.759,4.878,38.479,4.216z M67.171,35.108l4.468-4.334 c1.53-1.48,1.53-3.896-0.004-5.377c-1.529-1.489-4.017-1.489-5.552,0l-4.462,4.328l-4.044-3.923 c-1.535-1.489-4.021-1.489-5.552,0c-1.534,1.489-1.534,3.896,0,5.378l4.048,3.926l-3.63,3.521c-1.53,1.489-1.53,3.896,0,5.386 c0.767,0.737,1.771,1.113,2.774,1.113c1.005,0,2.009-0.376,2.775-1.113l3.63-3.521l4.042,3.921 c0.769,0.744,1.771,1.121,2.776,1.121c1.004,0,2.008-0.377,2.774-1.121c1.533-1.481,1.533-3.89,0-5.378L67.171,35.108z',
				'high_volume': 'M271.483,0.109c-5.784-0.54-12.554,0.858-20.531,5.689c0,0-132.533,115.625-138.286,121.314 H39.725c-17.544,0.032-31.782,14.27-31.782,31.814v194.731c0,17.607,14.239,31.782,31.782,31.782h72.941 c5.753,5.753,138.286,117.277,138.286,117.277c7.977,4.799,14.747,6.229,20.531,5.689c11.76-1.112,20.023-10.965,22.534-21.358 c0.127-1.017,0.127-464.533-0.032-465.55C291.506,11.074,283.211,1.222,271.483,0.109z M342.962,309.798c-7.85,3.973-10.997,13.508-7.087,21.358c2.829,5.53,8.422,8.74,14.207,8.74 c2.384,0,4.799-0.572,7.151-1.684c32.132-16.209,52.091-48.341,52.091-83.938s-19.959-67.728-52.091-83.938 c-7.85-3.973-17.385-0.795-21.358,7.056c-3.909,7.85-0.763,17.385,7.087,21.358c21.326,10.743,34.579,32.005,34.579,55.524 S364.288,299.055,342.962,309.798z M339.72,59.32c-8.486-1.716-17.004,3.941-18.593,12.522c-1.716,8.645,3.909,17.004,12.522,18.688 c78.312,15.256,135.139,84.128,135.139,163.743S411.962,402.761,333.65,418.017c-8.613,1.684-14.239,10.011-12.554,18.656 c1.494,7.596,8.136,12.84,15.542,12.84l3.083-0.318c93.218-18.148,160.851-100.147,160.851-194.922S432.938,77.5,339.72,59.32z',
				'share': 'M469.658,133.333L360.029,23.697c-3.621-3.617-7.909-5.424-12.854-5.424c-2.275,0-4.661,0.476-7.132,1.425c-7.426,3.237-11.139,8.852-11.139,16.846v54.821h-45.683c-20.174,0-38.879,1.047-56.101,3.14c-17.224,2.092-32.404,4.993-45.537,8.708c-13.134,3.708-24.983,8.326-35.547,13.846c-10.562,5.518-19.555,11.372-26.98,17.559c-7.426,6.186-13.943,13.23-19.558,21.129c-5.618,7.898-10.088,15.653-13.422,23.267c-3.328,7.616-5.992,15.99-7.992,25.125c-2.002,9.137-3.333,17.701-3.999,25.693c-0.666,7.994-0.999,16.657-0.999,25.979c0,10.663,1.668,22.271,4.998,34.838c3.331,12.559,6.995,23.407,10.992,32.545c3.996,9.13,8.709,18.603,14.134,28.403c5.424,9.802,9.182,16.317,11.276,19.555c2.093,3.23,4.095,6.187,5.997,8.85c1.903,2.474,4.377,3.71,7.421,3.71c0.765,0,1.902-0.186,3.427-0.568c4.377-2.095,6.279-5.325,5.708-9.705c-8.564-63.954-1.52-108.973,21.128-135.047c21.892-24.934,63.575-37.403,125.051-37.403h45.686v54.816c0,8.001,3.71,13.613,11.136,16.851c2.471,0.951,4.853,1.424,7.132,1.424c5.14,0,9.425-1.807,12.854-5.421l109.633-109.637c3.613-3.619,5.424-7.898,5.424-12.847C475.082,141.23,473.271,136.944,469.658,133.333z M395.996,292.356c-3.625-1.529-6.951-0.763-9.993,2.283c-4.948,4.568-10.092,8.093-15.42,10.564c-3.433,1.902-5.141,4.66-5.141,8.277v61.104c0,12.562-4.466,23.308-13.415,32.26c-8.945,8.946-19.704,13.419-32.264,13.419H82.222c-12.564,0-23.318-4.473-32.264-13.419c-8.947-8.952-13.418-19.697-13.418-32.26V137.039c0-12.563,4.471-23.313,13.418-32.259c8.945-8.947,19.699-13.418,32.264-13.418h31.977c1.141,0,2.666-0.383,4.568-1.143c10.66-6.473,23.313-12.185,37.972-17.133c4.949-0.95,7.423-3.994,7.423-9.136c0-2.474-0.903-4.611-2.712-6.423c-1.809-1.804-3.946-2.708-6.423-2.708H82.226c-22.65,0-42.018,8.042-58.102,24.125C8.042,95.026,0,114.394,0,137.044v237.537c0,22.651,8.042,42.018,24.125,58.102c16.084,16.084,35.452,24.126,58.102,24.126h237.541c22.647,0,42.017-8.042,58.101-24.126c16.085-16.084,24.127-35.45,24.127-58.102v-73.946C401.995,296.829,399.996,294.071,395.996,292.356z',
				'heart': 'M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55 C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z',
				'playlist': 'M109.927,33v176.646c-9-8.76-21.559-14.146-35.278-14.146c-28.379,0-51.332,23.007-51.332,51.387  c0,28.381,23.035,51.388,51.414,51.388c28.381,0,51.403-22.928,51.403-51.309c0-0.016-0.165,0.034-0.165,0.034l-0.042-5.386V99  l133-29.456v104.103c-9-8.76-21.559-14.146-35.278-14.146c-28.379,0-51.332,23.007-51.332,51.387  c0,28.381,23.035,51.388,51.414,51.388c28.344,0,51.165-22.946,51.225-51.274l-0.03-3.75V66V0L109.927,33z',
				'lovelist': 'M27.577,33.293H5.716c-1.379,0-2.5-1.121-2.5-2.5V2.5c0-1.379,1.121-2.5,2.5-2.5h15.875c0.276,0,0.5,0.224,0.5,0.5 S21.867,1,21.591,1H5.716c-0.827,0-1.5,0.673-1.5,1.5v28.293c0,0.827,0.673,1.5,1.5,1.5h21.861c0.827,0,1.5-0.673,1.5-1.5V8.703 c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v22.09C30.077,32.172,28.956,33.293,27.577,33.293z M29.577,9.203h-7.986c-0.276,0-0.5-0.224-0.5-0.5V0.717c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v7.486h7.486  c0.276,0,0.5,0.224,0.5,0.5S29.853,9.203,29.577,9.203z  M29.577,9.203c-0.13,0-0.26-0.051-0.358-0.151l-7.986-8.203c-0.192-0.197-0.188-0.515,0.01-0.707  c0.196-0.191,0.513-0.188,0.707,0.01l7.986,8.203c0.192,0.197,0.188,0.515-0.01,0.707C29.829,9.156,29.703,9.203,29.577,9.203z',
				'lyric': 'M43.192,32.834c0.552,0,1-0.447,1-1V1c0-0.553-0.448-1-1-1H5.558c-0.552,0-1,0.447-1,1v46.75c0,0.553,0.448,1,1,1H31.05 c0.265,0,0.52-0.105,0.707-0.293l12.142-12.143c0.286-0.286,0.372-0.716,0.217-1.09c-0.155-0.374-0.52-0.617-0.924-0.617 l-12.143,0.001c-0.552,0-1,0.447-1,1v8.809c0,0.553,0.448,1,1,1c0.552,0,1-0.447,1-1v-7.809l8.729-0.001L30.636,46.75H6.558V2 h35.634v29.834C42.192,32.387,42.64,32.834,43.192,32.834z M11.162,12.938h9.281c0.552,0,1-0.447,1-1c0-0.553-0.448-1-1-1h-9.281c-0.552,0-1,0.447-1,1 C10.162,12.49,10.61,12.938,11.162,12.938z M26.634,12.938c0.552,0,1-0.447,1-1c0-0.553-0.448-1-1-1h-2.836c-0.552,0-1,0.447-1,1c0,0.553,0.448,1,1,1H26.634z M37.589,10.938h-7.793c-0.552,0-1,0.447-1,1c0,0.553,0.448,1,1,1h7.793c0.552,0,1-0.447,1-1 C38.589,11.385,38.141,10.938,37.589,10.938z M11.162,23.438h9.281c0.552,0,1-0.447,1-1c0-0.553-0.448-1-1-1h-9.281c-0.552,0-1,0.447-1,1 C10.162,22.99,10.61,23.438,11.162,23.438z M26.634,21.438h-2.836c-0.552,0-1,0.447-1,1c0,0.553,0.448,1,1,1h2.836c0.552,0,1-0.447,1-1 C27.634,21.885,27.186,21.438,26.634,21.438z M37.589,21.438h-7.793c-0.552,0-1,0.447-1,1c0,0.553,0.448,1,1,1h7.793c0.552,0,1-0.447,1-1 C38.589,21.885,38.141,21.438,37.589,21.438z M37.589,16.188H30.69c-0.552,0-1,0.447-1,1c0,0.553,0.448,1,1,1h6.899c0.552,0,1-0.447,1-1 C38.589,16.635,38.141,16.188,37.589,16.188z M28.528,17.188c0-0.553-0.448-1-1-1h-7.794c-0.552,0-1,0.447-1,1c0,0.553,0.448,1,1,1h7.794 C28.08,18.188,28.528,17.74,28.528,17.188z M11.162,18.188h4.994c0.552,0,1-0.447,1-1c0-0.553-0.448-1-1-1h-4.994c-0.552,0-1,0.447-1,1 C10.162,17.74,10.61,18.188,11.162,18.188z',
				'popsong': 'M123.065,209.722h84.075v189.437c0,7.431,11.822,13.455,26.406,13.455h46.213c14.583,0,26.409-6.024,26.409-13.455  V209.722h84.071c8.433,0,15.269-5.339,15.269-11.927c0,0-125.952-184.874-137.404-193.819c-11.449-8.947-22.899,0-22.899,0  L107.799,197.795C107.799,204.383,114.635,209.722,123.065,209.722z  M408.651,497.322c0,10.565-7.475,19.128-16.7,19.128H124.726c-9.221,0-16.7-8.563-16.7-19.128v-19.128  c0-10.565,7.479-19.128,16.7-19.128h267.223c9.225,0,16.7,8.563,16.7,19.128v19.128L408.651,497.322L408.651,497.322z',
				'garbage': 'M87.748,388.784c0.461,11.01,9.521,19.699,20.539,19.699h191.911c11.018,0,20.078-8.689,20.539-19.699l13.705-289.316  H74.043L87.748,388.784z  M247.655,171.329c0-4.61,3.738-8.349,8.35-8.349h13.355c4.609,0,8.35,3.738,8.35,8.349v165.293  c0,4.611-3.738,8.349-8.35,8.349h-13.355c-4.61,0-8.35-3.736-8.35-8.349V171.329z M189.216,171.329  c0-4.61,3.738-8.349,8.349-8.349h13.355c4.609,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.737,8.349-8.349,8.349h-13.355  c-4.61,0-8.349-3.736-8.349-8.349V171.329L189.216,171.329z  M130.775,171.329c0-4.61,3.738-8.349,8.349-8.349h13.356  c4.61,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.738,8.349-8.349,8.349h-13.356c-4.61,0-8.349-3.736-8.349-8.349V171.329z  M343.567,21.043h-88.535V4.305c0-2.377-1.927-4.305-4.305-4.305h-92.971c-2.377,0-4.304,1.928-4.304,4.305v16.737H64.916  c-7.125,0-12.9,5.776-12.9,12.901V74.47h304.451V33.944C356.467,26.819,350.692,21.043,343.567,21.043z',
				'delete': 'M0,0v60h60V0H0z M46.414,43.284l-2.828,2.828L30.151,32.677L16.716,46.112l-2.828-2.828l13.435-13.435L13.888,16.414  l2.828-2.828l13.435,13.435l13.435-13.435l2.828,2.828L32.979,29.849L46.414,43.284z'

			}
		};
	}, {}] }, {}, [3]);