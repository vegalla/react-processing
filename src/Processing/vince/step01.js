import React, { useEffect } from 'react';
import p5 from 'p5';
import getRandomInt from '../../Functions/getRandomInt';

const STEP01 = () => {

    const p5Ref = React.createRef();

    const Sketch = (p5) => {
        const p5Container = document.querySelector('#p5-container')
        let w = p5Container.clientWidth;
        let h = p5Container.clientHeight;

        let x, y, g;
        let xi, yj;
        let dia = 20;
        let sw = 10;

        p5.setup = () => {
            p5.createCanvas(w, h);
            p5.rectMode(p5.CENTER);
            p5.noFill();
            p5.fill('#282828');
            p5.stroke('#282828');
            p5.strokeWeight(sw);

            x = w / 2;
            y = h / 2;

            xi = w / 8;
            yj = h / 8;

            g = w / 8;

        }

        p5.draw = () => {
            p5.background('#eeeeee');
            for (let i = g; i < w + g; i += (g*2)) {
                for (let j = g; j < h + g; j += (g*2)) {
                    // p5.noStroke();
                    p5.strokeWeight(5);
                    p5.fill(255);
                    // p5.fill(getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255));
                    p5.rectMode(p5.CENTER);
                    p5.rect(i, j, g*2, g*2);
                    p5.push();
                    p5.translate(i, j);
                    // p5.rect(x, y, dia, dia);
                    p5.fill(0, 15, 30);
                    // p5.ellipseMode()
                    p5.ellipse(xi, yj, dia, dia);
                    xi += getRandomInt(-10, 10);
                    yj += getRandomInt(-10, 10);
                    // console.log(i);
                    // console.log(j);

                    // p5.rect()
                    xi = p5.constrain(xi, -g + sw, g - sw);
                    yj = p5.constrain(yj, -g + sw, g - sw);
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