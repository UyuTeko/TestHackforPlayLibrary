export function main(game) {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    game._listeners.exitframe.push(() => {
        ctx.fillStyle = 'gray';
        ctx.fillRect(0, 0, 480, 320);
    });
};