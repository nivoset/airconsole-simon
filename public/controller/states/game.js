import ControlButton from '../prefabs/control-button.js';
import Textbox from '../prefabs/text-box.js';
import Target from '../prefabs/target.js';

class Game extends Phaser.State {

  constructor() {
    console.log("Game");
    super();
  }

  create() {
    this.button = new ControlButton(this.game, 50, 50, 0);
    // //add background image
    this.background = this.game.add.sprite(0, 0, 'background');

    this.text = new Textbox(this.game, 75, 75, "Texy");
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
    this.game.add.existing(this.button);

    this.game.add.existing(this.text);

    // //setup a timer to end the game
    // this.endGameTimer = this.game.time.create();
    // this.endGameTimer.add(Phaser.Timer.SECOND * 15, this.endGame, this);
    // this.endGameTimer.start();
  }

  update() {
    //this.countdownText.setText((this.endGameTimer.duration / 1000).toFixed(1));
  }

  endGame() {
    //this.game.state.start('gameover');
  }

}

export default Game;
