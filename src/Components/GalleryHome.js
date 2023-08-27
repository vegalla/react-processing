import React from 'react';
import { Link } from 'react-router-dom';

import static01 from '../Assets/01.png';

import styles from './GalleryHome.module.css';

const GalleryHome = () => {
    return (
        <div className={styles.DisplayZone}>
            <div className={styles.DisplayItem}>
                <span>
                    <img className={styles.Thumbnail} src={static01} alt="GENERATIVE CIRCLE GRID" />
                    <Link to="/01">GENERATIVE CIRCLE</Link>
                </span>
            </div>
        </div>
    )
};

export default GalleryHome;