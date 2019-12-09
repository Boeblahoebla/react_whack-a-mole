// Imports
//////////

// Base dependencies
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// ReactStrap
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


// Dead Modal
/////////////

export const FinishedModal = ({ finished }) => {

    // State handling
    const [open, setOpen] = useState(false);

    // Open the modal when the player is dead
    useEffect(() => {
        setOpen(finished)
    }, [finished]);

    // Generate a fake closeButton with no content
    const closeButton = <span/>;

    return (
        <Modal isOpen={ open } toggle={ () => setOpen(!open) } backdrop="static">

            {/* Modal Header */}
            <ModalHeader toggle={ () => setOpen(!open) } close={ closeButton }>
                <span className="modalHeader">Congratz... You finished the game!</span>
            </ModalHeader>

            {/* Modal body */}
            <ModalBody>
                <p>Seems like the moles were no match for your reflexes & whit!</p>

                <p>
                    After all the hardship & the epic struggle you managed to survive the onslaught that were
                    the moles. I do hope you enjoyed the game as much as I enjoyed developing it. If you like this
                    project & would like to know the mechanics about it, you can take a look at the
                    <a href="https://github.com/Boeblahoebla/react_whack-a-mole"> Github repository</a> and sniff
                    through the code.
                </p>

                <p>
                    Fork it? Experiment with it? Go right ahead. "Star" the repo while you're at
                    it. Are there any issues you found? Start an issue on github.
                    I'll get to you as soon as I can
                </p>
            </ModalBody>

            {/* Modal Footer */}
            <ModalFooter className="finishedModalButtons">
                <Link to="/" className="btn btn-brown modalButton">
                    Main menu
                </Link>
            </ModalFooter>
        </Modal>
    );
};