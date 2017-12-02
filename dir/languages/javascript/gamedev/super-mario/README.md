# Code Super Mario in JS
**Author**: [Meth Meth Method](https://www.youtube.com/channel/UC8A0M0eDttdB11MHxX58vXQ)  
**URL(s)**  
1. [Backgrounds And Tiles](https://youtu.be/g-FpDQ8Eqw8) (25:34)

## Episode 01 : Backgrounds And Tiles
1. [Getting Started](#getting-started) (00:00)
## +


## Getting Started
In this episode we focus on backgrounds and tiles.  

Create a project folder
```
$ mkdir _project
```
Create Package.JSON
```
$ npm init
```
Create An App.js file
```
$ touch app.js
```
Install Express, Pug
```
$ npm install --save express pug
```
Install Dev Dependencies
```
$ npm install --save-dev gulp gulp-sass gulp-uglify gulp-concat
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
Create folders
```
$ mkdir public src views views/layouts views/partials
```


## Tilesets
Google [Super Mario Tileset](https://www.google.com/search?q=Super+Mario+Tileset&oq=Super+Mario+Tileset&aqs=chrome..69i57j0l5.988j0j7&sourceid=chrome&ie=UTF-8)  


## Create An API (09:00)
Create A Variable for tileset with set size
Define Ground with location
Draw ground on context (tileset on canvas)

## Create The Class

The Constructor  
Takes three parameters(image, width, height)
```
constructor(image, width, height){
  // Save the arguments as properties
  this.image = image;
  this.width = width;
  this.height = height;
}
```
Implement the 'DEFINE' method.  
Takes three parameters(x,y,z)
```

```
