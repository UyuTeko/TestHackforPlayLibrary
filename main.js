export function main() {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'gray';
    ctx.fillRect(0, 0, 480, 320);
    game._listeners.exitframe.push(() => {
        ctx.fillRect(0, 0, 480, 320);
    });
}