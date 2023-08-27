import React, { useEffect } from 'react';
import p5 from 'p5';

const TDIB02 = () => {

    const p5Ref = React.createRef();

    const Sketch = (p5) => {

        p5.setup = () => {
            p5.createCanvas(800, 800);
        }

        let sw;
        let alpha = 1;
        let yStep = 10;
        let arcSize = 200;

        p5.draw = () => {
            p5.background(220);
            p5.noFill();

            p5.stroke(20);
            for (let y = -arcSize; y < p5.height + arcSize; y += yStep) {
                sw = p5.map(p5.sin(p5.radians(y + alpha)), -1, 1, 2, yStep);
                p5.strokeWeight(sw);
                for (let x1 = 0; x1 < p5.width + arcSize; x1 += arcSize) {
                    p5.arc(x1, y, arcSize / 2, arcSize / 2, 0, p5.PI);
                }
                sw = p5.map(p5.sin(p5.radians(y - alpha)), -1, 1, 2, yStep);
                p5.strokeWeight(sw);
                for (let x2 = 0; x2 < p5.width + arcSize; x2 += arcSize) {
                    p5.arc(x2 + arcSize / 2, y, arcSize / 2, arcSize / 2, p5.PI, p5.TWO_PI);
                }
            }
            alpha += 0.5
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

export default TDIB02;