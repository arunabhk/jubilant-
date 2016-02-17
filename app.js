var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));

io.on('connection', function(client) {
    console.log("A wild flapjack has appeared");

    client.on('message', function(message) {
        client.broadcast.emit('message', message);
    });
});

server.listen(
    process.env.VCAP_APP_PORT || 8080,
    process.env.VCAP_APP_HOST || 'localhost',
    function() {
        var host = this.address().address;
        var port = this.address().port;
        console.log("Listening at http://%s:%s", host, port);
    }
);
