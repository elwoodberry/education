$(document).ready(() => {

// Event: Click
$('.confirmation').on('click', 'button', showTicket);

// Event: MouseEnter
$('.confirmation').on('mouseenter', 'h3', showTicket);

function showTicket(){
  $(this).closest('.confirmation').find('.ticket').slideDown();
}

// KeyUp
$('.vacation').on('keyup', '.quantity', function(){
  let price = +$(this).closest('.vacation').data('price');
  let quantity = +$(this).val();
  $('#total').text(price * quantity);
});

//
$('.vacation').on('click', '.expand', function(e){
  e.preventDefault(); 
  $(this).closest('.vacation').find('.comments').fadeToggle();
});


});
