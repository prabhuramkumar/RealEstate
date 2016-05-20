var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();


//check whether it can be deleted
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(allowCrossDomain);

require(__dirname + '/config/routes')(app);


app.use(express.static(path.join(__dirname, '')));

app.listen(8000, function() {
  console.log('Server started: http://localhost:' + 8000 + '/');
});
