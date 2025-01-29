import React from 'react';
import './selectDate.css';
import { Calendar } from 'react-calendar';

function SelectDate ({ selectedDate, serviceId, bookedDate, changeSelectedDate }) {
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
                            tileClassName={({date}) => date.getDay() === 0 ? 'sunday' : null}
                            tileDisabled={({date, view}) => {
                                if (date.getDay() === 0){
                                    return date.getDate();
                                }

                                // return bookedDate.some(booking => {
                                //     const bookedDates = new Date(booking);
                                //     return bookedDates.getDate() === date.getDate() &&
                                //     bookedDates.getMonth() === date.getMonth() &&
                                //     bookedDates.getFullYear() === date.getFullYear()
                                // });
                            }}
                            onClickDay={(value) => {
                                changeSelectedDate(value.toDateString());
                            }}/>
            </div>
        </div>
    )
}

export default SelectDate;