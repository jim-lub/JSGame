/* jshint esversion: 6 */

class Game {
  constructor() {
    this.CFG = {
      assets: new Cfg_Assets(),
    };
    this.ctx = document.getElementById('canvas').getContext('2d');

    this.ctrls = new Controls();

    this.player = new Player();
    // this.npc = new Npc();
    // this.enemy = new Enemy();

    this.level = new Level();

    this.player.animations = new PlayerAnimations();
    this.player.collision = new CollisionDetection();

    this.assets = {
      sprites: {player: {}},
      tilesets: {},
      backgrounds: {}
    };
  }

  /*******************************************
  * preload assets, initialize and start game
  *******************************************/
  loadImage(src) {
    return new Promise((resolve, reject) => {
      let image = new Image();
      image.src = src;
      resolve(image);
    });
  }

  preloadAssets(type, objName) {
    return new Promise((resolve, reject) => {
      let promises = this.CFG.assets[type]()[objName].map(obj => {
        return this.loadImage(`assets/${obj.folder}${obj.file}`)
          .then(image => {
            this.assets[type][objName][`${obj.name}`] = image;
          })
          .catch(e => console.log(e));
      });

      Promise.all(promises).then(() => resolve());
    });
  }

  init() {
    let assets = [this.preloadAssets('sprites', 'player')];

    Promise.all(assets)
      .then(() => {
        this.player.animations.init(this.assets.sprites.player);
        this.player.init(this.ctx);
        this.level.init();
      })
      .then(() => {
        this.start();
      })
      .catch(e => console.log(e));
  }

  start() {
    window.requestAnimationFrame(this.loop.bind(this));
  }

  /*******************************************
  * gameloop: update and render
  *******************************************/
  loop() {
    this.update();
    this.render();

    window.requestAnimationFrame(this.loop.bind(this));
  }

  render() {
    this.ctx.clearRect(0, 0, 1280, 640);
    let bgimage = new Image();
    bgimage.src = "assets/backgrounds/forest-castle.png";
    this.ctx.drawImage(bgimage, 0, 0, 1280, 640);

    this.player.collision.drawHitBox();
    this.player.collision.drawCollisionPoints();

    this.level.render('block_01', 4, this.ctx, 0, 0);
    this.level.render('block_01', 5, this.ctx, 0, 0);
    this.level.render('block_02', 4, this.ctx, 640, 0);
    this.level.render('block_02', 5, this.ctx, 640, 0);


    this.player.render();
  }

  update() {
    if (this.player.collision.hit('floor') && this.ctrls.isPressed('a')) this.player.run('left');
    if (this.player.collision.hit('floor') && this.ctrls.isPressed('d')) this.player.run('right');

    if (this.player.collision.hit('floor') && this.ctrls.isPressed('space')) this.player.jump();


    // if (this.ctrls.isPressed('d')) this.player.run('right');
    // if (this.ctrls.isPressed('a')) this.player.run('left');
    // if (this.ctrls.isPressed('space') && this.player.collision.hit('floor')) this.player.jump();
    // if (this.ctrls.isPressed('w')) this.player.setToActive('fall', null);
    // if (this.ctrls.isClicked('leftClick')) this.player.attack(true);
    // if (this.ctrls.isReleased('leftClick')) this.player.attack(false);

    if (this.player.collision.hit('y')) this.player.motion.ver = 0;

    this.player.collision.listen({
      player: {
        pos: {x: this.player.pos.x, y: this.player.pos.y},
        motion: {hor: this.player.motion.hor, ver: this.player.motion.ver},
        size: {width: this.player.DEFAULTS.width, height: this.player.DEFAULTS.height},
        hitbox: this.player.hitbox
      },
      static_tiles: this.level.static_tiles
    });
    this.level.resetCollisionArray();

    this.player.update();

  }

}

const game = new Game();
game.init();
