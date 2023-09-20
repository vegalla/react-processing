import React, { useEffect } from 'react';
import p5 from 'p5';
import getRandomInt from '../../Functions/getRandomInt';

const TDIB08 = () => {

    const p5Ref = React.createRef();

    const Sketch = (p5) => {

        const p5Container = document.querySelector('#p5-container')
        let w = p5Container.clientWidth;
        let h = p5Container.clientHeight;

        let rLine1;
        let rLine2;
        // let x1, y1, x2, y2;
        // let xStep = 10;
        // let yStep = 10;
        // let rOff = 0;
        // let red;

        p5.setup = () => {
            p5.createCanvas(w, h);
            p5.background(255);
            p5.stroke(40);
            p5.strokeWeight(3);
            // x1 = p5.width / 2;
            // y2 = p5.height / 2;
            // x2 = p5.width / 2;
            // y2 = p5.height / 2;
            rLine1 = new RandomWalker(10, 10);
            rLine2 = new RandomWalker(20, 20);
        }

        p5.draw = () => {
            for (let n = 0; n < 100; n++) {
                rLine1.update();
                rLine2.update();
            }
            // x1 += getRandomInt(-xStep, xStep);
            // y1 += getRandomInt(-yStep, yStep);
            // x2 += getRandomInt(-xStep, xStep);
            // y2 += getRandomInt(-yStep, yStep);

            // x1 = p5.constrain(x1, 0, p5.width);
            // y1 = p5.constrain(y1, 0, p5.height);
            // x2 = p5.constrain(x2, 0, p5.width);
            // y2 = p5.constrain(y2, 0, p5.height);

            // rOff += 0.01;
            // red = p5.noise(rOff) * 255
            // p5.stroke(red, 0, 0);
            // p5.strokeCap(p5.SQUARE);
            // p5.line(x1, x2, x2, y2);
        }

        class RandomWalker {
            x1 = p5.width / 2;
            y1 = p5.height / 2;
            x2 = p5.width / 2;
            y2 = p5.height / 2;
            xStep = 10;
            yStep = 10;
            rOff = 0;
            red = 0;
            constructor(xStep_, yStep_) {
                // this.x1 = p5.width / 2;
                // this.y1 = p5.height / 2;
                // this.x2 = p5.width / 2;
                // this.y2 = p5.height / 2;
                this.xStep = xStep_;
                this.yStep = yStep_;
            }
            update() {
                this.x1 += getRandomInt(-this.xStep, this.xStep);
                this.y1 += getRandomInt(-this.yStep, this.yStep);
                this.x2 += getRandomInt(-this.xStep, this.xStep);
                this.y2 += getRandomInt(-this.yStep, this.yStep);

                this.x1 = p5.constrain(this.x1, 0, p5.width);
                this.y1 = p5.constrain(this.y1, 0, p5.height);
                this.x2 = p5.constrain(this.x2, 0, p5.width);
                this.y2 = p5.constrain(this.y2, 0, p5.height);

                this.rOff += 0.01;
                this.red = p5.noise(this.rOff) * 255
                p5.stroke(this.red, 0, 0);
                p5.strokeCap(p5.SQUARE);
                p5.line(this.x1, this.x2, this.x2, this.y2);
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

};

export default TDIB08;