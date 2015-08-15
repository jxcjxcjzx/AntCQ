
var http = require("http");
var https = require("https");
var tmpwork = require("./common/tmpwork.js");
var fileAnt = require("./ioAnt.js");
// ant to browser in the internet

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
	console.log(" entering httpAnt , welcome ...  ");
 }

 var preHandler = {
	prehandle : function(_action){
		// dp broadcast first 
		theSharedFunctionsAndStructures.call("broadcast",[_action,getBroadcastlist()]);
	}
 };
 
 var Handler = {
	handle : function(_action){
		
	}
	
 };
 
 var _broadcastList = ["ioAnt"];
 
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


function httpload_3/*4 represents 4 params needed */(httplinkhost,httplinkpath, ContentProcessorAnt /* use store structure instead later */){

	
	var _hostname = httplinkhost;
	var _path = httplinkpath;
	
	var options = {
		hostname: _hostname,
		port: 80,
		path: _path,
		encoding: 'gzip',
		method: 'GET',
	};  
	

	
	var data = "";
	
	var req = http.request(options, function (res) {  
		// console.log('STATUS: ' + res.statusCode);  
		// console.log('HEADERS: ' + JSON.stringify(res.headers));  
		res.setEncoding('utf8');  
		
		res.on('data', function (chunk) {  
			data+=chunk;
		});  
		res.on('end',function(){
			ContentProcessorAnt.processData(data);  // should be corresponding 
		});
	});	

	req.on('error', function (e) {  
		//console.log('problem with request: ' + e.message);  
		
	});  
	  
	req.end(); 
	
	
	
}



function httpload_4/*4 represents 4 params needed */(httplinkhost,httplinkpath, ContentProcessorAnt,param /* use store structure instead later */){

	
	var _hostname = httplinkhost;
	var _path = httplinkpath;
	
	var options = {
		hostname: _hostname,
		port: 80,
		path: _path,
		encoding: 'gzip',
		method: 'GET',
	};  
	

	
	var data = "";
	
	var req = http.request(options, function (res) {  
		// console.log('STATUS: ' + res.statusCode);  
		// console.log('HEADERS: ' + JSON.stringify(res.headers));  
		res.setEncoding('utf8');  
		
		res.on('data', function (chunk) {  
			data+=chunk;
		});  
		res.on('end',function(){
			var params = {};
			params[0] = param;
			params[1] = data;
			ContentProcessorAnt.processData(params);  // should be corresponding 
		});
	});	

	req.on('error', function (e) {  
		//console.log('problem with request: ' + e.message);  
		
	});  
	  
	req.end(); 
	
	
	
}


function httpload_1(httplink){

	tmpwork.emit("PARSEURL",httplink);

	tmpwork.waiton("PARSEURL");
	
	var _hostname = tmpwork.get("PARSEURL")[0];
	var _path = tmpwork.get("PARSEURL")[1];
	
	var options = {
		hostname: _hostname,
		port: 80,
		path: _path,
		encoding: 'gzip',
		method: 'GET',
	};  
	

	
	var data = "";
	
	var req = http.request(options, function (res) {  
		// console.log('STATUS: ' + res.statusCode);  
		// console.log('HEADERS: ' + JSON.stringify(res.headers));  
		res.setEncoding('utf8');  
		
		res.on('data', function (chunk) {  
			data+=chunk;
			// fileAnt.write("./hotpot.txt",chunk);
			// just for debug 
			 // console.log(chunk);
		});  
		res.on('end',function(){
			tmpwork.emit("FILEWRITE",data);
		});
	});	

	req.on('error', function (e) {  
		//console.log('problem with request: ' + e.message);  
		
	});  
	  
	req.end(); 
	
	
	
}

function httpsload_1(httpslink){

	tmpwork.emit("PARSEURL",httplink);

	tmpwork.waiton("PARSEURL");
	
	var _hostname = tmpwork.get("PARSEURL")[0];
	var _path = tmpwork.get("PARSEURL")[1];
	
	var options = {
		hostname: _hostname,
		port: 443,
		path: _path,
		encoding: 'gzip',
		method: 'GET',
	};  
	

	
	var data = "";
	
	var req = https.request(options, function (res) {  
		// console.log('STATUS: ' + res.statusCode);  
		// console.log('HEADERS: ' + JSON.stringify(res.headers));  
		res.setEncoding('utf8');  
		
		res.on('data', function (chunk) {  
			data+=chunk;
			// fileAnt.write("./hotpot.txt",chunk);
			// just for debug 
			//  console.log(chunk);
		});  
		res.on('end',function(){
			// for debug only 
			//  fileAnt.write("./hotpot.txt",data);
			tmpwork.emit("FILEWRITE",data);
		});
	});	

	req.on('error', function (e) {  
		//console.log('problem with request: ' + e.message);  
		
	});  
	  
	req.end(); 
	
}


function exec(){

	// download a file and then write it into a file 
	

}



module.exports = {
	
	// if this is an seed ant, just export the tmp_test function or 
	// several functions 
	tmp_test : tmp_test,
	
	enter : enter,
	
	getPrehandler : getPrehandler,
	
	getHandler : getHandler,
	
	httpload_1 : httpload_1,
	
	httpload_3 : httpload_3,
	
	httpload_4 : httpload_4,
	
	httpsload_1 : httpsload_1

}
