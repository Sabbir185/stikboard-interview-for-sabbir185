import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';

const ModalCalendar = () => {
    const [value, onChange] = useState(new Date());

    const HandlePast = () => {
        alert("opps, sorry ! It is under developing. Please try latter")
    }

    return (
        <div className="row">
            <div className="col">
                <Link onClick={HandlePast} className="text-decoration-none"><h6>Past week</h6></Link>
                <Link onClick={HandlePast} className="text-decoration-none"><h6>Past month</h6></Link>
                <Link onClick={HandlePast} className="text-decoration-none"><h6>Past 3 month</h6></Link>
                <Link onClick={HandlePast} className="text-decoration-none"><h6>Past 6 month</h6></Link>
                <Link onClick={HandlePast} className="text-decoration-none"><h6>Past year</h6></Link>
                <Link onClick={HandlePast} className="text-decoration-none"><h6>Past 2 years</h6></Link>
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