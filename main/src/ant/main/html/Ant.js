// html process text Ant


// i am the first ant in the repo ! 
// born in 2015.6.11


var Ant = {

		ID : "000000003",
		// name : "httpLinkRetriver"
		
		getID : function(){
			return this.ID;
		},
		
		verify : function (ID){
			// temporarily empty
		},
		
		process : function (command){
			
			command = '';

		},
		
		extend : function (context,func){
			// empty now 
		},		
	
};

Ant.print = function(){
	console.log("edfew");
};


/*
Ant.prototype = {

	Ant : function(){
		return this;
	},
	
	print : function(){
		console.log(cbeh);
	}

};
*/

function loadHtmlFile(fileaddr){
	// var htmlDoc = fs.loadFile(fileaddr);
	// return htmlDoc;
}

function parse(content){
	
	// var htmlContent = HtmlContent(content);
	

}




function born(){
	
	// return new Ant();
	// return SimpleUrlRetriver();
	return Ant;
}




module.exports = {
	born : born,
}	