import React from 'react';

import imgTdib01 from '../Assets/tdib/01.png';
import imgTdib02 from '../Assets/tdib/02.png';
import imgTdib03 from '../Assets/tdib/03.png';
import imgTdib04 from '../Assets/tdib/04.png';
import imgTdib05 from '../Assets/tdib/05.png';
import imgTdib06 from '../Assets/tdib/06.png';
import imgTdib07 from '../Assets/tdib/07.png';
import imgTdib08 from '../Assets/tdib/08.png';
import imgTdib09 from '../Assets/tdib/09.png';
import imgTdib10 from '../Assets/tdib/10.png';
import imgTdib12 from '../Assets/tdib/12.png';
import imgTdib13 from '../Assets/tdib/13.png';
import imgTdib14 from '../Assets/tdib/14.png';

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
                <DisplayItem
                    image={imgTdib14}
                    path="tdib-14"
                    label="LOOP OF HUES & ROUNDED RECTANGLES 1"
                    tags={TAGS[0]}
                    date="2023/12/08"
                />
                <DisplayItem
                    image={imgTdib13}
                    path="tdib-13"
                    label="PERFECT FOR() LOOP"
                    tags={TAGS[0]}
                    date="2023/12/05"
                />
                <DisplayItem
                    image={imgTdib12}
                    path="tdib-12"
                    label="GENERATIVE GRID DRAWINGS"
                    tags={TAGS[0]}
                    date="2023/10/02"
                />
                <DisplayItem
                    image={imgTdib10}
                    path="/tdib-10"
                    label="PERFECT LOOP with SINE & COSINE"
                    tags={TAGS[0]}
                    date="2023/10/02"
                />
                <DisplayItem
                    image={imgTdib09}
                    path="/tdib-09"
                    label="GRID + ROTATE/SCALE"
                    tags={TAGS[0]}
                    date="2023/09/05"
                />
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
                <DisplayItem
                    image={imgTdib06}
                    path="/tdib-06"
                    label="OPTICAL ILLUSION | ROTATE + SCALE"
                    tags={TAGS[0]}
                    date="2023/08/29"
                />
                <DisplayItem
                    image={imgTdib05}
                    path="/tdib-05"
                    label="ROTATE + SCALE"
                    tags={TAGS[0]}
                    date="2023/08/28"
                />
                <DisplayItem
                    image={imgTdib04}
                    path="/tdib-04"
                    label="GRID WITH WHILE LOOP AND COLOR"
                    tags={TAGS[0]}
                    date="2023/08/27"
                />
                <DisplayItem
                    image={imgTdib03}
                    path="/tdib-03"
                    label="VERA MOLNAR ALGORITHM"
                    tags={TAGS[0]}
                    date="2023/10/02"
                />
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
            </div >
        </>
    )
};

export default GalleryHome;