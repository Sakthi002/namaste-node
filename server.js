const http = require('http');

const server = http.createServer(function (req, res){
    
    if(req.url === '/getSecret') {
        res.end("No Secret!!!");
    }

    res.end("Hello worsld!");
});

server.listen(7777);