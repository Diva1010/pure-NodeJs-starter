var url = require('url');
var fs = require('fs');

function renderHTML(path,res){
    fs.readFile(path,null, function(err, data) {
        if(err){
            res.writeHead(404);
            res.write("Not Found!!");
        }
        else{
            res.write(data);
        }
        res.end();
    });
}

module.exports = {
    
    handleRequest: function(req,res){
        res.writeHead(200, {'Content-Type' :' text/html'});
        var path = url.parse(req.url).pathname;

        switch  (path) {
            case '/' : 
                renderHTML('./views/index.html',res);
                break;
            case '/about':
                renderHTML('./views/about.html',res);
                break;
            default:
                res.writeHead(404);
                res.write("Not Found!!");
                res.end();
        }
    }

}