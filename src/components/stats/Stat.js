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
        content = (
            <div className="scoreLevel">
                <p className="lead">{statMiddleTop}</p>
                <h4>{statMiddleBottom}</h4>
            </div>
        )
    }
    else {
        content = (
            <img src={heartIcon} alt="HealthIcon" height="24px"/>
        )
    }

    return (
        <div className="annotations">
            {/* Score text */}
            <div className={`${type}Text mb-2`}>
                {/* StatText */}
                <StatText content={statLeft} position="Left"/>

                {content}

                {/* StatText */}
                <StatText content={statRight} position="Right"/>
            </div>

            {/* StatBar for score */}
            <StatBar type={type} style={maskStyle}/>
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