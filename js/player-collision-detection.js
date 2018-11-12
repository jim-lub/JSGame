/* jshint esversion: 6 */
class CollisionDetection {
  constructor() {
    this.x = false;
    this.y = false;
    this.collided = [];
  }

  hit(axis) {
    return (this[axis] === true) ? true : false;
  }

  listen({player, static_tiles}) {
    this.set_update({player});
    this.drawHitBox();
    this.drawCollisionPoints();

    this.x = (this.get_update({player, hitbox: this.hitbox, static_tiles}, 'x')) ? true : false;
    this.y = (this.get_update({player, hitbox: this.hitbox, static_tiles}, 'y')) ? true : false;
  }

  /*******************************************
  * CHECK FOR COLLISIONS
  *******************************************/
  get_update({player, hitbox, static_tiles}, axis) {

    let isColliding = [];

    static_tiles.forEach(tile => {
      if (this.get_boxCollision({player, hitbox, tile}, axis)) isColliding.push(true);
    });


    return (isColliding.length > 0) ? true : false;
  }

  get_boxCollision({player, hitbox, tile}, axis) {
    let isColliding = false;

    for (let i = 0; i < hitbox.collisionPoints.length; i++) {
      if (this.get_pointCollision({player, point: hitbox.collisionPoints[i], tile}, axis)) {
        isColliding = true;
        break;
      }
    }

    return (isColliding) ? true : false;
  }

  get_pointCollision({player, point, tile}, axis) {
    let verticalMotion = player.motion.ver;
    let horizontalMotion = player.motion.hor;
    if (axis === 'x') verticalMotion = 0;
    if (axis === 'y') horizontalMotion = 0;

    let collisionX = point.x + horizontalMotion >= tile.x && point.x + horizontalMotion <= tile.x + tile.width;
    let collisionY = point.y + verticalMotion >= tile.y && point.y + verticalMotion <= tile.y + tile.height;

    return (collisionX && collisionY) ? true : false;
  }

  /*******************************************
  * SET AND UPDATE COLLISION POINTS
  *******************************************/
  set_update({player}) {
    let _ = {
      x: player.pos.x,
      y: player.pos.y,
      w: player.size.width,
      h: player.size.height,
      p: {
        left: 5,
        top: 5,
        right: 5,
        bottom: 5
      }
    };

    let collisionPoints = [
      ...this.set_CollisionPointsOnCorners({_}),
      ...this.set_CollisionPointsOnEdge({_}, _.p.left, 'left'),
      ...this.set_CollisionPointsOnEdge({_}, _.p.top, 'top'),
      ...this.set_CollisionPointsOnEdge({_}, _.p.right, 'right'),
      ...this.set_CollisionPointsOnEdge({_}, _.p.bottom, 'bottom')
    ];

    this.hitbox = {
      pos: {x: _.x, y: _.y},
      size: {w: _.w, h: _.h},
      collisionPoints
    };
  }

  set_CollisionPointsOnEdge({_}, n, edge) {
    let collisionPoints = [];
    for (let i = 1; i < (n + 1); i++) {
      let offsetW, offsetH;
      if (edge == 'left') {
        offsetW = 0;
        offsetH = _.h * (i / (n + 1));
      }
      if (edge == 'top') {
        offsetW = _.w * (i / (n + 1));
        offsetH = 0;
      }
      if (edge == 'right') {
        offsetW = _.w;
        offsetH = _.h * (i / (n + 1));
      }
      if (edge == 'bottom') {
        offsetW = _.w * (i / (n + 1));
        offsetH = _.h;
      }

      collisionPoints.push({x: _.x + offsetW, y: _.y + offsetH});
    }
    return collisionPoints;
  }

  set_CollisionPointsOnCorners({_}) {
    let collisionPoints = [];

    collisionPoints.push(
      {x: _.x, y: _.y},
      {x: _.x, y: (_.y + _.h)},
      {x: (_.x + _.w), y: _.y},
      {x: (_.x + _.w), y: (_.y + _.h)}
    );

    return collisionPoints;
  }

  /****************************************
  *
  * TESTING ONLY
  *
  ****************************************/
  drawHitBox() {
    let x = Math.floor(this.hitbox.pos.x);
    let y = Math.floor(this.hitbox.pos.y);
    let w = Math.floor(this.hitbox.size.w);
    let h = Math.floor(this.hitbox.size.h);
    game.ctx.globalAlpha = 0.1;
    game.ctx.fillStyle = 'green';
    game.ctx.fillRect(x, y, w, h);
    game.ctx.fillStyle = 'black';
    game.ctx.globalAlpha = 1;
  }

  drawCollisionPoints() {
    game.ctx.fillStyle = 'orange';
    this.hitbox.collisionPoints.forEach(point => {
      game.ctx.fillRect(Math.floor(point.x - 1), Math.floor(point.y - 1), 2, 2);
    });
    game.ctx.fillStyle = 'black';
  }

}
