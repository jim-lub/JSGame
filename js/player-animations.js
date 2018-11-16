/* jshint esversion: 6 */
class PlayerAnimations {
  constructor() {
    this.frame = {
      image: null,
      pos: {}
    };

    this.tickCount = 0;
    this.frameIndex = 0;
    this.currentFrame = null;

    this.ANIMATIONS = {
      idle: {L: null, R: null},
      run: {L: null, R: null},
      jump: {L: null, R: null},
      fall: {L: null, R: null},
      attack: {L: null, R: null}
    };
  }

  idle() {
    return {
      defaults: {
        ticksPerFrame: 10,
        ticksToEndSequence: 59,
        loop: true,
        src: {
          L: 'assets/sprites/player/idle-l.png',
          R: 'assets/sprites/player/idle-r.png'
        },
        offsetX: {L: -10, R: 0},
        offsetY: {L: 0, R: 0}
      },
      overrideDefaults: false,
      frames: {
        L: [
          {name: "idle-1", sX: 360, sY: 0, sWidth: 60, sHeight: 70, override: {}},
          {name: "idle-2", sX: 300, sY: 0, sWidth: 60, sHeight: 70, override: {}},
          {name: "idle-3", sX: 240, sY: 0, sWidth: 60, sHeight: 70, override: {}},
          {name: "idle-4", sX: 180, sY: 0, sWidth: 60, sHeight: 70, override: {}},
          {name: "idle-5", sX: 120, sY: 0, sWidth: 60, sHeight: 70, override: {}},
          {name: "idle-6", sX: 60, sY: 0, sWidth: 60, sHeight: 70, override: {}},
          {name: "idle-7", sX: 0, sY: 0, sWidth: 60, sHeight: 70, override: {}}
        ],
        R: [
          {name: "idle-1", sX: 0, sY: 0, sWidth: 60, sHeight: 70, override: {}},
          {name: "idle-2", sX: 60, sY: 0, sWidth: 60, sHeight: 70, override: {}},
          {name: "idle-3", sX: 120, sY: 0, sWidth: 60, sHeight: 70, override: {}},
          {name: "idle-4", sX: 180, sY: 0, sWidth: 60, sHeight: 70, override: {}},
          {name: "idle-5", sX: 240, sY: 0, sWidth: 60, sHeight: 70, override: {}},
          {name: "idle-6", sX: 300, sY: 0, sWidth: 60, sHeight: 70, override: {}},
          {name: "idle-6", sX: 360, sY: 0, sWidth: 60, sHeight: 70, override: {}}
        ]
      }
    };
  }

  run() {
    return {
      defaults: {
        ticksPerFrame: 6,
        ticksToEndSequence: 47,
        loop: true,
        src: {
          L: 'assets/sprites/player/run-l.png',
          R: 'assets/sprites/player/run-r.png'
        },
        offsetX: {L: -10, R: 0},
        offsetY: {L: 0, R: 0}
      },
      overrideDefaults: false,
      frames: {
        L: [
          {name: "run-1", sX: 420, sY: 0, sWidth: 60, sHeight: 70, override: {}},
          {name: "run-2", sX: 360, sY: 0, sWidth: 60, sHeight: 70, override: {}},
          {name: "run-3", sX: 300, sY: 0, sWidth: 60, sHeight: 70, override: {}},
          {name: "run-4", sX: 240, sY: 0, sWidth: 60, sHeight: 70, override: {}},
          {name: "run-5", sX: 180, sY: 0, sWidth: 60, sHeight: 70, override: {}},
          {name: "run-6", sX: 120, sY: 0, sWidth: 60, sHeight: 70, override: {}},
          {name: "run-7", sX: 60, sY: 0, sWidth: 60, sHeight: 70, override: {}},
          {name: "run-8", sX: 0, sY: 0, sWidth: 60, sHeight: 70, override: {}}
        ],
        R: [
          {name: "run-1", sX: 0, sY: 0, sWidth: 60, sHeight: 70, override: {}},
          {name: "run-2", sX: 60, sY: 0, sWidth: 60, sHeight: 70, override: {}},
          {name: "run-3", sX: 120, sY: 0, sWidth: 60, sHeight: 70, override: {}},
          {name: "run-4", sX: 180, sY: 0, sWidth: 60, sHeight: 70, override: {}},
          {name: "run-5", sX: 240, sY: 0, sWidth: 60, sHeight: 70, override: {}},
          {name: "run-6", sX: 300, sY: 0, sWidth: 60, sHeight: 70, override: {}},
          {name: "run-7", sX: 360, sY: 0, sWidth: 60, sHeight: 70, override: {}},
          {name: "run-8", sX: 420, sY: 0, sWidth: 60, sHeight: 70, override: {}}
        ]
      }
    };
  }

  jump() {
    return {
      defaults: {
        ticksPerFrame: 10,
        ticksToEndSequence: 19,
        loop: true,
        src: {
          L: 'assets/sprites/player/jump-l.png',
          R: 'assets/sprites/player/jump-r.png'
        },
        offsetX: {L: -25, R: 0},
        offsetY: {L: 0, R: 0}
      },
      overrideDefaults: false,
      frames: {
        L: [
          {name: "jump-1", sX: 60, sY: 0, sWidth: 60, sHeight: 70, override: {}},
          {name: "jump-2", sX: 0, sY: 0, sWidth: 60, sHeight: 70, override: {}}
        ],
        R: [
          {name: "jump-1", sX: 0, sY: 0, sWidth: 60, sHeight: 70, override: {}},
          {name: "jump-2", sX: 60, sY: 0, sWidth: 60, sHeight: 70, override: {}}
        ]
      }
    };
  }

