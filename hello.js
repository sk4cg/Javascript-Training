/*
var EventEmitter = require('events').EventEmitter; 
var logger = new EventEmitter();
logger.on('error', function(message) {
    console.log('ERR: ' + message);
});
logger.emit('error', 'Spilled Milk');
logger.emit('error', 'Eggs Cracked');


var http = require('http');
http.createServer(function(request, response){
    response.writeHead(200);
    response.write("Hello this is a dog");
    request.pipe(response);
    response.end();
}).listen(8080);
 console.log('Listening on port 8080...');

 */

 //reading and writing a file 
 /*
 var fs = require('fs');
 var file = fs.createReadStream("readme.md"); 
 var newFile = fs.createWriteStream("readme_copy.md");
 file.pipe(newFile);
 */

 //thsi code reads readme.md and copies its info into readme_copy.md
var fs = require('fs');
var http = require('http');
var file = fs.createReadStream("readme.md"); 
http.createServer(function (request, response) {
    
    var newFile = fs.createWriteStream("readme_copy.md");
    request.pipe(newFile);
    request.on('end', function() {
        response.end('uploaded!');
    });
}).listen(8080);
console.log('Listening on port 8080...');
