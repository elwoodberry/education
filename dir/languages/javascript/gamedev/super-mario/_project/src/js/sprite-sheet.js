export default class SpriteSheet {
  constructor(image, width, height){
    this.image = image;
    this.width = width;
    this.height = height;
    this.tiles = new Map();
  }

  define(name, x, y){
    // Save this subset image to a buffer
    // Instead of drawing from the big image everytime
    // The buffer will keep the image.

    //Create the canvas element with javascript
    const buffer = document.createElement('canvas');

    // Set the width and height
    buffer.width = this.width;
    buffer.height = this.height;

    // Draw the subset of this image on this canvas
    buffer
      .getContext('2d')
      .drawImage(
        this.image,
        x * this.width,
        y * this.height,
        this.width,
        this.height,
        0,
        0,
        this.width,
        this.height
      );

    // Save this buffer in a map.
    // Add buffer to the map using the name
    this.tiles.set(name, buffer);
  }

  // The DRAW method
  draw(name, context, x, y){
    // Retrieve the buffer from the tileset
    const buffer = this.tiles.get(name);
    //Draw the buffer at x and y
    context.drawImage(buffer, x, y);

  }
}
