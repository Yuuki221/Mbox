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
		module.exports = "<div class=\"magic-box\">\n\t\t\t\t\t<div class=\"magic-box-upper-wrap\">\n\t\t\t\t\t\t<div class=\"mbox-music-wrap\">\n\t\t\t\t\t\t\t<audio class=\"mbox-music\" src=\"development/music/You Need Me-KENN.mp3\"></audio>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- audio file links are here --> \n\t\t\t\t\t\t<div class=\"mbox-album-cover-wrap\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"mbox-controller-wrap-wrap\">\n\t\t\t\t\t\t\t<div class=\"mbox-controller-wrap\">\n\t\t\t\t\t\t\t\t<div class=\"mbox-songinfo\">\n\t\t\t\t\t\t\t\t<span class=\"mbox-song-info\" style=\"color: #dff3e3;\">Unknown</span><br>\n\t\t\t\t\t\t\t\t<span class=\"mbox-album-name\" style=\"color: #dff3e3;\">Unknown</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mbox-controlBtn-wrap-wrap\">\n\t\t\t\t\t\t\t\t<div class=\"mbox-previous-song-wrap\">\n\t\t\t\t\t\t\t\t\t<button class=\"mbox-previous-song-icon icon\">\n\t\t\t\t\t\t\t\t\t\t<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"16\" height=\"16\" viewBox=\"" + viewBox['previous'] + "\">\n\t\t\t\t\t\t\t\t\t\t\t<path d=\"" + svg['previous'] + "\" />\n\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mbox-play-icon-wrap\">\n\t\t\t\t\t\t\t\t\t<button class=\"mbox-play-icon icon\">\n\t\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"16\" height=\"16\" viewBox=\"" + viewBox['play'] + "\">\n\t\t\t\t\t\t\t\t\t\t\t<path d=\"" + svg['play'] + "\"/>\n\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mbox-next-song-icon-wrap\">\n\t\t\t\t\t\t\t\t\t<button class=\"mbox-next-song-icon icon\">\n\t\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"16\" height=\"16\" viewBox=\"" + viewBox['next'] + "\">\n\t\t\t\t\t\t\t\t\t\t\t<path d=\"" + svg['next'] + "\" />\n\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mbox-play-mode-icon-wrap\">\n\t\t\t\t\t\t\t\t\t<button class=\"mbox-play-mode-icon icon\">\n\t\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"16\" height=\"16\" viewBox=\"" + viewBox['playmode'] + "\">\n\t\t\t\t\t\t\t\t\t\t\t<path d=\"" + svg['playmode_cycle'] + "\" />\n\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mbox-volume-icon-wrap\">\n\t\t\t\t\t\t\t\t\t<button class=\"mbox-volume-icon icon\">\n\t\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"16\" height=\"16\" viewBox=\"" + viewBox['volume'] + "\">\n\t\t\t\t\t\t\t\t\t\t\t<path d=\"" + svg['volume'] + "\" />\n\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mbox-volume-bar-wrap\">\n\t\t\t\t\t\t\t\t\t<div class=\"mbox-volume-bar\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"mbox-volume-bar-inner\" style=\"width: 0; background: #dff3e3;\"></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mbox-share-icon-wrap\">\n\t\t\t\t\t\t\t\t\t<button class=\"mbox-share-icon icon\">\n\t\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999\" width=\"16\" height=\"16\" viewBox=\"" + viewBox['share'] + "\">\n\t\t\t\t\t\t\t\t\t\t\t<path d=\"" + svg['share'] + "\" />\n\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mbox-play-info-wrap\">\n\t\t\t\t\t\t<div class=\"mbox-play-progress-wrap\">\n\t\t\t\t\t\t\t<span class=\"mbox-play-progress-inner\" style=\"width: 0; background: #dff3e3;\"></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"mbox-play-time\">\n\t\t\t\t\t\t\t<span class=\"mbox-played-time\">\n\t\t\t\t\t\t\t<span class=\"mbox-time-played\">00:00</span>/<span class=\"mbox-time-total\">00:00</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mbox-multidisplay-area-wrap\">\n\t\t\t\t\t\t<div class=\"mbox-multidisplay-area\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mbox-options-wrap\">\n\t\t\t\t\t\t<div class=\"mbox-setting-item mbox-setting-wrap\">\n\t\t\t\t\t\t\t<div class=\"mbox-setting-icon\" style=\"background: #dff3e3;\">\n\t\t\t\t\t\t\t<input id=\"trigger\" class=\"mbox-setting-trigger\" type=\"checkbox\" />\n\t\t\t\t\t\t\t\t<label for=\"trigger\" class=\"mbox-setting-bars\">\n\t\t\t\t\t\t\t\t\t<div class=\"toggle-bar setting-first-bar\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"toggle-bar setting-second-bar\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"toggle-bar setting-third-bar\"></div>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"mbox-setting-item mbox-playlist-wrap\">\n\t\t\t\t\t\t\t<button class=\"mbox-setting-icon\">\n\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999\" width=\"16\" height=\"16\" viewBox=\"" + viewBox['playlist'] + "\">\n\t\t\t\t\t\t\t\t\t<path d=\"" + svg['playlist'] + "\" />\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"mbox-setting-item mbox-lovelist-wrap\">\n\t\t\t\t\t\t\t<button class=\"mbox-setting-icon\">\n\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999\" width=\"16\" height=\"16\" viewBox=\"" + viewBox['lovelist'] + "\">\n\t\t\t\t\t\t\t\t\t<path d=\"" + svg['lovelist'] + "\" />\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"mbox-setting-item mbox-lyric-show-wrap\">\n\t\t\t\t\t\t\t<button class=\"mbox-setting-icon\">\n\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999\" width=\"16\" height=\"16\" viewBox=\"" + viewBox['lyric'] + "\">\n\t\t\t\t\t\t\t\t\t<path d=\"" + svg['lyric'] + "\" />\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>";
	}, { "./svginfo.js": 6 }], 2: [function (require, module, exports) {
		var transformTime = require('./getplaytime.js');
		var iconInfo = require('./svginfo.js');
		var uiHtml = require('./buildui.js');
		var getPosition = require('./getpositions.js');
		var processLyric = require('./lyricprocessor.js');

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
				this.musicPool = {
					_0: {
						second_id: 0, // the id used when actual play, default is the same as original id 
						removed: false, // field marked removed song 
						deleted: false, // field marked for deleted song 
						url: 'development/music/You Need Me-KENN.mp3',
						song_name: 'You Need Me',
						singer: 'KENN',
						album: 'You Need Me',
						album_cover: 'development/music/YouNeedMeCover.jpg',
						lyric_with_time: false,
						lyric: ['You Need Me - KENN', '', '君は　覚えているかい', 'はじめて 出会えた時', '(Baby I need you)', '何故か　ふいに横切る', 'おそれや　不安を確かめる', '', '上手く言葉じゃ君に', '伝えられないけれと', "(I'm missing you)", '誤解しないで　悲しまないで', '勇気出して　歩き出すよ', 'So Feeling my heart', '', '君の名前を（呼んでいるよ)', '僕のメロディー　この歌に乗せて', '大好きだから（心つなぐ）', 'この道をゆこう　永久に', '例えどんなに　苦しい時も', 'もう　離れないから', 'これからもずっと', '', '愛に 終わりはあるか', 'はじめて 考えたよ', "(So Don't you fake me?)", 'そうさ 失うことが', '怖くて 不安を抱きしめる', '', '君に　触れた瞬間（聞こえる)', '鼓動　揺らめいた瞳が', "(Don't be afraid)", '僕を見つめて　変わらぬまま', '2人で　愛を誓い合おう', 'So just stay with me', '', '君への愛を（叫んでるよ）', '僕のメロディー　この声に乗せて', '大好きだから（溢れるほど）', 'この道を行こう　永久に', '例えどんなに　苦しい時も', 'もう　迷わないから', 'これからもずっと', '', 'I miss you　消えないで', '(Oh my sweet baby)', '僕が守るから', '', 'そばにいるよ···', '', '君の名前を（呼んでいるよ）', '僕のメロディー　この歌に乗せて', '大好きだから（心つなぐ）', 'この道をゆこう　永久に', '', '例えどんなに　苦しい時も', 'もう　離さないから', 'もう　迷わないから', 'これからもずっと', '', "I don't wanna leave you"]
					},

					_1: {
						second_id: 1, // the id used when actual play, default is the same as original id 
						removed: false, // field marked removed song 
						deleted: false, // field marked for deleted song 
						url: 'development/music/Anchor-Novo Amor.mp3',
						song_name: 'Anchor',
						singer: 'Novo Amor',
						album: 'Achor',
						album_cover: 'development/music/AnchorCover.jpg',
						lyric_with_time: false,
						lyric: ['Anchor - Novo Amor', '', 'Took the breath from my open mouth', 'Never known how it broke me down', 'I went in circles somewhere else', '', 'Shook the best when your love was home', 'Storing up on your summer glow', 'You went in search of someone else', '', "And I hear your ship is comin' in", 'Your tears a sea for me to swim', "And I hear a storm is comin' in", 'My dear is it all we’ve ever been?', '', 'Caught the air in your woven mouth', 'Leave it all i’ll be hearing how you went', 'In search of someone else', '', 'They taught the hand that taut the bride', 'Both our eyes locked to the tide', 'We went in circles somewhere else', '', "And I hear your ship is comin' in", 'Your tears a sea for me to swim', "And I hear a storm is comin' in", 'My dear is it all we’ve ever been?', '', 'Anchor up to me, love', 'Anchor up to me, love', 'Anchor up to me, love', 'Oh, Anchor up to me', 'My love, my love, my love']
					},

					_2: {
						second_id: 2, // the id used when actual play, default is the same as original id 
						removed: false, // field marked removed song 
						deleted: false, // field marked for deleted song 
						url: 'development/music/M01-梶浦由記.mp3',
						song_name: 'M01',
						singer: '梶浦由記',
						album: '劇場版 空の境界 Vol.2「殺人考察(前)」Original Soundtrack',
						album_cover: 'development/music/M01Cover.jpg',
						lyric_with_time: false,
						lyric: undefined
					},

					_3: {
						second_id: 3, // the id used when actual play, default is the same as original id 
						removed: false, // field marked removed song 
						deleted: false, // field marked for deleted song 
						url: 'development/music/Signal-TK from 凛として時雨.mp3',
						song_name: 'Signal',
						singer: 'TK from 凛として時雨',
						album: 'Signal',
						album_cover: 'development/music/SingnalCover.jpg',
						lyric_with_time: false,
						lyric: undefined
					},

					_4: {
						second_id: 4, // the id used when actual play, default is the same as original id 
						removed: false, // field marked removed song 
						deleted: false, // field marked for deleted song 
						url: 'development/music/WAVE-kradness.mp3',
						song_name: 'WAVE',
						singer: 'kradness',
						album: 'KRAD VORTEX',
						album_cover: 'development/music/KRADVORTEXCover.jpg',
						lyric_with_time: false,
						lyric: ['WAVE - kradness', '', '間違（まちが）えて宇宙（うちゅう）終（お）わって', '青信号（あおしんごう）はいつも通（とお）り', '飛（と）んでまた止（とま）まって', 'また　飛（と）びそうだ', 'ココロコネクト', '古代人（こだいじん）と恋（こい）した', '妄想（もうそう）コレクト', '化石的（かせきてき）なロマンス', 'はぁ…夢（ゆめ）に踊（おど）るの', '', '月（つき）の灯（あか）りが', '僕（ぼく）を包（つつ）んで', '鳴（な）り響（ひび）く音（おと）カラダを', '飲（の）み込（こ）んでいく', 'もう恐（おそ）れることを', '感（かん）じないくらいの', '眩（まぶ）しさに', '今（いま）ココロを', '狙（ねら）われているの', '回（まわ）る　回（まわ）る　世界（せかい）は', '///W/A//VE//', '', '考（かんが）えてみて止（と）まって', '赤信号（あかしんごう）は狙（ねら）い通（とお）り', '逃（に）げたくて滑（すべ）って', 'また　逃（に）げそうだ', '開（ひら）けネクスト', '宇宙人（うちゅうじん）とＳｋｙｐｅ', '妄想（もうそう）セレクト', '電波的（でんぱてき）なロマンス', 'はぁ…夜（よる）に眠（ねむ）るの', '', '月（つき）の灯（あか）りが', '僕（ぼく）を包（つつ）んで', '鳴（な）り響（ひび）く音（おと）カラダを', 'また惑（まど）わせる', 'もう暴（あば）れることを', '忘（わす）れちゃうくらいの', '眩（まぶ）しさに', '今（いま）ココロを', '狙（ねら）われているの', '迫（せま）る　迫（せま）る　未来（みらい）は', '///W/A//VE//', '', 'はぁーん…', '夢（ゆめ）に踊（おど）るのー', '明日（あした）の声（こえ）が', '僕（ぼく）を誘（さそ）って', '鳴（な）り響（ひび）く音（おと）ミライを', '塗（ぬ）り替（か）えていく', 'もう留（とど）まることを', '許（ゆる）さないくらいの', '', '眩（まぶ）しさに', '今（いま）ココロを', '狙（ねら）われているの', '回（まわ）る　回（まわ）る　世界（せかい）から', '見（み）える　見（み）える', '未来（みらい）', '', 'らららーららーららー', 'らららーららーららー', 'らららーららーららー', 'らららーららーららー']
					},

					_5: {
						second_id: 5, // the id used when actual play, default is the same as original id 
						removed: false, // field marked removed song 
						deleted: false, // field marked for deleted song 
						url: 'development/music/夢見る三日月-近藤隆.mp3',
						song_name: '夢見る3日月',
						singer: '近藤隆',
						album: '夕燒けデイズ',
						album_cover: 'development/music/JohnCover.jpg',
						lyric_with_time: false,
						lyric: ['夢見る三日月 - 近藤隆', '', 'ちょっと前をゆく人の', '背中追って 浮かんでた', '階段の踊り場で', '見失った 道しるべ', '', 'なんでかな この場所を', '知った風で 忘れてた', '奥にあった 細道で', '立ち止まって 見上げたら', '', '煙を散らして', '星を渡った', '', 'ひとりきりの夢の中', '君がそばにいるだけで', '声にならない想い 焦がして', 'こんなに 胸が苦しくて', 'だけど 僕は戻れない', 'そうやって今を漂っているんだ', '', '寝息 立てる街を', '風になって すり抜ける', '勘の冴えた 野良猫が', '僕の目を見て 鳴いた', '', '誰かと話が', 'できたら良いのに', '', 'ひかり灯す 悪戯で', '君に何か 伝えたくて', '猫の手も借りてみようか なんて', 'どうにもならない 哀しみも', 'いつか 前を向けるなら', 'そうやって未来は変わっていくんだ', '', '振り返る街並みは 走馬灯のように', 'やり残した願いも すべて抱きしめて', 'La La La...少しのお別れだね', 'La La La...だから 怖がらないで', 'それじゃあ お先に', '僕は眠っているよ', '', 'ひとりきりの夢の中', '君の姿 見つけたら', '精一杯の笑顔で 手を握って', 'ひかりが宿る 三日月の', '迎えを待つ その場所で', 'いつか 僕らにも訪れるさ', 'そうやって 命は続いていくんだ']
					}
				};

				// generate music playlist 
				this.normalOrderedPlaylist = [0, 1, 2, 3, 4, 5];
				this.shufflePlaylist = [];
				this.currentPlaylist = [0, 1, 2, 3, 4, 5];
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
								var ct = _this.curIdx;
								for (ct = _this.curIdx + 1; ct < _this.currentPlaylist.length; ct++) {
									var curKey = '_' + _this.currentPlaylist[ct];
									if (!_this.musicPool[curKey].removed && !_this.musicPool[curKey].deleted) {
										// if the song is not removed or deleted by user, we find the next song to play 
										_this.musicFile.src = _this.musicPool[curKey].url;
										_this.usrOption['music'] = _this.musicPool[curKey];
										_this.loadSongInfo();
										// this.processedLyric = processLyric(this.usrOption['music']['lyric_with_time'], this.usrOption['music']['lyric']);
										// update current playing index 
										_this.curIdx++;
										_this.play();
										break;
									}
								}
								// if there is no more song to play, stop the player 
								if (ct === _this.currentPlaylist.length) {
									_this.clearTime();
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

					if (this.usrOption['music']['lyric'] === undefined) {
						this.usrOption['music']['lyric'] = this.noLyric;
					}

					this.processedLyric = processLyric(this.usrOption['music']['lyric_with_time'], this.usrOption['music']['lyric']);
					if (!this.usrOption['multi']) {
						this.displayArea.innerHTML = this.processedLyric;
					} else {}
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
					var newSecondId = Object.keys(this.musicPool).length;
					var newId = '_' + newSecondId;
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
	}, { "./buildui.js": 1, "./getplaytime.js": 3, "./getpositions.js": 4, "./lyricprocessor.js": 5, "./svginfo.js": 6 }], 3: [function (require, module, exports) {
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
  	@param {Boolean} time: showing this lyric is with time or not 
  	@param {Array} lyric: array contains the lyric file
  */

		var processLyric = function processLyric(time, lyrics) {
			var processedLyrics = '';
			if (!time) {
				// process with lyrics without time information 
				// if the entry is empty then replace with a new line symbol
				for (var i = 0; i < lyrics.length; i++) {
					if (!lyrics[i]) {
						lyrics[i] = '<br><br>';
					} else {
						lyrics[i] += '<br>';
					}
				}
				processedLyrics = lyrics.join('');
				console.log('processed?');
			}
			return processedLyrics;
		};

		module.exports = processLyric;

		/**
  var lyrics = [
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
  	 			];
  	 console.log(processLyric(false, lyrics));
  	 */
	}, {}], 6: [function (require, module, exports) {
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
				'playlist': '0 0 44 44',
				'lovelist': '0 0 43.995 43.995',
				'lyric': '0 0 48.75 48.75'
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
				'playlist': 'M42.901,13.97C43.414,12.756,44,11.315,44,10   c0-7.369-1.599-9.938-15.986-9.997C28.009,0.003,28.005,0,28,0s-0.009,0.003-0.013,0.003L27,0.016v33.789  C25.729,32.692,23.96,32,22,32c-3.866,0-7,2.687-7,6s3.134,6,7,6s7-2.687,7-6V9h2v0.01c5.565,0.1,10,1.846,10,3.99  c0,0.346-0.096,0.617-0.094,1h0c0,0.553,0.448,1,1,1c0.552,0,0.875-0.635,1-1c0.003-0.01-0.006-0.019-0.006-0.03H42.901z   M22,42   c-2.761,0-5-1.791-5-4s2.239-4,5-4c2.761,0,5,1.791,5,4S24.761,42,22,42z  M41.971,10.625c-1.852-2.055-6.027-3.512-10.94-3.611V7  H29V1.979C40.638,1.899,42,4.077,42,10C42,10.191,41.988,10.404,41.971,10.625z  m1,2h23c0.552,0 1-0.447 1-1s-0.448-1-1-1h-23c-0.552,0-1,0.447-1,1s0.448,1 1,1zm23,18h-23c-0.552,0-1,0.447-1,1s0.448,1 1,1h23c0.552,0 1-0.447  1-1s-0.448-1-1-1zm0-10h-23c-0.552,0-1,0.447-1,1s0.448,1 1,1h23c0.552,0 1-0.447  1-1s-0.448-1-1-1zm-10,20h-13c-0.552,0-1,0.447-1,1s0.448,1 1,1h13c0.552,0 1-0.447 1-1s-0.448-1-1-1z',
				'lovelist': 'm42.07,24.111c-2.566-2.557-6.369-2.913-8.936-0.356l-2.145,2.137-2.144-2.137c-2.566-2.557-6.369-2.2-8.935,0.356-2.566,2.557-2.566,6.701 0,9.258l.357,.356 10.008,9.97c0.395,0.394 1.035,0.394 1.43,0l10.365-10.326c2.567-2.557 2.567-6.701 0-9.258zm-1.429,7.834l-1.072,1.067-8.578,8.547-9.65-9.614c-1.776-1.771-1.776-4.64 0-6.41 1.654-1.647 4.202-2.223 6.076-0.355l3.574,3.561 3.574-3.561c1.964-1.956 4.422-1.292 6.076,0.355 1.776,1.771 1.776,4.64 7.10543e-15,6.41z m1,2.005h28c0.552,0 1-0.447 1-1s-0.448-1-1-1h-28c-0.552,0-1,0.447-1,1s0.448,1 1,1zm17,18h-17c-0.552,0-1,0.447-1,1s0.448,1 1,1h17c0.552,0 1-0.447 1-1s-0.448-1-1-1zm11-10h-28c-0.552,0-1,0.447-1,1s0.448,1 1,1h28c0.552,0 1-0.447 1-1s-0.448-1-1-1zm-14,20h-14c-0.552-3.55271e-15-1,0.447-1,1s0.448,1 1,1h14c0.552,0 1-0.447 1-1s-0.448-1-1-1z',
				'lyric': 'M43.192,32.834c0.552,0,1-0.447,1-1V1c0-0.553-0.448-1-1-1H5.558c-0.552,0-1,0.447-1,1v46.75c0,0.553,0.448,1,1,1H31.05 c0.265,0,0.52-0.105,0.707-0.293l12.142-12.143c0.286-0.286,0.372-0.716,0.217-1.09c-0.155-0.374-0.52-0.617-0.924-0.617 l-12.143,0.001c-0.552,0-1,0.447-1,1v8.809c0,0.553,0.448,1,1,1c0.552,0,1-0.447,1-1v-7.809l8.729-0.001L30.636,46.75H6.558V2 h35.634v29.834C42.192,32.387,42.64,32.834,43.192,32.834z M11.162,12.938h9.281c0.552,0,1-0.447,1-1c0-0.553-0.448-1-1-1h-9.281c-0.552,0-1,0.447-1,1 C10.162,12.49,10.61,12.938,11.162,12.938z M26.634,12.938c0.552,0,1-0.447,1-1c0-0.553-0.448-1-1-1h-2.836c-0.552,0-1,0.447-1,1c0,0.553,0.448,1,1,1H26.634z M37.589,10.938h-7.793c-0.552,0-1,0.447-1,1c0,0.553,0.448,1,1,1h7.793c0.552,0,1-0.447,1-1 C38.589,11.385,38.141,10.938,37.589,10.938z M11.162,23.438h9.281c0.552,0,1-0.447,1-1c0-0.553-0.448-1-1-1h-9.281c-0.552,0-1,0.447-1,1 C10.162,22.99,10.61,23.438,11.162,23.438z M26.634,21.438h-2.836c-0.552,0-1,0.447-1,1c0,0.553,0.448,1,1,1h2.836c0.552,0,1-0.447,1-1 C27.634,21.885,27.186,21.438,26.634,21.438z M37.589,21.438h-7.793c-0.552,0-1,0.447-1,1c0,0.553,0.448,1,1,1h7.793c0.552,0,1-0.447,1-1 C38.589,21.885,38.141,21.438,37.589,21.438z M37.589,16.188H30.69c-0.552,0-1,0.447-1,1c0,0.553,0.448,1,1,1h6.899c0.552,0,1-0.447,1-1 C38.589,16.635,38.141,16.188,37.589,16.188z M28.528,17.188c0-0.553-0.448-1-1-1h-7.794c-0.552,0-1,0.447-1,1c0,0.553,0.448,1,1,1h7.794 C28.08,18.188,28.528,17.74,28.528,17.188z M11.162,18.188h4.994c0.552,0,1-0.447,1-1c0-0.553-0.448-1-1-1h-4.994c-0.552,0-1,0.447-1,1 C10.162,17.74,10.61,18.188,11.162,18.188z'

			}
		};
	}, {}] }, {}, [2]);