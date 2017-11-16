$(document).ready(() => {

$('.vacation').on('click', 'button', function(){
  let vacation = $(this).closest('.vacation');
  let amount = vacation.data('price');
  let price = $('<button class="btn btn-primary">Starts @ $' + amount + '</button>');
  vacation.append(price);
  $(this).remove();
});

$('#filters').on('click', '.onsale-filter', function(){
	$('.vacation').filter('.onsale').addClass('highlighted');
});

$('#filters').on('click', '.expiring-filter', function(){
	$('.vacation').filter('.expiring').addClass('highlighted');
});

});
