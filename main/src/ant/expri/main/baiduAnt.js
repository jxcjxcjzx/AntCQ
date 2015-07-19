
var httpAnt = require("./httpAnt.js");

var keyaddr = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=";

function searchFor(keyword){

	httpAnt.httpload(keyaddr+keyword);
	
}


module.exports = {
	searchFor : searchFor
}
