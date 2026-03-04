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
                let x = v.x * Math.cos(this.angle) - v.z * Math.sin(this.angle);
                let z = v.x * Math.sin(this.angle) + v.z * Math.cos(this.angle);
                let y = v.y;

                const zOffset = 4;
                const fov = 400;
                const factor = fov / (z + zOffset);
                return {
                    x: x * factor + canvas.width / 2,
                    y: y * factor + canvas.height / 2
                };
            });
            ctx.strokeStyle = 'lime';
            ctx.lineWidth = 4;
            this.edges.forEach(edge => {
                const p1 = projectedPoints[edge[0]];
                const p2 = projectedPoints[edge[1]];
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            });
            gameCtx.drawImage(canvas, 0, 0);
        });
    }

}