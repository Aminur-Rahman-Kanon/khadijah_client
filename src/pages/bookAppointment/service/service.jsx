import React from "react";
import styles from './service.module.css';
import Button from "../../../components/button/button";
import { connect } from "react-redux";
import { actions } from "../../../redux/actions";

const Service = ({ userInput, switchToElements, takeUserInput }) => {
    
    console.log(userInput);
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h3 className={styles.headingSmallBlack}>Please select a service</h3>
            </div>
            <div className={styles.container}>
                <select defaultValue={'Select service'} className={styles.select} onChange={(e) => takeUserInput(e.target.value)}>
                    <option disabled className={styles.option}>Select service</option>
                    <option className={styles.option} value={'Sports massage'}>Sports massage</option>
                    <option className={styles.option} value={'HS massage'}>HS massage</option>
                    <option className={styles.option} value={'Massage therapy'}>Massage therapy</option>
                    <option className={styles.option} value={'Physiotherapy'}>Physiotherapy</option>
                </select>
            </div>
            <div className={styles.footer}>
                <div className={styles.btnContainer}>
                    <Button isDisable={!userInput.service} text={'Next'} handler={() => switchToElements('time')}/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userInput: state.userInput
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        switchToElements: (element) => dispatch({ type: actions.SWITCH_TO_ELEMENTS, payload: element }),
        takeUserInput: (value) => dispatch({ type: actions.selectService, payload: value })
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Service);
