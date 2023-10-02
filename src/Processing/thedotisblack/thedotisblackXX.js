import React, { useEffect } from 'react';
import p5 from 'p5';

const TDIBXX = () => {

    const p5Ref = React.createRef();

    const Sketch = (p5) => {

        const { setup, draw, createCanvas, background, translate, rotate, radians, stroke, strokeWeight, line, push, pop, sin } = p5;

        const p5Container = document.querySelector('#p5-container')
        let w = p5Container.clientWidth;
        let h = p5Container.clientHeight;

        let x = w / 3;
        let y = w / 3;
        let angle;

        p5.setup = () => {
            p5.createCanvas(w, h);
        }

        p5.draw = () => {
            p5.background('#151515');
            // p5.translate(w / 2, h / 2);
            // for (let a = 0; a < 360; a += 10) {
            //     p5.push();
            //     p5.rotate(p5.radians(a));
            //     p5.stroke(255);
            //     p5.strokeWeight(5);
            //     p5.line(x = p5.sin(p5.radians(angle)), 0, x, y);
            //     p5.pop();
            // };
            // angle++;
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

export default TDIBXX;