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
