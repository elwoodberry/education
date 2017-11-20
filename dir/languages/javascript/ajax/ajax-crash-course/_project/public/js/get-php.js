console.log('GET PHP');

document.getElementById('button').addEventListener('click', getName);
document.getElementById('getForm').addEventListener('submit', getName);
document.getElementById('postForm').addEventListener('submit', postName);

function getName(e){

  e.preventDefault();

  let name = document.getElementById('name1').value;

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:8888/load-php.php?name=' + name, true);
  xhr.onload = function(){
    console.log(this.responseText);
    document.getElementById('displayName').innerHTML = 'Your Name Is ' + name + '!';
  }


  xhr.send();
}

function postName(e){

  e.preventDefault();

  let name = document.getElementById('name2').value;
  let params = "name=" + name;

  const xhr = new XMLHttpRequest();

  xhr.open('POST', 'http://localhost:8888/load-php.php', true);

  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  xhr.onload = function(){
    console.log(this.responseText);
    document.getElementById('displayName').innerHTML = name + ', You have been submitted!';
  }

  xhr.send(params);
}
