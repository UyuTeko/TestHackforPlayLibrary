import "./mainLogic.js";

window.game = {
    _listeners: {
        exitframe: []
    }
}

ts.main(window.game);

function gameLoop() {
    game._listeners.exitframe.forEach(func => func());
    requestAnimationFrame(gameLoop);
}
gameLoop();