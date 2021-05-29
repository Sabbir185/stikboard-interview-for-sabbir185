import React from 'react';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <section className="container mt-5">
            <div className="d-flex justify-content-between">
                <div className="w-25">
                    <select className="form-control">
                        <option value="">calendar</option>
                    </select>
                </div>
                <div className="launches w-25">
                    <select className="form-control">
                        <option value="">All launches</option>
                        <option value="">Upcoming launches</option>
                        <option value="">Success launches</option>
                        <option value="">Failed launches</option>
                    </select>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;