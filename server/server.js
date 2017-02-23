var express = require('express');
var path = require('path');
var port = process.env.PORT || 8000;

var app = express();

app.use(express.static(path.resolve(__dirname, '..', 'dist')));


app.listen(port);
console.log(`Listening on port ${ port }`);