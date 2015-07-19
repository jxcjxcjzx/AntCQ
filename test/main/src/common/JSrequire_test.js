// for test we use absulute addr
var JSrequire = require('../../../../main/src/common/JSrequire/JSrequire.js');

 
 function test_calculateRelative(){
	// as it mentioned, test calculateRelative
	JSrequire.calculateRelative('D:\\User\\Documents\\Github2\\AntCQ\\main\\src\\common\\JSrequire','D:\\User\\Documents\\Github2\\AntCQ\\main\\res\\htmls\\github');
	
	JSrequire.calculateRelative('D:\\User\\Documents\\Github2\\AntCQ\\test\\res\\tape-master.zip','D:\\User\\Documents\\Github2\\AntCQ\\main\\src\\common\\namespace\\pack.js');
	
 }
 
 function check_test_calculateRelative(){
	
 }
 
 function test_main(){
	test_calculateRelative();
 }
 
 
 
 
 
 // run the test 
 test_main();