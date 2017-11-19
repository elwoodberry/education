console.log('Get A JSON File!');

// Add An Event Listener for the click(s).
document.getElementById('button1').addEventListener('click', loadUser);
document.getElementById('button2').addEventListener('click', loadUsers);

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
      // console.log('Everything Is OK!');
      // console.log(this.responseText);
      let user = JSON.parse(this.responseText);

      let outputUser = '';
      outputUser += `
      <ul class="list-unstyled">
        <li><strong>Name</strong>: ${user.name}</li>
        <li><strong>Email</strong>: ${user.email}</li>
      </ul>
      `;

      document.getElementById('jsonUser').innerHTML = outputUser;

    }else if(this.status == 404){
      document.getElementById('jsonUser').innerHTML = 'File Not Found.';
    }
  }

  // Sends a request
  xhr.send();
}

// Load Users Function
function loadUsers(){
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'users.json', true);
  xhr.onload = function(){
    if(this.status == 200){
      let users = JSON.parse(this.responseText);
      let outputUsers = '';

      // FOR loop
      for(var i in users){
        outputUsers += `
        <ul class="list-unstyled">
          <li><strong>Name</strong>: ${users[i].name}</li>
          <li><strong>Email</strong>: ${users[i].email}</li>
        </ul>
        `;
      }

      document.getElementById('jsonUsers').innerHTML = outputUsers;

    }else if(this.status == 404){
      document.getElementById('jsonUsers').innerHTML = 'File Not Found.';
    }
  }

  xhr.send();
}
