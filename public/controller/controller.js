const game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'controller');

import Boot from '/controller/states/boot.js';
import Game from '/controller/states/game.js';
import Gameover from '/controller/states/gameover.js';
import Preloader from '/controller/states/preloader.js';
import Stately from '/controller/states/stately.js';

game.state.add('boot', new Boot());
game.state.add('game', new Game());
game.state.add('gameover', new Gameover());
game.state.add('preloader', new Preloader());
game.state.add('stately', new Stately());

game.state.start('boot');