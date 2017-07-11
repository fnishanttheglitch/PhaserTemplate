console.log('game');
var game = new Phaser.Game(900, 640, Phaser.AUTO, 'game');

game.state.add('boot', bootState);
game.state.add('preload', preloadState);
game.state.add('menu', menuState);
game.state.add('gamePlay', gamePlayState);
game.state.add('gameEnd', gameEndState);
game.state.add('countdown', countdownState);

game.state.start('boot');