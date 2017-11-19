console.log('Get A Text File!');

document.getElementById('button').addEventListener('click', loadText);

function loadText(){
  console.log('Test The Click');
  const xhr = new XMLHttpRequest();

  // OPEN - type of request, url/file of request, async(boolean)
  xhr.open('GET', 'sample-text__00002.txt', true);

  // Check ReadyState
  console.log('READYSTATE: ', xhr.readyState);

  // On Progress
  xhr.onprogress = function(){
    console.log('READYSTATE: ', xhr.readyState);
  }

  xhr.onload = function(){
    console.log('READYSTATE: ', xhr.readyState);
    // Check for status of the response
    if(this.status == 200){
      console.log('Everything Is OK!');
      document.getElementById('textGoesHere').innerHTML = this.responseText;

    }else if(this.status == 404){
      document.getElementById('textGoesHere').innerHTML = 'File Not Found.';
    }
  }

  // On OnError
  xhr.onerror = function(){
    console.log('Request Error...');
  }

  // Sends a request
  xhr.send();
}
