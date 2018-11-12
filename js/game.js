/* jshint esversion: 6 */

class Game {
  constructor() {
    this.ctx = document.getElementById('canvas').getContext('2d');

    this.ctrls = new Controls();

    this.player = new Player();
    // this.npc = new Npc();
    // this.enemy = new Enemy();

    this.level = new Level();

    // this.player.collision = new collisionDetection();

  }

  init() {

  }

  start() {
    window.requestAnimationFrame(this.render.bind(this));
  }

  render() {
    this.update();

    this.ctx.clearRect(0, 0, 1000, 600);

    this.player.render(this.ctx);
    this.level.build(this.ctx);

    window.requestAnimationFrame(this.render.bind(this));
  }

  update() {
    if (this.ctrls.isPressed('a') || this.ctrls.isPressed('d')) {

      if (this.ctrls.lastKeyPressed('a', 'd')) this.player.run('left');
      if (this.ctrls.lastKeyPressed('d', 'a')) this.player.run('right');

    } else {
      this.player.idle();
    }

    if (this.ctrls.isPressed('space')) console.log(this.level.tiles);
  }

}

const game = new Game();
game.init();
game.start();
