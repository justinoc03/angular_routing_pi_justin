var express = require('express');
var path = require('path');
//express is actually a function and needs to be able to be called later on...
var app = express();

//similar to the usage of anything.data()
//process.env is a port setting utility that some systems use, like heroku
// LOOK AT MY NOTES FOR INFO ABOUT .data
app.set('port', (process.env.port || 5000) );

app.get('/*', function(req, res){
  console.log('made it here!');
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname,"/public/", file));
});

app.listen(app.get('port'), function() {
  console.log('Turned on the thing!: ', app.get('port'));
});
