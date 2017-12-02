# JavaScript ES6 / ES2015 - [02] Compile ES6 With Babel
**Author**: [Traversy Media](https://www.youtube.com/user/TechGuyWeb)  
**URL**: [Video](https://youtu.be/sZ0z7B7QmjI)  
**Duration**: 11:26  
**Donate to Author**: [Patreon](https://www.patreon.com/traversymedia)  

## Table Of Contents
1. [An Introduction To Babel](#an-introduction-to-babel) (00:00)
1. [Getting Started](#getting-started) (06:30)
## +

Visit [Babel](https://babeljs.io/) and click on **Try It Out**  
View [Compatibility Chart](https://kangax.github.io/compat-table/es6/) at Kangax  

# An Introduction To Babel
Using LET
```
let test = "Hello"
```
Compiles to...
```
"use strict";

var test = "Hello";
```
Define A Class With A Method
```
class User{
	test(){
    }
}
```
Compiles To...
```
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
  function User() {
    _classCallCheck(this, User);
  }

  _createClass(User, [{
    key: "test",
    value: function test() {}
  }]);

  return User;
}();
```


## Getting Started
Create A Project Directory
```
$ mkdir _project
```
Create Package.JSON
```
$ npm init
```
Install [babel-cli](https://www.npmjs.com/package/babel-cli) and [babel-preset-es2015](https://www.npmjs.com/package/babel-preset-es2015)
```
$ npm install --save-dev babel-cli babel-preset-es2015
```
Create the .babelrc
```
$ touch .babelrc
```
Add the es2015 preset to the .babelrc
```
{
  "presets": [
    "es2015"
  ]
}
```
Create 'src' directory
Create 'main.js' in the src directory
Create a 'public' folder
Add build script to Package.JSON
```
"scripts": {
  "build": "babel src -d public/js"
}
```
Add preset build script
```
"scripts": {
  "build": "babel --presets es2015 src -d public/js"
},
```


## SRC/JS/MAIN.JS

Using LET
```
let test = "Hello"
```

Run build script
```
$ npm run build
```


Compiles to this located in the public/js/main.js
```
"use strict";

var test = "Hello";
```
