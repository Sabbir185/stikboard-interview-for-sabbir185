import React from 'react';

const Filter = () => {
    
    return (
        <section className="mt-5">
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

export default Filter;