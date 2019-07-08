/*
var express = require ('express');
var app = express();
app.get('/', function (request, response) {
    response.sendFile(__dirname + "/index.html");
}); 
app.listen(8080);
*/

//express routes 
var request = require('request');
var url = require('url');
app.get('/tweets/:username', function(req, response) {
    var username = req.params.username;
    options = {
        protocol: "http:", 
        host: 'api.twitter.com', 
        pathname: '/1/statuses/user_timeline.json', 
        query: {screen_name: username, count: 10}
    }
    var twitterURL = url.format(options);
    request(twitterUrl).pipe(response);

});