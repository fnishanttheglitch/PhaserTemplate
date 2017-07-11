var preloadState = {
    preload : function () {
    	game.load.image('1','Assets/Countdown/1.png');
        game.load.image('2','Assets/Countdown/2.png');
        game.load.image('3','Assets/Countdown/3.png');
        game.load.image('Go','Assets/Countdown/Go.png');
        game.load.image('Play','Assets/Menu/Play_Text.png');
        game.load.image('blackBackground', 'Assets/Menu/blackBackground.png');
    },
    create : function () {
        game.state.start('menu');
    }
};