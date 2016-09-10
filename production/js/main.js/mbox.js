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
  	method for load html content for the player
  */

		var iconInfo = require('./svginfo.js');
		var svg = iconInfo['svg'];
		var viewBox = iconInfo['viewBox'];

		// object for svg viewbox
		module.exports = "<div class=\"magic-box\">\n\t\t\t\t\t<div class=\"magic-box-upper-wrap\">\n\t\t\t\t\t\t<div class=\"mbox-music-wrap\">\n\t\t\t\t\t\t\t<audio class=\"mbox-music\" src=\"development/music/You Need Me-KENN.mp3\"></audio>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- audio file links are here --> \n\t\t\t\t\t\t<div class=\"mbox-album-cover-wrap\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"mbox-controller-wrap-wrap\">\n\t\t\t\t\t\t\t<div class=\"mbox-controller-wrap\">\n\t\t\t\t\t\t\t\t<div class=\"mbox-songinfo\">\n\t\t\t\t\t\t\t\t<span class=\"mbox-song-info\" style=\"color: #dff3e3;\">Unknown</span><br>\n\t\t\t\t\t\t\t\t<span class=\"mbox-album-name\" style=\"color: #dff3e3;\">Unknown</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mbox-controlBtn-wrap-wrap\">\n\t\t\t\t\t\t\t\t<div class=\"mbox-previous-song-wrap\">\n\t\t\t\t\t\t\t\t\t<button class=\"mbox-previous-song-icon icon\">\n\t\t\t\t\t\t\t\t\t\t<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"16\" height=\"16\" viewBox=\"" + viewBox['previous'] + "\">\n\t\t\t\t\t\t\t\t\t\t\t<path d=\"" + svg['previous'] + "\" />\n\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mbox-play-icon-wrap\">\n\t\t\t\t\t\t\t\t\t<button class=\"mbox-play-icon icon\">\n\t\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"16\" height=\"16\" viewBox=\"" + viewBox['play'] + "\">\n\t\t\t\t\t\t\t\t\t\t\t<path d=\"" + svg['play'] + "\"/>\n\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mbox-next-song-icon-wrap\">\n\t\t\t\t\t\t\t\t\t<button class=\"mbox-next-song-icon icon\">\n\t\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"16\" height=\"16\" viewBox=\"" + viewBox['next'] + "\">\n\t\t\t\t\t\t\t\t\t\t\t<path d=\"" + svg['next'] + "\" />\n\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mbox-play-mode-icon-wrap\">\n\t\t\t\t\t\t\t\t\t<button class=\"mbox-play-mode-icon icon\">\n\t\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"16\" height=\"16\" viewBox=\"" + viewBox['playmode'] + "\">\n\t\t\t\t\t\t\t\t\t\t\t<path d=\"" + svg['playmode_cycle'] + "\" />\n\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mbox-volume-icon-wrap\">\n\t\t\t\t\t\t\t\t\t<button class=\"mbox-volume-icon icon\">\n\t\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"16\" height=\"16\" viewBox=\"" + viewBox['volume'] + "\">\n\t\t\t\t\t\t\t\t\t\t\t<path d=\"" + svg['volume'] + "\" />\n\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mbox-volume-bar-wrap\">\n\t\t\t\t\t\t\t\t\t<div class=\"mbox-volume-bar\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"mbox-volume-bar-inner\" style=\"width: 0; background: #dff3e3;\"></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mbox-share-icon-wrap\">\n\t\t\t\t\t\t\t\t\t<button class=\"mbox-share-icon icon\">\n\t\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999\" width=\"16\" height=\"16\" viewBox=\"" + viewBox['share'] + "\">\n\t\t\t\t\t\t\t\t\t\t\t<path d=\"" + svg['share'] + "\" />\n\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mbox-play-info-wrap\">\n\t\t\t\t\t\t<div class=\"mbox-play-progress-wrap\">\n\t\t\t\t\t\t\t\t<span class=\"mbox-play-progress-inner\" style=\"width: 0; background: #dff3e3;\"></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"mbox-play-time\">\n\t\t\t\t\t\t\t<span class=\"mbox-played-time\">\n\t\t\t\t\t\t\t<span class=\"mbox-time-played\">00:00</span>/<span class=\"mbox-time-total\">00:00</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>";
	}, { "./svginfo.js": 5 }], 2: [function (require, module, exports) {
		var transformTime = require('./getplaytime.js');
		var iconInfo = require('./svginfo.js');
		var uiHtml = require('./buildui.js');
		var getPosition = require('./getpositions.js');

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

				/**
    	> options: 
    	1. element to load the Player
    	2. foreground color
    	3. background color 
    	// if the option is empty, then we could use defaultSetting 
    */
				var defaultSetting = {
					element: document.getElementsByClassName('plyr-container')[0],
					foreground_color: '#828a95',
					background_color: '#4a525a',
					music: {
						'url': 'development/music/You Need Me-KENN.mp3',
						'song_name': 'You Need Me',
						'singer': 'KENN',
						'album': 'You Need Me',
						'album_cover': 'development/music/YouNeedMeCover.jpg'
					}
				};

				// set the global options 
				this.usrOption = option || defaultSetting;

				// load the interface 
				this.usrOption['element'].innerHTML = uiHtml;

				// music piece realted properties
				this.musicFile = document.getElementsByClassName('mbox-music')[0];

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
							_this.playedTime.innerHTML = '' + transformTime(musicCurrentTime);
							_this.totalTime.innerHTML = '' + transformTime(musicTotalTime);
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
								_this.clearTime();
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
					    percentage = (clickX - barX) / _this.progressBarLen;
					_this.musicFile.currentTime = (percentage > 1 ? 1 : percentage < 0 ? 0 : percentage) * _this.musicFile.duration;
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
			}
			/*
   	method for initialize the music player 
   */


			_createClass(MBox, [{
				key: "init",
				value: function init() {
					this.loadSongInfo();
				}

				/*
    	method for loading the UI components for player 
    */

			}, {
				key: "loadSongInfo",
				value: function loadSongInfo() {
					// load the album cover 
					this.coverArea.innerHTML = "<img src=\"" + this.usrOption['music']['album_cover'] + "\" width=\"70px\" height=\"70px\">";
					this.songInfo.innerText = '' + this.usrOption['music']['song_name'] + ' - ' + this.usrOption['music']['singer'];
					this.albumName.innerText = '' + this.usrOption['music']['album'];
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
	}, { "./buildui.js": 1, "./getplaytime.js": 3, "./getpositions.js": 4, "./svginfo.js": 5 }], 3: [function (require, module, exports) {
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
	}, {}], 4: [function (require, module, exports) {
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
	}, {}], 5: [function (require, module, exports) {
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
				'share': '0 0 475.082 475.081'
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
				'share': 'M469.658,133.333L360.029,23.697c-3.621-3.617-7.909-5.424-12.854-5.424c-2.275,0-4.661,0.476-7.132,1.425c-7.426,3.237-11.139,8.852-11.139,16.846v54.821h-45.683c-20.174,0-38.879,1.047-56.101,3.14c-17.224,2.092-32.404,4.993-45.537,8.708c-13.134,3.708-24.983,8.326-35.547,13.846c-10.562,5.518-19.555,11.372-26.98,17.559c-7.426,6.186-13.943,13.23-19.558,21.129c-5.618,7.898-10.088,15.653-13.422,23.267c-3.328,7.616-5.992,15.99-7.992,25.125c-2.002,9.137-3.333,17.701-3.999,25.693c-0.666,7.994-0.999,16.657-0.999,25.979c0,10.663,1.668,22.271,4.998,34.838c3.331,12.559,6.995,23.407,10.992,32.545c3.996,9.13,8.709,18.603,14.134,28.403c5.424,9.802,9.182,16.317,11.276,19.555c2.093,3.23,4.095,6.187,5.997,8.85c1.903,2.474,4.377,3.71,7.421,3.71c0.765,0,1.902-0.186,3.427-0.568c4.377-2.095,6.279-5.325,5.708-9.705c-8.564-63.954-1.52-108.973,21.128-135.047c21.892-24.934,63.575-37.403,125.051-37.403h45.686v54.816c0,8.001,3.71,13.613,11.136,16.851c2.471,0.951,4.853,1.424,7.132,1.424c5.14,0,9.425-1.807,12.854-5.421l109.633-109.637c3.613-3.619,5.424-7.898,5.424-12.847C475.082,141.23,473.271,136.944,469.658,133.333z M395.996,292.356c-3.625-1.529-6.951-0.763-9.993,2.283c-4.948,4.568-10.092,8.093-15.42,10.564c-3.433,1.902-5.141,4.66-5.141,8.277v61.104c0,12.562-4.466,23.308-13.415,32.26c-8.945,8.946-19.704,13.419-32.264,13.419H82.222c-12.564,0-23.318-4.473-32.264-13.419c-8.947-8.952-13.418-19.697-13.418-32.26V137.039c0-12.563,4.471-23.313,13.418-32.259c8.945-8.947,19.699-13.418,32.264-13.418h31.977c1.141,0,2.666-0.383,4.568-1.143c10.66-6.473,23.313-12.185,37.972-17.133c4.949-0.95,7.423-3.994,7.423-9.136c0-2.474-0.903-4.611-2.712-6.423c-1.809-1.804-3.946-2.708-6.423-2.708H82.226c-22.65,0-42.018,8.042-58.102,24.125C8.042,95.026,0,114.394,0,137.044v237.537c0,22.651,8.042,42.018,24.125,58.102c16.084,16.084,35.452,24.126,58.102,24.126h237.541c22.647,0,42.017-8.042,58.101-24.126c16.085-16.084,24.127-35.45,24.127-58.102v-73.946C401.995,296.829,399.996,294.071,395.996,292.356z'
			}
		};
	}, {}] }, {}, [2]);