// Imports
//////////

// Base dependencies
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// ReactStrap
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// Components
import { HowToMoleTypeLeft } from "./HowToMoleTypeLeft";
import { HowToMoleTypeRight } from "./HowToMoleTypeRight";
import { HowToSection } from "./HowToSection";

// Moles
import { howToMoles, howToSections } from "../../../howTo/howTo";


// HowToPlayModal component
///////////////////////////

export const HowToPlayModal = ({ howToPlayStatus, setHowToPlayStatus }) => {

    // Fetch the relevant data from howToMoles & howToSections
    const { attacker, benign, bomber, healer } = howToMoles;
    const { basics, types, difficulty } = howToSections;

    // Open the modal when the player is dead
    useEffect(() => {
    }, [howToPlayStatus]);

    return (
        <Modal isOpen={ howToPlayStatus } toggle={ setHowToPlayStatus } style={{ maxWidth: '70%' }}>

            {/* Modal Header */}
            <ModalHeader toggle={ setHowToPlayStatus } className="deadModalHead">
                <span className="modalHeader">How to play</span>
            </ModalHeader>

            {/* Modal body */}
            <ModalBody >
                {/* Basics section */}
                <HowToSection title={ basics.title } text={ basics.text } />

                {/* Moles section */}
                <HowToSection title={ types.title } text={ types.text } />

                <div className="howToMoleTypes d-flex">
                    <div className="howToMoleTypesLeft">
                        <HowToMoleTypeLeft
                            moleType={ benign.name } moleImage={ benign.img } moleText={ benign.desc } />
                        <HowToMoleTypeRight
                            moleType={ attacker.name } moleImage={ attacker.img } moleText={ attacker.desc } />
                    </div>
                    <div className="howToMoleTypesRight">
                        <HowToMoleTypeLeft
                            moleType={ bomber.name } moleImage={ bomber.img } moleText={ bomber.desc } />
                        <HowToMoleTypeRight
                            moleType={ healer.name } moleImage={ healer.img } moleText={ healer.desc } />
                    </div>
                </div>


                {/* Difficulty section */}
                <HowToSection
                    title={ difficulty.title } text={ difficulty.text } list={ difficulty.list } />

            </ModalBody>

            {/* Modal Footer */}
            <ModalFooter className="howToPlayModalButtons">
                <button onClick={ setHowToPlayStatus } className="btn btn-brown modalButton">
                    Go back
                </button>
            </ModalFooter>
        </Modal>
    );
};


// Prop types for the component
HowToPlayModal.propTypes = {
    howToPlayStatus: PropTypes.bool.isRequired,
    setHowToPlayStatus: PropTypes.func.isRequired
};