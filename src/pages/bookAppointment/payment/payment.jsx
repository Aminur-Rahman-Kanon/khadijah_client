import React, { useEffect, useState } from 'react';
import styles from './payment.module.css';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentGateway from '../../../components/paymentGateway/paymentGateway';

const Payment = () => {

    const [clientSecret, setClientSecret] = useState(null);
    const [stripePromise, setStripePromise] = useState(null);

    useEffect(() => {
        const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
        setStripePromise(promise);
    }, [])
    
    useEffect(() => {
        fetch('https://khadijah-server.onrender.com/payment-intent', {
            method: 'POST',
            // headers: {
            //     "Content-Type": 'application/json',
            //     "Access-Control-Allow-Origin": "*"
            // },
            body: JSON.stringify({})
        }).then(async (r) => {
            const { clientSecret } = await r.json();
            setClientSecret(clientSecret)
        })
    }, [])

    const amount = '£120';

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h2 className={styles.headingLargeBlack}>Great, that will be {amount}.</h2>
            </div>
            <div className={styles.payment}>
                {
                    stripePromise && clientSecret && (
                    <Elements stripe={stripePromise} options={{ clientSecret }}>
                        <PaymentGateway />
                    </Elements>
                    )
                }
            </div>
        </div>
    )
}

export default Payment;
