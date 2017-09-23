var Client = require('ftp');
var fs = require('fs');
var glob = require('glob')

var c = new Client();
c.on('ready', function () {

  c.put('dist/IndexNew.cshtml', 'web/Views/Home/IndexNew.cshtml', function (err) {
    if (err) throw err;
    console.log('uploaded success:', 'index.cshtml')
    c.end();
  })

  const js = glob.sync('dist/staticNew/js/*.js')
  js.forEach(one => {
    var name = one.replace('dist/staticNew/js/', '')
    c.put(one, 'web/Static/js/' + name, function (err) {
      if (err) throw err;
      console.log('uploaded success:', one)
      c.end();
    })
  })

  const css = glob.sync('dist/staticNew/css/*.css')
  css.forEach(one => {
    var name = one.replace('dist/staticNew/css/', '')
    c.put(one, 'web/Static/css/' + name, function (err) {
      if (err) throw err;
      console.log('uploaded success:', one)
      c.end();
    })
  })

  const img = glob.sync('dist/staticNew/img/*')
  img.forEach(one => {
    var name = one.replace('dist/staticNew/img/', '')
    c.put(one, 'web/Static/img/' + name, function (err) {
      if (err) throw err;
      console.log('uploaded success:', one)
      c.end();
    })
  })

});

// c.connect({
//   host: '',
//   user: '',
//   password: ''
// });