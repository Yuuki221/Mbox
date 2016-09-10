/*
	modules for compute the current element position 

	@param {Object} element
	@param {String} direction 'left' or 'right', upper or lower case not a problem 
*/

function getPos(element, direction) {
	// left position 
	if(direction.trim().toLowerCase()==='left'){
		// deal with body element
		var xPos = 0;
		while(element){
			if(element.tagName == 'BODY'){
				var xScroll = element.scrollLeft || document.documentElement.scrollLeft;

				xPos+=(element.offsetLeft - xScroll + element.clientLeft);
			}else{
				xPos+=(element.offsetLeft - element.scrollLeft + element.clientLeft);
			}
			element = element.offsetParent;
		}
		return xPos;
	}else{
		// top position 
		var yPos = 0;
		while(element){
			if(element.tagName === 'BODY'){
				var yScroll = element.scrollTop || document.documentElement.scrollTop;
				yPos+=(element.offsetTop - yScroll + element.clientTop);
			}else{
				yPos+=(element.offsetTop - element.scrollTop + element.clientTop);
			}
			element = element.offsetParent;
		}
		return yPos;
	}
}

module.exports = getPos;