import React, { useEffect } from 'react';
import p5 from 'p5';

import getRandomInt from '../Functions/getRandomInt';

const TDIB01 = () => {

    const myRef = React.createRef();

    const Sketch = (p) => {

        p.setup = () => {
            p.createCanvas(800, 800);
            p.noLoop();
        }

        p.draw = () => {
            p.background(15, 20, 30)

            for (let i = -100; i < p.width + 100; i += 200) {
                for (let j = -100; j < p.height + 100; j += 200) {
                    p.noStroke();
                    p.fill(getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255));
                    p.rectMode(p.CENTER);
                    p.rect(i, j, 200, 200);
                    p.push();
                    p.translate(i, j);
                    p.scale(0.28);
                    for (let n = 0; n < 30; n++) {
                        p.stroke(getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255));
                        for (let a = 0; a < 360; a += 2) {
                            let x = getRandomInt(50, 150);
                            let xx = getRandomInt(150, 350);
                            p.push();
                            p.rotate(p.radians(a));
                            p.strokeCap(p.SQUARE);
                            p.strokeWeight(4);
                            console.log(x);
                            console.log(xx);
                            p.line(x, 0, xx, 0)
                            p.pop();
                        }
                    }
                    p.pop();
                }
            }

        }
    }

    useEffect(() => {
        const myP5 = new p5(Sketch, myRef.current);
        return myP5.remove;
    }, [])


    return (
        <div ref={myRef} />
    )

}

export default TDIB01;