import React, { useEffect } from "react";
import styles from './service.module.css';
import Button from "../../../components/button/button";
import { connect } from "react-redux";
import { actions } from "../../../redux/actions";
import { massages } from '../../../data/data';
import { useParams, useNavigate } from 'react-router-dom';

const Service = ({ userInput, switchToElements, takeUserInput }) => {

    const navigate = useNavigate();
        
    const massage = massages.map(m => <option key={m.id} value={m.type} className={styles.option}>{m.type}</option>)

    const btnHander = () => {
        switchToElements('time');
        navigate('/bookings/service/time')
    }

    
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h3 className={styles.headingSmallBlack}>Please select a service</h3>
            </div>
            <div className={styles.container}>
                <select value={ userInput.service || 'Select service'}
                        className={styles.select}
                        onChange={(e) => takeUserInput(e.target.value)}>
                    <option disabled className={styles.option}>Select service</option>
                    {massage}
                </select>
            </div>
            <div className={styles.footer}>
                <div className={styles.btnContainer}>
                    <Button isDisable={!userInput.service} text={'Next'} handler={btnHander}/>
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
