import React from 'react';
import styles from './bookNow.module.css';
import { Link } from 'react-router-dom';

const BookNow = ({ path }) => {
    return (
        <div className={styles.main}>
            <Link to={path} className={styles.link}>
                make an appointment
            </Link>
        </div>
    )
}

export default BookNow
