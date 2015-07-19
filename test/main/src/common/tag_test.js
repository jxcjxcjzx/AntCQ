// for test we use absulute addr
var tag = require('../../../../main/src/common/JSrequire/tag.js');

 
 function test_tag(fileAddr,tagContent){
	// as it mentioned, test calculateRelative
	tag.tagFileWithAddr(fileAddr,tagContent);
 }
 
 function check_test_tag(){
	
 }
 
 function test_main(){
 
	var fileAddr = "D:\\User\\Documents\\Github2\\AntCQ\\test\\res\\for_test.js";
	var tagContent = "// D:\\User\\Documents\\Github2\\AntCQ\\test\\res\\for_test.js";
	test_tag(fileAddr,tagContent);
 }
 
 
 
 
 
 // run the test 
 test_main();