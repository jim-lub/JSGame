/* jshint esversion: 6 */
class Player {
  constructor() {
    this.pos = {
      x: 150,
      y: 150,
      dir: 'right'
    };

    this.motion = {
      hor: 0,
      ver: 0
    };

    this.hitbox = {
      offsetX: 12,
      offsetY: 35,
      width: 32,
      height: 35
    };

    this.actions = {
      idle: {active: true},
      run: {active: false},
      jump: {active: false},
      fall: {active: false},
      slide: {active: false},
      attack: {active: false}
    };

    this.DEFAULTS = {
      width: 90,
      height: 70,
      actions: ['idle', 'run', 'jump', 'fall', 'slide', 'attack'],
      idle: {},
      run: {
        acceleration: {left: -0.25, right: 0.25},
        speed: {left: 2.5, right: 2.5}
      },
      jump: {speed: -3},
      fall: {speed: 2},
      friction: 0.975,
      friction2: 0.994,
      gravity: 0.25
    };

    this.ctx = null;
  }

  setToActive(action) {
    this.actions.idle.active = false;
    this.actions.run.active = false;
    this.actions.jump.active = false;
    this.actions.fall.active = false;
    this.actions.slide.active = false;

    // set current action.active to true
    this.actions[action].active = true;
  }

  attack(toggle) {
    this.actions.attack.active = toggle;
  }

  idle() {
    this.setToActive('idle');
    // this.motion.hor = 0;
  }

  run(direction) {
    this.setToActive('run');
    this.pos.dir = direction;
    this.motion.hor += this.DEFAULTS.run.acceleration[direction] * this.DEFAULTS.friction;
  }

  jump() {
    if (this.motion.ver <= 0) this.setToActive('jump');
    this.motion.ver += this.DEFAULTS.jump.speed;
  }

  fall() {
    if (this.motion.ver >= 0) this.setToActive('fall');
    this.motion.ver += this.DEFAULTS.gravity * this.DEFAULTS.friction2;
  }

  init(ctx) {
    this.ctx = ctx;
    this.idle();
  }

  update() {
    if (!this.collision.hit('floor')) {
      this.fall();

      if (this.motion.ver < 0) {
        if (this.actions.jump.active && !this.actions.attack.active) this.animations.play('jump', this.pos.dir);
        if (this.actions.jump.active && this.actions.attack.active) this.animations.play('attack_jump', this.pos.dir);
      } else if (this.motion.ver > 0) {
        if (this.actions.fall.active && !this.actions.attack.active) this.animations.play('fall', this.pos.dir);
        if (this.actions.fall.active && this.actions.attack.active) this.animations.play('attack_jump', this.pos.dir);
      }
    } else {
      if (!this.actions.jump.active) this.motion.ver = 0;
      if (this.actions.run.active) {
        if (this.actions.run.active && !this.actions.attack.active) this.animations.play('run', this.pos.dir);
        if (this.actions.run.active && this.actions.attack.active) this.animations.play('attack_run', this.pos.dir);
      } else if (this.actions.attack.active) {
        this.idle();
        this.animations.play('attack', this.pos.dir);
      } else {
        this.idle();
        if (this.actions.idle.active) this.animations.play('idle', this.pos.dir);
      }
    }

    // if (this.actions.attack.active) this.animations.play('attack', this.pos.dir);

    this.motion.hor *= this.DEFAULTS.friction * this.DEFAULTS.friction;

    if (this.collision.hit('x')) this.motion.hor = 0;
    if (!this.collision.hit('x')) this.pos.x += this.motion.hor;
    if (!this.collision.hit('y')) this.pos.y += this.motion.ver;
  }

  render() {

    let currentFrame = this.animations.getRenderData();
    this.ctx.drawImage(currentFrame.sprite, currentFrame.data.sX, currentFrame.data.sY, currentFrame.data.sWidth, currentFrame.data.sHeight, this.pos.x + currentFrame.data.offsetX, this.pos.y + currentFrame.data.offsetY, currentFrame.data.sWidth, currentFrame.data.sHeight);
  }
}
