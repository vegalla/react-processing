import styles from './DisplayItem.module.css';

import { Link } from 'react-router-dom';

// Add hover effects and click to div to go to next page

const DisplayItem = props => {
    return (
        <Link to={props.path}>
            <div className={styles.DisplayItem}>
                <span>
                    <img className={styles.Thumbnail} src={props.image} alt="" loading="lazy"/>
                    <div className={styles.DisplayDescription}>
                        <p className={styles.DescriptionText}>
                            {props.label}
                        </p>
                        <span>
                            <div className={styles.Tags}>{props.tags}</div>
                            <div className={styles.Date}>Last Modified: {props.date}</div>
                        </span>
                    </div>
                </span>
            </div>
        </Link>
    )
};

export default DisplayItem;