import React, { useEffect, useState } from 'react';

const ModalList = ({ id }) => {
    const [oneLaunch, setOneLaunch] = useState('')

    useEffect(() => {
        fetch(`https://api.spacexdata.com/v3/launches/${id}`)
            .then(res => res.json())
            .then(data => setOneLaunch(data))
    }, []);

    const {details} = oneLaunch;
    let logo, missionName, rocketName, linkNasa, linkWikipedia, linkVideo;
    if (oneLaunch != '') {
        logo = oneLaunch.links['mission_patch_small'];
        missionName = oneLaunch.mission_name;
        rocketName = oneLaunch.rocket.rocket_name;
    }

    console.log(oneLaunch)

    return (
        <section>
            <div className="row">
                <div className="col d-flex justify-content-center align-items-center">
                    <img src={logo} alt="" style={{ width: '60px' }} />
                </div>
                <div className="col-9">
                    <div>
                        <h5 style={{display:'inline-block'}}>{missionName}</h5>
                    </div>
                    <h6>{rocketName}</h6>
                </div>
            </div>
            <div style={{width:'350px'}} className="text-justify my-3">
                <p>{details}</p>
            </div>
        </section>
    );
};

export default ModalList;