import Colors from "/assets/shared/colors.js";

class SelectionController {
  constructor(numberOfPlayers) {
    this.currentSpot = 0;
    this.numberOfPlayers =
      Colors.length < numberOfPlayers ? Colors.length : numberOfPlayers;
    this.pattern = [];
  }
  checkSpot(color) {
    if (color === this.pattern[this.currentSpot]) {
      if (this.currentSpot === this.pattern.length) {
        //new addition to pattern
        this.addToGame();
        return "updated list";
      } else {
        this.currentSpot++;
        return true;
      }
    } else {
      return false;
    }
  }
  addToGame() {
    this.currentSpot = 0;
    let randomNumber = Math.random() * this.numberOfPlayers;
    this.pattern.push(Colors[Math.floor(randomNumber)].text);
  }
  resetGame() {
    this.pattern = [];
  }
}

export default SelectionController;
