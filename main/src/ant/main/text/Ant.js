// html process text Ant


// i am the first ant in the repo ! 
// born in 2015.6.11


Ant = {

	// ID : "000000002",
	// name : "htmlProcesser"
	
	
	verify : function (ID){
		// temporarily empty
	},
	
	process : function (command){
		
		command = '';
		
		console.log(" i just know how to print ! hello AntCQ !");

	},
	
	extend : function (context,func){
		// empty now 
	},
	
	getID : function(){
		return "000000002";
	},
	
	Ant : function(){
		return this;
	}
	
};



/*
Ant.prototype.getID = function() {
	return this.ID;
}
*/




function born(){
	
	// return new Ant();
	return SimpleHtmlProcessor();

}



module.exports = {
	born : born
}	