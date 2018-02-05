console.log('Scripts are running...');

// GO
// Takes 2 arguements.
// Location: The id of the slide you are currently on.
// Destination: The id of where you would like to go.
// Sample: <a onclick('#slide1', '#slide2')>click</a>

function go(location, destination){

  $(location).addClass('hideMe');
  $(location).removeClass('active');

  $(destination).removeClass('hideMe');
  $(destination).addClass('active');
}

// TOUCH START
// Make sure I am always centered. No matter what my content is.
(function(){
  "use strict"

  let windowHeight = $(window).height();

  let touchStart = $('#touch-start'),
      tchStrt_height = $('#touch-start').height();

  let tchStrt_padding = (windowHeight - tchStrt_height) / 2;

  touchStart.css('top', tchStrt_padding);

  console.log(windowHeight);
  console.log(tchStrt_height);
  console.log(tchStrt_padding);
  
}());
