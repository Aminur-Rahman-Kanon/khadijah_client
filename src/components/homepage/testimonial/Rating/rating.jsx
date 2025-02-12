import React from 'react';
import styles from './rating.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Rating = ({ rating }) => {

    //if no rating then abort
    if (!rating) return;

    //if there is less than 5 star then we calculate the active and inactive stars
    const activeRating = rating;
    const inActiveRating = 5-activeRating;
    let displayRating;

    if (!inActiveRating) {
        displayRating = Array.from(Array(activeRating)).map((str, idx) => <div key={idx} className={styles.rating}>
            <FontAwesomeIcon icon={faStar} className={`${styles.star} ${styles.activeStar}`} />
        </div>)
    }
    else {
        displayRating = Array.from(Array(activeRating)).map((str, idx) => <div key={idx} className={styles.rating}>
            <FontAwesomeIcon icon={faStar} className={`${styles.star} ${styles.activeStar}`} />
        </div>).concat(Array.from(Array(inActiveRating)).map((str, idx) => <div key={idx + 5} className={styles.rating}>
            <FontAwesomeIcon icon={faStar} className={styles.star} />            
        </div>))
    }

    return (
        <div className={styles.ratingContainer}>
            {displayRating}
        </div>
    )
}

export default Rating;
