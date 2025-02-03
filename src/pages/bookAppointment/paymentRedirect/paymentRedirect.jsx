import React from 'react';
import styles from './paymentRedirect.module.css';
import Progress from '../progress/progress';
import check from '../../../assets/others/checkmark.png';
import xmark from '../../../assets/others/xmark.png';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../components/button/button';

const PaymentRedirect = () => {

    const navigate = useNavigate();

    const status = window.location.href.split('status=').at(-1);

    const display = status === 'succeeded' ? <div className={styles.container}>
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
    :
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.checkContainer}>
                <img src={xmark} alt='failed' className={styles.check} />
            </div>
            <h2 className={styles.headingLargeBlack}>Sorry the payment didn't go through</h2>
            <span className={styles.textSmallBlack}>Please try again or contact card issuer.</span>
        </div>
        <div className={styles.footer}>
            {/* <span className={styles.textSmallBlack}>A confirmaion email has been sent to your email.</span>
            <span className={styles.textSmallBlack}>Care to explore our wide range of massages?</span> */}
            <div className={styles.btn}>
                <Button text={'Go back'} handler={() => navigate(-1)}/>
            </div>
        </div>
    </div>
    
    return (
        <div className={styles.wrapper}>
            {display}
        </div>
    )
}

export default PaymentRedirect;
