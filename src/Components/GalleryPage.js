import React from 'react';
import styles from './GalleryPage.module.css';

const GalleryPage = props => {
    return (
        <div className={styles.page}>
            <div className={styles.header}>
                {props.header}
            </div>
            <div id="p5-container" className={styles.wrapper}>
                {props.process()}
            </div>
            <div className={styles.description}>
                <>
                    {props.hyperlink && <><p>adapted from <a href="https://www.youtube.com/@thedotisblack">thedotisblack</a></p></>}
                    <a href={props.hyperlink}>{props.description}</a>
                </>
            </div>
        </div>
    )
};

export default GalleryPage;