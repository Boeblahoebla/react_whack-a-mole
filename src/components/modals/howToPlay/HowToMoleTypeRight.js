// Imports
//////////

import React from 'react';


// HowToMoleTypeLeft component
//////////////////////////////

export const HowToMoleTypeRight = ({ moleType, moleImage, moleText }) => {
    return (
        <div className="mb-4">
            <strong>{moleType}</strong>
            <div className="howToMoleTypeLeft d-flex">
                <div className="moleTypeText w-70 text-align-right pr-4">
                    {moleText}
                </div>
                <div className="moleTypeImage w-30 d-flex justify-content-center align-items-center">
                    <img src={moleImage} alt="moleImage" height="55px"/>
                </div>
            </div>
        </div>

    );
};
