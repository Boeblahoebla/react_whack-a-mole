// Imports
//////////

// Base dependencies
import React, { Component } from 'react';
import UIfx from 'uifx';

// Components
import Mole from '../mole/Mole';
import { Stats } from '../stats/Stats';
import { DeadModal } from "../modals/dead/DeadModal";
import { FinishedModal } from "../modals/finished/FinishedModal";

// Difficulty
import { difficulty } from "../../difficulty/difficulty";

// Styling
import '../../assets/css/App.css';

// Media
import hammer from '../../assets/img/WAM_Hammer.png';
import boooooo from '../../assets/audio/boooooo.mp3';
import whistle from '../../assets/audio/whistle.mp3';
import cheerz from '../../assets/audio/cheerz.mp3';
import cheerzShort from '../../assets/audio/cheerz-short.mp3';


// Game component
/////////////////

class Game extends Component {

    // Component state
    state = {
        scoreToReach: 1000,
        score: 0,
        totalScore: 0,
        levelMask: 100,
        health: 100,
        level: 0,
        finished: false,
        dead: false,
        boooooo: new UIfx(boooooo, { volume: 1 }),
        whistle: new UIfx(whistle, { volume: 0.3 }),
        cheerz: new UIfx(cheerz, { volume: 0.5 }),
        cheerzShort : new UIfx(cheerzShort, { volume: 0.5 })
    };

    render() {
        // Fetch the items from the state
        const { healthMask, level, levelMask, score, scoreToReach, health, totalScore, finished, dead } = this.state;

        // Set game difficulty according to current level
        const gameDifficulty = difficulty[level];

        // Generate 12 moles to whack
        const moles = [];
        for(let i = 0; i < 12; i++) {
            moles.push(
                <Mole key={ i } incScore={ this.incScore } incHealth={ this.incHealth } dealDamage={ this.dealDamage }
                      difficulty={ gameDifficulty } dead={ dead } finished={ finished } /> )
        }

        return (
            <div className="gameBg" style={{ cursor: `url(${hammer}), auto` }}>

                {/* Score */}
                <Stats score={ score } scoreToReach={ scoreToReach } levelMask={ levelMask }
                       health={ health } healthMask={ healthMask } level={ level + 1 } totalScore={ totalScore } />

                {/* game */}
                <div className="game row m-auto"> { moles } </div>

                {/* The modal for when you're dead */}
                <DeadModal dead={ dead } resetGame={ this.resetGame }/>

                {/* The modal for when you finished the game */}
                <FinishedModal finished={ finished } />

            </div>
        );
    }


    // Handler methods
    //////////////////

    // Method to inc the score by an amount
    incScore = scoreIncrement => {
        // Fetch score params, level & sound effects from the state
        const { score, scoreToReach, level, totalScore, cheerzShort, whistle, cheerz } = this.state;

        // Calculate the new score & the levelMask
        let newScore = score + scoreIncrement;
        let newTotalScore  = totalScore + scoreIncrement;
        let newLevelMask = Math.floor(((scoreToReach - newScore) / scoreToReach) * 100);

        // If score reached to advance a level:
        // update the score, increment level & reset health
        if(newScore >= scoreToReach) {
            const newLevel = level + 1;
            newScore = 0;

            if(newLevel >= difficulty.length) {
                this.setState({
                    score: newScore,
                    finished: true
                },() => { cheerz.play(); })
            } else {
                // Update the score params, 100% health & level progression
                this.setState({
                    score: newScore,
                    levelMask: 100,
                    level: newLevel,
                    totalScore: newTotalScore,
                    health: 100,
                },() => { whistle.play(); cheerzShort.play() })
                // If not, just update the score
            }
        } else {
            this.setState({
                score: newScore,
                totalScore: newTotalScore,
                levelMask: newLevelMask,
            })
        }
    };


    // Method to increase the health by an amount
    incHealth = healthIncrease => {
        // Fetch the health from the state
        const { health } = this.state;

        // Increase health to a value of max 100
        let newHealth;
        if((health + healthIncrease) > 100) { newHealth = 100; }
        else { newHealth = health + healthIncrease; }

        // Update the health
        this.setState({ health: newHealth })
    };


    // Method to deal damage
    dealDamage = amount => {
        // Fetch the health & sound effect from the state
        const { health, boooooo } = this.state;

        // Calculate new health
        let newHealth = health - amount;

        // BAM you're dead
        if(newHealth <= 0) { this.setState({ dead: true, health: 0 }, () => boooooo.play() ) }
        // Or you're just hit
        else { this.setState({ health: newHealth }); }
    };


    // Method to reset the game
    resetGame = () => {
        this.setState({
            score: 0, totalScore: 0, levelMask: 100, health: 100, level: 0, finished: false, dead: false
        })
    }
}


// Export
/////////

export default Game;