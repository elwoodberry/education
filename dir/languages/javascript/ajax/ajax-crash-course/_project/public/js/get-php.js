console.log('GET PHP');

document.getElementById('button').addEventListener('click', getName);

function getName(){
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:8888/load-php.php?name=Wu+Tang', true);
  xhr.onload = function(){
    console.log(this.responseText);
  }

  xhr.send();
}
