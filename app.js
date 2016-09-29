var express = require('express');

var app = express();

var routes = require('./Routes/route.js');

app.set('view engine','ejs');

app.use(express.static(__dirname + '/Public'));

app.get('/',routes.home);
app.get('/:city',routes.city);


var port = process.env.PORT || 8080;
 var server = app.listen(port,function(request,response){

 	console.log("Catch server action at localhost//:" +port)
 })
