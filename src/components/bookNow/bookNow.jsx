import React from 'react';
import styles from './bookNow.module.css';
import { Link } from 'react-router-dom';

const BookNow = () => {
    return (
        <div className={styles.main}>
            <Link to={'#'} className={styles.link}>
                book now
            </Link>
        </div>
    )
}

export default BookNow
