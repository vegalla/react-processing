import styles from './DisplayItem.module.css';

import { Link } from 'react-router-dom';

const DisplayItem = props => {
    return (
        <div className={styles.DisplayItem}>
            <span>
                <img className={styles.Thumbnail} src={props.image} alt=""/>
                <div className={styles.DisplayDescription}>
                    <Link to={props.path}>{props.label}</Link>
                    <br/>
                    <span>
                        <div className={styles.Tags}>{props.tags}</div>
                        <div className={styles.Date}>Last Modified: {props.date}</div>
                    </span>
                </div>
            </span>
        </div>
    )
};

export default DisplayItem;