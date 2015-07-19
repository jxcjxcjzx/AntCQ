// provides require service 

// every single file will be tagged with  absolute-addr in the first line of file 
// in purpose of helping searching engine to locate them so quickly 

function lookup(){


}

function eval(cmd){
	// mainly cmd like :
	// "find utils.js in main/core"
	// initialize a syntax tree and parse it later 
	

}

function checkNull(_addr){
	if(_addr === null){
		return ;
	}
}

function repeatStr(_same,_time){
	var _str  = "";
	for(var i=0;i<_time;i++){
		_str += _same;
	}
	return _str;
}

function calculateRelative(_calleraddr,_targetaddr){
	// get the the relative address between two 
	// files , helping one file find the other 
	// and require it 
	
	checkNull(_calleraddr);
	checkNull(_targetaddr);
	// first, find the shared-dir of this two addrs 
	var callerChar = '';
	var targetChar = '';
	var i=0;
	while((callerChar=(_calleraddr[i])) === ((targetChar=(_targetaddr[i++])))){
			// continue 
	}

	// then calculate how much '../' is needed 
	var delimCount = _calleraddr.substring(i,_calleraddr.length).split('\\').length-1;
	
	// return a relative addr , lead the caller to target
	var relative_path = repeatStr("../",delimCount)+_targetaddr.substring(i-1,_targetaddr.length).replace(/\\/g,'/');

	checkNull(relative_path);
	return relative_path;
}

module.exports = {
	calculateRelative : calculateRelative
}