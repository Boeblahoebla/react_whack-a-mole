// Imports
//////////

// Base dependencies
import React from 'react';
import PropTypes from 'prop-types';


// StatText component
/////////////////////

export const StatText = ({ position, content }) => {
    return (
        <div className="statAnnotation">
            <h5 className={ `align${ position }`}>{ content }</h5>
        </div>
    );
};


// Prop types for the component
StatText.propTypes = {
    position: PropTypes.string.isRequired,
    content: PropTypes.number.isRequired,
};