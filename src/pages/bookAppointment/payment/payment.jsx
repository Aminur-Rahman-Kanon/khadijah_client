import React, { useEffect, useState } from 'react';
import styles from './payment.module.css';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentGateway from '../../../components/paymentGateway/paymentGateway';
import { connect } from 'react-redux';

const Payment = ({ userInput, price }) => {

    const [clientSecret, setClientSecret] = useState(null);
    const [stripePromise, setStripePromise] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        if (!userInput.service) window.location.href = '/bookings/';
        const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
        setStripePromise(promise);
    }, [])
    
    useEffect(() => {
        fetch('https://khadijah-server.onrender.com/payment-intent', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({
                amount: price
            })
        }).then(async (r) => {
            const { clientSecret } = await r.json();
            setClientSecret(clientSecret)
        }).catch(e => console.log(e.message)
        )
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h2 className={styles.headingLargeBlack}>Great, that will be {price || 0}.</h2>
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

const mapStateToProps = state => {
    return {
        userInput: state.userInput,
        price: state.userInput.price
    }
}

export default connect(mapStateToProps) (Payment);
