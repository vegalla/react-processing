import React, { useEffect } from 'react';
import p5 from 'p5';

import getRandomInt from '../../Functions/getRandomInt';

const TDIB03 = () => {

    const p5Ref = React.createRef();

    const Sketch = (p5) => {

        let margin = 100;
        let grid = 100;

        p5.setup = () => {
            p5.createCanvas(800, 800);
            p5.noLoop();

        }

        p5.draw = () => {
            p5.background(15, 20, 30);
            p5.noFill();
            p5.stroke(255);

            let d = 60;

            let colArray = [];

            for (let c = 0; c < 7; c++) {
                colArray.push(p5.color(getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)));
            }

            for (let i = margin; i < p5.width; i += grid) {
                for (let j = margin; j < p5.height; j += grid) {

                    let colArrayNum = getRandomInt(0, 7);
                    p5.stroke(colArray[colArrayNum]);
                    p5.strokeWeight(3);
                    for (let k = 0; k < 3; k++) {
                        let x1 = -getRandomInt(0, d);
                        let y1 = -getRandomInt(0, d);
                        let x2 = getRandomInt(0, d);
                        let y2 = -getRandomInt(0, d);
                        let x3 = getRandomInt(0, d);
                        let y3 = getRandomInt(0, d);
                        let x4 = -getRandomInt(0, d);
                        let y4 = getRandomInt(0, d);

                        p5.push();
                        p5.translate(i, j);
                        p5.quad(x1, y1, x2, y2, x3, y3, x4, y4);
                        p5.pop();
                    }
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

export default TDIB03;