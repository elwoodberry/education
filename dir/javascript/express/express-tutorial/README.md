# Express Tutorial
An overview of Express JS  
**Author**: [Derek Banas](https://www.youtube.com/user/derekbanas)  
**URL**: [Video](https://youtu.be/xDCKcNBFsuI)  
**Duration**: 26:14  
**Donate to Author**: [Patreon](https://www.patreon.com/derekbanas)  

## Table Of Contents
1. [Installation (Windows)](#installation-windows) (00:00)
1. [Installation (Mac)](#installation-mac) (05:37)
1. [Build Entry Point](#build-entry-point) (10:05)
## +

### Stack
1. [Node](http://www.nodejs.org)
1. [Express Handlebars](https://www.npmjs.com/package/express-handlebars)
1. [Express](https://expressjs.com/)
1. [Bootstrap](http://getbootstrap.com/)

**Modification Challenge**
Update the project application for this tutorial.
1. [ECMA 6](https://en.wikipedia.org/wiki/ECMAScript)
1. [Jade](http://jade-lang.com/)

### INSTALLATION (Windows)

Download Node.

Install Node
```
$
```

Create Package.JSON File
```
$ npm init
```

Add Private to package file. This prevents errors.
```
{
  "private": true
}
```

Install Express
```
$ npm install --save express
```

Install Handlebars
```
$ npm install --save express-handlebars
```

Basic Implementation
```
const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.send('Express Works!')
});

app.listen(app.get('port'), () => {
  console.log('Express Started. Press Ctrl + C to terminate.');
});
```

Run App
```
$ node app.js
```


### INSTALLATION (Mac)

Folder Structure
```
app.js  
package.json  
[public]  
  |_ [img]
    |_ image-01.png
    |_ image-02.png

  randomfile.txt

[views]
  |_ [layouts]
  |_ [partials]  

```


### BUILD ENTRY POINT

1. Disable header from containing information about the server
    ```
    app.disable('x-powered-by');
    ```
1. Create: 'views > layouts > main.jade' file
1. Create: 'views > home.jade' file
1. Create: 'views > about.jade' file
1. Create: 'views > 400.jade' file
1. Create: 'views > 500.jade' file
1. Create: 'views > partials > head.jade' file
1. Define the head partial
    ```
    meta(charset='UTF-8')
    // If IE use the latest rendering engine
    meta(http-equiv='X-UA-Compatible' content='IE=edge')
    // Set the page to the width of the device and set the zoom level
    meta(name='viewport' content='width = device-width, initial-scale = 1')
    // Include BootStrap 4
    link(rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous")
    // jQuery ???
    script(src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js")

    ```
1. Create: 'views > partials > navbar.jade' file
1. Define the view engine
