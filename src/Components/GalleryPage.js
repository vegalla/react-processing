import React from 'react';
import styles from './GalleryPage.module.css';

const GalleryPage = props => {
    return (
        <div className={styles.Page}>
            <div className={styles.Header}>
                {props.header}
            </div>
            {props.process()}
            <div className={styles.Description}>
                adapted from <a href="https://www.youtube.com/@thedotisblack">thedotisblack</a><br />
                <a href={props.hyperlink}>{props.description}</a>
            </div>
        </div>
    )
};

export default GalleryPage;