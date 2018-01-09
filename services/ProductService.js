var aws = require('aws-sdk');

aws.config.update({
    region: "us-east-1"
});
var dynamoDB = new aws.DynamoDB.DocumentClient();
var table = "Products";

var params = { TableName: table};

module.exports = function(app){
  app.get('/getAllProducts', function(req, res) {
      var result = dynamoDB.scan(params, function (err, data) {
          if(err){
              console.log("error " + err);
              res.send(500, {"errorMessage": "Received error when retrieving products"})
              res.end();
          }else{
              res.write(JSON.stringify((data["Items"])));
              res.end();
          }
      });
  })
};


