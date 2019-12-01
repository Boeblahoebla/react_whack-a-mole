// Imports
//////////

// Base dependencies
import React, { Component } from "react";
import PropTypes from 'prop-types';
import UIfx from 'uifx';

// Component
import Spritesheet from 'react-responsive-spritesheet';

// Media
import gameSprites from '../../assets/img/spritesheet_candidate.png';
import explosion from '../../assets/audio/explosion01.mp3';
import scratch from '../../assets/audio/cutScratch.mp3';
import powerup from '../../assets/audio/powerup.mp3';
import punch1 from '../../assets/audio/punch01.mp3';
import punch2 from '../../assets/audio/punch02.mp3';
import punch3 from '../../assets/audio/punch03.mp3';
import phase from '../../assets/audio/phase.mp3';


// Mole component
////////////////

class Mole extends Component {

    // Constructor for the component
    constructor(props) {
        super(props);

        // Component state
        this.state = {
            active: false,
            moleHit: false,
            spriteInstance: null,
            moleIndex: this.generateRandomMole(),
            timeout: this.generateRandomTimeout(),
            phase: new UIfx(phase, { volume: 1.0 }),
            punch1: new UIfx(punch1, { volume: 0.2 }),
            punch2: new UIfx(punch2, { volume: 0.2 }),
            punch3: new UIfx(punch3, { volume: 0.2 }),
            scratch: new UIfx(scratch, { volume: 0.3 }),
            powerUp: new UIfx(powerup, { volume: 0.3 }),
            explosion: new UIfx(explosion, { volume: 0.3 }),
            moleHitTypes: [
                { name: 'benignHit', startIndex: 11, endIndex: 17, fps: 5 },
                { name: 'attackerHit', startIndex: 11, endIndex: 17, fps: 5 },
                { name: 'healerHit', startIndex: 61, endIndex: 69, fps: 5 },
                { name: 'bomberHit', startIndex: 39, endIndex: 45, fps: 5 }
            ],
            moleTypes: [
                { name: 'benign', startIndex: 1, endIndex: 10, fps: this.generateFPS('benign') },
                { name: 'attacker', startIndex: 18, endIndex: 38, fps: this.generateFPS('attacker') },
                { name: 'healer', startIndex: 70, endIndex: 80, fps: this.generateFPS('healer') },
                { name: 'bomber', startIndex: 46, endIndex: 60, fps: this.generateFPS('bomber') }
            ]
        }
    };


    // Triggered every time the component updates
    componentDidUpdate(prevProps, prevState, snapshot) {
        // When dead, deactivate the mole & stop the animations
        if ((!this.props.dead && prevProps.dead) || (this.props.finished && !prevProps.finished)) {
            this.state.spriteInstance.pause();
            this.setState({ active: false })
        }
    }

    render() {

        // Fetch items from the state
        const { moleTypes, moleIndex, timeout, explosion, scratch, moleHit, phase } = this.state;
        const { damAttack1, damAttack2, damageBomber } = this.props.difficulty;
        const { dead } = this.props;

        return (
            <div className="mole">
                <Spritesheet
                    muted="muted"
                    steps={80}
                    loop={true}
                    autoplay={true}
                    widthFrame={192}
                    heightFrame={154}
                    timeout={timeout}
                    image={gameSprites}
                    className="moleSprite"
                    fps={moleTypes[moleIndex].fps}
                    endAt={moleTypes[moleIndex].endIndex}
                    startAt={moleTypes[moleIndex].startIndex}

                    // Action handlers
                    onLoopComplete={ () => { this.refreshMole() }}
                    onClick={() => { !dead && this.triggerMoleHit() }}
                    onEachFrame={ spriteSheet => { dead && spriteSheet.pause(); }}
                    onPlay={() => { !moleHit && this.setState({ active: true }); }}
                    onInit={ spriteSheet => { this.setState({ spriteInstance: spriteSheet }); }}


                    // Damage dealers
                    onEnterFrame={[
                        { frame: 33,
                            callback: (() => { this.dealDamage(damAttack2, false) }) },
                        { frame: 78,
                            callback: (() => { this.dealDamage(0, true); phase.play() }) },
                        { frame: 30,
                            callback: (() => { this.dealDamage(damAttack1, false); scratch.play(); }) },
                        { frame: 53,
                            callback: (() => { this.dealDamage(damageBomber, true); explosion.play() }) },
                    ]}
                />
            </div>
        );
    }


