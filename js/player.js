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

    this.actions = {
      idle: {active: true},
      run: {active: false},
      jump: {active: false},
      fall: {active: false},
      attack: {active: false}
    };

    this.DEFAULTS = {
      width: 90,
      height: 70,
      actions: ['idle', 'run', 'jump', 'fall', 'attack'],
      idle: {},
      run: {
        acceleration: {left: -0.3, right: 0.3},
        speed: {left: 3, right: 3}
      },
      jump: {speed: -3},
      fall: {speed: 2},
      friction: 0.965,
      friction2: 0.994,
      gravity: 0.25
    };
  }

  setToActive(action) {
    // set all action.active to false
    this.DEFAULTS.actions.forEach(actions => {
      this.actions[actions].active = false;
    });

    // set current action.active to true
    this.actions[action].active = true;
  }

  isActive(action) {
    return (this.actions[action].active);
  }

  isTouchingFloor() {
    return (this.collision.hit('floor'));
  }

  idle() {
    this.setToActive('idle');
  }

  run(direction) {
    this.setToActive('run');
    this.pos.dir = (direction === 'right') ? 'right' : 'left';
    this.motion.hor += this.DEFAULTS.run.acceleration[direction] * this.DEFAULTS.friction;
  }

  attack() {
    this.setToActive('attack');
  }

  fall() {
    if (this.motion.ver > 0) this.setToActive('fall');
    this.motion.ver += this.DEFAULTS.gravity;
  }

  jump() {
    this.setToActive('jump');
    this.motion.ver += this.DEFAULTS.jump.speed;
  }

  update() {
    // Update the animation
    this.DEFAULTS.actions.forEach(action => {
      if (this.actions[action].active) this.animations.play(action, this.pos.dir);
    });

    if (this.isTouchingFloor()) this.motion.hor *= this.DEFAULTS.friction * this.DEFAULTS.friction; // friction on ground
    if (!this.isTouchingFloor()) this.motion.hor *= this.DEFAULTS.friction2 * this.DEFAULTS.friction2; // friction in air


    // Update the player position
    if (this.collision.hit('x')) this.motion.hor = 0;
    if (!this.collision.hit('x')) this.pos.x += this.motion.hor;
    if (!this.collision.hit('y')) this.pos.y += this.motion.ver;
  }

  render(ctx) {
    let currentFrame = this.animations.getRenderData();
    ctx.drawImage(currentFrame.sprite, currentFrame.data.sX, currentFrame.data.sY, currentFrame.data.sWidth, currentFrame.data.sHeight, this.pos.x + currentFrame.data.offsetX, this.pos.y + currentFrame.data.offsetY, currentFrame.data.sWidth, currentFrame.data.sHeight);
  }
}
