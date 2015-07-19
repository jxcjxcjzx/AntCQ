// for test we use absulute addr
var scan = require('../../../../main/src/common/JSrequire/scan.js');

 
 function test_scan(){
	// as it mentioned, test calculateRelative
	scan.listdirs("D:\\User\\Documents\\Github2\\AntCQ");
 }
 
 function check_test_calculateRelative(){
	
 }
 
 function test_main(){
	test_scan();
 }
 
 
 
 
 
 // run the test 
 test_main();