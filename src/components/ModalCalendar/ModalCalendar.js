import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

const ModalCalendar = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div className="row">
            <div className="col">
                <h6>Past week</h6>
                <h6>Past month</h6>
                <h6>Past 3 month</h6>
                <h6>Past 6 month</h6>
                <h6>Past year</h6>
                <h6>Past 2 years</h6>
            </div>
            <div className="col-8">
                <Calendar
                    onChange={onChange}
                    value={value}
                    className="border-0"
                />
            </div>
        </div>
    );
};

export default ModalCalendar;