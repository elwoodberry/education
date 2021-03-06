
![Layout](https://raw.github.com/elwoodberry/education/master/_img/headers/890x275_header__ajax-crash-course.png)
**Author**: [Traversy Media](https://www.youtube.com/user/TechGuyWeb)  
**URL**: [Video](https://youtu.be/82hnvUYY6QA)  
**Duration**: 01:09:42  
**Donate to Author**: [Patreon](https://www.patreon.com/traversymedia)  

## Table Of Contents
1. [What is AJAX](#what-is-ajax) (00:57)
1. [Diagram How it works](#diagram-how-it-works) (01:59)
1. [Basic idea of the web](#basic-idea-of-the-web) (00:00)
1. [With AJAX...](#with-ajax) (00:00)
1. [XmlHttpRequest (xhr) Object](#xmlhttprequest-xhr-object) (04:07)
1. [Libraries and Other Methods](#libraries-and-other-methods) (05:06)
1. [Get A Text File](#get-a-text-file)
1. [Get A JSON File](#get-a-json-file)
1. [External API](#external-api) (36:55)
1. [Working With PHP](#working-with-php) (45:10)
1. [Submit To Database(MYSQL)](#submit-to-database-mysql)(59:42)
## +


## What is AJAX
1. Asynchronous JavaScript & XML
   Its not a language, framework or a library. A set of web technologies to send and receive data from a web client to a server asynchronously.

   Its all done behind the scenes without having to reload the web page.

   XML is rarely used anymore. jQuery has taken its place. Will be working with JSON more so than XML.

1. Set of web technologies
1. Send & receive data asynchronously
1. Does not interfere with current web page
1. JSON has replaced XML for the most part



## Diagram: How it works
![Layout](https://raw.github.com/elwoodberry/education/master/_img/diagrams/ajax-crash-course__001.png)

## Basic idea of the web
[SERVER] > Common request & Response > [CLIENT]

1. You click (make a request) a link on a website.
1. A common request is sent to the server.
1. A common response is returned to the client(browser).
1. You request everything and you get everything.

## With AJAX...
[SERVER] > XmlHttpRequest > AJAX Engine > JS Call > [CLIENT]

1. Allows you to make the call to the server asynchronously in the background without having to reload the page.
1. Request is made with JavaScript or a library.
1. Response is returned in XML/JSON format
1. Request is made using the 'XmlHttpRequest' object.

## XmlHttpRequest (xhr) Object

1. API in the form of an object
   It has properties and methods attached to it.

1. Provided by the browser's JS environment
1. Methods transfer data between client/server
1. Can be used with other protocols then HTTP
1. Can work with data other than XML(JSON, plain text)


## Libraries and Other Methods
1. [jQuery](https://jquery.com/) - DOM manipulation library
1. [Axios](https://www.axios.com/) - Slim library
1. [SuperAgent](https://github.com/visionmedia/superagent) - Slim library
1. [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) - Baked into your favorite browser
1. [Prototype](http://prototypejs.org/) - Library
1. [Node HTTP](https://nodejs.org/api/http.html) - Node HTTP server

## Get A Text File
1. Create an HTML File
1. Add A Button
    ```
    button(id="button" class="btn btn-primary btn-lg" role="button") Get Text File!  
    ```
1. Add an event listener for a click on that button.
    ```
    document.getElementById('button').addEventListener('click', loadText);
    ```
1. Create a 'load text' function.
    ```
    function loadText(){

    }
    ```
1. **Test**: Console log the click
    ```
    console.log('Test The Click');
    ```
1. Create 'sample-text__00001.txt'
1. Create 'xhr' for XmlHttpRequest Object
    ```
    const xhr = new XMLHttpRequest();
    ```
    * **Make** The Request  
    * **Type** of Request  
    * **URL** of Request
1. Open Function
    Parameters (type, url/file, async)
    ```
    xhr.open('GET', 'sample-text__00001.txt', true);
    ```

1. Onload Function
    ```
    xhr.onload = function(){
      // Check for status of the response
      if(this.status == 200)
    }

    // Sends request
    xhr.send();
    ```
    Status
    * HTTP Statuses
    * 200: "OK"
    * 403: "Forbidden"
    * 404: "Not Found"

1. OnReadyStateChange Function
    ```
    xhr.onreadystatechange = function(){
      // Check for ready state
      if(this.readyState == 4 && this.status == 200){
        console.log(this.responseText);
      }
    }

    // Sends a request
    xhr.send();
    ```
    Ready State Values  
    * 0: Request not initialized
    * 1: Server Connection Established  
    * 2: Request Received  
    * 3: Processing Request  
    * 4: Request Finished and Response is ready

1. Check ReadyState 1
    ```
    ...
    xhr.open('GET', 'sample-text__00001.txt', true);

    // Check ReadyState
    console.log('READYSTATE: ', xhr.readyState);

    xhr.onload = function(){
    ...
    ```
1. OnLoad only executes on ReadyState 4
    ```
    ...
    xhr.open('GET', 'sample-text__00001.txt', true);

    // Check ReadyState
    console.log('READYSTATE: ', xhr.readyState);

    xhr.onload = function(){

      // Check ReadyState
      console.log('READYSTATE: ', xhr.readyState);
    ...
    ```
1. OnProgress (22:25)
    The readyState is always 3, Processing Request.  
    ```
    xhr.onprogress = function(){
      console.log('READYSTATE: ', xhr.readyState);
    }
    ```
1. OnError
    ```
    xhr.onerror = function(){
      console.log('Request Error...');
    }
    ```
1. Display response on the screen
    Create a div with id of 'textGoesHere'
    ```
    blockquote(class="blockquote")
      #textGoesHere.mb-0
    ```
    Get the element by id and change its inner HTML to the response text.  
    ```
    document.getElementById('textGoesHere').innerHTML = this.responseText;
    ```
1. Add a 404 status
    ```
    if(this.status == 200){
      ...
    }else if(this.status == 404){
      document.getElementById('textGoesHere').innerHTML = 'File Not Found.';
    }
    ```

## Get A JSON File
1. Create an HTML File
1. Create 'users.json' and 'user.json'
1. 'user.json'
    ```
    {
      "id": 1,
      "name": "Rick",
      "email": "rick@gmail.com"
    }
    ```
1. 'users.json'
    ```
    [
     ..an array of users
    ]
    ```
1. Create 'Get User' and 'Get Users' buttons
    ```
    p(class="lead")
      button(id="button1" class="btn btn-primary btn-lg" role="button") Get User
      button(id="button2" class="btn btn-primary btn-lg" role="button") Get Users
    ```
1. Add An Event Listener for the click.
    ```
    document.getElementById('button1').addEventListener('click', loadUser);
    ```
1. Create 'loadUser' function
    ```
    function loadUser(){

      const xhr = new XMLHttpRequest();

      // Open
      xhr.open('GET', 'user.json', true);

      // On Load
      xhr.onload = function(){

        // Check for status of the response
        if(this.status == 200){
          console.log(this.responseText);

        }else if(this.status == 404){
          document.getElementById('jsonUser').innerHTML = 'File Not Found.';
        }
      }

      // Sends a request
      xhr.send();
    }
    ```
1. Parse JSON Object
    ```
    let user = JSON.parse(this.responseText);
    ```
1. Output the object in the view
    ```
    let outputUser = '';
    outputUser += `
    <ul>
      <li><strong>Name</strong>: ${user.name}</li>
      <li><strong>Email</strong>: ${user.email}</li>
    </ul>
    `;
    ```
1. Output the array of Users
    ```
    document.getElementById('button1').addEventListener('click', loadUsers);
    ```
1. Create 'loadUsers' function
    ```
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
    ```
## External API
See [GitHub Users API](https://api.github.com/users)
```
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
```  
## Working With PHP
PHP file, 'load-php.php'.  
Cross domain resource sharing was a problem at first. Setting header of PHP file was the solution.
```
<?php

if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Check for GET variable
if(isset($_GET['name'])){
  echo 'GET: Your Name Is ' . $_GET['name'];
}

// Check for POST variable
if(isset($_POST['name'])){
  echo 'GET: Your Name Is ' . $_POST['name'];
}


```
Send a GET variable to the load-php.php file.
```
document.getElementById('getForm').addEventListener('submit', getName);

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
```
Send a POST variable to the load-php.php file.
```
document.getElementById('postForm').addEventListener('submit', postName);

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
```
## Submit To Database(MYSQL)
Create A Database
![Layout](https://raw.github.com/elwoodberry/education/master/_img/diagrams/ajax-crash-course__002.png)

Create A Table Called "Users" with 2 columns
![Layout](https://raw.github.com/elwoodberry/education/master/_img/diagrams/ajax-crash-course__003.png)

Column 1
```
{
  name: id,
  type: int,
  length: 11,
  default: none,
  nullIndex: primary
}
```
Column 2
```
{
  name: name,
  type: varchar,
  length: 100
}
```
