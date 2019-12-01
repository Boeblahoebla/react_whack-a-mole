// Imports
//////////

// Base dependencies
import React from 'react';
import PropTypes from 'prop-types';

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
                    <div className="statAnnotation">
                        <h5 className="alignLeft">{score}</h5>
                    </div>

                    <div className="scoreLevel">
                        <p className="lead">{level}</p>
                        <h4>{totalScore}</h4>
                    </div>

                    <div className="statAnnotation">
                        <h5 className="alignRight">{scoreToReach}</h5>
                    </div>
                </div>

                {/* Score bar */}
                <div className="score mb-4">
                    <div className="scoreAmount" style={levelMaskStyle}>
                        &nbsp;
                    </div>
                </div>
            </div>

            {/* Health */}
            <div className="annotations">
                {/* Health text */}
                <div className="healthText mb-2">
                    <div className="statAnnotation">
                        <h5>0</h5>
                    </div>

                    <img src={heartIcon} alt="HealthIcon" height="24px"/>

                    <div className="statAnnotation">
                        <h5 className="alignRight">{health}</h5>
                    </div>
                </div>

                {/* Health bar */}
                <div className="health mb-4">
                    <div className="healthAmount" style={healthMaskStyle}>
                        &nbsp;
                    </div>
                </div>
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
