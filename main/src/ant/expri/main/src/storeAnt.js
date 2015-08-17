// store ,as you know 
// move this special function to framework later 


var fileAnt = require("./fileAnt.js");


function storeIntoFile(fileName,content){
	// use function provided by fsAnt 
	fileAnt.write(fileName,content);

}


function processData(params){
	
	console.log(" into processData ,params[0] is : "+params[0]);
	
	// consider a better way later 
	if( params[0] !== null&& params[1] !== null ){
		// for debug only 
		console.log(" store into file now  ");
		storeIntoFile(params[0]/* fileName */,params[1]/* Content */);
	}	
	
}


function storeIntoDb(){


}


module.exports = {

	storeIntoFile : storeIntoFile,
	
	processData : processData

}