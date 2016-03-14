const http = require('http');
var url = process.argv[2]




http.get(url ,function(res){
  res.setEncoding('utf8');
  res.on('data', console.log);
  res.on('error', console.error)
});
// }).on('error', function(e) {
//   console.log("Got error: " + e.message);
// });





// http.get(url ,function(res){
//     res.setEncoding('utf8');
//     res.on('data', function(chunk) {
//       console.log(chunk.toString());
//     });
// }).on('error', function(e) {
//   console.log("Got error: " + e.message);
// });




