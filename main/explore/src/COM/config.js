// 地址属性必须反序解析

// reference from some text-to-HTML format languages --- 
// --- Setext, atx,Textile,reStructuredtext,Grutatext,EtText 
/*
	this is  h1 
	============  // any number of this will work 

	this is h2
	-----------
	
	or 
	
	# this is h1 #
	
	## this is h2 ##
	
	### this is h3 ###
	
	> the quote part 
	
	list :
		
	* red
	* green
	* blue 
	
	or 
	
	+ red
	+ green 
	+ blue 
	
	or 
	
	- red
	- green 
	- blue 
	
	[this is simple link www.baidu.com]
	
	*something important*
	
	**very strong things**
	
	'used to tag a small bunch of codes '
	
	
	
	
*/

var CONSTS = {



};

var store = {
	// store the consts in setting or config 
	

};


function inner_test (){

	console.log(" entering inner_test in config_js ");	

	

}




var parser  = function(){
	// function that returns a parser 	
	
	return {
	
		CONSTS : {	
		
				STATE : {
					BEGIN : 0,
					PROCESS : 1,
					END : 2,
					IDLE : 3,
				},		
				
		},
	
		parse : {
			
			state : 3,  // the IDLE state 
			
			line : function(oneline){
			
			},
			
			block : function(oneblock){
				
			},
			
		}
		
	}
	
};

var get = {

	

};


module.exports = {

	inner_test : inner_test,
	
	

}