(function() {
    console.log("Welcome to Jubilant Pancake");

    var server = io();
    var $textarea = $('textarea');

    $textarea.on('change keyup paste', function() {
        server.emit('message', this.value);
    });

    $('.clear').on('click', function() {
		$textarea.val('');
        $textarea.trigger('change');
	});

    server.on('message', function(data) {
        $textarea.val(data);
    });

})();
