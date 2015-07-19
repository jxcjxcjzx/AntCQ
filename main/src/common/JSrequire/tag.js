// code to tag each source file 
// will also reserve a table caching these tagging actions 
// in order for update someday 

var fs = require("fs");

function tagFileWithAddr(fileaddr,tagcontent){

	// tag at  the first line 
	fs.readFile(fileaddr,'utf-8',function(err,data){
		
		console.log(' reading file ....  ');
	
		if(err){
			console.log(err);
			return ;
		}
		else{
			// get the needed content 
			// read out the data and write back 
			var originContent = data;
			
			fs.writeFile(fileaddr,tagcontent+"\n"+"\n"+originContent,'utf-8',function(err,data){
				if(err){
					console.log(err);
					return ;
				}else{
					console.log(" written ....  ");
				}
			});
		}
	});
}


module.exports = {
	
	tagFileWithAddr : tagFileWithAddr

}