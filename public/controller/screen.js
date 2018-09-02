const game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'screen');
const airconsole = new AirConsole();
airconsole.globals = {};

airconsole.onConnect = function (device_id) {
   console.log("conn", device_id);
   //checkTwoPlayers();
};


airconsole.onDisconnect = function (device_id) {
   console.log("DC", device_id)
   var player = airconsole.convertDeviceIdToPlayerNumber(device_id);
   if (player != undefined) {
      // Player that was in game left the game.
      // Setting active players to length 0.
      airconsole.setActivePlayers(0);
   }
   //checkTwoPlayers();
};

airconsole.onMessage = function (device_id, data) {
   var player = airconsole.convertDeviceIdToPlayerNumber(device_id);
   if (player != undefined && data.move !== undefined) {
      paddles[player].move.y = data.move;
   }
};

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