// export something for environment later 


 function about(moduleaddr){
 
	return  {
		// one json-like object 
		
	
	};
 
 }
 
 var form = {
	
	// avoid obj shares 
	from : function(module_exported){
		this.module_obj = module_exported;	
		return this;
	},
	
	module_obj : null,
	
	// realize is in remote 
	// functions to form things 
	to : {
		exports = function(){
			// module.exports 
			return this.module_obj.exports;
		},
		
		filename = function(){
			// module.filename
			return this.module_obj.filename;
		},
		
		loaded = function(){
			// module.loaded
			return this.module_obj.loaded;
		}
		
		// no more 
	},	

 };