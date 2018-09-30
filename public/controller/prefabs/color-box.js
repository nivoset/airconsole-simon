import Colors from "/assets/shared/colors.js";

class ColorBox extends Phaser.Text {
  constructor(game, y, style) {
    //console.log(this.selectedColor);
    super(game, game.world.centerX, y, "Blank", { font: "74px Arial Black" });

    this.selectedColor = Colors.filter(x => x.text === style)[0];
    //this.setFill(this.selectedColor);
    this.selectableColors = Colors;

    this.text = this.selectedColor.text;
    this.strokeThickness = this.selectedColor.borderThickness;
    this.backToNormal();

    this.anchor.setTo(0.5, 0.5);

    game.add.existing(this);
    //this.onDown.addOnce(onClick, this);
  }

  activateButton(time = 30) {
    this.highlight();
    this.timer = time;
  }

  highlight() {
    this.style.fill = this.selectedColor.hexOn;
    this.stroke = this.selectedColor.borderColorOn;
  }

  backToNormal() {
    this.style.fill = this.selectedColor.hex;
    this.stroke = this.selectedColor.borderColor;
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

  update() {
    if (this.timer) {
      this.timer--;
    } else {
      this.backToNormal();
    }
  }
}

export default ColorBox;
