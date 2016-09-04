var timeTrans = require('./getplaytime.js');
console.log(timeTrans(1300));

var MBox = require('./mbox.js');
var testBox = new MBox();
testBox.load();