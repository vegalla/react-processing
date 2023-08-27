import React, { useEffect } from 'react';
import p5 from 'p5';

import getRandomInt from '../Functions/getRandomInt';

const TDIB01 = () => {

    const p5Ref = React.createRef();

    const Sketch = (p5) => {

        p5.setup = () => {
            p5.createCanvas(800, 800);
            p5.noLoop();
        }

        p5.draw = () => {
            p5.background(15, 20, 30)

            for (let i = -100; i < p5.width + 100; i += 200) {
                for (let j = -100; j < p5.height + 100; j += 200) {
                    p5.noStroke();
                    p5.fill(getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255));
                    p5.rectMode(p5.CENTER);
                    p5.rect(i, j, 200, 200);
                    p5.push();
                    p5.translate(i, j);
                    p5.scale(0.28);
                    for (let n = 0; n < 30; n++) {
                        p5.stroke(getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255));
                        for (let a = 0; a < 360; a += 2) {
                            let x1 = getRandomInt(50, 150);
                            let x2 = getRandomInt(150, 350);
                            p5.push();
                            p5.rotate(p5.radians(a));
                            p5.strokeCap(p5.SQUARE);
                            p5.strokeWeight(4);
                            p5.line(x1, 0, x2, 0)
                            p5.pop();
                        }
                    }
                    p5.pop();
                }
            }
        }

        p5.mouseClicked = () => {
            p5.redraw();
        };
    }

    useEffect(() => {
        const myP5 = new p5(Sketch, p5Ref.current);
        return myP5.remove;
    }, [])

    return (
        <div ref={p5Ref} />
    )

}

export default TDIB01;