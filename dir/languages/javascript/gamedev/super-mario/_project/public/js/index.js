'use strict';

var _spriteSheet = require('./sprite-sheet.js');

var _spriteSheet2 = _interopRequireDefault(_spriteSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvas = document.getElementById('screen'); // IMPORT FILES

var context = canvas.getContext('2d');

function loadImage(url) {
  return new Promise(function (resolve) {
    var image = new Image();
    image.addEventListener('load', function () {
      resolve(image);
    });
    image.src = url;
  });
}

loadImage('/img/tileset__nes-super-mario-bros.png').then(function (image) {
  var sprites = new _spriteSheet2.default(image, 16, 16);
  sprites.define('ground', 0, 0);
  sprites.draw('ground', context, 45, 62);
});