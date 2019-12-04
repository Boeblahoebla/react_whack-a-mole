// Imports
//////////

import React from 'react';


// HowToMoleTypeRight component
///////////////////////////////

export const HowToMoleTypeRight = ({ moleType, moleImage, moleText }) => {
    return (
        <div className="mb-4">

            {/* Mole type */}
            <strong>{ moleType }</strong>
            <div className="howToMoleTypeLeft d-flex">

                {/* Mole Text */}
                <div className="moleTypeText w-70 text-align-right pr-4">
                    { moleText }
                </div>

                {/* Mole image */}
                <div className="moleTypeImage w-30 d-flex justify-content-center align-items-center">
                    <img src={ moleImage } alt="moleImage" height="55px"/>
                </div>

            </div>
        </div>
    );
};
