/* jshint esversion: 6 */
class Level {
  constructor() {
    this.level = new Level_incaWorld();
    this.static_tiles = [];
  }

  build(ctx) {
    this.resetCollisionArray();
    
    this.render(ctx, this.level.getBlock('layer1', '_1'), 0);
    this.render(ctx, this.level.getBlock('layer1', '_2'), 480);
  }

  render(ctx, block, offsetX) {

    let map = block.map;
    let image = block.image;
    let tileset = block.tileset;

    for (let c = 0; c < map.cols; c++) {
      for(let r = 0; r < map.rows; r++) {

        let tile = this.getTile(map, c, r);

        if (tile !== 0) {
          let XY = tileset.get(tile);
          let dX = c * map.tileSize + offsetX;
          let dY = r * map.tileSize;

          ctx.drawImage(
            image,
            XY[0],
            XY[1],
            map.tileSize,
            map.tileSize,
            dX,
            dY,
            map.tileSize,
            map.tileSize
          );

          this.saveToCollisionArray(dX, dY, map.tileSize, map.tileSize);
        }
      }
    }
  }

  resetCollisionArray() {
    this.static_tiles = [];
  }

  saveToCollisionArray(x, y, width, height) {
    this.static_tiles.push({
      x: x,
      y: y,
      width: width,
      height: height
    });
  }

  getTile(map, col, row) {
    return map.tiles[row * map.cols + col];
  }

}
