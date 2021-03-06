/* jshint esversion: 6 */

class Cfg_Assets {
  constructor() {
    this.get = {
      sprites: ['player'],
      tilesets: [],
      backgrounds: []
    };
  }

  sprites() {
    return {
      player: [
        {name: "animation_idle_left", folder: "sprites/player/", file: "idle-l.png"},
        {name: "animation_idle_right", folder: "sprites/player/", file: "idle-r.png"},

        {name: "animation_run_left", folder: "sprites/player/", file: "run-l.png"},
        {name: "animation_run_right", folder: "sprites/player/", file: "run-r.png"},

        {name: "animation_jump_left", folder: "sprites/player/", file: "jump-l.png"},
        {name: "animation_jump_right", folder: "sprites/player/", file: "jump-r.png"},

        {name: "animation_fall_left", folder: "sprites/player/", file: "fall-l.png"},
        {name: "animation_fall_right", folder: "sprites/player/", file: "fall-r.png"},

        {name: "animation_slide_left", folder: "sprites/player/", file: "slide-l.png"},
        {name: "animation_slide_right", folder: "sprites/player/", file: "slide-r.png"},

        {name: "animation_attack_left", folder: "sprites/player/", file: "attack-l.png"},
        {name: "animation_attack_right", folder: "sprites/player/", file: "attack-r.png"},

        {name: "animation_attack_run_left", folder: "sprites/player/", file: "attack-run-l.png"},
        {name: "animation_attack_run_right", folder: "sprites/player/", file: "attack-run-r.png"},

        {name: "animation_attack_jump_left", folder: "sprites/player/", file: "attack-jump-l.png"},
        {name: "animation_attack_jump_right", folder: "sprites/player/", file: "attack-jump-r.png"}
      ]
    };
  }

  tilesets() {
    return {

    };
  }

  backgrounds() {
    return {

    };
  }
}
