/*
	method for load html content for the player
*/

let iconInfo = require('./svginfo.js');
let svg = iconInfo['svg'];
let viewBox = iconInfo['viewBox'];

// object for svg viewbox
module.exports = `<div class="magic-box">
					<div class="magic-box-upper-wrap">
						<div class="mbox-music-wrap">
							<audio class="mbox-music" src="development/music/You Need Me-KENN.mp3"></audio>
						</div>
						<!-- audio file links are here --> 
						<div class="mbox-album-cover-wrap">
						</div>
						<div class="mbox-controller-wrap-wrap">
							<div class="mbox-controller-wrap">
								<div class="mbox-songinfo">
								<span class="mbox-song-info" style="color: #dff3e3;">Unknown</span><br>
								<span class="mbox-album-name" style="color: #dff3e3;">Unknown</span>
								</div>
								<div class="mbox-controlBtn-wrap-wrap">
								<div class="mbox-previous-song-wrap">
									<button class="mbox-previous-song-icon icon">
										<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="${viewBox['previous']}">
											<path d="${svg['previous']}" />
										</svg>
									</button>
								</div>
								<div class="mbox-play-icon-wrap">
									<button class="mbox-play-icon icon">
										<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="${viewBox['play']}">
											<path d="${svg['play']}"/>
										</svg>
									</button>
								</div>
								<div class="mbox-next-song-icon-wrap">
									<button class="mbox-next-song-icon icon">
										<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="${viewBox['next']}">
											<path d="${svg['next']}" />
										</svg>
									</button>
								</div>
								<div class="mbox-play-mode-icon-wrap">
									<button class="mbox-play-mode-icon icon">
										<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="${viewBox['playmode']}">
											<path d="${svg['playmode_cycle']}" />
										</svg>
									</button>
								</div>
								<div class="mbox-volume-icon-wrap">
									<button class="mbox-volume-icon icon">
										<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="${viewBox['volume']}">
											<path d="${svg['volume']}" />
										</svg>
									</button>
								</div>
								<div class="mbox-volume-bar-wrap">
									<div class="mbox-volume-bar">
										<span class="mbox-volume-bar-inner" style="width: 0; background: #dff3e3;"></span>
									</div>
								</div>
								<div class="mbox-share-icon-wrap">
									<button class="mbox-share-icon icon">
										<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999" width="16" height="16" viewBox="${viewBox['share']}">
											<path d="${svg['share']}" />
										</svg>
									</button>
								</div>
								</div>
							</div>
						</div>
					</div>
					<div class="mbox-play-progress-wrap">
							<span class="mbox-play-progress-inner"></span>
					</div>
				</div>`;
