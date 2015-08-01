
// the basic components and functions need to be 
// exported by each ant and also some actions and 
// handlers need to be implemented by them 

// this functionList is only used inner this js file , only !! 
// conbine this two list together later , remember 

var utils = require("../utils.js");

var functionNameList = ["test_me","log"];
var functionList  = [test_me,log];

Array.prototype.contains = function(item){
	return RegExp(item).test(this);
};

/*****************************
	 the shared function 
******************************/

 function enter(){
	// this function represents enter of function 
	// for debug only , use log system to replace this later 
	console.log(" please reimplement this  ");
 }

 function test_me(mytag){
	
	console.log(" the current Ant being test is tagged -- "+mytag);
	
 }
 
 function log(logcontent){
	
	console.log("  "+logcontent+" ");
	
 }
 
 // the core distribute functions 
 function broadcast(actions_broadcastlist){
	// it relates to a whole distributing network here 
	if(actions_broadcastlist.length>=2){
		action = actions_broadcastlist[0];
		broadcastlist = actions_broadcastlist[1];
		// then broadcastlist be handled by actions		
		// in broadcastlist are all names , from name form the js file 
		for(item in broadcastlist){
			utils.fromName(item).enter();
			utils.fromName(item).receive(encapsule_3(action,utils.fromName(item).getPrehandler(),utils.fromName(item).getHandler()));
		}
		
	}else{
		// lack of params 
	}
 }
 
 var preHandler = {
 
 };
 
 var Handler = {
	
 
 };
 
 var _broadcastList = [];
 
 function getBroadcastlist(){
	// return a default broadcastlist
 }
 
 function getPrehandler(){
	// return a default prehandler
 }
 
 function getHandler(){
	// return a default handler 
 }
 
 function encapsule_3(_actions,_prehandler,_handler){
	return [_actions,_prehandler,_handler];
 }
 
 // the key to this distribution
 function receive(action_prehandler_handler){
	// the param must be an array
	
	// distribute the broadcast first , then handle with the broadcast 
	if(action_prehandler_handler.length>=1){
		
		action = action_prehandler_handler[0];
		// use call fucntion instead
		broadcast([action,getBroadcastlist()]);
		
		if(action_prehandler_handler.length>=3){
			// action = action_prehandler_handler[0];
			prehandler = action_prehandler_handler[1];
			handler = action_prehandler_handler[2];
			
			prehandler.prehandle(action);
			handler.handle(action);
		}
		else{
			// lack of params 
		}
	}else{
		// no actions at all , nothing to do 
	}
		
 }
 
 /*****************************
	 the shared function 
******************************/

 function hasFunction(functionName){
	// seems reduldent 
	return functionNameList.contains(functionName);
 
 }


// corresponding to export functions  
 function call(functionName,params){
	
	var functionIndex = -1;
	// each function receive only one params , have to spilt it themselves
	if(functionNameList.contains(functionName)){
		// about to call the function 
		// move it to prototype later 
		for(var i=0;i<functionNameList.length;i++){
			if(functionNameList[i] === functionName){
				functionIndex = i;
				break;
			}
		}
		// only for debug 
		//console.log("functionIndex is : "+functionIndex);
		if(functionIndex > -1){
			functionList[functionIndex](params);
		}
	}
	else{
		// no such function , return 
		return;
	}
 
 }
 
 
 
 module.exports = {
	
	/* the public shared function */
	test_me : test_me,
	
	log : log,
	/* the public shared function */
	
	call : call,
	
	hasFunction : hasFunction
 
 }