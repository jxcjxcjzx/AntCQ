
// ant to read file 
var fs = require("fs");
var globalAnt = require("./globalAnt.js");

var TAG = [ globalAnt.GLOBAL.FILEREAD, globalAnt.GLOBAL.FILEWRITE ];

function read(fileaddr){
	return ;
}

function write(fileaddr,content){

	// for debug only 
	// console.log("  writing content into file  ");
	fs.appendFile(fileaddr,content,'utf-8',null);
}


module.exports = {
	write : write
}
