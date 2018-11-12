/* jshint esversion: 6 */

class Game {
  constructor() {
    this.ctx = document.getElementById('canvas').getContext('2d');

    this.ctrls = new Controls();

    this.player = new Player();
    // this.npc = new Npc();
    // this.enemy = new Enemy();

    this.level = new Level();

    this.player.collision = new CollisionDetection();

  }

  init() {

  }

  start() {
    window.requestAnimationFrame(this.render.bind(this));
  }

  render() {
    this.ctx.clearRect(0, 0, 1000, 600);

    this.update();

    this.player.render(this.ctx);
    this.level.build(this.ctx);

    window.requestAnimationFrame(this.render.bind(this));
  }

  update() {
    this.player.collision.listen({
      player: {
        pos: {x: this.player.pos.x, y: this.player.pos.y},
        motion: {hor: this.player.motion.hor, ver: this.player.motion.ver},
        size: {width: this.player.DEFAULTS.width, height: this.player.DEFAULTS.height}
      },
      static_tiles: this.level.static_tiles
    });

    if (this.ctrls.isPressed('a') && !this.player.collision.hit('x') || this.ctrls.isPressed('d') && !this.player.collision.hit('x')) {

      if (this.ctrls.lastKeyPressed('a', 'd')) this.player.run('left');
      if (this.ctrls.lastKeyPressed('d', 'a')) this.player.run('right');

    } else {
      if (this.player.collision.hit('y')) {
        this.player.idle();
      } else {
        this.player.fall();
      }
    }

    this.player.update();

    if (this.ctrls.isPressed('space')) console.log(this.level.static_tiles);
  }

}

const game = new Game();
game.init();
game.start();
