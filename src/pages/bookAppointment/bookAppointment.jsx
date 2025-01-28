import React from "react";
import styles from './bookAppointment.module.css';
import bg from '../../assets/bookAppointment/bookAppointment_bg.jpg';
import Progress from './progress/progress';
import Service from "./service/service";
import SelectDate from "./selectDate/selectDate";

const BookAppointment = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.bgWrapper}>
                <div className={styles.bgContainer}>
                    <img src={bg} alt="massage" className={styles.bg} />
                </div>
                <div className={styles.banner}>
                    <h2 className={styles.headerLargeWhite}>appointment booking</h2>
                </div>
            </div>
            <div className={styles.progresContainer}>
                <Progress />
            </div>
            <div className={styles.displayService}>
                {/* <Service /> */}
                <SelectDate />
            </div>
        </div>
    )
}

export default BookAppointment;
