// scan all source files and tag them each with addr of them self 

// transport it to globals later to make more efficient 
var fs = require('fs');
var path = require('path');


function listdirs(_dir){
	
	console.log(" dir is : "+_dir);
	// at last, returns a list containing file names 
	
	fs.readdir(_dir,function(err,files){
		
		//console.log(files.length);	
		if(!files.length){
			// no files return 
			return ;
		}
		
		files.forEach(function(file){
			
				file = path.resolve(_dir,file);
				
				fs.stat(file,function(err,stat){
				
					if(err){
						console.log(err);
						return ; 
					}
					if(stat.isDirectory()){
						listdirs(file);
					}
				})
			
			
		});
		
	});
	
}


function loadFile(fileaddr){
	
}


module.exports = {
	
	listdirs : listdirs,
	
	loadFile : loadFile

}






