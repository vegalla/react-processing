import React, { useEffect } from 'react';
import p5 from 'p5';

import getRandomInt from '../../Functions/getRandomInt';

const TDIB09 = () => {

    const p5Ref = React.createRef();

    const Sketch = (p5) => {

        let grid = 100;
        let angle = 0;
        let mX = 100;
        let mY = 100;

        p5.setup = () => {
            p5.createCanvas(800, 800, p5.WEBGL);
            p5.rectMode(p5.CENTER);
            p5.noStroke();
        }

        p5.draw = () => {
            p5.background(15, 20, 30);
            p5.translate(-p5.width / 2, -p5.height / 2);

            for (let i = mX + grid; i <= p5.width - mX; i += grid * 2) {
                for (let j = mY + grid; j <= p5.height - mY; j += grid * 2) {
                    p5.push();

                    p5.translate(i, j);
                    p5.push();
                    p5.translate(-grid / 2, -grid / 2)
                    p5.rotateX(p5.radians(angle));
                    p5.rotateY(p5.radians(-angle));
                    p5.rect(0, 0, grid, grid);
                    p5.pop();

                    p5.push();
                    p5.translate(grid / 2, -grid / 2)
                    p5.rotateY(p5.radians(angle));
                    p5.rotateX(p5.radians(-angle));
                    p5.rect(0, 0, grid, grid);
                    p5.pop();

                    p5.push();
                    p5.translate(-grid / 2, grid / 2)
                    p5.rotateY(p5.radians(angle));
                    p5.rotateX(p5.radians(angle));
                    p5.rect(0, 0, grid, grid);
                    p5.pop();

                    p5.push();
                    p5.translate(grid / 2, grid / 2)
                    p5.rotateX(p5.radians(-angle));
                    p5.rotateY(p5.radians(-angle));
                    p5.rect(0, 0, grid, grid);
                    p5.pop();

                    p5.pop();
                }
            }
            angle += 1;
            if (angle >= 180) {
                grid = grid / 2;
                angle = 0;
                if (grid <= 20) {
                    grid = 100
                }
            }
        }
    }

    useEffect(() => {
        const myP5 = new p5(Sketch, p5Ref.current);
        return myP5.remove;
    }, [])

    return (
        <div ref={p5Ref} />
    )

}

export default TDIB09;