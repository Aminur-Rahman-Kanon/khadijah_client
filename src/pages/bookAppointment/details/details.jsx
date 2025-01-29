import React from "react";
import styles from './details.module.css';
import Button from "../../../components/button/button";
import { connect } from "react-redux";
import { actions } from "../../../redux/actions";

const Details = ({ switchElement, switchToElements }) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.textSmallBlack}>You selected a booking for <span className={styles.textHighlight}>Sports Massage</span> at <span className={styles.textHighlight}>9:30 am</span> on <span className={styles.textHighlight}>Jan 30, 2025</span>. The price for the service is <span className={styles.textHighlight}>£120.00</span>.</span>

                    <span className={styles.textSmallBlack}>Please provide your details in the form below to proceed with booking.</span>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.field}>
                    <span className={styles.label}>Name</span>
                    <div className={styles.inputContainer}>
                        <input type="text" placeholder="Full name" className={styles.input} />
                    </div>
                </div>
                <div className={styles.field}>
                    <span className={styles.label}>Email</span>
                    <div className={styles.inputContainer}>
                        <input type="email" placeholder="Email address" className={styles.input} />
                    </div>
                </div>
                <div className={styles.field}>
                    <span className={styles.label}>Phone number</span>
                    <div className={styles.inputContainer}>
                        <input type="number" placeholder="Phone number" className={styles.input} />
                    </div>
                </div>
                <div className={styles.field}>
                    <span className={styles.label}>Notes</span>
                    <div className={styles.textContainer}>
                        <textarea rows={10} placeholder="Anything you would like us to know before the session" className={styles.textArea} />
                    </div>
                </div>
                <div className={styles.btnGroup}>
                    <div className={styles.btn}>
                        <Button text={'Go back'} handler={() => switchToElements('time')}/>
                    </div>
                    <div className={styles.btn}>
                        <Button text={'Next'} handler={() => switchToElements('payment')}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        switchElement: state.switchElement
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        switchToElements: (element) => dispatch({ type: actions.SWITCH_TO_ELEMENTS, payload: element })
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Details);
