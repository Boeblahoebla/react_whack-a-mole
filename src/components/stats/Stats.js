// Imports
//////////

// Base dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Stat } from "./Stat";


// Stats component
//////////////////

export const Stats = ({ score, scoreToReach, levelMask, health, level, totalScore }) => {

    // Generate the health & level mask
    const healthMaskStyle = { width: `${100 - parseInt(health)}%` };
    const levelMaskStyle = { width: `${parseInt(levelMask)}%` };

    return (
        <div className="stats">
            {/* Stat Score */}
            <Stat statLeft={ score } statRight={ scoreToReach } statMiddleTop={ level }
                  statMiddleBottom={ totalScore } maskStyle={ levelMaskStyle } type="score" />

            {/* Stat Health */}
            <Stat statLeft={ 0 } statRight={ health }
                  maskStyle={ healthMaskStyle } type="health" />
        </div>
    );
};


// Prop types for the component
Stats.propTypes = {
    score: PropTypes.number.isRequired,
    health: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,
    scoreToReach: PropTypes.number.isRequired,
    levelMask: PropTypes.number.isRequired
};
