import React, { useEffect } from 'react';
import './selectDate.css';
import { Calendar } from 'react-calendar';
import { connect } from 'react-redux';
import { actions } from '../../../redux/actions';
import selectTime from '../selectime/selectTime';
import SelectTime from '../selectime/selectTime';

function SelectDate ({ userInput, setUserInput }) {

    useEffect(() => {
        if (!userInput.service) window.location.href = '/bookings/';
    }, [])

    return (
        <div className="calender-main-container">
            <h2 className='headingLargeBlack'>Please choose a date</h2>
            <div className="calender-container">
                <Calendar minDate={new Date()}
                            maxDate={new Date(2030, 12, 31)} 
                            className='react-calender'
                            nextAriaLabel="Go to next month"
                            prevAriaLabel="Go to prev month"
                            showNeighboringMonth={false}
                            tileClassName={({date}) => {
                                return userInput.date === date.toDateString() ? 'react-calendar__month-view__days__day active' : '.react-calendar__month-view__days__day'
                            }}
                            tileDisabled={({date, view}) => {
                                return date.getDay() === 0 ? 'sunday' : null
                                // if (date.getDay() === 0){
                                //     // return date.getDate();
                                // }

                                // return bookedDate.some(booking => {
                                //     const bookedDates = new Date(booking);
                                //     return bookedDates.getDate() === date.getDate() &&
                                //     bookedDates.getMonth() === date.getMonth() &&
                                //     bookedDates.getFullYear() === date.getFullYear()
                                // });
                            }}
                            onClickDay={(value) => {
                                setUserInput(value.toDateString());
                            }}/>
            </div>
            <div className='time'>
                <SelectTime />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userInput: state.userInput
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUserInput: (value) => dispatch({ type: actions.selectDate, payload: value })
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (SelectDate);