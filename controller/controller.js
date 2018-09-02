import Boot from '/screen/states/boot.js';
import Game from '/screen/states/game.js';
import Gameover from '/screen/states/gameover.js';
import Menu from '/screen/states/menu.js';
import Preloader from '/screen/states/preloader.js';
import Stately from '/screen/states/stately.js';

game.state.add('boot', new Boot());
game.state.add('game', new Game());
game.state.add('gameover', new Gameover());
game.state.add('menu', new Menu());
game.state.add('preloader', new Preloader());
game.state.add('stately', new Stately());

game.state.start('boot');