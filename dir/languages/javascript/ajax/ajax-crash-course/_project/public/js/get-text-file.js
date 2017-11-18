console.log('Get A Text File!');

document.getElementById('button').addEventListener('click', loadText);

function loadText(){
  console.log('Test The Click');
  const xhr = new XMLHttpRequest();

  // OPEN - type of request, url/file of request, async(boolean)
  xhr.open('GET', 'sample-text__00001.txt', true);

  xhr.onload = function(){

    // Check for status of the response
    if(this.status == 200){
      // Get response from file.
      console.log(this.responseText);
    }
  }

  // Sends a request
  xhr.send();
}
