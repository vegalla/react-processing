import React, { useEffect } from 'react';
import p5 from 'p5';

const TDIB13 = () => {

    const p5Ref = React.createRef();

    const Sketch = (p5) => {


        const p5Container = document.querySelector('#p5-container')
        let w = p5Container.clientWidth;
        let h = p5Container.clientHeight;

        let x = w / 4;
        let y = w / 4;
        let angle = 0;
        let dia = h / 40;


        p5.setup = () => {
            p5.createCanvas(w, h);
        }

        p5.draw = () => {
            p5.background("#eeeeee");

            p5.translate(w / 2, h / 2);

            p5.rotate(p5.radians(angle / 2));
            for (let a = 0; a < 360; a += 10) {
                p5.push();

                p5.rotate(p5.radians(a));

                p5.strokeWeight(3);
                p5.line(0, y * p5.sin(p5.radians(a + angle)), x - dia / 2, 0);
                p5.line(h , y * p5.sin(p5.radians(a + angle)), x + dia / 2, 0);

                p5.noStroke();
                p5.fill(0);
                p5.ellipse(0, y * p5.sin(p5.radians(a + angle)), dia / 2, dia / 2);

                p5.stroke(0);
                if (y <= y * p5.sin(p5.radians(a + angle)) + dia / 3)
                    p5.fill(0);
                else
                    p5.noFill();
                p5.ellipse(0, y, dia, dia);

                p5.pop();
            }
            angle += 1
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

export default TDIB13;