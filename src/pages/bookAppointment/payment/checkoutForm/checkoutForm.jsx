import React from 'react';
import styles from './checkoutForm.module.css';

const CheckoutForm = () => {
    return (
        <div className={styles.wrapper}>
            <form>
                <input type='text' placeholder='full name'/>
                <input type='email' placeholder='email address'/>
                <button>submit</button>
            </form>
        </div>
    )
}

export default CheckoutForm;
