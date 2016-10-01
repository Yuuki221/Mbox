# Mbox
> A HTML5, CSS3, ES6 and MongoDB Music Player API, build with Gulp

<p align="center">
  <img align="center" src="https://github.com/Yuuki221/Mbox/blob/master/RMpic/withLyric.png" alt="player with lyric" width="60%" height="60%" />
</p>

<p align="center">
  <img align="center" src="https://github.com/Yuuki221/Mbox/blob/master/RMpic/playlist.png" alt="player with lyric" width="60%" height="60%" />
</p>

<p align="center">
  <img align="center" src="https://github.com/Yuuki221/Mbox/blob/master/RMpic/heartlist.png" alt="player with lyric" width="60%" height="60%" />
</p>

---
## Use

``` javascript
    var player = new MBox();
    player.init();
```

## API details

``` javascript 

    // initialize
    init();
    
    /*
      method for loading the UI components for a song 
      @param {Object} song
      @param {Boolean} lyricOn
    */
    loadSongInfo(song, lyricOn);
    
    /*
		  method for add a new song to the database 
		  @param {Object} object contains new song's information, has the same foramt as the initial input  
		  @return {boolean} notify if the song is added succefully or not 
	  */
    
    addSong(newSong);
    
    // the song object should looks like 
    var newSong = {
	 			url : 'development/music/WAVE-kradness.mp3',
	 			song_name : 'WAVE',
	 			singer : 'kradness',
	 			album : 'KRAD VORTEX',
	 			album_cover : 'development/music/KRADVORTEXCover.jpg',
        // you can choose if the lyric is static or dynamic
	 			lyric_with_time : true,
        // this is for dynamic lyric, for static lyric, you remove the time item in each array element 
	 			lyric : [['00:00', 'WAVE - kradness'],'',['00:31', '間違（まちが）えて宇宙（うちゅう）終（お）わって'],['00:32', '青信号（あおしんごう）はいつも通（とお）り'],['00:35', '飛（と）んでまた止（とま）まって'],['00:37', 'また　飛（と）びそうだ'],['00:39', 'ココロコネクト'],['00:40', '古代人（こだいじん）と恋（こい）した'],['00:42', '妄想（もうそう）コレクト'],['00:44', '化石的（かせきてき）なロマンス'],['00:46', 'はぁ…夢（ゆめ）に踊（おど）るの'],'',['00:49', '月（つき）の灯（あか）りが'],['00:51', '僕（ぼく）を包（つつ）んで'],['00:53', '鳴（な）り響（ひび）く音（おと）カラダを'],['00:55', '飲（の）み込（こ）んでいく'],['00:57', 'もう恐（おそ）れることを'],['00:59', '感（かん）じないくらいの'],['01:01', '眩（まぶ）しさに'],['01:02', '今（いま）ココロを'],['01:03', '狙（ねら）われているの'],['01:05', '回（まわ）る　回（まわ）る　世界（せかい）は'],['01:08', '///W/A//VE//'],'',['01:22', '考（かんが）えてみて止（と）まって'],['01:24', '赤信号（あかしんごう）は狙（ねら）い通（とお）り'],['01:27', '逃（に）げたくて滑（すべ）って'],['01:29', 'また　逃（に）げそうだ'],['01:31', '開（ひら）けネクスト'],['01:32', '宇宙人（うちゅうじん）とＳｋｙｐｅ'],['01:34', '妄想（もうそう）セレクト'],['01:36', '電波的（でんぱてき）なロマンス'],['01:38', 'はぁ…夜（よる）に眠（ねむ）るの'],'',['01:41', '月（つき）の灯（あか）りが'],['01:43', '僕（ぼく）を包（つつ）んで'],['01:45', '鳴（な）り響（ひび）く音（おと）カラダを'],['01:47', 'また惑（まど）わせる'],['01:48', 'もう暴（あば）れることを'],['01:50', '忘（わす）れちゃうくらいの'],['01:52', '眩（まぶ）しさに'],['01:53', '今（いま）ココロを'],['01:54', '狙（ねら）われているの'],['01:56', '迫（せま）る　迫（せま）る　未来（みらい）は'],'///W/A//VE//','',['02:00', 'はぁーん…'],['02:23', '夢（ゆめ）に踊（おど）るのー'],['02:25', '明日（あした）の声（こえ）が'],['02:27', '僕（ぼく）を誘（さそ）って'],['02:29', '鳴（な）り響（ひび）く音（おと）ミライを'],['02:31', '塗（ぬ）り替（か）えていく'],['02:33', 'もう留（とど）まることを'],['02:35', '許（ゆる）さないくらいの'],'',['02:37', '眩（まぶ）しさに'],['02:38', '今（いま）ココロを'],['02:39', '狙（ねら）われているの'],['02:41', '回（まわ）る　回（まわ）る　世界（せかい）から'],['02:44', '見（み）える　見（み）える'],['02:46', '未来（みらい）'],'',['02:48', 'らららーららーららー'],['02:49', 'らららーららーららー'],['02:55', 'らららーららーららー'],['02:57', 'らららーららーららー']]
		};
    
    /*
		  method for remove a song from current playlist, it will only be deleted from the current playlist, but the song will not 
      removed from database
      @param {Number} songId
	  */
    removeSong(songId);
    
    /*
		  method for deleting the song, it will be deleted from the database
      @param {Number} songID
	  */
	  deleteSong(songID);
    
    /*
		  method for like a song
      @param {Number} songID
	  */
	  likeSong(songID);
    
    /*
		  method for playing music 
	  */
	  play();
    
    /*
		  method for pause music 
	  */
	  pause();
    
```
