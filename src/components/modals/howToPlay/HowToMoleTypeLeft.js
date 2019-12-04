// Imports
//////////

import React from 'react';


// HowToMoleTypeLeft component
//////////////////////////////

export const HowToMoleTypeLeft = ({ moleType, moleImage, moleText }) => {
    return (
        <div className="mb-4">
            <strong>{moleType}</strong>
            <div className="howToMoleTypeLeft d-flex">
                <div className="moleTypeImage w-30 d-flex justify-content-center align-items-center">
                    <img src={moleImage} alt="moleImage" height="55px"/>
                </div>
                <div className="moleTypeText w-70 text-align-right pl-4">
                    {moleText}
                </div>
            </div>
        </div>

    );
};
