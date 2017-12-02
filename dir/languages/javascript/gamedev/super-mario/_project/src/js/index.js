// IMPORT FILES
import SpriteSheet from './sprite-sheet.js';

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

function loadImage(url){
  return new Promise(resolve => {
    const image = new Image();
    image.addEventListener('load', () => {
      resolve(image);
    });
    image.src = url;
  });
}

loadImage('/img/tileset__nes-super-mario-bros.png')
.then(image => {
  const sprites = new SpriteSheet(image, 16, 16);
  sprites.define('ground', 0, 0);
  sprites.draw('ground', context, 45, 62);
});
