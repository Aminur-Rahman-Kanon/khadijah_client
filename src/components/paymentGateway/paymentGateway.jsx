import React, {useState} from 'react';
import './paymentGateway.css';
import { PaymentElement } from '@stripe/react-stripe-js';
import { useElements, useStripe } from '@stripe/react-stripe-js'
import Button from '../button/button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions';


const PaymentGateway = ({ serviceElement, toggleElement }) => {

    const stripe = useStripe();
    const elements = useElements();

    const [spinner, setSpinner] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        setSpinner(true);

        const {error} = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: 'http://localhost:3000/book-appointment',
            },
            redirect: 'if_required'
        })

        setSpinner(false);
        if (error) {
            return toast.error(error.message)
        };

        toggleElement('done');
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
        serviceElement: state.serviceElement
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleElement: (element) => dispatch({ type: actions.SWITCH_TO_ELEMENTS, payload: element })
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (PaymentGateway);
