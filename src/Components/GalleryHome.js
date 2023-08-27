import React from 'react';
import { Link } from 'react-router-dom';

import static01 from '../Assets/01.png';
import static02 from '../Assets/02.png';
import static03 from '../Assets/03.png';

import styles from './GalleryHome.module.css';

const GalleryHome = () => {
    return (
        <div className={styles.DisplayZone}>
            <div className={styles.DisplayItem}>
                <span>
                    <img className={styles.Thumbnail} src={static01} />
                    <Link to="/01">GENERATIVE CIRCLE</Link>
                </span>
            </div>
            <div className={styles.DisplayItem}>
                <span>
                    <img className={styles.Thumbnail} src={static02}/>
                    <Link to="/02">GRID</Link>
                </span>
            </div>
            <div className={styles.DisplayItem}>
                <span>
                    <img className={styles.Thumbnail} src={static03}/>
                    <Link to="/03">VERA MOLNAR ALGORITHM</Link>
                </span>
            </div>
        </div>
    )
};

export default GalleryHome;