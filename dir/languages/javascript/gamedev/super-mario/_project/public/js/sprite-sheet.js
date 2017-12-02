'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpriteSheet = function () {
  function SpriteSheet(image, width, height) {
    _classCallCheck(this, SpriteSheet);

    this.image = image;
    this.width = width;
    this.height = height;
    this.tiles = new Map();
  }

  _createClass(SpriteSheet, [{
    key: 'define',
    value: function define(name, x, y) {
      // Save this subset image to a buffer
      // Instead of drawing from the big image everytime
      // The buffer will keep the image.

      //Create the canvas element with javascript
      var buffer = document.createElement('canvas');

      // Set the width and height
      buffer.width = this.width;
      buffer.height = this.height;

      // Draw the subset of this image on this canvas
      buffer.getContext('2d').drawImage(this.image, x * this.width, y * this.height, this.width, this.height, 0, 0, this.width, this.height);

      // Save this buffer in a map.
      // Add buffer to the map using the name
      this.tiles.set(name, buffer);
    }

    // The DRAW method

  }, {
    key: 'draw',
    value: function draw(name, context, x, y) {
      // Retrieve the buffer from the tileset
      var buffer = this.tiles.get(name);
      //Draw the buffer at x and y
      context.drawImage(buffer, x, y);
    }
  }]);

  return SpriteSheet;
}();

exports.default = SpriteSheet;