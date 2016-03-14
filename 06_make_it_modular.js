var filter = require('./filter');

var dir_path = process.argv[2]
var ext = process.argv[3]




filter(dir_path, ext, function(err, list){
  if (err)
    return console.error('There was an error:', err)

  list.forEach(function (file) {
    console.log(file);
  })
}); //



// fs.readdir(dir_path, function (err, files) {
//   if (err) throw err;
//   files.forEach(function (file) {
//     if (path.extname(file) === '.'+ ext) {
//       console.log(file);
//     }
//   });
// });
