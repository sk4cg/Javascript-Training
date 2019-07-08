var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server); 

 var messages = [];
 var storeMessage = function(name, data) {
     messages.push({name: name, data: data});
     if (messages.length > 10) {
         messages.shift();
     }
 }

io.sockets.on('connection', function(client) {
    console.log('Client connected...');
    client.on('join', function(name){
        client.set('nickname', name);
        client.broadcast.emit("chat", name + " joined the chat");
        messages.forEach(function(message) {
            client.emit("messages", message.name + ": " + message.data);
        }); 
    });

    //client.emit('messages', { hello: 'world' }); //emits 'messages' event on the client/browser

    client.on("messages", function (message) {
        client.get("nickname", function(error, name) {
            client.broadcast.emit("messages", name + ": " + message);
            client.emit("messages", name + ": " + message);
            storeMessage(name, message);
        });
    });
});
app.get('/', function (req, res) { 
    res.sendFile(__dirname + '/index.html');
});

server.listen(8080);