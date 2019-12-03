// Imports
//////////

// Base dependencies
import React from 'react';
import { Link } from 'react-router-dom';


// Welcome component
////////////////////

export const Welcome = () => {
    return (
        <div className="gameBg welcomeScreen">
            <h1 className="gameTitle mb-4">Holy Whack a Moley</h1>
            <p className="welcomeText mb-4">
                This is a React adaptation to the popular game Whack-a-Mole. If you're to eager to start whacking
                press the button on the lower left. If you're interested in how to play, choose the lower right button.
            </p>
            <p className="welcomeText--have-fun mb-4">
                Either way: <span>Have FUN!</span>
            </p>
            <div className="welcomeButtons mt-4">
                <Link className="btn btn-whack" to="/game">Start Whacking</Link>
                <button className="btn btn-howtoplay">How to play</button>
            </div>
        </div>
    );
};