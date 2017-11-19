console.log('External API');

/*
`
<div class="col-sm-3">
  <div class="card">
    <img src="" alt="" class="card-img-top">
    <div class="card-body">
      <h4 class="card-title">User Name</h4>
      <a target="_blank" class="btn btn-primary">Launch Profile</a>
    </div>
  </div>
</div>
`
*/

document.getElementById('button').addEventListener('click', loadUsers);

function loadUsers(){
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.github.com/users', true);

  xhr.onload = function(){
    if(this.status == 200){
      let users = JSON.parse(this.responseText);
      let output = '';
      let outputError = `
      <div class="col-sm-12">
        <h4>File Not Found.</h4>
      </div>
      `;

      for(var i in users){
        output += `
        <div class="col-sm-3">
          <div class="card">
            <img src="${users[i].avatar_url}" alt="${users[i].login}" class="card-img-top">
            <div class="card-body">
              <h4 class="card-title">${users[i].login}</h4>
              <a href="${users[i].html_url}" target="_blank" class="btn btn-primary">Launch Profile</a>
            </div>
          </div>
        </div>
        `;
      }

      document.getElementById('githubUsers').innerHTML = output;

    }else if(this.status == 404){
      document.getElementById('githubUsers').innerHTML = outputError;
    }


  }

  xhr.send();
}
