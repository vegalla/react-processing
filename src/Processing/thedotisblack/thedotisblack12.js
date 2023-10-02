import React, { useEffect } from 'react';
import p5 from 'p5';

import getRandomInt from '../../Functions/getRandomInt';

const TDIB12 = () => {

    const p5Ref = React.createRef();

    const Sketch = (p5) => {

        let { createCanvas } = p5;

        const p5Container = document.querySelector('#p5-container')
        let w = p5Container.clientWidth;
        let h = p5Container.clientHeight;

        let mX = w / 100;
        let mY = h / 100;
        let grid = 40;
        let size = 40;

        p5.setup = () => {
            p5.createCanvas(w, h);
            p5.rectMode(p5.CENTER);
            p5.noLoop();
        }

        p5.draw = () => {


            for (let x = mX; x <= w - mX; x += grid) {
                for (let y = mY; y <= h - mY; y += grid) {

                    p5.push();
                    p5.translate(x, y);
                    p5.rotate(p5.random(p5.TWO_PI));

                    p5.noStroke();
                    p5.fill(230, 60, 80);
                    p5.rect(0, 0, p5.random(size * 1.4), p5.random(size * 1.4));
                    p5.pop();
                }
            }
            for (let x = mX; x <= w - mX; x += grid) {
                for (let y = mY; y <= h - mY; y += grid) {
                    p5.push();
                    p5.translate(x, y);
                    p5.rotate(p5.random(p5.TWO_PI));

                    p5.stroke(25, 55, 60);
                    p5.strokeWeight(2);
                    p5.fill(170, 205, 210);
                    p5.rect(0, 0, p5.random(size * 0.85), p5.random(size * 0.85));

                    p5.fill(25, 55, 60);
                    p5.rect(0, 0, p5.random(size * 0.55), p5.random(size * 0.55));

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

export default TDIB12;