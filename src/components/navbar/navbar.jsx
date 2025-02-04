import React from 'react';
import styles from './navbar.module.css';
import { massages } from '../../data/data';
import { Link } from 'react-router-dom';

const nestedList = massages.map(m => <li key={m.id} className={styles.list}>
    <Link to={`/massages/${m.type}`} className={styles.nestedLink}>{m.type}</Link>
</li>)

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
                    <div className={styles.parentList}>
                        <span className={styles.text}>massages</span>
                    </div>
                    <ul className={styles.nestedList}>
                        {nestedList}
                    </ul>
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
