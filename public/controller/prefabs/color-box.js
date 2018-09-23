import Colors from "/assets/shared/colors.js";

class ColorBox extends Phaser.Text {
  constructor(game, y, style) {
    var selectedColor = Colors.filter(x => x.text === style)[0];
    //console.log(selectedColor);
    super(game, game.world.centerX, y, "Blank");

    //this.setFill(selectedColor);
    this.selectableColors = Colors;

    this.text = selectedColor.text;
    this.style.fill = selectedColor.hex;
    this.anchor.setTo(0.5, 0.5);

    game.add.existing(this);
    //this.onDown.addOnce(onClick, this);
  }

  onClick(clickEvent) {
    this.inputEnabled = true;
    this.events.onInputDown.add(clickEvent, this);
  }

  setFill(colour) {
    if (colour) {
      this.text = colour.text;
      this.style.fill = colour.hex;
    }
  }

  update() {}
}

export default ColorBox;
