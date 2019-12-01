// Imports
//////////

// Base dependencies
import React from 'react';
import PropTypes from 'prop-types';


// Stat annotation component
////////////////////////////

export const StatAnnotation = ({position, content}) => {
    return (
        <div className="statAnnotation">
            <h5 className={`align${position}`}>{content}</h5>
        </div>
    );
};


StatAnnotation.propTypes = {
    position: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};