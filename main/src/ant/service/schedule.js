 
 // add some awesome algorithms 
 
 var algorithms = {
 
	groups : {
		
		randomCard : function(cards,count){
			// 随机洗牌函数
			// careful about the count index 
			var random_cards ;  // provides push_back function
			for(var i=count;i>0;--i){
			// implement rand function later 
				var index = rand() % i;
				random_cards.push_back(cards[index]);  // 随机拿走容器中的一张牌
				cards[index] = cards[i-1];
			}
		},
		
		
	
	
	},
 
	get : function(name){
		// return a special algorithm 
	},
	
 
 };