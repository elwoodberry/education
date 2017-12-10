$(document).ready(function(){

  $('.trnstn-container').on('click', function(){
    $(this).toggleClass('clicked');
  });


  $('#kyfrm-anchor-04').on('click', function(){
    $('#kyfrm-element-04').toggleClass('is-paused');
  });

});
