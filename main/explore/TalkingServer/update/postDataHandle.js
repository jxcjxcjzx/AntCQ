
fs = require('fs');


var writeStream = fs.createWriteStream("./tmp.js");

var readStream;

var SPECIAL = {
	
	// altogether 23 special characters , see if need to add later 
	CHARACTER : ";/?:@=&<>\"#%{}|\\^~[]'(),\t+", 
	
	// well,  we left the % character	
	ENCODING : "3B2F3F3A403D263C3E2223257B7D7C5C5E7E5B5D2728292C092B",  


};



function transform(_data){
	// 特殊字符的转换
	//transform the special chars via the integrated tables 
	//console.log(SPECIAL.ENCODING.length);
	
	// the SPACE special char 
	// _data = _data.replace(new RegExp(str2,"g")," ");
	// handle with space string first 
	_data = _data.replace(/\+/g," ");
	
	for(var i=0;i<SPECIAL.CHARACTER.length;i++){
		//_data = _data.replace("%"+SPECIAL.ENCODING[(i+1)*2-1]+SPECIAL.ENCODING[(i+1)*2-2],SPECIAL.CHARACTER[i]);
		_data = _data.replace(new RegExp("%"+SPECIAL.ENCODING[(i+1)*2-2]+SPECIAL.ENCODING[(i+1)*2-1],"g"),SPECIAL.CHARACTER[i]);
	}
	
	// some special cases 

	// the ENTER special char 
	_data = _data.replace(/\%0D%0A/g,"\n");
	
	return _data;

}


function getWriteStream(){
	return writeStream;
}

 function _obtain(postData){
	// for debug only 
	// after bunch of transforms , should be ok now 
	var transformed = transform(postData);
	return transformed;
 }
 
 function _popDetails(handler){
 // the handler to deal with params , no return 
 // defaults return 
	// the global readStream
	var forreturn = "";
	readStream = fs.createReadStream("./tmp.js");
	readStream.on("data",function(chunk){
		forreturn += chunk;
	});
	readStream.on("end",function(){
		handler.handle(forreturn);
	});
 }
 
 
 
 
 module.exports = {
	obtain : _obtain,
	popDetails : _popDetails,
	getWriteStream : getWriteStream
 }