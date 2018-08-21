$(document).ready(function(){
	$('#email').on('submit', function(err){
		$.post('/email/subscribe', $(this).serialize(), function (data){

		}).error(function(){

		});
		err.preventDefault();
	});
});