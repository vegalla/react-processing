import React, { useEffect } from 'react';
import p5 from 'p5';

const TDIBXX = () => {

    const p5Ref = React.createRef();

    const Sketch = (p5) => {


        const p5Container = document.querySelector('#p5-container')
        let w = p5Container.clientWidth;
        let h = p5Container.clientHeight;

        p5.setup = () => {
            p5.createCanvas(w, h);
        }

        p5.draw = () => {
            
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