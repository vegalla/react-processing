import { Outlet, Link, NavLink } from "react-router-dom";

import styles from './Layout.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Layout = () => {
    return (
        <> 
            <div className={styles.Nav}>
                <nav>
                    <NavLink
                        exact="true"
                        activeclassname="active"
                        to="/">
                        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                    </NavLink>
                </nav>
            </div>
            <Outlet />
        </>
    )
};

export default Layout;
