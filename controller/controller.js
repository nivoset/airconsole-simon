function initPhaser() {
    const clientWidth = Math.min(window.innerWidth, document.documentElement.clientWidth);
    const clientHeight = Math.min(window.innerHeight, document.documentElement.clientHeight);

    const game = new Phaser.Game(clientWidth, clientHeight, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, render: render });
    function preload() {

        game.load.spritesheet('button', './button_sprite_sheet.png', 193, 71);
        game.load.image('background', './starfield.jpg');

        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true
        game.scale.refresh();
    }

    const movementSpeed = 50;

    var upButton, downButton;
    var background;
    function render() { }


    function create() {
        game.stage.backgroundColor = '#182d3b';
        background = game.add.tileSprite(0, 0, 800, 600, 'background');
        upButton = createButton(game, clientWidth / 2, 50, moveUp, stop);
        downButton = createButton(game, clientWidth / 2, 150, moveDown, stop);
    }

    function stop() {
        airconsole.message(AirConsole.SCREEN, { move: 0 })
    }

    function moveUp() {
        airconsole.message(AirConsole.SCREEN, { move: -movementSpeed })
    }

    function moveDown() {
        airconsole.message(AirConsole.SCREEN, { move: movementSpeed })
    }

}