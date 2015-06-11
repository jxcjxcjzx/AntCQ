// i am the first ant in the repo ! 
// born in 2015.6.11


Ant = {

	// ID : "000000001",

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
		return "000000001";
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
	console.log(" i just know how to print ! hello AntCQ !");

}



module.exports = {
	born : born
}	