var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket) {
    console.log("A wild flapjack has appeared");
});

server.listen(8080, function() {
    console.log("Listening on Port 8080");
});
