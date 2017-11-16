$(document).ready(() => {
	$('#vacation').on('click', '.vacation', function(){
		$(this).toggleClass('highlighted');
		$(this).find('.price').show();
	});
});
