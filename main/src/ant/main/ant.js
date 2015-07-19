
 // the very first ant 
 
 function init(){
	// maybe needed 
 }
 
 function emit(){
	return " Hello world to all Ants ! :) ";
 }
 
 function absorb(content){
	checkNull(content);
	_content = content ;
 }
 
 function buildLinkWith(anotherant){
	
 }
 
 function checkNull(_content){
	if(_content == null ){
		return ;
	}
 }
 
 var taskQueue = [];
 
 var _content = "";
 
 function exec(){
 
 }
 
 var state = one of enum { BUSY, IDLE, RUNNING, ... } ;  // using AntExplain to make this possible 
 