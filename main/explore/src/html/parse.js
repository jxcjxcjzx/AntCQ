// the parse thing 

var _content = "";

var content_for_test = "";



var Constants = {

	spilttagbegin : "<",

	spilttagend : ">",

	BEGIN : 0,
	
	CONTINUE : 1,
	
	END : 2,
	
	ENDOFLINE : 3,
	
	CHARPROCESSING : 4,
	
	DEFAULT : 99,
	
	defaultstr : ""
	
};

var global_use = {
	
	lengthofline : 0,
	
	countfortakechar : 0,
	
	LineTag : Constants.BEGIN,
	
	linecontent : "",
	
	httppatternindex : 0,
	
	urlfound : false,
	
	beginofurl : false,
	
	httplink : "",
	
	endofurl : true,
	
	defaults : 0

};

var patterns = {

	httplinkbegin : 'http:// ',
		
	defaults : 99

};

var fread = require("../../../src/lib/fs/fread.js");




function parseComponent(){


}

function locator(){

}

function find(){

}

function parseUrls(HtmlPage){
	// return a url list 
	var singleLine = "";
	var contentArray = linesin(HtmlPage);
	var lineslength = contentArray.length;
	
	// add control here by jxc 
	for(var i = 0;i<contentArray.length-1;i++){
		singleLine = contentArray[i];	
		// lines and chars dealing

		// console.log(singleLine);
		
		if(takeLine(singleLine) === Constants.CONTINUE){
			takeLine(contentArray[++i]);
		}else{	
			// continue with the parse process 			
		}
	}

}


/*
structures used  :

var Constants = {

	spilttagbegin : "<",

	spilttagend : ">",

	BEGIN : 0,
	
	CONTINUE : 1,
	
	END : 2,
	
	ENDOFLINE : 3,
	
	CHARPROCESSING : 4,
	
	DEFAULT : 99,
	
	defaultstr : ""
	
};

var global_use = {
	
	lengthofline : 0,
	
	countfortakechar : 0,
	
	LineTag : Constants.BEGIN,
	
	linecontent : "",
	
	httppatternindex : 0,
	
	urlfound : false,
	
	beginofurl : false,
	
	endofurl : false,
	
	defaults : 0

};

var patterns = {


	httplinkbegin : '"http://"',
	
	
	defaults : 99

};

*/

function takeChar(achar){

	// console.log(global_use.countfortakechar);
	if(global_use.countfortakechar  ===  global_use.lengthofline){
		// end of line , begin a new line 

		return Constants.ENDOFLINE;
	}
	else{		
		// handle a single char
		global_use.countfortakechar++;		
		
		
		if(achar === patterns.httplinkbegin[patterns.httplinkbegin.length-1] && global_use.beginofurl  ===  true){
		
			console.log(global_use.httplink);			
				{
					global_use.beginofurl = false;
					global_use.endofurl  = true;
					global_use.urlfound  = false;
					global_use.httppatternindex = 0;
					global_use.httplink = "";
				}
				return Constants.CHARPROCESSING;
		}
		
		if(global_use.beginofurl  ===  true && global_use.endofurl === false){
		    global_use.httplink += achar;
			return Constants.CHARPROCESSING;
		}
		
		// if all starts with this single char 
		if(global_use.urlfound  === true){
			if(patterns.httplinkbegin.length-2 === global_use.httppatternindex){
				global_use.beginofurl  = true;
				global_use.endofurl  = false;
				return Constants.CHARPROCESSING;
			}
			else{
				if(patterns.httplinkbegin[global_use.httppatternindex ] === achar){
					global_use.httppatternindex ++;
				}
				else{
				// refound the pattrn again 
					global_use.urlfound  = false;
					return Constants.CHARPROCESSING;
				}
			}
		}
		
		
		
		if(achar === patterns.httplinkbegin[0]){
			// maybe begin of http link 
			
			global_use.urlfound  = true;
			global_use.httppatternindex ++; 
			
		}

		
		
		return Constants.CHARPROCESSING;
	}
}

function takeLine(line){
	// 0 -- end  1 --- continue  99 --- default 		
	var i=0;

	var httpdiscovered = false;
	
	if(global_use.LineTag === Constants.CONTINUE){
		// not done yet last time 
		global_use.lengthofline = line.length;
		
	}
	else{  /*global_use.LineTag === Constants.BEGIN ?? */
		// need to decide whether require another new line content here 
		global_use.lengthofline = line.length;
		var endtag = Constants.ENDOFLINE;
		
		// console.log(line);
		
		channel(pushLine,line,takeChar,endtag);
	}
	
}

function pushLine(){
	// in memory of git operations 
	if(global_use.countfortakechar < global_use.lengthofline){
		// console.log(global_use.linecontent[11]);
		// console.log(global_use.linecontent[global_use.countfortakechar]);
		return global_use.linecontent[global_use.countfortakechar];
	}	
}

function channel(src,paramforsrc,des,endtag){
	// move this to framework lib in the future 

	// initial and reset all the params 
	
	global_use.linecontent = paramforsrc;
	global_use.countfortakechar = 0;
	
	while( endtag !== des(src())){
		// continue with the process  
	}
	
}


function printUrls(url) {
	
		
		
}

function linesin(htmlContent){
	
	if(htmlContent!=null){
		return  htmlContent.split("\n");
	}
	else{
		return null;
	}

}

function setContent(content){
	_content = content;
}



function linein(){
	

}

function blockin(){
	

}

function charin(){

}

function innerTestPoint(){
	
	fread.readFile("./res/db1.html","utf-8",function(err,data){
			if(err === null){	
			// first use console.log to get result 
				parseUrls(data);
			}	
	});

}


module.exports = {
	parseUrls : parseUrls,
	
	innerTestPoint : innerTestPoint
}
