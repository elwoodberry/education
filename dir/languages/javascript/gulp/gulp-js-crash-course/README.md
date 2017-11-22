# GulpJS Crash Course
**Author**: [Traversy Media](https://www.youtube.com/user/TechGuyWeb)  
**URL**: [Video](https://youtu.be/1rw9MfIleEg)  
**Duration**: 33:41  
**Donate to Author**: [Patreon](https://www.patreon.com/traversymedia)  

## Table Of Contents
1. [What is Gulp?](#what-is-gulp?) (00:00)
1. [Common Task](#common-task) (00:00)
1. [How Gulp Works](#how-gulp-works) (00:00)
1. [Gulp Verse Grunt](#gulp-verse-grunt) (00:00)
## +


## What is Gulp? (00:00)
* Open source JavaScript toolkit & task runner
* Front-end build system
* Built on Node.js and NPM
* Used for time consuming & repetitive tasks
* Hundreds of plugins available for different tasks.

## Common Task (00:00)
* Minification of scripts and styles
* Concatenation
* Cache Busing
* testing, linting & optimazation
* Dev servers

## How Gulp Works (02:24)
![Layout](https://raw.github.com/elwoodberry/education/master/_img/diagrams/gulp-crash-course__001.png)
"..Gulp is built on node streams. A node stream is a continuous flow of data that can be manipulated asynchronously. The stream facilitate the connection of file operations through a pipeline. A pipeline is a chain of processing elements. They are arranged so the output from one element is the input of the next element."

* Built on node streams
* Pipelines '/' .pipe() operator
* Single purpose plugins
* Files not affected until all plugins are processed.

## Gulp Verse Grunt (02:24)
* Gulp is code over configuration
   "..tasks are coded using node style syntax."
* Grunt is configuration over code  
   "..tasks are configured inside of configuration object inside the grunt file."
* Gulp is easier to read than Grunt
* Gulp is based on streams, Grunt is based on files.
See [Grunt](https://gruntjs.com/)
