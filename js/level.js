/* jshint esversion: 6 */
class Level {
  constructor() {
    this.level = new Level_incaWorld();
    this.tiles = [];
  }

  build(ctx) {
    this.render(ctx, this.level.getBlock('layer1', '_1'), 0);
    this.render(ctx, this.level.getBlock('layer1', '_2'), 480);
  }

  render(ctx, block, offsetX) {
    this.resetCollisionArray();

    let map = block.map;
    let image = block.image;
    let tileset = block.tileset;

    for (let c = 0; c < map.cols; c++) {
      for(let r = 0; r < map.rows; r++) {

        let tile = this.getTile(map, c, r);

        if (tile !== 0) {
          let XY = tileset.get(tile);

          ctx.drawImage(
            image,
            XY[0],
            XY[1],
            map.tileSize,
            map.tileSize,
            c * map.tileSize + offsetX,
            r * map.tileSize,
            map.tileSize,
            map.tileSize
          );

          this.saveToCollisionArray(XY[0], XY[1], map.tileSize, map.tileSize);
        }
      }
    }
  }

  resetCollisionArray() {
    this.tiles = [];
  }

  saveToCollisionArray(x, y, width, height) {
    this.tiles.push({
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
