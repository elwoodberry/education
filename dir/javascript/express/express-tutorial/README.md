# Express Tutorial
An overview of Express JS  
**Author**: [Derek Banas](https://www.youtube.com/user/derekbanas)  
**URL**: [Video](https://youtu.be/xDCKcNBFsuI)  
**Duration**: 52:01   
**Donate to Author**: [Patreon](https://www.patreon.com/derekbanas)  

## Table Of Contents
1. [Installation (Windows/Mac)](#installation-windows) (00:00)
1. [Create Template Files](#create-template-files)
1. [Build Entry Point](#build-entry-point) (10:05)
1. [Middleware](#middleware) (23:03)
1. [404 and 500 Error Routes](#404-and-500-error-routes) (25:48)
1. [Body Parser](#body-parser) (27:49)
1. [Process The Form](#process-the-form) (32:36)
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
##### Disable header from containing information about the server
```
app.disable('x-powered-by');
```
##### Define view engine
```
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
```
##### Define Port that application will run on
```
app.set('port', process.env.PORT || 3000);
```
##### Allow access to static files
```
app.use(express.static(__dirname + '/public'));
```
##### Define Root routes
```
app.get('/', (req, res) => {
  res.render('index');
});
```
##### Listen on open port
```
app.listen(app.get('port'), () => {
  console.log('Listening Port: ' + app.get('port'));
});
```
##### Define About Route
```
app.get('/about', (req, res) => {
  res.render('about');
});
```

## MIDDLEWARE
##### Display URL in the console.
Learn more about [next](http://www.link.com) function.  
The next function looks for the next proper route.
Receives a request object and a response object and a next function.
```
app.use((req, res, next) => {
    console.log('Looking for URL: '+ req.url);
    next();
});
```
##### Throw an error for route that does not exist.
User has looked for a URL that does not exist.
```
app.get('/junk', (req, res, next) => {
  console.log('Tried to access /junk.');
  throw new Error('/junk' does not exist.)
});
```
##### Catch an error
```
app.use((err, req, res, next) => {
  console.log('Error:' + err.message);
  next();
});
```

## 404 AND 500 ERROR ROUTES

##### 404
```
app.use((req, res) => {
  // Response type is text and HTML
  res.type('text/html');
  // Response status is 404
  res.status(404);
  // Render the 404 page.
  res.render('404');
});
```

##### 500
```
app.use((err, req, res, next) => {
  // Log the error to the console
  console.error(err.stack);
  // Response status is 500
  res.status(500);
  // Render the 500 page
  res.render('500');
})
```

## BODY PARSER

1. Create a new view. "contacts.jade"
1. Install [Body Parser](http://www.link.com)
1. Install [Formidable](http://www.link.com)
1. Install [Cookie Parser](http://www.link.com)

##### Set up Body parser
```
app.use(require('body-parser').urlencoded({extended: true}));
```
##### Set up Formidable
```
const formidable = require('formidable');
```
##### Create a credentials file to secure cookies and help with sessions
In the project root, create 'credentials.js'
```
module.exports = {cookieSecret: 'sitting sideways poised in a daze',};
```
Reference the credentials file in the app.js
```
const credentials = require('./credentials');
```
Allow app to use cookies
```
app.use(require('cookie-parser')(credentials.cookieSecret));
```
Create a route to the contact view
```
app.get('/contact', (req, res) => {
  res.render('contact', {csrf: 'CSRF Token Here'});
});
```
Create a route to a thank you view
```
app.get('/thankyou', (req, res) => {
  res.render('thankyou');
});
```
Create the Thank You view


## PROCESS THE FORM
