import React from 'react';

import static01 from '../Assets/01.png';
import static02 from '../Assets/02.png';
import static03 from '../Assets/03.png';
import static04 from '../Assets/04.png';
import static05 from '../Assets/05.png';

import styles from './GalleryHome.module.css';

import DisplayItem from '../UI/DisplayItem';

const GalleryHome = () => {
    return (
        <>
            <div className={styles.Header}>
                <h1>generative art</h1>
            </div>
            <div className={styles.DisplayZone}>
                <DisplayItem
                    image={static05}
                    path="/05"
                    label="ROTATE + SCALE"
                    tags="thedotisblack"
                    date="2023/08/28"
                />
                <DisplayItem
                    image={static04}
                    path="/04"
                    label="GRID WITH WHILE LOOP AND COLOR"
                    tags="thedotisblack"
                    date="2023/08/27"
                />
                <DisplayItem
                    image={static03}
                    path="/03"
                    label="VERA MOLNAR ALGORITHM"
                    tags="thedotisblack"
                    date="2023/08/26"
                />
                <DisplayItem
                    image={static02}
                    path="/02"
                    label="GRID"
                    tags="thedotisblack"
                    date="2023/08/25"
                />
                <DisplayItem
                    image={static01}
                    path="/01"
                    label="GENERATIVE CIRCLE"
                    tags="thedotisblack"
                    date="2023/08/25"
                />
            </div>
        </>
    )
};

export default GalleryHome;