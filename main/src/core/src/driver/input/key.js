
// key is not pressed yet 
 var keypress = false;
	
 document.addEventListener('keydown',function(eve){
	if(!keypress && eve.keyCode === 86){
		// do sth. 
		
		keypress = true;
	}
 });
 
  document.addEventListener('keyup',function(eve){
	if(keypress && eve.keyCode === 86){
		// do sth. 
		
		keypress = false;
	}
 });