
// const http = require('http');
// var fs = require('fs');
// var url = require('url');

var express = require('express'); 
const app = express ();
app.use(express.json());
const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", 3000);
  });
app.get("/status", (request, response) => {
    const status = {
       "data" : {
        "name" : "U Ba ",
        "age":40
       }   
    };
    
    response.send(status);
 });



// http.createServer(function (req, res) {
//     var q = url.parse(req.url, true);
//     var filename = "."+q.pathname;
//     fs.readFile(filename, function(err, data) {
//         if (err) {
//             res.writeHead(404, {'Content-Type': 'text/html'});
//             return res.end("404 Not Found");
//           } 
//           res.writeHead(200, {'Content-Type': 'text/html'});
//           res.write(data);
//           return res.end();
//     });
// }).listen(8080);

