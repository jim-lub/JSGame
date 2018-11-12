/* jshint esversion: 6 */
class Tileset {
  constructor() {
    this.name = null;
  }

  loadImage(src) {
    let image = new Image();
    image.src = src;
    return image;
  }
}

class Inca extends Tileset {
  constructor(size) {
    super();
    this.src = "assets/tiles/inca_front.png";
    this.image = this.loadImage(this.src);
    this._32x32 = new Map();
    this.map_32x32();
  }

  map_32x32() {
    this._32x32.set(1, [0, 0]);
    this._32x32.set(2, [32, 0]);
    this._32x32.set(3, [64, 0]);
    this._32x32.set(4, [96, 0]);
    this._32x32.set(5, [128, 0]);
    this._32x32.set(6, [0, 32]);
    this._32x32.set(7, [32, 32]);
    this._32x32.set(8, [64, 32]);
    this._32x32.set(9, [96, 32]);
    this._32x32.set(10, [128, 32]);
  }
}
