// reference from  NowJS  javascript framework 

var everyone = require("./everyone.js");
// the prototype :

everyone.distributeMessage = function(message){

	everyone.receiveMessage(this.name,message);

}


everyone.ready = function(){


}