// Imports
//////////

import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


// Dead Modal
/////////////

export const DeadModal = ({ dead, resetGame }) => {

    // State handling
    const [ open, setOpen ] = useState(false);

    // Open the modal when the player is dead
    useEffect(() => {
        setOpen(dead)
    }, [dead]);

    return (
        <div>
            <Modal isOpen={open} toggle={() => setOpen(!open)} className="test" backdrop="static">
                {/* Modal Header */}
                <ModalHeader toggle={() => setOpen(!open)}>You are Dead</ModalHeader>

                {/* Modal body */}
                <ModalBody>
                    Would you like to try again?
                </ModalBody>

                {/* Modal Footer */}
                <ModalFooter>
                    <Button color="primary" onClick={() => resetGame()}>Yes</Button>{' '}
                    <Button color="secondary" onClick={() => {
                        setOpen(!open);
                        window.open("about:blank", "_self");
                        window.close();}}
                    >No I'm scared of dem moles</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};