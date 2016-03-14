var fs = require('fs'); 
var path = require('path');

module.exports = function(dir, extn, callback) { 
  fs.readdir(dir, function(err, files) {
    if (err) 
      return callback(err);
    list = files.filter(function (file) {
      return path.extname(file) === '.'+ extn
    });
    // same as:
    // list = files.filter(function (file) {
    //   if (path.extname(file) === '.'+ extn){
    //     return file
    //   }
    // });
    
    callback(null, list)
    });
};


