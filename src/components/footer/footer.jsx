import React from 'react';
import styles from './footer.module.css';
import face from '../../assets/logo/face.png';
import BookNow from '../bookNow/bookNow';
import Sociallink from '../socialLink/socialLink';

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.leftItem}>
            <div className={styles.logoContainer}>
                <img src={face} alt='masssge' className={styles.logo} />
            </div>
            <h2 className={styles.headerLargeWhite}>Welcome to one of the best therapeutic massage studios in your area!</h2>
            <div className={styles.bookNowBtn}>
                <BookNow />
            </div>
        </div>
        <div className={styles.rightItem}>
            <div className={styles.address}>
                <div className={styles.content}>
                    <h3 className={styles.headerSmallWhite}>address</h3>
                    <span className={styles.textSmallWhite}>36 st mary at hill</span>
                    <span className={styles.textSmallWhite}>city of london, ec3r 8du</span>
                </div>
                <div className={styles.socialLink}>
                    <Sociallink style={'largePink'}/>
                </div>
            </div>
            <div className={styles.contact}>
                <h3 className={styles.headerSmallWhite}>say hello</h3>
                <a href='tel:00447950999729' className={styles.tel}>+447950999729</a>
                <a href='mailto:info@pacificlift.net' className={styles.tel}>info@khadijah.net</a>
            </div>
        </div>
    </div>
  )
}

export default Footer;
