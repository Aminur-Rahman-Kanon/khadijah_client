import React, { useEffect, useState } from "react";
import styles from './selectTime.module.css';
import { timeSlot } from "../../../data/data";
import Button from "../../../components/button/button";
import { connect } from "react-redux";
import { actions } from "../../../redux/actions";

const SelectTime = ({ switchToElements }) => {

    const [selectedDuration, setSelectedDuration] = useState();
    const [selectedTime, setSelectedTime] = useState();
    const [lastIndex, setLastIndex] = useState();

    useEffect(() => {
        if (selectedDuration && selectedTime != null){
            const lastIndex = selectedTime+selectedDuration;
            setLastIndex(lastIndex);
            console.log(selectedTime);
            console.log(lastIndex);
        }
    }, [selectedDuration, selectedTime]);

    const displayTime = timeSlot.map((time, i) => <button  key={time}
                                                        className={i >= selectedTime && i <= lastIndex ? `${styles.timeContainer} ${styles.active}` : styles.timeContainer}
                                                        onClick={() => setSelectedTime(i)}>
        {time} pm
    </button>)
    

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h2 className={styles.headingLargeBlack}>Please select time and duration</h2>
            </div>
            <div className={styles.footer}>
                <select defaultValue={'Select duration'} className={styles.select} onChange={(e) => setSelectedDuration(Number(e.target.value))}>
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
                    <Button text={'Go back'} handler={() => switchToElements('service')}/>
                </div>
                <div className={styles.btn}>
                    <Button text={'Next'} handler={() => switchToElements('details')}/>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        switchToElements: (element) => dispatch({ type: actions.SWITCH_TO_ELEMENTS, payload: element })
    }
}

export default connect(null, mapDispatchToProps) (SelectTime);
