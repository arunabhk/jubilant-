$(function() {
    console.log("Welcome to Jubilant Pancake");

    var server = io();

    $('body').on('change keyup paste', 'textarea', function() {
        server.emit('message', this.value);
    });

    server.on('message', function(data) {
        $('textarea').val(data);
    });

	$('.jumbotron' + '.collaborators-list').show();

    $('img'+'.brandImage').hover(function(){
		$(this).attr('src','/images/logo2_white.gif');
	},function(){
		$(this).attr('src','/images/logo2.jpg');
	});

	$('button'+'.clear').click(function(){
		$('textarea').val('');
	});

	//$('#modal').modal('show');

	$('.collaborators-show').click(function(){
		$('.jumbotron' + '.collaborators-list').show();
	});

	$('.collaborators-hide').click(function(){
		$('.jumbotron' + '.collaborators-list').hide();
	});
});
