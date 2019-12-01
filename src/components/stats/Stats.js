// Imports
//////////

// Base dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { StatBar } from "./StatBar";
import { StatAnnotation } from "./StatAnnotation";

// Media
import heartIcon from '../../assets/img/heart-resized.png'


// Stats component
//////////////////

export const Stats = ({ score, scoreToReach, levelMask, health, level, totalScore }) => {

    // Generate the health & level mask
    const healthMaskStyle = { width: `${100 - parseInt(health)}%` };
    const levelMaskStyle = { width: `${parseInt(levelMask)}%` };

    return (
        <div className="stats">
            {/* Score */}
            <div className="annotations">
                {/* Score text */}
                <div className="scoreText mb-2">
                    {/* StatAnnotation */}
                    <StatAnnotation content={score} position="Left"/>

                    <div className="scoreLevel">
                        <p className="lead">{level}</p>
                        <h4>{totalScore}</h4>
                    </div>

                    {/* StatAnnotation */}
                    <StatAnnotation content={scoreToReach} position="Right"/>
                </div>

                {/* StatBar for score */}
                <StatBar type="score" style={levelMaskStyle}/>

            </div>

            {/* Health */}
            <div className="annotations">
                {/* Health text */}
                <div className="healthText mb-2">
                    {/* StatAnnotation */}
                    <StatAnnotation content="0" position="Left"/>

                    <img src={heartIcon} alt="HealthIcon" height="24px"/>

                    {/* StatAnnotation */}
                    <StatAnnotation content={health} position="Right"/>
                </div>

                {/* StatBar for health */}
                <StatBar type="health" style={ healthMaskStyle }/>
            </div>
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
