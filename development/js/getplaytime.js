/**
	method to transform playtime to 00:00:00 format 
	@param {Number} seconds
	@return {String} time format in 00:00:00
*
*/
function transformTime(secTime){
	var strRes = '';
	for(let i=0; i<3; i++){
		let subres = secTime%60;
		secTime = Math.floor(secTime/60);
		strRes = ':' + (subres===0? '00' : ''+subres) + strRes;
	}
	return strRes.substring(1);
};

// console.log(transformTime(23));
module.exports = transformTime;