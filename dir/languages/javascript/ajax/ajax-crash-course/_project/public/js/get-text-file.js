console.log('Get A Text File!');

document.getElementById('button').addEventListener('click', loadText);

function loadText(){
  console.log('Test The Click');
  const xhr = new XMLHttpRequest();

  // OPEN - type of request, url/file of request, async(boolean)
  xhr.open('GET', 'sample-text__00001.txt', true);

  xhr.onreadystatechange = function(){
    // Check for ready state
    if(this.readyState == 4 && this.status == 200){
      console.log(this.responseText);
    }
  }

  // Sends a request
  xhr.send();
}
