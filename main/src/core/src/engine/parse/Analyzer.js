// a simple analyzer for text-pics-or audio stream 
// it depends ! :)

// using java syntax , transform it later,  
Analyzer analyzer =  new Analyzer(){

	Tokenizer source = new SimpleTokenizer(reader);
	TokenStream filter = new SimpleTokenStream(source);
	
	filter = new SimpleFilter(filter);
	
	return new TokenStreamComponents(source,filter);

}


