# GulpJS Crash Course
**Author**: [Traversy Media](https://www.youtube.com/user/TechGuyWeb)  
**URL**: [Video](https://youtu.be/1rw9MfIleEg)  
**Duration**: 33:41  
**Donate to Author**: [Patreon](https://www.patreon.com/traversymedia)  

## Table Of Contents
1. [What is Gulp?](#what-is-gulp) (00:00)
1. [Common Task](#common-task) (00:00)
1. [How Gulp Works](#how-gulp-works) (00:00)
1. [Gulp Verse Grunt](#gulp-verse-grunt) (00:00)
1. [Getting Started](#getting-started) (00:00)
1. [Top Level Functions](#Top Level Functions) (09:41)
1. [GULPFILE.JS](#gulpfilejs) (00:00)
1. [Copy Files](#copy-files) (00:00)
1. [Optimize Images](#optimize-images) (14:28)
1. [Minify JavaScript](#minify-javascript) (17:56)
## +


## What is Gulp?
* Open source JavaScript toolkit & task runner
* Front-end build system
* Built on Node.js and NPM
* Used for time consuming & repetitive tasks
* Hundreds of plugins available for different tasks.

## Common Task
* Minification of scripts and styles
* Concatenation
* Cache Busing
* testing, linting & optimazation
* Dev servers

## How Gulp Works
![Layout](https://raw.github.com/elwoodberry/education/master/_img/diagrams/gulp-crash-course__001.png)
"..Gulp is built on node streams. A node stream is a continuous flow of data that can be manipulated asynchronously. The stream facilitate the connection of file operations through a pipeline. A pipeline is a chain of processing elements. They are arranged so the output from one element is the input of the next element."

* Built on node streams
* Pipelines '/' .pipe() operator
* Single purpose plugins
* Files not affected until all plugins are processed.

## Gulp Verse Grunt
* Gulp is code over configuration
   "..tasks are coded using node style syntax."
* Grunt is configuration over code  
   "..tasks are configured inside of configuration object inside the grunt file."
* Gulp is easier to read than Grunt
* Gulp is based on streams, Grunt is based on files.  
See [Grunt](https://gruntjs.com/)

## Getting Started
Install Gulp globally
```
$ npm install -g gulp
```
Create project
```
$ touch _project
```
Create Package.JSON
```
$ npm init
```
Install Gulp Locally as a Dev Dependency
```
$ npm install --save-dev gulp
```
Create 'src' directory. Where the tasks live.
```
$ touch src
```
Create 'public' directory.
```
$ touch public
```
Create 'gulpfile.js'
```
$ touch gulpfile.js
```

## Top Level Functions
Define Tasks
```
gulp.task
```
Point to files to use
```
gulp.src
```
Points to folder to output
```
gulp.dest
```
Watch files and folders for changes
```
gulp.watch
```

## GULPFILE.JS

### Individual Task
Logs Message ('gulpfile.js')
```
gulp.task('message', function(){
  return console.log('Gulp is running...');
});
```
Command Line
```
gulp message
```
### Default Task
Change the name of the task to default ('gulpfile.js')
```
gulp.task('default', function(){
  return console.log('Gulp is running...');
});
```
Command Line
```
gulp
```

## Copy Files
Create HTML files
```
$ touch index.html about.html
```
gulpfile.js
```
// Copy HTML files
gulp.task('copyHtml', function(){
  gulp.src('src/*.html')
    .pipe(gulp.dest('public'));
});
```

## Optimize Images
See [Gulp Imagemin](https://www.npmjs.com/package/gulp-imagemin)
```
$ npm install --save-dev gulp-imagemin
```
gulpfile.js
```
// GULP
const gulp = require('gulp');

// IMAGEMIN
const imagemin = require('gulp-imagemin');

gulp.task('imageMin', () =>
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/img'))
);
```
Optimize image
```
gulp imageMin
```

## Minify JavaScript
Create a javascript file in the 'src' folder.
```
function init(){
  let biggie = "Christopher Wallace";
  let jayz = "Sean Carter";
  let nas = "Nasir Jones";
}
```
See [Gulp-Uglify](https://www.npmjs.com/package/gulp-uglify)
```
$ npm install --save-dev gulp-uglify
```
gulpfile.js
```
// GULP
const gulp = require('gulp');

// Gulp-Uglify
const uglify = require('gulp-uglify');


// MINIFY JS
gulp.task('minify', () => {
  gulp.src('src/js/*.js')
    .pipe(uglify())
      .pipe(gulp.dest('public/js'))
});
```
Minify JS
```
gulp minify
```
