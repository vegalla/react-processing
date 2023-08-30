import React, { useEffect } from 'react';
import p5 from 'p5';
import { faArrowRightRotate } from '@fortawesome/free-solid-svg-icons';

const TDIB06 = () => {

    const p5Ref = React.createRef();

    const Sketch = (p5) => {

        let angle = 0;

        p5.setup = () => {
            p5.createCanvas(800, 800);
            p5.noStroke();
            p5.fill(0, 15, 30);
        }

        p5.draw = () => {
            p5.background(255);
            p5.translate(p5.width / 2, p5.height / 2);
            // p5.scale(2);

            let x = p5.width;
            let dia = 100;

            for (let a = 0; a < 360; a += 45) {
                p5.rotate(p5.radians(a));
                p5.push();
                for (let i = 0; i < 100; i++) {
                    p5.scale(0.95);
                    p5.rotate(p5.radians(angle));
                    p5.ellipse(x, 0, dia, dia);
                }
                p5.pop();
                p5.push();
                for (let i = 0; i < 100; i++) {
                    p5.scale(0.95);
                    p5.rotate(p5.radians(-angle));
                    p5.ellipse(x, 0, dia, dia);
                }
                p5.pop();
            }
            angle += 0.1;
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

export default TDIB06;