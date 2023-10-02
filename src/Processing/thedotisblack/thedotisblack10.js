import React, { useEffect } from 'react';
import p5 from 'p5';

const TDIB10 = () => {

    const p5Ref = React.createRef();

    const Sketch = (p5) => {


        const p5Container = document.querySelector('#p5-container')
        let w = p5Container.clientWidth;
        let h = p5Container.clientHeight;

        let x = w / 3;
        let y = w / 3;
        let angle = 0;

        p5.setup = () => {
            p5.createCanvas(w, h);
        }

        p5.draw = () => {
            p5.background('#151515');
            p5.translate(w / 2, h / 2);
            for (let a = 0; a < 360; a += 10) {
                p5.push();
                p5.rotate(p5.radians(a));
                p5.stroke(255);
                p5.strokeWeight(3);
                p5.line(x*p5.sin(p5.radians(angle)), 0, 0, y);
                p5.pop();
            };
            angle += 1;
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

export default TDIB10;