import * as ml from "./mainLogic";

window.game = {
    _listeners: {
        exitframe: []
    }
}

ml.main();

function gameLoop() {
    game._listeners.exitframe.forEach((func) => {
        func();
    });
    requestAnimationFrame(gameLoop);
}
gameLoop();