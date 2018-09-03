class ControlButton extends Phaser.Sprite {
   constructor(game, x, y, frame) {
      super(game, x, y, 'button', frame);

      // set size
      this.width = 35;
      this.scale.y = Math.abs(this.scale.x);

      this.anchor.setTo(0.5, 0.5);
      this.inputEnabled = true;

   }

   onInputDown() {
      console.log("click");
   }

   update() {
      //      this.x = this.game.input.mousePointer.x;
      //      this.y = this.game.input.mousePointer.y;
   }
}

export default ControlButton;
