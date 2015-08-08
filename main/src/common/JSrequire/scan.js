// scan all source files and tag them each with addr of them self 

// transport it to globals later to make more efficient 
var js_tool = require("../../lib/fs/fs.js");


function listdirs(_dir){
	
	// do some pre-check here 
	js_tool.listdirs(_dir);
	
}




module.exports = {
	
	listdirs : listdirs

}


