import React, { useEffect } from 'react';
import p5 from 'p5';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const Test = () => {

    const myRef = React.createRef();

    const Sketch = (p) => {

        p.setup = () => {
            p.createCanvas(800, 800);
        }

        p.draw = () => {
            p.background(15, 20, 30);
            // p.ellipse(150, 100, 100, 100);
            // p.noStroke();
            // p.rect(100, 100, 50, 50);
            // p.strokeWeight(10);
            // p.strokeWeight(4);
            // p.line(100, 100, 700, 700);

            // for (let i=-100; i<p.width+100; i+=200) {
            //     for (let j=-100; j<p.height+100; j+=200){
            //     //   p.noStroke();
            //       p.fill(Math.random(255), Math.random(255), Math.random(255));
            //       p.rectMode(p.CENTER);
            //       p.rect(i, j, 200, 200);
            //       p.push();
            //       p.translate(i, j);
            //   p.scale(0.28);
            //   for (let n=0; n<30; n++) {
            p.stroke(Math.random(255), Math.random(255), Math.random(255));
            for (let a = 0; a < 360; a += 2) {
                let x = getRandomInt(50, 150);
                let xx = getRandomInt(150, 350);
                p.push();
                p.rotate(p.radians(a));
                p.strokeCap(p.SQUARE);
                p.strokeWeight(4);
                console.log(x);
                console.log(xx);
                p.line(x, 0, xx, 0)
                p.pop();
            }
            //   }
            //       p.pop();
            //     }
            //   }
        }

    }

    useEffect(() => {
        const myP5 = new p5(Sketch, myRef.current)
    }, [])

    return (
        <div ref={myRef}>
            {/* Hello */}
        </div>
    )

}

export default Test;