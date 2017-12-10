$(document).ready(function(){

  $('.trnstn-container').on('click', function(){
    $(this).toggleClass('clicked');
  });


  $('#kyfrm-anchor-04').on('click', function(){
    $('#kyfrm-element-04').toggleClass('is-paused');
  });

  $('#kyfrm-element-04').on('click', function(){
    $('#kyfrm-grid').append('<div class="grid-item">Grid Item</div>');
  });

});
