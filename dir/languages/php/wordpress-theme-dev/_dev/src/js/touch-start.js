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
