

// altogether three kinds of actions for patch actions 
 function patch_action_add(fileaddr,filename,contenttobeadded){
	
 
 }
 
 function patch_action_modify(fileaddr,filename,contenttobemodified,contentaftermodified){
 
 
 }
 
 
 function patch_action_delete(fileaddr,filename,contenttobedeleted){
 
 }
 
 
 module.exports = {
 
	patch_action_add : patch_action_add,
	
	patch_action_modify : patch_action_modify,
	
	patch_action_delete : patch_action_delete
 
 }