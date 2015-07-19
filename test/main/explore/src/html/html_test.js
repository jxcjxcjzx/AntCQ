
// adjust this later 
var html = require("../../../../../main/explore/src/html/html.js");





html.setContent(fs.read("1.html"));

console.log(html.getContent());