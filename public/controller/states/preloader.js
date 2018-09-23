class Preloader extends Phaser.State {
  constructor() {
    super();
    this.asset = null;
    this.ready = false;
  }

  preload() {
    // setup loading bar
    // this.asset = this.add.sprite(this.game.width * 0.5 - 110, this.game.height * 0.5 - 10, 'preloader');
    // this.load.setPreloadSprite(this.asset);

    // // setup loading and its events
    this.loadResources();
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.game.global.WebFontConfig = {
      //  'active' means all requested fonts have finished loading
      //  We set a 1 second delay before calling 'createText'.
      //  For some reason if we don't the browser cannot render the text the first time it's created.
      active: function() {
        game.time.events.add(Phaser.Timer.SECOND, createText, this);
      },

      //  The Google Fonts we want to load (specify as many as you like in the array)
      google: {
        families: ["Fontdiner Swanky"]
      }
    };
  }

  loadResources() {
    this.game.load.spritesheet(
      "button",
      "/assets/images/button_sprite_sheet.png",
      191,
      71
    );
    this.game.load.image("background", "/assets/images/starfield.jpg");
    // this.game.load.image('crosshairs', 'assets/crosshair_red_small.png');
    // this.game.load.image('text_go', 'assets/text_go.png');
    // this.game.load.image('text_ready', 'assets/text_ready.png');
    this.game.load.script(
      "webfont",
      "//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js"
    );
    // this.game.load.spritesheet('target', 'assets/target.png',128.66,128);

    // this.game.load.audio('gunshot','assets/gunshot.wav');
    // this.game.load.audio('ding','assets/ding.wav');
  }

  onLoadComplete() {
    this.game.state.start("game");
  }
}

export default Preloader;
