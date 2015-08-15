//  the first ant we really press on 
// start of the shared part 
var _theSharedFunctionsAndStructures_shared_ = require("./common/theSharedFunctionsAndStructures.js");
var _reimplement_shared_ = require("./common/reimplement.js");
//  implement this later 
// var reimplementList = _reimplement_shared_.formList("enter",);
var reimplementList = ["enter","getBroadcastlist",];
var reimplementFunctionList = [enter,getBroadcastlist];
// should have this function , for each ant 
Array.prototype.contains = function(item){
	return RegExp(item).test(this);
};
function call(functionName,params){
	var functionIndex = -1;
	if(reimplementList.contains(functionName)){
		for(var i=0;i<reimplementList.length;i++){
			if(reimplementList[i] === functionName){
				functionIndex = i;
				break;
			}
		}
		if(functionIndex > -1){
			reimplementFunctionList[functionIndex](params);
		}
	}else{
		// no implementation , sorry
	}
}
var theSharedFunctionsAndStructures = {
	// as mentioned, this is shared among all the ants , must implement 
	//  from _theSharedFunctionsAndStructures_shared_	
	// make it more natural later 
	
	call : function(functionName, params){
		if(_theSharedFunctionsAndStructures_shared_.hasFunction(functionName)){
			if(!reimplementList.contains(functionName)){
				// call function in shared library 
				// console.log(" start to call function shared  functionName is : "+functionName+"  param is : "+params);
				_theSharedFunctionsAndStructures_shared_.call(functionName,params);
			}
			else{
				// there are some reimplements ,call them 	
				call(functionName,params);
			}
		}else{
			// this kind of function does not exist yet
		}
	}	
}
// end of the shared part 

/*
 the reimplement function list , remember 
 capsule them in corresponding list 
*/
 function enter(){
	// this function represents enter of function 
	// for debug only , use log system to replace this later 
	console.log(" entering endofbroadcast , end broadcast now  ...  ");
 }

 var preHandler = {
	prehandle : function(_action){
		// dp broadcast first , end the broadcast now and broadcast it to all 
		// theSharedFunctionsAndStructures.call("broadcast",[_action,getBroadcastlist()]);
	}
 };
 
 var Handler = {
	handle : function(_action){
		
	}
	
 };
 
 var _broadcastList = ["self"];
 
 function getBroadcastlist(){
	return _broadcastList;
 }
 
 function getPrehandler(){
	return preHandler;
 }
 
 function getHandler(){
	return Handler;
 }
 
 /*  end of reimplement list  */


// the test function 




function tmp_test(){
	
}


module.exports = {
	
	// if this is an seed ant, just export the tmp_test function or 
	// several functions 
	tmp_test : tmp_test,
	
	enter : enter,
	
	getPrehandler : getPrehandler,
	
	getHandler : getHandler

}