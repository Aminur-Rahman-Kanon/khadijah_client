import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './selectTime.module.css';
import { timeSlot } from "../../../data/data";
import Button from "../../../components/button/button";
import { connect } from "react-redux";
import { actions } from "../../../redux/actions";

const durations = {
    '2': '30 minutes',
    '4': '60 minutes',
    '6': '90 minutes',
}

const prices = {
    '30 minutes': 4500,
    '60 minutes': 8000,
    '90 minutes': 11500,
}

const SelectTime = ({ userInput, setBeginTime, setEndTime, setDurationInput, switchToElements }) => {

    const navigate = useNavigate();

    const [selectedDuration, setSelectedDuration] = useState();
    const [duration, setDuration] = useState('');
    const [selectedTime, setSelectedTime] = useState();
    const [lastIndex, setLastIndex] = useState();

    const btnDisable = userInput.date && userInput.beginTime    

    useEffect(() => {
        if (selectedDuration && selectedTime != null){
            const lastIndex = selectedTime+selectedDuration;
            setLastIndex(lastIndex);
        }
    }, [selectedDuration, selectedTime]);

    const timeInputHandler = (value, i) => {        
        setSelectedTime(i);
        setBeginTime(value);
        setEndTime(timeSlot[selectedDuration + i]);
    }

    const durationInputHandler = (value) => {
        setSelectedDuration(Number(value));
        const duration = durations[value]
        const price = prices[duration]
        setDurationInput({duration, price});
        setEndTime(timeSlot[value + selectedTime])
    }

    const displayTime = timeSlot.map((time, i) => <button  key={time}
                                                        disabled={!selectedDuration}
                                                        className={i >= selectedTime && i <= lastIndex ? `${styles.timeContainer} ${styles.active}` : styles.timeContainer}
                                                        onClick={(e) => timeInputHandler(e.target.innerText, i)}>
        {time} pm
    </button>)
    
    const prevBtnHandler = () => {
        switchToElements('service');
        navigate(-1);
    }

    const nextBtnHandler = () => {
        switchToElements('details');
        navigate('/bookings/service/time/details');
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h2 className={styles.headingLargeBlack}>Please choose time and duration</h2>
            </div>
            <div className={styles.footer}>
                <select defaultValue={'Select duration'} className={styles.select} onChange={(e) => {
                    setDuration(String(e.target.value));
                    durationInputHandler(Number(e.target.value));
                }}>
                    <option disabled>Select duration</option>
                    <option value={2} className={styles.option}>30 minutes</option>
                    <option value={4} className={styles.option}>60 minutes</option>
                    <option value={6} className={styles.option}>90 minutes</option>
                </select>
            </div>
            <div className={styles.container}>
                {displayTime}
            </div>
            <div className={styles.btnGroup}>
                <div className={styles.btn}>
                    <Button text={'Go back'} handler={prevBtnHandler}/>
                </div>
                <div className={styles.btn}>
                    <Button isDisable={!btnDisable} text={'Next'} handler={nextBtnHandler}/>
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
        setBeginTime: (value) => dispatch({ type: actions.selectBeginTime, payload: value }),
        setEndTime: (value) => dispatch({ type: actions.selectEndTime, payload: value }),
        setDurationInput: (value) => dispatch({ type: actions.selectDuration, payload: { duration: value.duration, price: value.price } }),
        switchToElements: (element) => dispatch({ type: actions.SWITCH_TO_ELEMENTS, payload: element })
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (SelectTime);
