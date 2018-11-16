/* jshint esversion: 6 */

class Config_Assets {
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

        {name: "animation_attack_left", folder: "sprites/player/", file: "attack-l.png"},
        {name: "animation_attack_right", folder: "sprites/player/", file: "attack-r.png"}
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
