import React from 'react';
import './LaunchList.css'


const LaunchList = (props) => {
    const Info = props.launch;
    const orbit = Info.rocket.second_stage.payloads[0].orbit;
    const rocket = Info.rocket.rocket_name;
    const location = Info.launch_site.site_name;
    const { flight_number, launch_date_utc, mission_name } = Info;
    let status = props.launch.launch_success;

  
    switch(status){
        case true:
            status = 'Success';
            break;
        case false:
            status = 'Failed';
            break;
        case null:
            status = 'Upcoming';
            break;
        default:
            return '';
    }


    return (
        <>
            <tr>
                <td>{flight_number}</td>
                <td>{launch_date_utc}</td>
                <td>{location}</td>
                <td>{mission_name}</td>
                <td>{orbit}</td>
                <td>{status}</td>
                <td>{rocket}</td>
                
            </tr>
        </>
    );
};

export default LaunchList;