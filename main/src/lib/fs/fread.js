fs = require('fs');

// a simple wrapper for fs read , 


function _readFile(fileName,charset/* if needed */,callback){
		
	fs.readFile(fileName,charset,callback);
	
}

function _clearGlobalContentAfterSave(/* no arguments */){
	_global_content = "";
}


module.exports = {
	
	readFile : _readFile

}