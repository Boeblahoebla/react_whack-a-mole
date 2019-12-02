// Imports
//////////

// Base dependencies
import React from 'react';
import PropTypes from 'prop-types';


// StatBar component
////////////////////

export const StatBar = ({ type, style }) => {
    return (
        <div className={`${ type } mb-4`}>
            <div className={`${ type }Amount`} style={ style }>
                &nbsp;
            </div>
        </div>
    );
};


// Prop types for the component
StatBar.propTypes = {
    type: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired
};