    // Method to deal damage and/or deactivate the mole if needed
    dealDamage = (amount, deactivateFlag) => {
        this.props.dealDamage(amount);

        // Deactivate the mole so it cant be hit anymore
        deactivateFlag && this.setState({ active: false });
    };


    // Method to spawn a random new mole after x random seconds
    refreshMole = () => {
        // Fetch moleTypes & sprite from the state
        const { moleTypes, spriteInstance} = this.state;

        // Pause the spriteSheet loop
        spriteInstance.pause();

        // Generate active mole
        const newMole = this.generateRandomMole();

        // Toggle activity of mole, set newMole index,
        // refresh the mole & start playing after x seconds
        this.setState({
            active: false,
            moleHit: false,
            moleIndex: newMole,
        }, () => {
            // Set new start & end positions
            spriteInstance.setFps(moleTypes[newMole].fps);
            spriteInstance.setStartAt(moleTypes[newMole].startIndex);
            spriteInstance.setEndAt(moleTypes[newMole].endIndex);

            // Start playing after x random seconds
            setTimeout(function () {
                spriteInstance.play()
            }, this.generateRandomTimeout());
        });
    };


    // Method to trigger the mole hit animation
    triggerMoleHit = () => {

        // Fetch spriteInstance, moleHitTypes, moleIndex & sound effects from the state
        const { spriteInstance, moleHitTypes, moleIndex, punch1, punch2, punch3, powerUp } = this.state;

        // Fetch stat changers from the props
        const {incScore, incHealth} = this.props;

        if (this.state.active) {
            // Pause the spriteSheet loop
            spriteInstance.pause();

            // Deactivate the mole & increment the score and/or health
            this.setState({
                active: false,
                moleHit: true
            }, () => {
                // Increment the score
                if (moleIndex === 0 || moleIndex === 1) { punch1.play(); incScore(30); }
                else if (moleIndex === 2) { punch2.play(); powerUp.play(); incScore(5); incHealth(10); }
                else { punch3.play(); incScore(50); }

                // Set sprite endpoint to end of hit animation
                // & play the animation from its starting point
                spriteInstance.setFps(moleHitTypes[moleIndex].fps);
                spriteInstance.setEndAt(moleHitTypes[moleIndex].endIndex);
                spriteInstance.goToAndPlay(moleHitTypes[moleIndex].startIndex);
            });
        } else {
            console.log('No mole present');
        }
    };


    // Method to generate an animation speed for a given moleType & difficulty
    generateFPS = moleType => {

        // Fetch the max & min mole speeds from the difficulty in the props
        const {
            maxSpeedBenign, minSpeedBenign, maxSpeedAttack, minSpeedAttack, maxSpeedHealer,
            minSpeedHealer, maxSpeedBomber, minSpeedBomber
        } = this.props.difficulty;

        if (moleType === 'benign') {
            return (Math.floor(Math.random() * (maxSpeedBenign - minSpeedBenign + 1)) + minSpeedBenign);
        } else if (moleType === 'attacker') {
            return (Math.floor(Math.random() * (maxSpeedAttack - minSpeedAttack + 1)) + minSpeedAttack);
        } else if (moleType === 'healer') {
            return (Math.floor(Math.random() * (maxSpeedHealer - minSpeedHealer + 1)) + minSpeedHealer);
        } else {
            return (Math.floor(Math.random() * (maxSpeedBomber - minSpeedBomber + 1)) + minSpeedBomber);
        }
    };


    // Method to generate a random mole
    generateRandomMole = () => {
        // Generate random moleIndex to use in the chanceArray
        const randomIndex = Math.floor(Math.random() * 19);
        const chanceArray = this.props.difficulty.chanceArray;

        return chanceArray[randomIndex];
    };


    // Method to generate a random timeout
    generateRandomTimeout = () => Math.floor(Math.random() * 35000);
}


// Prop types for the component
Mole.propTypes = {
    incHealth: PropTypes.func.isRequired,
    incScore: PropTypes.func.isRequired,
    dealDamage: PropTypes.func.isRequired,
    difficulty: PropTypes.object.isRequired,
};


// Export
/////////

export default Mole;
