import React, { useEffect, useState } from 'react';
import './ModalList.css';


const ModalList = ({ id }) => {
    const [oneLaunch, setOneLaunch] = useState('')

    useEffect(() => {
        fetch(`https://api.spacexdata.com/v3/launches/${id}`)
            .then(res => res.json())
            .then(data => setOneLaunch(data))
    }, []);


    const {details, mission_name, launch_date_utc } = oneLaunch;
    let logo, rocketName, rocketType, manufacturer,nationality, payloadType, orbit, launchSite;

    if (oneLaunch != '') {
        logo = oneLaunch.links['mission_patch_small'];
        rocketName = oneLaunch.rocket.rocket_name;
        rocketType = oneLaunch.rocket.rocket_type;
        manufacturer = oneLaunch.rocket.second_stage.payloads[0].manufacturer;
        nationality = oneLaunch.rocket.second_stage.payloads[0].manufacturer;
        payloadType = oneLaunch.rocket.second_stage.payloads[0].payload_type;
        orbit = oneLaunch.rocket.second_stage.payloads[0].orbit;
        launchSite = oneLaunch.launch_site.site_name;
    }
    

    return (
        <section>
            <div className="row">
                <div className="col d-flex justify-content-center align-items-center">
                    <img src={logo} alt="" style={{ width: '60px' }} />
                </div>
                <div className="col-9">
                    <div>
                        <h5 style={{display:'inline-block'}}>{mission_name}</h5>
                    </div>
                    <h6>{rocketName}</h6>
                </div>
            </div>
            <div style={{width:'350px'}} className="text-justify my-3">
                <p>{details}</p>
            </div>

            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Flight Number </td>
                            <td>{id}</td>
                        </tr>
                        <tr>
                            <td>Mission Name </td>
                            <td>{mission_name}</td>
                        </tr>
                        <tr>
                            <td>Rocket Type </td>
                            <td>{rocketType}</td>
                        </tr>
                        <tr>
                            <td>Manufacturer </td>
                            <td>{manufacturer}</td>
                        </tr>
                        <tr>
                            <td>Nationality </td>
                            <td>{nationality}</td>
                        </tr>
                        <tr>
                            <td>Launch Date</td>
                            <td>{launch_date_utc}</td>
                        </tr>
                        <tr>
                            <td>Payload Type</td>
                            <td>{payloadType}</td>
                        </tr>
                        <tr>
                            <td>Orbit</td>
                            <td>{orbit}</td>
                        </tr>
                        <tr>
                            <td>Launch Site</td>
                            <td>{launchSite}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ModalList;