// Imports
//////////

// Base dependencies
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Components
import { HowToPlayModal } from "../modals/howToPlay/HowToPlayModal";


// Welcome component
////////////////////

export const Welcome = () => {

    // State handling
    const [howToModal, setHowToModal] = useState(false);


    return (
        <div className="gameBg welcomeScreen">
            {/* Title */}
            <h1 className="gameTitle mb-4">Holy Whack a Moley</h1>

            {/* Welcome text */}
            <p className="welcomeText mb-4">
                This is a React adaptation to the popular game Whack-a-Mole. If you're interested in how to play,
                choose the lower right button. If you're too eager to start whacking
                press the button on the lower left.
            </p>

            <p className="welcomeText--have-fun mb-4">
                Either way: WHACK AWAY!
            </p>

            {/* Functionality */}
            <div className="welcomeButtons mt-4">
                <Link className="btn btn-green" to="/game">Start Whacking</Link>
                <button className="btn btn-brown" onClick={ () => setHowToModal(!howToModal) }>How to play</button>
            </div>

            {/* How to play modal */}
            <HowToPlayModal howToPlayStatus={ howToModal } setHowToPlayStatus={ () => setHowToModal(!howToModal) }/>
        </div>
    );
};