var http = require('http');
var app = require('./app');
var port = process.env.PORT || 8000;

http.createServer(app.handleRequest).listen(port, function(){
    console.log("Server started on port : "+ port);
});