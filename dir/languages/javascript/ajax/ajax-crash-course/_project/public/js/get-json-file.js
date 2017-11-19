console.log('Get A JSON File!');

// Add An Event Listener for the click.
document.getElementById('button1').addEventListener('click', loadUser);

// Load User Function
function loadUser(){

  const xhr = new XMLHttpRequest();

  // Open
  xhr.open('GET', 'user.json', true);

  // Check ReadyState
  console.log('JSON.chk1: READYSTATE: ', xhr.readyState);

  // On Load
  xhr.onload = function(){

    console.log('JSON.chk2: READYSTATE: ', xhr.readyState);

    // Check for status of the response
    if(this.status == 200){
      console.log('Everything Is OK!');
      console.log(this.responseText);
      document.getElementById('jsonUser').innerHTML = this.responseText;

    }else if(this.status == 404){
      document.getElementById('jsonUser').innerHTML = 'File Not Found.';
    }
  }

  // Sends a request
  xhr.send();
}
