import React, { useEffect } from 'react';
import p5 from 'p5';
import getRandomInt from '../../Functions/getRandomInt';

const STEP02 = () => {

    const p5Ref = React.createRef();

    const Sketch = (p5) => {

        let center;
        let cx, cy;
        let x1, y1, x2, y2;
        let dia;

        p5.setup = () => {
            p5.createCanvas(800, 800);

            center = (p5.width / 2 + p5.height / 2) / 2;
            cx = p5.width / 2;
            cy = p5.height / 2;
        }

        p5.draw = () => {
            p5.background('#eeeeee')

            x1 = 0;
            y1 = 0;
            x2 = p5.width;
            y2 = p5.height;

            dia = 80;

            p5.strokeWeight(0);
            p5.fill(200, 200, 200);
            p5.ellipse(center, center, dia * 4, dia * 4);
            p5.fill(255);
            p5.ellipse(center, center, dia * 2.5, dia * 2.5)

            p5.fill(0);
            for (let i = 0; i < 25; i++) {
                p5.ellipse(cx, cy, 120, 100);
                // if (p5.mouseDragged === true) {
                //     cx = p5.mouseX;
                //     cy = p5.mouseY;
                // } else {
                cx += getRandomInt(-5, 5);
                cy += getRandomInt(-5, 5);

                cx = p5.constrain(cx, center - dia / 1.97, center + dia / 1.97);
                cy = p5.constrain(cy, center - dia / 1.97, center + dia / 1.97);
                // }
            }
            // p5.ellipse(cx, cy, 120, 120);
            // cx += getRandomInt(-10, 10);
            // cy += getRandomInt(-10, 10);

            // cx = p5.constrain(cx, p5.width / 2 - dia, p5.width, p5.width + dia);
            // cy = p5.constrain(cy, p5.height / 2 - dia, p5.height + dia);

            // p5.noStroke();
            p5.fill(255);
            p5.beginShape();
            p5.vertex(center - center, center - center);
            p5.vertex(center - center, center + center);
            p5.vertex(center + center, center + center);
            p5.vertex(center + center, center - center);
            p5.beginContour();
            // noStroke();
            p5.strokeWeight(3);
            // left corner
            p5.vertex(x2 / 2 - dia * 2, y2 / 2); // first point
            // to top 
            p5.bezierVertex(x2 / 2 - dia, y2 / 2, x2 / 2 - dia, y2 / 2 - dia, x2 / 2, y2 / 2 - dia); // second point
            // to right corner
            p5.bezierVertex(x2 / 2 + dia, y2 / 2 - dia, x2 / 2 + dia, y2 / 2, x2 / 2 + dia * 2, y2 / 2); // third point
            // to bottom 
            p5.bezierVertex(x2 / 2 + dia, y2 / 2, x2 / 2 + dia, y2 / 2 + dia / 2, x2 / 2, y2 / 2 + dia / 2); // fourth point
            // to left corner
            p5.bezierVertex(x2 / 2 - dia, y2 / 2 + dia / 2, x2 / 2 - dia, y2 / 2, x2 / 2 - dia * 2, y2 / 2); // fifth point
            p5.endContour();
            p5.endShape()
        }

        p5.mouseDragged = () => {
            cx = p5.mouseX;
            cy = p5.mouseY;
        }

        // p5.mouseReleased = () => {
        //     cx += getRandomInt(-5, 5);
        //     cy += getRandomInt(-5, 5);

        //     cx = p5.constrain(cx, center - dia / 1.97, center + dia / 1.97);
        //     cy = p5.constrain(cy, center - dia / 1.97, center + dia / 1.97);
        // }
    }

    useEffect(() => {
        const myP5 = new p5(Sketch, p5Ref.current);
        return myP5.remove;
    }, [])

    return (
        <div ref={p5Ref} />
    )

};

export default STEP02;