import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Filter from '../Filter/Filter';
import LaunchList from '../LaunchList/LaunchList';
import './Dashboard.css'

const Dashboard = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(res => res.json())
            .then(data => setLaunches(data.slice(0, 12)))
    }, [])

    return (
        <section className="container">
            <Filter />

            <div className="mt-3 list-container">
                <Table>
                    <thead className="table-header">
                        <tr>
                            <th>No.</th>
                            <th>Launched(UTC)</th>
                            <th>Location</th>
                            <th>Mission</th>
                            <th>Orbit</th>
                            <th>Launch Status</th>
                            <th>Rocket</th>
                        </tr>
                    </thead>
                    <tbody className="table-row">
                        {
                            launches.map(launch => <LaunchList launch={launch} key={launch.flight_number}></LaunchList>)
                        }
                    </tbody>
                </Table>
            </div>

        </section>
    );
};

export default Dashboard;