  fall() {
    return {
      defaults: {
        ticksPerFrame: 10,
        ticksToEndSequence: 19,
        loop: true,
        src: {
          L: 'assets/sprites/player/fall-l.png',
          R: 'assets/sprites/player/fall-r.png'
        },
        offsetX: {L: 0, R: 0},
        offsetY: {L: 0, R: 0}
      },
      overrideDefaults: false,
      frames: {
        L: [
          {name: "fall-1", sX: 60, sY: 0, sWidth: 60, sHeight: 70, override: {}},
          {name: "fall-2", sX: 0, sY: 0, sWidth: 60, sHeight: 70, override: {}}
        ],
        R: [
          {name: "fall-1", sX: 0, sY: 0, sWidth: 60, sHeight: 70, override: {}},
          {name: "fall-2", sX: 60, sY: 0, sWidth: 60, sHeight: 70, override: {}}
        ]
      }
    };
  }

  attack() {
    return {
      defaults: {
        ticksPerFrame: 5,
        ticksToEndSequence: 44,
        loop: true,
        src: {
          L: 'assets/sprites/player/attack-l.png',
          R: 'assets/sprites/player/attack-r.png'
        },
        offsetX: {L: -45, R: 0},
        offsetY: {L: 0, R: 0}
      },
      overrideDefaults: false,
      frames: {
        L: [
          {name: "attack-1", sX: 720, sY: 0, sWidth: 90, sHeight: 70, override: {}},
          {name: "attack-2", sX: 630, sY: 0, sWidth: 90, sHeight: 70, override: {}},
          {name: "attack-3", sX: 540, sY: 0, sWidth: 90, sHeight: 70, override: {}},
          {name: "attack-4", sX: 450, sY: 0, sWidth: 90, sHeight: 70, override: {}},
          {name: "attack-5", sX: 360, sY: 0, sWidth: 90, sHeight: 70, override: {}},
          {name: "attack-6", sX: 270, sY: 0, sWidth: 90, sHeight: 70, override: {}},
          {name: "attack-7", sX: 180, sY: 0, sWidth: 90, sHeight: 70, override: {}},
          {name: "attack-8", sX: 90, sY: 0, sWidth: 90, sHeight: 70, override: {}},
          {name: "attack-9", sX: 0, sY: 0, sWidth: 90, sHeight: 70, override: {}}
        ],
        R: [
          {name: "attack-1", sX: 0, sY: 0, sWidth: 90, sHeight: 70, override: {}},
          {name: "attack-2", sX: 90, sY: 0, sWidth: 90, sHeight: 70, override: {}},
          {name: "attack-3", sX: 180, sY: 0, sWidth: 90, sHeight: 70, override: {}},
          {name: "attack-4", sX: 270, sY: 0, sWidth: 90, sHeight: 70, override: {}},
          {name: "attack-5", sX: 360, sY: 0, sWidth: 90, sHeight: 70, override: {}},
          {name: "attack-6", sX: 450, sY: 0, sWidth: 90, sHeight: 70, override: {}},
          {name: "attack-7", sX: 540, sY: 0, sWidth: 90, sHeight: 70, override: {}},
          {name: "attack-8", sX: 630, sY: 0, sWidth: 90, sHeight: 70, override: {}},
          {name: "attack-9", sX: 720, sY: 0, sWidth: 90, sHeight: 70, override: {}}
        ]
      }
    };
  }

  loadImage(src) {
    let image = new Image();
    image.src = src;
    return image;
  }

  preloadAnimationSequence(action, direction) {
    let config = this[action]();
    let frameSequence = [];

    config.frames[direction].forEach((cur, index) => {
      let frameStart, frameEnd;

      if (config.overrideDefaults) {
        frameStart = cur.override.start;
        frameEnd = cur.override.end;
      } else {
        frameStart = index * config.defaults.ticksPerFrame;
        frameEnd = ((index + 1) * config.defaults.ticksPerFrame) - 1;
      }

      frameSequence.push({
        name: cur.name,
        // image: game.assets.sprites.player.animation_attack_left,
        image: this.loadImage(config.defaults.src[direction]),
        sX: cur.sX,
        sY: cur.sY,
        sWidth: cur.sWidth,
        sHeight: cur.sHeight,
        start: frameStart,
        end: frameEnd
      });
    });

    this.ANIMATIONS[action][direction] = {
      defaults: config.defaults,
      sequence: frameSequence
    };
  }

  init() {
    this.preloadAnimationSequence('idle', 'L');
    this.preloadAnimationSequence('idle', 'R');
    this.preloadAnimationSequence('run', 'L');
    this.preloadAnimationSequence('run', 'R');
    this.preloadAnimationSequence('jump', 'L');
    this.preloadAnimationSequence('jump', 'R');
    this.preloadAnimationSequence('fall', 'L');
    this.preloadAnimationSequence('fall', 'R');
    this.preloadAnimationSequence('attack', 'L');
    this.preloadAnimationSequence('attack', 'R');
  }

  play(action, direction) {
    this.tickCount++;

    let defaults = this.ANIMATIONS[action][direction].defaults;
    let sequence = this.ANIMATIONS[action][direction].sequence;

    sequence.forEach(cur => {

      if (this.tickCount >= cur.start && this.tickCount <= cur.end && this.currentFrame != cur.name) {
        this.frame.image = cur.image;
        this.frame.pos = {
          sX: cur.sX,
          sY: cur.sY,
          sWidth: cur.sWidth,
          sHeight: cur.sHeight,
          offsetX: defaults.offsetX[direction],
          offsetY: defaults.offsetY[direction],
        };
        this.currentFrame = cur.name;
      }

      if (this.tickCount > defaults.ticksToEndSequence) {
        this.tickCount = 0;
        this.currentFrame = null;
      }
    });

  }

}
