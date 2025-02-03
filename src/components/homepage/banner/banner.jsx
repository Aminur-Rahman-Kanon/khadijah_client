import React from 'react';
import styles from './banner.module.css';
import BookNow from '../../bookNow/bookNow';
import face from '../../../assets/logo/face.png'

const Banner = () => {
    return (
        <div className={styles.main}>
            <div className={styles.bg}></div>
            <div className={styles.banner}>
                <div className={styles.imgContainer}>
                    <img src={face} alt='massage' className={styles.img}/>
                </div>
                <h2 className={styles.headingLargeWhite}>Khadijah Massage Centre</h2>
                <h3 className={styles.headingSmallWhite}>A place of well-being where you reset, recharge and restore. </h3>
                <div className={styles.btn}>
                    <BookNow />
                </div>
            </div>
        </div>
    )
}

export default Banner;
