fs = require('fs');

// a simple wrapper for fs write , 
// cache the write-request and pack them 
// together and do it later together 
// for both efficiency and disk-data safety 

// some settings 
var _cache_size = 2000;
var _global_content = "";

function _appendFile(fileName,content,charset/* if needed */,callback){
	
	if(content===null){
		// no content at all, quit 
		return;
	}else{
		//cache the content to be written in first 
		if(_global_content.length<_cache_size){
			// not yet 
			_global_content += content;
		}else{
			// no do the actual saving 
			// for debug only 
			console.log(" running into _appendFile in fwrite, ready to appendFile ");
			fs.appendFile(fileName,_global_content,charset,callback);
			_clearGlobalContentAfterSave();
		}
	}

	
}

function _clearGlobalContentAfterSave(/* no arguments */){
	_global_content = "";
}


module.exports = {
	
	appendFile : _appendFile

}