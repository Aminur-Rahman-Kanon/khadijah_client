import React, { useEffect } from "react";
import styles from './bookAppointment.module.css';
import bg from '../../assets/bookAppointment/bookAppointment_bg.jpg';
import Progress from './progress/progress';
import Service from "./service/service";
import SelectDate from "./selectDate/selectDate";
import SelectTime from "./selectime/selectTime";
import Details from "./details/details";
import { connect } from "react-redux";
import Payment from "./payment/payment";
import PaymentSuccess from "./done/done";

const BookAppointment = ({serviceElement}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [serviceElement])
    
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
                <div style={serviceElement === 'service' ? {display:'flex'} : {display: 'none'}} className={styles.service}>
                    <Service />
                </div>
                <div style={serviceElement === 'time' ? {display:'flex'} : {display: 'none'}} className={styles.service}>
                    <SelectDate />
                    <SelectTime />
                </div>
                <div style={serviceElement === 'details' ? {display:'flex'} : {display: 'none'}} className={styles.service}>
                    <Details />
                </div>
                <div style={serviceElement === 'payment' ? {display:'flex'} : {display: 'none'}} className={styles.service}>
                    <Payment />
                </div>
                <div style={serviceElement === 'done' ? {display:'flex'} : {display: 'none'}} className={styles.service}>
                    <PaymentSuccess />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        serviceElement: state.serviceElement
    }
}

export default connect(mapStateToProps) (BookAppointment);
