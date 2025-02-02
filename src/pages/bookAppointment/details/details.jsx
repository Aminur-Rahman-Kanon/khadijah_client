import React, { useEffect, useState } from "react";
import styles from './details.module.css';
import Button from "../../../components/button/button";
import { connect } from "react-redux";
import { actions } from "../../../redux/actions";

const Details = ({ userInput, setUserInput, switchToElements }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [notes, setNotes] = useState('');

    const [btnDisable, setBtnDisable] = useState(false);

    useEffect(() => {
        if (name && email && phoneNumber && notes){
            setBtnDisable(false)
        }
        else {
            setBtnDisable(true);
        }
    }, [ name, email, phoneNumber, notes ])

    const btnHandler = () => {
        setUserInput({name, email, phoneNumber, notes});
        switchToElements('payment');
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.textSmallBlack}>You selected a booking for <span className={styles.textHighlight}>{userInput.service}</span> at <span className={styles.textHighlight}>{userInput.beginTime}</span> for <span className={styles.textHighlight}>{userInput.duration}</span> on <span className={styles.textHighlight}>{userInput.date}</span>. The price for the service is <span className={styles.textHighlight}>£120.00</span>.</span>
                <span className={styles.textSmallBlack}>Please provide your details in the form below to proceed with booking.</span>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.field}>
                    <span className={styles.label}>Name</span>
                    <div className={styles.inputContainer}>
                        <input type="text" placeholder="Full name" className={styles.input} onChange={(e) => setName(e.target.value)}/>
                    </div>
                </div>
                <div className={styles.field}>
                    <span className={styles.label}>Email</span>
                    <div className={styles.inputContainer}>
                        <input type="email" placeholder="Email address" className={styles.input} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                </div>
                <div className={styles.field}>
                    <span className={styles.label}>Phone number</span>
                    <div className={styles.inputContainer}>
                        <input type="number" placeholder="Phone number" className={styles.input} onChange={(e) => setPhoneNumber(e.target.value)}/>
                    </div>
                </div>
                <div className={styles.field}>
                    <span className={styles.label}>Notes</span>
                    <div className={styles.textContainer}>
                        <textarea rows={10} placeholder="Anything you would like us to know before the session" className={styles.textArea} onChange={(e) => setNotes(e.target.value)}/>
                    </div>
                </div>
                <div className={styles.btnGroup}>
                    <div className={styles.btn}>
                        <Button text={'Go back'} handler={() => switchToElements('time')}/>
                    </div>
                    <div className={styles.btn}>
                        <Button isDisable={btnDisable} text={'Next'} handler={ btnHandler }/>
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
