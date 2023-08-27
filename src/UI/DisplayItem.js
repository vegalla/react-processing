import styles from './DisplayItem.module.css';

import { Link } from 'react-router-dom';

const DisplayItem = props => {
    return (
        <div className={styles.DisplayItem}>
            <span>
                <img className={styles.Thumbnail} src={props.image} />
                <div className={styles.DisplayDescription}>
                    <Link to={props.path}>{props.label}</Link>
                    <div className={styles.Tags}>{props.tags}</div>
                </div>
            </span>
        </div>
    )
};

export default DisplayItem;