import React, { useEffect } from 'react';
import p5 from 'p5';

const TDIB04 = () => {

    const p5Ref = React.createRef();

    const Sketch = (p5) => {
        const p5Container = document.querySelector('#p5-container')
        let w = p5Container.clientWidth;
        let h = p5Container.clientHeight;

        let num;

        let x, y;
        let xStep = 8;
        let yStep = 100;
        
        let a = 10;
        let a2 = 0;

        p5.setup = () => {
            p5.createCanvas(w, h);
            num = (w / xStep) * (h / yStep);
        }

        p5.draw = () => {
            p5.background(15, 20, 30);

            p5.strokeCap(p5.SQUARE);
            p5.strokeWeight(xStep);

            x = xStep / 2;
            y = 0;

            let n = 0;

            while (n < num) {
                p5.stroke(255 - 255 * p5.cos(p5.radians(a)), 255 * p5.cos(p5.radians(a)), 255 - 255 * p5.sin(p5.radians(a)), 255 - 255 * p5.sin(p5.radians(a)));
                p5.line(x, y, x, y + yStep);
                x += xStep;
                if (x > p5.width) {
                    x = xStep / 2;
                    y += yStep;
                }
                if (y > p5.height) {
                    y = 0;
                    a = 0;
                }
                n++;
                a += a2;
            }
            a2 += 0.5
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

export default TDIB04;