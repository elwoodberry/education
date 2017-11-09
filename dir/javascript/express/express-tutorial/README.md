# Express Tutorial
An overview of Express JS  
**Author**: [Derek Banas](https://www.youtube.com/user/derekbanas)  
**URL**: [Video](https://youtu.be/xDCKcNBFsuI)  
**Duration**: 26:14  
**Donate to Author**: [Patreon](https://www.patreon.com/derekbanas)  

## Table Of Contents
1. [Installation (Windows/Mac)](#installation-windows) (00:00)
1. [Create Template Files](#create-template-files)
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


### CREATE TEMPLATE FILES
1. Create: 'views > layouts > main.jade' file
1. Create: 'views > home.jade' file
1. Create: 'views > about.jade' file
1. Create: 'views > 400.jade' file
1. Create: 'views > 500.jade' file
1. Create: 'views > partials > head.jade' file
1. Define the head partial
1. Create: 'views > partials > navbar.jade' file

### BUILD ENTRY POINT
##### Require Express, Path & Jade
```
const express = require('express');
const path = require('path');
const jade = require('jade');
```
##### Define 'app' variable as the Express function.
```
const app = express();
```
##### Disable 'x-powered-by'
```
app.disable('x-powered-by');
```
##### Define view engine
```
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
```
