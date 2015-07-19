// very first prototype for ant-stream module 

// one stream if consist of data and tag ,
// data is something important, but also ,
// the data has to be in one format, 
// no matter it is plain-text or json or xml thing 
// don't worry , we have parser for it later 

var _config  = {
	// config is not exported for some safe reason, 
	// will only be accessable by exported fucntions 
	_format : "plain-text",  // can be set or modified 
	
	_content : "",
	
	_tag : "",  // where this piece comes from 
	
	_reserved : {}  // can be used later 

};

