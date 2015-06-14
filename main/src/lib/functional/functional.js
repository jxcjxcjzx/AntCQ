


 function _map(objorlist,func){
	if(objorlist!==null ){
		if(objorlist.length > 0){
			for(var i=0;i<objorlist.length;i++){
				objorlist[i] = func(objorlist[i]);
			}
		}
	}
 }
 
 /*
	sample use :
	  _each([1,2,3],function(num){
			console.log(num);
		});  
 */		

 function _each(objorlist,func){
 
	if(objorlist!==null ){
		if(objorlist.length > 0){
			for(var i=0;i<objorlist.length;i++){
				func(objorlist[i]);
			}
		}
	}
 }
 
 /*
	sample use 
		var sum = _reduce([1,2,3],function(memo,num){return memo+num});
		sum = ?   6 ;
 */
 function _reduce(listorlist,iterator,memo,context){
	
 
 }
 
 
 module.exports = {
	map : _map,
	each : _each
 }