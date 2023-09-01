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
                <div className={styles.Appear0}>
                    <DisplayItem
                        image={static07}
                        path="/07"
                        label="NERVOUS RECTANGLE"
                        tags={TAGS[0]}
                        date="2023/08/31"
                    />
                </div>
                <div className={styles.Appear1}>
                    <DisplayItem
                        image={static06}
                        path="/06"
                        label="OPTICAL ILLUSION | ROTATE + SCALE"
                        tags={TAGS[0]}
                        date="2023/08/29"
                    />
                </div>
                <div className={styles.Appear2}>
                    <DisplayItem
                        image={static05}
                        path="/05"
                        label="ROTATE + SCALE"
                        tags={TAGS[0]}
                        date="2023/08/28"
                    />
                </div>
                <div className={styles.Appear3}>
                    <DisplayItem
                        image={static04}
                        path="/04"
                        label="GRID WITH WHILE LOOP AND COLOR"
                        tags={TAGS[0]}
                        date="2023/08/27"
                    />
                </div>
                <div className={styles.Appear4}>
                    <DisplayItem
                        image={static03}
                        path="/03"
                        label="VERA MOLNAR ALGORITHM"
                        tags={TAGS[0]}
                        date="2023/08/26"
                    />
                </div>
                <DisplayItem
                    image={static02}
                    path="/02"
                    label="GRID"
                    tags={TAGS[0]}
                    date="2023/08/25"
                />
                <DisplayItem
                    image={static01}
                    path="/01"
                    label="GENERATIVE CIRCLE"
                    tags={TAGS[0]}
                    date="2023/08/25"
                />
            </div >
        </>
    )
};

export default GalleryHome;