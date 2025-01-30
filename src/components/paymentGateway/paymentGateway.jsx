import React from 'react';
import './paymentGateway.css';
import { PaymentElement } from '@stripe/react-stripe-js';
import Button from '../button/button';

const PaymentGateway = () => {
    return (
        <div className='wrapper'>
            <form className='formContainer'>
                <div className='inputGroup'>
                    <div className='field'>
                        <span className='label'>First name</span>
                        <div className='inputContainer'>
                            <input type='text' placeholder='First name' className='input' />
                        </div>
                    </div>
                    <div className='field'>
                        <span className='label'>Last name</span>
                        <div className='inputContainer'>
                            <input type='text' placeholder='Last name' className='input' />
                        </div>
                    </div>
                </div>
                <div className='inputGroup'>
                    <PaymentElement />
                </div>
                <div className='btnGroup'>
                    <div className='btn'>
                        <Button text={'Go back'} />
                    </div>
                    <div className='btn'>
                        <Button text={'Pay £30 pound'} />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PaymentGateway;
