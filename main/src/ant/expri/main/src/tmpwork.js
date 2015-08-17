// tmp work manage 

 function _emit(tag,param){
 
	return ;
 
}


function _waiton(tag){

	return ;
	
}


function _get(tag){
	
	// get the param for httpAnt tmp
	// try lazy return of params 
	
	var str1 = tag.split("/")[0];
	console.log("tag splitted : "+str1);
	
	return ["www.baidu.com","/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=sanlitun"];
	

}


module.exports = {
	emit : _emit ,
	waiton: _waiton ,
	get : _get 
}