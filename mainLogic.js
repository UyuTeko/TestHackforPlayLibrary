window.ts = {
    angle: 0,
    vertices: [
        { x: -1, y: -1, z:  1 }, { x:  1, y: -1, z:  1 },
        { x:  1, y:  1, z:  1 }, { x: -1, y:  1, z:  1 },
        { x: -1, y: -1, z: -1 }, { x:  1, y: -1, z: -1 },
        { x:  1, y:  1, z: -1 }, { x: -1, y:  1, z: -1 }
    ],
    edges: [
        [0,1], [1,2], [2,3], [3,0], // 手前の面
        [4,5], [5,6], [6,7], [7,4], // 奥の面
        [0,4], [1,5], [2,6], [3,7]  // 横を繋ぐ線
    ],
    main: function(game) {
        const gameCanvas = document.querySelector('canvas');
        const gameCtx = gameCanvas.getContext('2d');
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = gameCanvas.width;
        canvas.height = gameCanvas.height;
        game._listeners.exitframe.push(() => {
            ctx.save();
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            this.angle += .02;
            const projectedPoints = this.vertices.map(v => {
                let x = v.x;
                let y = v.z;
                return {
                    x: x * 50 + 240,
                    y: y * 50 + 160
                };
            });
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 10;
            ctx.lineCap = 'round';
            projectedPoints.forEach((v) => {
                ctx.beginPath();
                ctx.moveTo(v.x, v.y);
                ctx.lineTo(v.x, v.y);
                ctx.stroke();
            });
            ctx.restore();
            gameCtx.drawImage(canvas, 0, 0);
        });
    }

}