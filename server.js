var port = process.env.PORT || 3001;
var express = require('express');

var app = express();

var productService = require('./services/productService')(app);

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.listen(port);
