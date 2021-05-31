import React, { useEffect, useState } from 'react';
import { Pagination, Table } from 'react-bootstrap';
import Filter from '../Filter/Filter';
import LaunchList from '../LaunchList/LaunchList';
import spinner from '../../images/spinner.gif';
import './Dashboard.css'

const Dashboard = () => {
    const [launches, setLaunches] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(res => res.json())
            .then(data => {
                setLaunches(data.slice(0, 12));
                setLoading(false);
            })
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
                {
                    loading &&
                    <div className="d-flex justify-content-center align-items-center">
                        <img src={spinner} alt="spinner" className="spinner" />
                    </div>
                }
            </div>

            <div className="pagination-container d-flex justify-content-end mb-4">
                <Pagination>
                    <Pagination.Prev />
                    <Pagination.Item >{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Item >{4}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item>{13}</Pagination.Item>

                    <Pagination.Ellipsis />
                    <Pagination.Item>{20}</Pagination.Item>
                    <Pagination.Next />
                </Pagination>
            </div>

        </section>
    );
};

export default Dashboard;