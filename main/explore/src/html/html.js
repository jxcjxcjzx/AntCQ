//  html thing 

var storeAnt = require("./storeAnt");
var httpAnt = require("./httpAnt.js");

var html = ["name","content","utf-8"];

var Contents = {
	NAME : 0,
	CONTENT : 1,
	UTF8 : 2
};

var Page = {
// a simple html page 


};

function addComponent(){


}



function setContent(content){

	html[NAME] = content;
	
}

function getContent(content){

	return html[NAME] ;
	
}

function setName(name){

	html[NAME] = name;
	
}


function getName(name){

	return html[NAME];
	
}

