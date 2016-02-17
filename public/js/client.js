(function() {
    console.log("Welcome to Jubilant Pancake");

    var server = io();
    $document = $(document);

    $document.on('change keyup paste', 'textarea', function() {
        server.emit('message', this.value);
    });

    $document.on('click', '.clear', function() {
        var $textarea = $('textarea');
		$textarea.val('');
        $textarea.trigger('change');
	});

    server.on('message', function(data) {
        $('textarea').val(data);
    });

})();
