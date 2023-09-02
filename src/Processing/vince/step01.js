import React, { useEffect } from 'react';
import p5 from 'p5';
import getRandomInt from '../../Functions/getRandomInt';

const STEP01 = () => {

    const p5Ref = React.createRef();

    const Sketch = (p5) => {

        let x, y;
        let dia = 20;
        let sw = 10;

        p5.setup = () => {
            p5.createCanvas(800, 800);
            p5.rectMode(p5.CENTER);
            p5.noFill();
            p5.fill('#282828');
            p5.stroke('#282828');
            p5.strokeWeight(sw);

            x = p5.width / 2;
            y = p5.height / 2;
        }

        p5.draw = () => {
            p5.background('#eeeeee');
            for (let i = -100; i < p5.width + 100; i += 200) {
                for (let j = -100; j <p5.height + 100; j += 200) {
                    p5.noStroke();
                    // p5.strokeWeight(5);
                    p5.fill(255);
                    // p5.fill(getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255));
                    p5.rectMode(p5.CENTER);
                    p5.rect(i, j, 200, 200);
                    p5.push();
                    p5.translate(i, j);
                    // p5.rect(x, y, dia, dia);
                    p5.fill(0, 15, 30);
                    // p5.ellipseMode()
                    p5.ellipse(x, y, dia, dia);
                    x += getRandomInt(-6, 6);
                    y += getRandomInt(-6, 6);
                    // console.log(i);
                    // console.log(j);

                    // p5.rect()
                    x = p5.constrain(x, x/2 - dia, p5.width);
                    y = p5.constrain(y, y/2 - dia, p5.height);
                    // console.log(x);
                    // console.log(y);
                    p5.pop();
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

};

export default STEP01;