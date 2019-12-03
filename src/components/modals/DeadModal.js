// Imports
//////////

// Base dependencies
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


// Dead Modal
/////////////

export const DeadModal = ({ dead }) => {

    // State handling
    const [ open, setOpen ] = useState(false);

    // Open the modal when the player is dead
    useEffect(() => {
        setOpen(dead)
    }, [dead]);

    // Generate a fake closeButton with no content
    const closeButton = <span/>;

    return (
        <div>
            <Modal isOpen={open} toggle={() => setOpen(!open)} className="test" backdrop="static">
                {/* Modal Header */}
                <ModalHeader toggle={() => setOpen(!open)} close={closeButton} className="deadModalHead">You are Dead</ModalHeader>

                {/* Modal body */}
                <ModalBody>
                    <p className="deadModalPar">Sadly this is game over for you. I guess The moles were too much to handle?</p>

                    <p className="deadModalPar">
                        You might want to work on your reflexes. Press the button to take you back to the main menu.
                        Maybe you can take another look in the how to play section to figure out your next strategy?
                    </p>
                </ModalBody>

                {/* Modal Footer */}
                <ModalFooter>
                    <Link to="/" className="btn btn-whack">Go back</Link>
                </ModalFooter>
            </Modal>
        </div>
    );
};