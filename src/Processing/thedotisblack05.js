import React, { useEffect } from 'react';
import p5 from 'p5';

const TDIB05 = () => {

    const p5Ref = React.createRef();

    const Sketch = (p5) => {

        let angle = 0;

        p5.setup = () => {
            p5.createCanvas(800, 800);
            // p5.setLocation(957, 0);
            p5.rectMode(p5.CENTER);
            p5.stroke(0, 15, 30);
            p5.strokeWeight(25);
        }

        p5.draw = () => {
            p5.background(0, 15, 30);
            p5.translate(p5.width / 2, p5.height / 2);
            p5.scale(2);
            for (let i = 0; i < 100; i++) {
                p5.scale(0.95);
                p5.fill(i * 10, 255 - i * 25, 255 + i * 10);
                p5.rotate(p5.radians(angle));
                p5.rect(0, 0, 600, 600);
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

}

export default TDIB05;