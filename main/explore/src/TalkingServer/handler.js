
/* the following require must be ignored  */
var fs = require("fs");

 var Handle_Constants = {
	
	
 
 
 };


 var Middle_Components = {
	// the middle components, 
	// didive the handling process 
	// into several steps 
	
	 _content_for_parse : "",
	
	// cache the parse results 
	FILENAME :/* new filenamecomponent() */{
		parse : function (){
			// a parser for parsing filename from the post content 
			var FILENAMEtag = "FILENAME";
			var _start = _content_for_parse.indexOf(FILENAMEtag)+FILENAMEtag.length;
			var _end = _content_for_parse.substring(_start).indexOf(FILENAMEtag)+_start;
			// for debug only 
			// console.log(_content_for_parse.substring(_start,_end));	
			return _content_for_parse.substring(_start,_end);
		}
	},
	
	FILEADDR :/* new fileaddrcomponent() */{
		parse : function (){
			// a parser for parsing fileaddr from the post content 
			var FILEADDRtag = "FILEADDR";
			var _start = _content_for_parse.indexOf(FILEADDRtag)+FILEADDRtag.length;
			var _end = _content_for_parse.substring(_start).indexOf(FILEADDRtag)+_start;
			// for debug only 
			// console.log(_content_for_parse.substring(_start,_end));	
			return _content_for_parse.substring(_start,_end);
		}
	},
 
	FILECONTENT :/* new filecontentcomponent() */{
		parse : function (){
			// a parser for parsing filecontent from the post content
			var FILECONTENTtag = "FILECONTENT";
			var _start = _content_for_parse.indexOf(FILECONTENTtag)+FILECONTENTtag.length;
			var _end = _content_for_parse.substring(_start).indexOf(FILECONTENTtag)+_start;
			// for debug only 
			// console.log(_content_for_parse.substring(_start,_end));	
			return _content_for_parse.substring(_start,_end);
		}
	},
	
	PATCHTYPE :/* new patchtypecomponent() */{
		parse : function (){
			// a parser for parsing patchtype from the post content
			var PATCHTYPEtag = "PATCHTYPE";
			var _start = _content_for_parse.indexOf(PATCHTYPEtag)+PATCHTYPEtag.length;
			var _end = _content_for_parse.substring(_start).indexOf(PATCHTYPEtag)+_start;
			// for debug only 
			// console.log(_content_for_parse.substring(_start,_end));	
			return _content_for_parse.substring(_start,_end);
		}
	},
	
	
	TOPARSE :/* new loadcomponent() */{
		load : function (content){
			// a parser for parsing filecontent from the post content
			_content_for_parse = content;
		}
	},
 
 };
 
 function run_test(){
	inner_test();
 }
 
 
 function inner_test(){
	// the actual codes for running tests 
	var content = "FILENAMEtmp.txtFILENAME";
	

	
	var _tag = "FILENAME";	
	var _start = content.indexOf(_tag)+_tag.length;
	var _end = content.substring(_start).indexOf(_tag)+_start;
	return content.substring(_start,_end);
 
 
 }
 
 
 function getHandler(){
	
	// return a handler 
	var  Handler = {
		
		handle : function(content){
		// temporarily add contents 
		// the function name for TOPARSE i havn't think out a good one , use 
		// it temporarily 
			Middle_Components.TOPARSE.load(content);
			var fileName = Middle_Components.FILENAME.parse();
			var fileAddr = Middle_Components.FILEADDR.parse();
			var fileContent = Middle_Components.FILECONTENT.parse();
			var patchType = Middle_Components.PATCHTYPE.parse();
			// now left work is so easy to be done 
			// for debug only 
			console.log(" fileName is : "+fileName);
			console.log(" fileAddr is : "+fileAddr);
			console.log(" fileContent is : "+fileContent);
			console.log(" patchType is : "+patchType);
			// make a wrapper function for this fs operations 
			// do some prechecks here 
			fs.writeFileSync(fileAddr+"/"+fileName,fileContent);
			
		},

	};
	
	return Handler;
 
 }
 
 
 module.exports = {
	
	getHandler : getHandler,
	
	run_test : run_test
 
 }