
 var functional = require('../../../../main/src/lib/functional/functional.js');
 
 var list = [1,2,3];
 
  console.log(list);
 
  functional.map(list,function(num){return num*num;});
 
  console.log(list);