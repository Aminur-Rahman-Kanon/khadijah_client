import React, { useEffect } from "react";
import styles from './service.module.css';
import Button from "../../../components/button/button";
import { connect } from "react-redux";
import { actions } from "../../../redux/actions";
import { massage } from '../../../data/data';
import { useNavigate } from 'react-router-dom';

const Service = ({ userInput, switchToElements, takeUserInput }) => {

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
        
    const service = Object.values(massage).map((m, i) => <option key={i} value={m.title} className={styles.option}>{m.title}</option>)

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
                    {service}
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
