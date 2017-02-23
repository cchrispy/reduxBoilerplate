var express = require('express');
var port = process.env.PORT || 8000;

var app = express();

app.listen(port);
console.log(`Listening on port ${ port }`);