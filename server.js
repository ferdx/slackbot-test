// require dotenv for secret stuff
require('dotenv').load();

// other requirements
var express = require('express');
var app = express();
var ferd = require('./ferd');
var f = new ferd();

// random route
app.get('/', function (req, res) {
  res.send('Welcome home!');
});

// other random route
app.get('/ferd', function(req, res) {
  res.end();
});

// boot up server
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});