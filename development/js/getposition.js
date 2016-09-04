function getPosition(el) {
	var xPos = 0;
	var yPos = 0;

	while(el) {
		if(el.tagName == "BODY") {
			// deal with browser quirks with body/window/document and page
			var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
			var yScroll = el.scrollTop || document.documentElement.scrollTop;

			xPos += (el.offsetLeft - xScroll + el.clientLeft);
			yPos += (el.offsetTop - yScroll + el.clientTop);
		}else{
			// other non-body elements
			xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
			yPos += (el.offsetTop - el.scrollTop + el.clientTop);
		}
		el = el.offsetParent;
		return {
			x: xPos,
			y: yPos
		};
	}
}

module.exports = getPosition;

/*
	Offset properties: measure the distance from the current element's top-left corner to its nearest offset parent 
	offsetLeft, offsetTop; 

	Border: offset properties does not consider the border (clientLeft, clientTop)

	Scrolling: if the container that contains your element is scrolling, you need to take it into consideration, 
	different browser treat scrolling differently, some measures on body elemtn, some measures on window or document 

	clientLeft: width of the left border of an element in pixels, it includes the width of the vertical scroll bar 

	scrollLeft: gets or sets the number of pixels that an element's content is scrolled to the left 

	documentElement: get the root element of the document (for instance: <html> element for HTML document)
*/