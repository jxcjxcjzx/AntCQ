
// here introduce some random functions 
// for use in Ant projects 

// alter the writing syntax later 
// the Fisher-Yates shuffle algorithm
function shuffle(array){
	
	var rand ;
	var shuffled = [];
	var value;
	for(var i=0;i<array.length;i++){
		rand = Math.floor(Math.random()*(i+1));
		value = array[i];
		shuffled[i] = shuffled[rand];
		shuffled[rand] = value;
	}
	return shuffled;
}

