 
 // add some awesome algorithms 
 
 var algorithms = {
 
	groups : {
		
		randomCard : function(cards,count){
			// ���ϴ�ƺ���
			// careful about the count index 
			var random_cards ;  // provides push_back function
			for(var i=count;i>0;--i){
			// implement rand function later 
				var index = rand() % i;
				random_cards.push_back(cards[index]);  // ������������е�һ����
				cards[index] = cards[i-1];
			}
		},
		
		
	
	
	},
 
	get : function(name){
		// return a special algorithm 
	},
	
 
 };