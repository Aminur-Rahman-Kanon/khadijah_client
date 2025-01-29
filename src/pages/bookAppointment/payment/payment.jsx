import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import styles from './payment.module.css';

const cardStyle = {
    hidePostalCode: true,
    iconStyle: 'solid',
    style: {
      base: {
        color: "#7db2ed",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "lightgray"
        }
      },
      invalid: {
        fontFamily: 'Arial, sans-serif',
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };


const Payment = () => {

    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    return (
        <>
        <div className={styles.paymentCardContainer}>
            {stripe ? <CardElement options={cardStyle} /> : <p style={{margin: '0', color: 'lightgray'}}>Loading failed</p>}
        </div>
        </>
    )
}

export default Payment;
