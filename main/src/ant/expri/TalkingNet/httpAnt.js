
var http = require("http");
var https = require("https");
var tmpwork = require("./tmpwork.js");
var fileAnt = require("./fileAnt.js");
// ant to browser in the internet



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
	httpload_1 : httpload_1,
	
	httpload_3 : httpload_3,
	
	httpload_4 : httpload_4,
	
	httpsload_1 : httpsload_1
}