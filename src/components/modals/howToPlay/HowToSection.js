// Imports
//////////

// Base dependencies
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// HowToSection component
/////////////////////////
export const HowToSection = ({title, text, list}) => {

    // If there is a list, generate the list items & create a ul from it
    let listContent = '';
    if(list) {
        const listItems = list.map((listItem, index) => ( <li key={index}>{listItem}</li> ));
        listContent = <ul className="ml-4"> {listItems} </ul>
    }

    return (
        <Fragment>
            <h4>{title}</h4>
            <p className="mb-4">
                {text}
            </p>

            {listContent}
        </Fragment>
    );
};


// Prop types for the component
HowToSection.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    list: PropTypes.array
};
