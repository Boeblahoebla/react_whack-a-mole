// Imports
//////////

// Base dependencies
import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// Components
import { HowToMoleTypeLeft } from "./HowToMoleTypeLeft";
import { HowToMoleTypeRight } from "./HowToMoleTypeRight";
import { HowToSection } from "./HowToSection";

// Moles
import { howToMoles, howToSections } from "../../../howTo/howTo";


// HowToPlayModal component
///////////////////////////

export const HowToPlayModal = ({ howToPlayStatus }) => {

    // Fetch the relevant data from howToMoles & howToSections
    const { attacker, benign, bomber, healer } = howToMoles;
    const { basics, types, difficulty } = howToSections;

    // State handling
    const [ open, setOpen ] = useState(false);

    // Open the modal when the player is dead
    useEffect(() => {
        setOpen(howToPlayStatus)
    }, [howToPlayStatus]);

    return (
        <Modal isOpen={open} toggle={() => setOpen(!open)}>

            {/* Modal Header */}
            <ModalHeader toggle={() => setOpen(!open)} className="deadModalHead">
                <span className="modalHeader">How to play</span>
            </ModalHeader>

            {/* Modal body */}
            <ModalBody >
                {/* Basics section */}
                <HowToSection title={basics.title} text={basics.text} />

                {/* Moles section */}
                <HowToSection title={types.title} text={types.text} />

                <HowToMoleTypeLeft moleType={benign.name} moleImage={benign.img} moleText={benign.desc} />
                <HowToMoleTypeRight moleType={attacker.name} moleImage={attacker.img} moleText={attacker.desc} />
                <HowToMoleTypeLeft moleType={bomber.name} moleImage={bomber.img} moleText={bomber.desc} />
                <HowToMoleTypeRight moleType={healer.name} moleImage={healer.img} moleText={healer.desc} />

                {/* Difficulty section */}
                <HowToSection title={difficulty.title} text={difficulty.text} list={difficulty.list} />

            </ModalBody>

            {/* Modal Footer */}
            <ModalFooter className="deadModalButtons">
                <button onClick={() => setOpen(!open)} className="btn btn-secondary"> Go back </button>
            </ModalFooter>
        </Modal>
    );
};