import React from 'react';
import { Link } from 'react-router-dom';

import static01 from '../Assets/01.png';
import static02 from '../Assets/02.png';
import static03 from '../Assets/03.png';

import styles from './GalleryHome.module.css';

import DisplayItem from '../UI/DisplayItem';

const GalleryHome = () => {
    return (
        <div className={styles.DisplayZone}>
            <DisplayItem
                image={static01}
                path="/01"
                label="GENERATIVE CIRCLE"
                tags="thedotisblack"
            />
            <DisplayItem
                image={static02}
                path="/02"
                label="GRID"
                tags="thedotisblack"
            />
            <DisplayItem
                image={static03}
                path="/03"
                label="VERA MOLNAR ALGORITHM"
                tags="thedotisblack"
            />
        </div>
    )
};

export default GalleryHome;