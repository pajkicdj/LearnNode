var fs = require('fs') 
var file = fs.readFileSync(process.argv[2])
var fileStr = file.toString();
var fileArr = fileStr.split("\n");
var size = fileArr.length - 1
console.log(size)

//avoid .toString() by passing utf8 in second arg
//fs.readFileSync(process.argv[2], 'utf8')