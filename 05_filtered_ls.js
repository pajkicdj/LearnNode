var fs = require('fs'); 
var path = require('path');

var dir_path = process.argv[2]
var ext = process.argv[3]

fs.readdir(dir_path, function (err, files) {
  if (err) throw err;
  files.forEach(function (file) {
    if (path.extname(file) === '.'+ ext) {
      console.log(file);
    }
  });
});
