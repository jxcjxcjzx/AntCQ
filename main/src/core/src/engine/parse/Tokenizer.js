// Tokennize is the first step before we understand 

var factory = {
	// product factory 
	
	// the Bm25 Tokenizer is referenced from Okapi algorithm 
	BM25 : {
		Tokenize : function(text){
			text = text.toLowerCase().
					   .replace(/\W/g,' ')
					   .replace(/\s+/g,' ')
					   .trim()
					   .split(' ')
					   .map(function(a) {
						return stemmer(a);
					   });
					   // filter out stopStems
			var out = [];
			for(var i=0,len = text.length;i<len;i++){
				if(stopStems.indexOf(text[i]) === -1){
					out.push(txt[i]);
				}
			}
			return out;
		},
		
		
	
	},




};