// Imports
//////////

// Base dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Component
import { StatBar } from "./StatBar";
import { StatText } from "./StatText";

// Media
import heartIcon from "../../assets/img/heart-resized.png";


// Stat component
/////////////////

export const Stat = ({ type, statLeft, statRight, statMiddleTop, statMiddleBottom, maskStyle }) => {

    // Generate health or score content
    let content = '';
    if(type === "score") {

        // Format level stats
        statMiddleTop = parseInt(statMiddleTop) < 10 ? `0${statMiddleTop}` : statMiddleTop;

        content = (
            <div className="scoreLevel">
                <div className="statLevel text-center"><p>{ statMiddleTop }</p></div>
                <h4>{ statMiddleBottom }</h4>
            </div>
        )
    }
    else {
        content = (
            <img src={ heartIcon } alt="HealthIcon" height="24px"/>
        )
    }

    return (
        <div className="annotations">
            {/* Stat texts */}
            <div className={ `${ type }Text mb-2` }>
                {/* Stat left */}
                <StatText content={ statLeft } position="Left"/>

                {/* Stat content */}
                {content}

                {/* Stat right */}
                <StatText content={ statRight } position="Right"/>
            </div>

            {/* StatBar */}
            <StatBar type={ type } style={ maskStyle }/>
        </div>
    );
};


// Prop types for the component
Stat.propTypes = {
    maskStyle: PropTypes.object.isRequired,
    statRight: PropTypes.number.isRequired,
    statLeft: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    statMiddleTop: PropTypes.number,
    statMiddleBottom: PropTypes.number,
};