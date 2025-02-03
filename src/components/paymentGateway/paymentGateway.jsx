import React, {useState} from 'react';
import './paymentGateway.css';
import { PaymentElement } from '@stripe/react-stripe-js';
import { useElements, useStripe } from '@stripe/react-stripe-js'
import Button from '../button/button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions';


const PaymentGateway = ({ userInput, toggleElement }) => {

    const stripe = useStripe();
    const elements = useElements();

    const [spinner, setSpinner] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        setSpinner(true);

        await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: 'https://khadijah-client.onrender.com/book-appointment/payment-success',
            },
            redirect: 'if_required'
        }).then(async d => {
            if (d.error){
                setSpinner(false);
                return toast.error(`${d.error.code}\n${d.error.message}`)
            }
            else {
                await fetch('https://khadijah-server.onrender.com/confirm-payment', {
                    method:'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ userInput })
                }).then(res => res.json()).then(resp => {
                    if (resp.status === 'success'){
                        setSpinner(false);
                        return toggleElement('done');
                    }
                })
                .catch(e => {
                    setSpinner(false);
                    return toast.error(e.message)
                })
            }
        }).catch(e => {
            setSpinner(false);
            return toast.error(e.message)
        })
    }

    return (
        <>
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
                        <Button text={'Go back'} handler={(e) => {
                            e.preventDefault();
                            toggleElement('details')
                        }}/>
                    </div>
                    <div className='btn'>
                        <Button text={'Pay £30 pound'} isPending={spinner} handler={handleSubmit}/>
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        serviceElement: state.serviceElement,
        userInput: state.userInput
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleElement: (element) => dispatch({ type: actions.SWITCH_TO_ELEMENTS, payload: element })
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (PaymentGateway);
