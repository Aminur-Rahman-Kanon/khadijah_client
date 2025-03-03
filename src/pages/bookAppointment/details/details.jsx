import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './details.module.css';
import Button from "../../../components/button/button";
import { connect } from "react-redux";
import { actions } from "../../../redux/actions";
import { emailValidation, phoneNumberValidation } from '../../../utilities/utilities';

const Details = ({ userInput, setUserInput, switchToElements }) => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailValidity, setEmailValidity] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberValidity, setPhoneNumberValidity] = useState(true);
    const [notes, setNotes] = useState('');

    const [btnDisable, setBtnDisable] = useState(false);

    useEffect(() => {
        if (!userInput.service) window.location.href = '/bookings/';
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        let timeId;
        
        if (email) {
            timeId = setTimeout(() => {
                emailValidation(email, setEmailValidity);
            }, [1300])
        }
        
        return () => clearTimeout(timeId);
    }, [email])

    useEffect(() => {
        let timeId;

        if (phoneNumber){
            timeId = setTimeout(() => {
                phoneNumberValidation(phoneNumber, setPhoneNumberValidity);
            }, [1300])
        }

        return () => clearTimeout(timeId);
    }, [phoneNumber])

    useEffect(() => {
        if (name && emailValidity && phoneNumberValidity){
            setBtnDisable(false)
        }
        else {
            setBtnDisable(true);
        }
    }, [ name, emailValidity, phoneNumberValidity, notes ])

    const nextBtnHandler = async () => {
        await setUserInput({name, email, phoneNumber, notes});
        switchToElements('payment');
        navigate('/bookings/service/time/details/payment')
    }

    const prevBtnHandler = () => {
        switchToElements('time');
        navigate(-1);
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.textSmallBlack}>You selected a booking for <span className={styles.textHighlight}>{userInput.service}</span> at <span className={styles.textHighlight}>{userInput.beginTime}</span> for <span className={styles.textHighlight}>{userInput.duration}</span> on <span className={styles.textHighlight}>{userInput.date}</span>. The price for the service is <span className={styles.textHighlight}>£{userInput.price/100}</span>.</span>
                <span className={styles.textSmallBlack}>Please provide your details in the form below to proceed with booking.</span>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.field}>
                    <span className={styles.label}>Name</span>
                    <div className={styles.inputContainer}>
                        <input type="text"
                                placeholder="Full name"
                                className={styles.input}
                                value={userInput.details.name || name}
                                onChange={(e) => setName(e.target.value)}/>
                    </div>
                </div>
                <div className={styles.field}>
                    <span className={styles.label}>Email</span>
                    <div className={styles.inputContainer} style={emailValidity ? {border: '1px solid lightgray'} : {border: '1px solid red'}}>
                        <input type="email" placeholder="Email address" className={styles.input} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <span className={styles.disppearMsg} style={emailValidity ? {display: 'none'} : {display: 'flex'}}>please enter an valid email</span>
                </div>
                <div className={styles.field}>
                    <span className={styles.label}>Phone number</span>
                    <div className={styles.inputContainer} style={phoneNumberValidity ? {border: '1px solid lightgray'} : {border: '1px solid red'}}>
                        <input type="number" placeholder="Phone number" className={styles.input} onChange={(e) => setPhoneNumber(e.target.value)}/>
                    </div>
                    <span className={styles.disppearMsg} style={phoneNumberValidity ? {display: 'none'} : {display: 'flex'}}>please enter an valid phone number</span>
                </div>
                <div className={styles.field}>
                    <span className={styles.label}>Notes</span>
                    <div className={styles.textContainer}>
                        <textarea rows={10} placeholder="Anything you would like us to know before the session" className={styles.textArea} onChange={(e) => setNotes(e.target.value)}/>
                    </div>
                </div>
                <div className={styles.btnGroup}>
                    <div className={styles.btn}>
                        <Button text={'Go back'} handler={prevBtnHandler}/>
                    </div>
                    <div className={styles.btn}>
                        <Button isDisable={btnDisable} text={'Next'} handler={ nextBtnHandler }/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        switchElement: state.switchElement,
        userInput: state.userInput
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        switchToElements: (element) => dispatch({ type: actions.SWITCH_TO_ELEMENTS, payload: element }),
        setUserInput: async (data) => await dispatch({ type: actions.setDetails, payload: data })
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Details);
