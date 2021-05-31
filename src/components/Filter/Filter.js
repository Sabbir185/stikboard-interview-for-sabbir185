import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import ModalCalendar from '../ModalCalendar/ModalCalendar';

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

const Filter = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <section className="mt-5">
            <div className="d-flex justify-content-between">
                <div className="w-25">
                    <select className="form-control" onClick={openModal}>
                        <option value="" default>Past 6 Month</option>
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

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button onClick={closeModal} className="btn btn-secondary btn-sm d-block ml-auto mb-2">X</button>
                <ModalCalendar />
            </Modal>
        </section>
    );
};

export default Filter;