import React from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.main}>
            <ul className={styles.container}>
                <li className={styles.item}>
                    <a href='/' className={styles.link}>
                        home
                    </a>
                </li>
                <li className={styles.item}>
                    <a href='#' className={styles.link}>
                        massages
                    </a>
                </li>
                <li className={styles.item}>
                    <a href='#' className={styles.link}>
                        about us
                    </a>
                </li>
                <li className={styles.item}>
                    <a href='#' className={styles.link}>
                        contact
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
