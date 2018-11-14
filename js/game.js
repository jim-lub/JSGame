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
    this.level.build();

    window.requestAnimationFrame(this.render.bind(this));
  }

  render() {
    this.ctx.clearRect(0, 0, 1000, 600);
    this.level.static_tiles = [];

    let bgimage = new Image();
    bgimage.src = "assets/backgrounds/forest.png";
    this.ctx.drawImage(bgimage, 0, 0, 960, 480);

    this.level.render('block_01', 4, this.ctx);
    this.level.render('block_01', 5, this.ctx);

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

    if (this.player.collision.hit('y')) this.player.motion.ver = 0;

    this.player.update();

    if (!this.player.collision.hit('y')) {
      this.player.fall();

      if (this.ctrls.lastKeyPressed('a', 'd')) this.player.run('left');
      if (this.ctrls.lastKeyPressed('d', 'a')) this.player.run('right');

    } else if (this.ctrls.isPressed('a') && !this.player.collision.hit('x') || this.ctrls.isPressed('d') && !this.player.collision.hit('x')) {
      if (this.ctrls.lastKeyPressed('a', 'd')) this.player.run('left');
      if (this.ctrls.lastKeyPressed('d', 'a')) this.player.run('right');
      if (this.ctrls.isPressed('space') && this.player.collision.hit('y')) {
        this.player.jump();
      }
    }  else {
      if (this.ctrls.isPressed('space') && this.player.collision.hit('y')) {
        this.player.jump();
      } else {
        this.player.idle();
      }
    }

  }

}

const game = new Game();
game.init();
game.start();
