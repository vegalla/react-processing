import React, { useEffect } from 'react';
import p5 from 'p5';

const TDIB14 = () => {

    const p5Ref = React.createRef();

    const Sketch = (p5) => {


        const p5Container = document.querySelector('#p5-container')
        let w = p5Container.clientWidth;
        let h = p5Container.clientHeight;

        let x = 0;
        let y = 0;
        let angle = 0;
        let color = 0;

        let diaMax = 600;
        let diaMin = 100;
        let diaInterval = 50;

        let diaArcX = 0;
        let diaArcY = 0;

        p5.setup = () => {
            p5.createCanvas(w, h);

            p5.rectMode(p5.CENTER);
            p5.colorMode(p5.HSB, 360, 100, 100);
        }

        p5.draw = () => {
            p5.background("#ffffff")

            // x = p5.mouseX - w / 2
            // y = p5.mouseY = h / 2

            angle += 2;

            x = p5.sin(p5.radians(angle)) * w / 2;
            y = p5.cos(p5.radians(angle)) * h / 2;

            diaArcX = p5.map(x, -w / 2, w / 2, 0, w / 2);
            diaArcY = p5.map(y, -h / 2, h / 2, 0, h / 2);
            p5.translate(w / 2, h / 2)

            for (let dia = diaMax; dia > diaMin; dia -= diaInterval) {
                color = p5.map(dia, diaMax, diaMin, 0, 360);
                p5.fill(color, 100, 100);
                p5.rect(0, 0, dia, dia, diaArcX, diaArcY, w / 2 - diaArcX, h / 2 - diaArcY);
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

}

export default TDIB14;