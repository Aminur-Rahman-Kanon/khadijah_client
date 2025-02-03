import React from 'react';
import styles from './done.module.css';
import check from '../../../assets/others/checkmark.png';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.checkContainer}>
                    <img src={check} alt='check' className={styles.check} />
                </div>
                <h2 className={styles.headingLargeBlack}>Thank you for your order!</h2>
                <span className={styles.textSmallBlack}>We can't wait to see you.</span>
            </div>
            <div className={styles.footer}>
                <span className={styles.textSmallBlack}>A confirmaion email has been sent to your email.</span>
                <span className={styles.textSmallBlack}>Care to explore our wide range of massages?</span>
                <Link to={'#'} className={styles.link}>See our massages</Link>
            </div>
        </div>
    )
}

export default PaymentSuccess;
