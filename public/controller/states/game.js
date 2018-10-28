import ControlButton from "../prefabs/control-button.js";
import Colors from "/assets/shared/colors.js";
import ColorBox from "/assets/shared/color-box.js";

class Game extends Phaser.State {
  constructor() {
    console.log("Game");
    super();
  }

  create() {
    //this.button = new ControlButton(this.game, 50, 50, 0);
    this.background = this.game.add.sprite(0, 0, "background");

    // Setup getting control from Screen
    airconsole.onMessage = function(from, data) {
      if (from == AirConsole.SCREEN && data.color) {
        let c = data.color;
        this.selector = new ColorBox(
          this.game,
          this.game.world.centerX,
          this.game.world.centerY,
          c.text
        );
        this.selector.onClick(
          function() {
            airconsole.message(AirConsole.SCREEN, {
              color: this.selectedColor.text
            });
            console.log(this.selectedColor.text);
            this.activateButton();
          }.bind(this.selector)
        );
      }
    };
    /*
    this.game.airconsole.onMessage = function(device_id, data) {
      var player = airconsole.convertDeviceIdToPlayerNumber(device_id);
      if (player != undefined && data.move !== undefined) {
        paddles[player].move.y = data.move;
      }
    }; //*/
    // this.background.height = this.game.world.height;
    // this.background.width = this.game.world.width;

    // //setup UI
    // this.countdownText = this.add.text(this.game.world.centerX, 0, '', {
    //   font: '40px Arial', fill: '#ffffff', align: 'center'
    // });
    // this.countdownText.anchor.set(0.5, 0);

    // //set up click listeners
    // this.game.input.onDown.add(this.shoot, this);

    // //setup audio
    // this.gunshot = this.game.add.audio('gunshot');

    // //setup prefabs
    // this.crosshairs = new Crosshairs(this.game);
    // this.target = new Target(this.game, this.game.world.centerX, this.game.world.centerY);
    this.game.add.existing(this.background);
    //this.game.add.existing(this.button);

    // //setup a timer to end the game
    this.endGameTimer = this.game.time.create();
    this.endGameTimer.add(Phaser.Timer.SECOND * 5, this.swapColor, this);
    this.endGameTimer.start();
  }

  swapColor() {}

  update() {
    //this.text.setTexty((this.endGameTimer.duration / 1000).toFixed(1));
  }

  endGame() {
    //this.game.state.start('gameover');
  }
}

export default Game;
