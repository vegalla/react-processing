import React from 'react';

import imgTdib01 from '../Assets/tdib/01.png';
import imgTdib02 from '../Assets/tdib/02.png';
import imgTdib03 from '../Assets/tdib/03.png';
import imgTdib04 from '../Assets/tdib/04.png';
import imgTdib05 from '../Assets/tdib/05.png';
import imgTdib06 from '../Assets/tdib/06.png';
import imgTdib07 from '../Assets/tdib/07.png';
import imgTdib08 from '../Assets/tdib/08.png';

import imgVince01 from '../Assets/vince/01.png';
import imgVince02 from '../Assets/vince/02.png';


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
                    image={imgTdib08}
                    path="/tdib-08"
                    label="RANDOM WALKER"
                    tags={TAGS[0]}
                    date="2023/09/03"
                />
                <DisplayItem
                    image={imgVince02}
                    path="/vince-02"
                    label="EYE + NERVOUS CIRCLE"
                    tags={TAGS[1]}
                    date="2023/09/02"
                />
                <DisplayItem
                    image={imgVince01}
                    path="/vince-01"
                    label="GRID + NERVOUS CIRCLE"
                    tags={TAGS[1]}
                    date="2023/09/01"
                />
                <DisplayItem
                    image={imgTdib07}
                    path="/tdib-07"
                    label="NERVOUS RECTANGLE"
                    tags={TAGS[0]}
                    date="2023/08/31"
                />
                {/* </div> */}
                {/* <div className={styles.Appear1}> */}
                <DisplayItem
                    image={imgTdib06}
                    path="/tdib-06"
                    label="OPTICAL ILLUSION | ROTATE + SCALE"
                    tags={TAGS[0]}
                    date="2023/08/29"
                />
                {/* </div> */}
                {/* <div className={styles.Appear2}> */}
                <DisplayItem
                    image={imgTdib05}
                    path="/tdib-05"
                    label="ROTATE + SCALE"
                    tags={TAGS[0]}
                    date="2023/08/28"
                />
                {/* </div> */}
                {/* <div className={styles.Appear3}> */}
                <DisplayItem
                    image={imgTdib04}
                    path="/tdib-04"
                    label="GRID WITH WHILE LOOP AND COLOR"
                    tags={TAGS[0]}
                    date="2023/08/27"
                />
                {/* </div> */}
                {/* <div className={styles.Appear4}> */}
                <DisplayItem
                    image={imgTdib03}
                    path="/tdib-03"
                    label="VERA MOLNAR ALGORITHM"
                    tags={TAGS[0]}
                    date="2023/08/26"
                />
                {/* </div> */}
                {/* <div className={styles.Appear5} > */}
                <DisplayItem
                    image={imgTdib02}
                    path="/tdib-02"
                    label="GRID"
                    tags={TAGS[0]}
                    date="2023/08/25"
                />
                <DisplayItem
                    image={imgTdib01}
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