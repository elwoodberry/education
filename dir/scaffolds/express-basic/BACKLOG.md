# Backlog | Express Basic Scaffold


## Package.JSON
Update the following:  
1. Project's name
    ```
    "name": "project",
    ```
1. ~~Script to include [NodeMon](https://www.npmjs.com/package/nodemon)~~
    ```
    "start": "nodemon ./bin/www"
    ```
1. Project description
    ```
    "description": "Simple customer management app.",
    ```
1. ~~Author~~
    ```
    "author": "Elwood Berry (me@elwoodberry.com)",
    ```
1. Repository URL
    ```
    "repository": {
      "type": "git",
      "url": "https://github.com/elwoodberry/education/tree/master/dir/javascript/express/expressjs-crash-course"
    },
    ```
1. Dependencies
    ```
    $ npm install --save jquery bootstrap
    ```
1. Dev Dependencies
    ```
    $ npm install --save-dev gulp gulp-sass
    ```

## App.js
1. ~~Delete Users route~~
    ```
    var users = require('./routes/users');
    ```
1. ~~Static directory to node modules~~
    ```
    app.use('/scripts', express.static(path.join(__dirname, 'node_modules')));
    ```



## Public Directory
Update the following:
1. ~~'images' to 'img'~~
1. ~~'javascripts' to 'js'~~
1. ~~'stylesheets' to 'css'~~
1. Add favicon


## Routes
Update the following:
1. Update the title of the 'index.js'
1. Delete 'users.js'
1. Meta data for 'index.js'
    ```
    title: "Title",
    description: "Description",
    robots: "follow",
    canonical: "http://domain.com",
    twitterImage
    ```

## Views
1. Add 'partials' directory
1. Add 'layouts' directory
1. Rename 'layout.pug' to 'default.pug'
1. Move 'default.pug' to the 'layouts' directory
1. The reference to the head.pug
    ```
    include ../partials/head.pug
    ```
1. Encapsulate the head to partials/head.pug
1. The block layout reference
    ```
    extends ./layouts/default.pug
    ```
