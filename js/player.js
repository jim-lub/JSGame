/* jshint esversion: 6 */
class Player {
  constructor() {
    this.pos = {
      x: 50,
      y: 50
    };

    this.motion = {
      hor: 0,
      ver: 0
    };

    this.DEFAULTS = {
      width: 50,
      height: 50,
      actions: ['idle', 'run', 'jump'],
      idle: {},
      run: {
        velocity: {left: -3, right: 3}
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

  update() {
    this.pos.x += this.motion.hor;
    this.pos.y += this.motion.ver;
  }

  render(ctx) {
    this.update();

    ctx.fillRect(this.pos.x, this.pos.y, this.DEFAULTS.width, this.DEFAULTS.height);
  }
}
