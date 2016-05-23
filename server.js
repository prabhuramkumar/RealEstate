var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.json());

require(__dirname + '/config/routes')(app, fs, path);


app.use(express.static(path.join(__dirname, '')));

app.listen(8000, function() {
  console.log('Server started: http://localhost:' + 8000 + '/');
});
