const createButton = function (game, x, y, move, stopMoving) {
   let button = game.add.button(x, y, 'button', move, this, 2, 1, 0);
   button.anchor.x = 0.5;

   button.onInputUp.add(stopMoving, this);
   button.onInputDown.add(move);

   return button;
}