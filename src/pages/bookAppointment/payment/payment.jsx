import React from 'react';
import styles from './payment.module.css';
import PaymentGateway from '../../../components/paymentGateway/paymentGateway';

const Payment = () => {

    const amount = '£120';

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h2 className={styles.headingLargeBlack}>Great, that will be {amount}.</h2>
            </div>
            <div className={styles.payment}>
                <PaymentGateway />
            </div>
        </div>
    )
}

export default Payment;
