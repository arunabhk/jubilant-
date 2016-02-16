var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', function(client) {
    console.log("A wild flapjack has appeared");

    client.on('message', function(message) {
        client.broadcast.emit('message', message);
    });
});

server.listen(8080, function() {
    console.log("Listening on Port 8080");
});
