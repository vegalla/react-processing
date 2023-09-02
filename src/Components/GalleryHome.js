import React from 'react';

import static01 from '../Assets/01.png';
import static02 from '../Assets/02.png';
import static03 from '../Assets/03.png';
import static04 from '../Assets/04.png';
import static05 from '../Assets/05.png';
import static06 from '../Assets/06.png';
import static07 from '../Assets/07.png';

import styles from './GalleryHome.module.css';

import DisplayItem from '../UI/DisplayItem';
import { TAGS } from "./GALLERY_HOME_CONFIG";

const GalleryHome = () => {
    console.log({ TAGS })
    return (
        <>
            <div className={styles.Header}>
                <span>generative art</span>
            </div>
            <div className={styles.DisplayZone}>
                {/* <div className={styles.Appear0}> */}
                <DisplayItem
                    image={static07}
                    path="/vince-01"
                    label="GRID | NERVOUS CIRCLE"
                    tags={TAGS[1]}
                    date="2023/09/01"
                />
                <DisplayItem
                    image={static07}
                    path="/tdib-07"
                    label="NERVOUS RECTANGLE"
                    tags={TAGS[0]}
                    date="2023/08/31"
                />
                {/* </div> */}
                {/* <div className={styles.Appear1}> */}
                <DisplayItem
                    image={static06}
                    path="/tdib-06"
                    label="OPTICAL ILLUSION | ROTATE + SCALE"
                    tags={TAGS[0]}
                    date="2023/08/29"
                />
                {/* </div> */}
                {/* <div className={styles.Appear2}> */}
                <DisplayItem
                    image={static05}
                    path="/tdib-05"
                    label="ROTATE + SCALE"
                    tags={TAGS[0]}
                    date="2023/08/28"
                />
                {/* </div> */}
                {/* <div className={styles.Appear3}> */}
                <DisplayItem
                    image={static04}
                    path="/tdib-04"
                    label="GRID WITH WHILE LOOP AND COLOR"
                    tags={TAGS[0]}
                    date="2023/08/27"
                />
                {/* </div> */}
                {/* <div className={styles.Appear4}> */}
                <DisplayItem
                    image={static03}
                    path="/tdib-03"
                    label="VERA MOLNAR ALGORITHM"
                    tags={TAGS[0]}
                    date="2023/08/26"
                />
                {/* </div> */}
                {/* <div className={styles.Appear5} > */}
                <DisplayItem
                    image={static02}
                    path="/tdib-02"
                    label="GRID"
                    tags={TAGS[0]}
                    date="2023/08/25"
                />
                <DisplayItem
                    image={static01}
                    path="/tdib-01"
                    label="GENERATIVE CIRCLE"
                    tags={TAGS[0]}
                    date="2023/08/25"
                />
                {/* </div> */}
            </div >
        </>
    )
};

export default GalleryHome;