import React from 'react';
import styles from './footer.module.css';
import sample from '../../assets/logo/logo_sample_2.png';
import BookNow from '../bookNow/bookNow';
import Sociallink from '../socialLink/socialLink';


const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.leftItem}>
            <div className={styles.logoContainer}>
                <img src={ sample } alt='masssge' className={styles.logo} />
            </div>
            <h2 className={styles.headerLargeWhite}>Welcome to one of the best therapeutic massage studios in your area!</h2>
            <div className={styles.openingHours}>
                <h3 className={styles.headerSmallWhite} style={{fontSize: '1.2rem'}}>Opening hours</h3>
                <div className={styles.item}>
                    <span className={styles.textSmallWhite} style={{fontSize: '1rem', marginRight: '5px'}}>Mon & Sat: </span>
                    <span className={styles.textSmallWhite} style={{fontSize: '1rem'}}>10 AM to 8PM</span>
                </div>
            </div>
            <div className={styles.bookNowBtn}>
                <BookNow path={'/bookings'}/>
            </div>
        </div>
        <div className={styles.rightItem}>
            <div className={styles.contact}>
                <h3 className={styles.headerSmallWhite}>say hello</h3>
                {/* <a href='tel:00447950999729' className={styles.tel}>+447950999729</a> */}
                <a href='mailto:info@divinetouchbyola.com' className={styles.tel}>info@divinetouchbyola.com</a>
            </div>
            <div className={styles.address}>
                <div className={styles.content}>
                    <h3 className={styles.headerSmallWhite}>address</h3>
                    <span className={styles.textSmallWhite}>Divine Touch by Ola</span>
                    <span className={styles.textSmallWhite}>Inside Beauty Essence</span>
                    <span className={styles.textSmallWhite}>7 well court</span>
                    <span className={styles.textSmallWhite}>city of london</span>
                    <span className={styles.textSmallWhite}>EC4M 9DN</span>
                </div>
                <div className={styles.socialLink}>
                    <Sociallink style={'largePink'}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;
