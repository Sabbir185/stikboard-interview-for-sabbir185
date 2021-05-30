import React from 'react';
import Modal from 'react-modal';
import './LaunchList.css'
import ModalList from '../Modal/ModalList';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root')


const LaunchList = (props) => {
    const info = props.launch;
    const orbit = info.rocket.second_stage.payloads[0].orbit;
    const rocket = info.rocket.rocket_name;
    const location = info.launch_site.site_name;
    const { flight_number, launch_date_utc, mission_name } = info;
    let status = props.launch.launch_success;
    const [modalIsOpen, setIsOpen] = React.useState(false);


    switch (status) {
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


    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    return (
        <>
            <tr className="data" onClick={openModal}>
                <td>{flight_number}</td>
                <td>{launch_date_utc}</td>
                <td>{location}</td>
                <td>{mission_name}</td>
                <td>{orbit}</td>
                {
                    status == "Failed" &&
                    <td><span className="failed">{status}</span></td>
                    ||
                    status == "Success" &&
                    <td><span className="success">{status}</span></td>
                    ||
                    status == "Upcoming" &&
                    <td><span className="upcoming">{status}</span></td>
                }
                <td>{rocket}</td>

            </tr>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button onClick={closeModal} className="btn btn-secondary btn-sm d-block ml-auto mb-2">X</button>
                <ModalList id={flight_number}></ModalList>
            </Modal>
        </>
    );
};

export default LaunchList;