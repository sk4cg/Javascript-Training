var express = require("express");
var app = express();

app.use(express.static("public"));

var blocks = require('./routes/blocks');
app.use('/blocks', blocks);


app.listen(3000);

/*
var express = require('express');
var app = express();

var logger = require('./logger');
app.use(logger);

app.use(express.static('public')); //app.use adds middleware to the application stack 

var blocks = {
    'Fixed':'Fastened securely', 
    'Movable':"Can be moved", 
    "Rotating":'Moving in a circle'
};
app.get('/blocks/:name', function(request, response) {
    var name = request.params.name;
    var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
    var description = blocks[block];
    if (!description) {
        response.json(description);
    }
     
    
    
    
  //  var blocks = ['Fixed', 'Movable', 'Rotating'];
   // var description = blocks[request.params.name];
   // response.json(description);

   // if (request.query.limit >= 0) {
   //     response.json(blocks.slice(0, request.query.limit));
   // } else {
    //    response.json(blocks);
    //}

    //response.send(blocks);
    //response.redirect('/parts');

   // response.json(blocks);
});

app.listen(3000); 
*/