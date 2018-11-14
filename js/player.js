/* jshint esversion: 6 */
class Player {
  constructor() {
    this.pos = {
      x: 150,
      y: 150
    };

    this.motion = {
      hor: 0,
      ver: 0
    };

    this.DEFAULTS = {
      width: 41,
      height: 57,
      actions: ['idle', 'run', 'jump'],
      idle: {},
      run: {
        velocity: {left: -2, right: 2}
      },
      jump: {}
    };
  }

  idle() {
    this.motion.hor = 0;
    this.motion.ver = 0;
  }

  run(direction) {
    this.motion.hor = this.DEFAULTS.run.velocity[direction];
  }

  fall() {
    this.motion.ver += 0.7 * Math.PI / 10;
  }

  jump() {
    this.motion.ver += -4;
  }

  update() {
    if (!this.collision.hit('x')) this.pos.x += this.motion.hor;
    if (!this.collision.hit('y')) this.pos.y += this.motion.ver;
  }

  render(ctx) {
    ctx.globalAlpha = 1;
    let image = new Image();
    image.src = "assets/sprites/charTest_64.png";
    ctx.drawImage(image, this.pos.x, this.pos.y, 41, 57);
    // ctx.fillRect(this.pos.x, this.pos.y, this.DEFAULTS.width, this.DEFAULTS.height);
    ctx.globalAlpha = 1;
  }
}
