# Express Tutorial
An overview of Express JS  
**Author**: [Derek Banas](https://www.youtube.com/user/derekbanas)  
**URL**: [Video](https://youtu.be/xDCKcNBFsuI)  
**Duration**: 26:14  
**Donate to Author**: [Patreon](https://www.patreon.com/derekbanas)  

## Table Of Contents
1. [Installation (Windows)](#installation-windows) (00:00)
1. [Installation (Mac)](#installation-mac) (05:37)
1. [](#) (10:05)
## +

### Stack
1. [Node](http://www.nodejs.org)
1. [Express Handlebars](http://www.link.com)
1. [Express](http://www.link.com)
1. [Bootstrap](http://www.link.com)

**Modifications**
1. [ECMA 6](http://www.link.com)
1. [Jade](http://www.link.com)

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
