import React, { useEffect } from 'react';
import p5 from 'p5';
import getRandomInt from '../Functions/getRandomInt';

const TDIB07 = () => {

    const p5Ref = React.createRef();

    const Sketch = (p5) => {

        let x, y;
        let dia = 400;
        let sw = 10;

        p5.setup = () => {
            p5.createCanvas(800, 800);
            p5.rectMode(p5.CENTER);
            p5.noFill();
            p5.fill('#282828');
            p5.stroke('#282828');
            p5.strokeWeight(sw);

            x = p5.width/2;
            y = p5.height/2;
        }

        p5.draw = () => {
            p5.background('#eeeeee');
            p5.rect(x, y, dia, dia);
            x += getRandomInt(-10, 10);
            y += getRandomInt(-10, 10);

            x = p5.constrain(x, dia / 2 + sw / 2, p5.width - dia / 2 - sw / 2);
            y = p5.constrain(y, dia / 2 + sw / 2, p5.height - dia / 2 - sw / 2);
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

export default TDIB07;