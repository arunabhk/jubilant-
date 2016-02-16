(function() {
    console.log("Welcome to Jubilant Pancake");

    var server = io();

    $('body').on('change keyup paste', 'textarea', function() {
        server.emit('message', this.value);
    });

    server.on('message', function(message) {
        $('textarea').val(message);
    });

})();
