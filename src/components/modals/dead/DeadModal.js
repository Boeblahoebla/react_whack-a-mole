// Imports
//////////

// Base dependencies
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// ReactStrap
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


// Dead Modal
/////////////

export const DeadModal = ({ dead, resetGame }) => {

    // State handling
    const [open, setOpen] = useState(false);

    // Open the modal when the player is dead
    useEffect(() => {
        setOpen(dead)
    }, [dead]);

    // Generate a fake closeButton with no content
    const closeButton = <span/>;

    return (
        <Modal isOpen={ open } toggle={ () => setOpen(!open) } backdrop="static">

            {/* Modal Header */}
            <ModalHeader toggle={ () => setOpen(!open) } close={ closeButton }>
                <span className="modalHeader">You are Dead</span>
            </ModalHeader>

            {/* Modal body */}
            <ModalBody>
                <p>Sadly this is game over for you. I guess The moles were too much to handle?</p>

                <p>
                    You might want to work on your reflexes. Press the button to take you back to the main menu.
                    Maybe you can take another look in the how to play section to figure out your next strategy?
                    Or.. in the offchance you haven't learned your lesson yet, you can always try again (emphasis
                    on <i>Try</i>)
                </p>
            </ModalBody>

            {/* Modal Footer */}
            <ModalFooter className="deadModalButtons">
                <button className="btn btn-green modalButton" onClick={ resetGame }>
                    Lemme Whack!
                </button>
                <Link to="/" className="btn btn-brown modalButton">
                    Go back
                </Link>
            </ModalFooter>
        </Modal>
    );
};