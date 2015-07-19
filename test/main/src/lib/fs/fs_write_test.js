
 var JSwrite = require("../../../../../main/src/lib/fs/fwrite.js");
 
 var JSwrite_normal = require('fs');
 
 
 function test_write(){
	var fileName = "projects_describe.txt";
	var charset = "utf-8";
	var test_content_array = {};
	test_content_array[0] = "a very very long sentence ... a very very long sentence ... a very very long sentence ... "
	+"a very very long sentence ... a very very long sentence ... a very very long sentence ... "
	+"a very very long sentence ... a very very long sentence ... a very very long sentence ... "
	+"a very very long sentence ... a very very long sentence ... a very very long sentence ... "
	+"a very very long sentence ... a very very long sentence ... a very very long sentence ... ";
	for(var i=1;i<100;i++){
		test_content_array[i] = test_content_array[0];
	}
	
	
	var callback = null;
	
	
	// normal way 
	console.log(" normal file write  ");
	for(var i=1;i<100;i++){		
		JSwrite_normal.appendFile(fileName,test_content_array[i],charset,callback);
	}
	
	// optimised way 
	// for test 
	console.log(" optimised file write  ");
	for(var i=1;i<100;i++){		
		JSwrite.appendFile(fileName,test_content_array[i],charset,callback);
	}
	
 }
 
 function check_test_write(){
	
 }
 
 function test_main(){
	test_write();
 }
 
 
 
 
 
 // run the test 
 test_main();