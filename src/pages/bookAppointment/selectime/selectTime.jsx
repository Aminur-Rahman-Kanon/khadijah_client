import React, { useEffect, useState } from "react";
import styles from './selectTime.module.css';
import { timeSlot } from "../../../data/data";

const SelectTime = () => {

    const [selectedDuration, setSelectedDuration] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [lastIndex, setLastIndex] = useState(null);

    useEffect(() => {
        if (selectedDuration && selectedTime != null){
            const lastIndex = selectedTime+selectedDuration;
            setLastIndex(lastIndex);
            console.log(selectedTime);
            console.log(lastIndex);
        }
    }, [selectedDuration, selectedTime]);

    const displayTime = timeSlot.map((time, i) => <div key={time}
                                                        className={i >= selectedTime && i <= lastIndex ? `${styles.timeContainer} ${styles.active}` : styles.timeContainer}
                                                        onClick={() => setSelectedTime(i)}>
        <span className={styles.time}>{time} pm</span>
    </div>)
    

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h2 className={styles.headingLargeBlack}>Please select time and duration</h2>
            </div>
            <div className={styles.footer}>
                <select defaultValue={'Select duration'} className={styles.select} onChange={(e) => setSelectedDuration(Number(e.target.value))}>
                    <option disabled>Select duration</option>
                    <option value={2} className={styles.option}>30 minutes</option>
                    <option value={3} className={styles.option}>45 minutes</option>
                    <option value={4} className={styles.option}>1 hour</option>
                </select>
            </div>
            <div className={styles.container}>
                {displayTime}
            </div>
        </div>
    )
}

export default SelectTime;
