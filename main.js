import { main } from "./mainLogic.js";

window.game = {
    _listeners: {
        exitframe: []
    }
}

main();

function gameLoop() {
    game._listeners.exitframe.forEach(func => func());
    requestAnimationFrame(gameLoop);
}
gameLoop();