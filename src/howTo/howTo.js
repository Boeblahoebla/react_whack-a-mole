// Imports
//////////

// Media
import benign from "../assets/img/moles/benign.png";
import attacker from "../assets/img/moles/attacker.png";
import bomber from "../assets/img/moles/bomber.png";
import healer from "../assets/img/moles/healer.png";


// Exports
//////////

// Mole descriptions
export const howToMoles = {
    benign: {
        name: "Benign",
        img: benign,
        desc: "This mole just comes up & crawls back down after a while... without inflicting any damage. " +
            "This is the easiest mole you can get. Can be hit from beginning to end."
    },
    attacker: {
        name: "Attacker",
        img: attacker,
        desc: "This mole scratches the player, doing damage. The damage is done in 2 waves, " +
            "the first dealing more damage than the cancelable second. Can be hit from beginning to end."
    },
    bomber: {
        name: "Bomber",
        img: bomber,
        desc: "This mole deals the most damage & drops a bomb before crawling back in. " +
            "Can be hit up until the bomb explodes. Damage is unavoidable then, so hurry up."
    },
    healer: {
        name: "Healer",
        img: healer,
        desc: "This mole deals no damage, but heals the player when whacked. " +
            "Can be hit up until the mole pours the flask over itself & completely turns white."
    }
};


// "How to" data
export const howToSections = {
    basics: {
        title: "Basics",
        text: "The game contains 12 holes. After x random seconds a mole appears. It's up to the player to\n" +
            "whack the mole before it crawls back in. After scoring 1000 points the player advances to the\n" +
            "next level, up to a total of 25. Some moles deal damage other moles have the ability to\n" +
            "heal the player, others just do nothing."
    },
    types: {
        title: "Mole types",
        text: "There are 4 basic types of moles, each with their own properties & abilities."
    },
    difficulty: {
        title: "Difficulty",
        text: "Each level has its own difficulty settings. The framerate of the animations are calculated using a\n" +
            "random number between minimum speed & maximum speed for a given mole per (difficulty) level\n" +
            "The higher the level, the more difficult the levels gets. When the levels progress the following\n" +
            "attributes change...",
        list: ["Damage done", "Minimum speed of the mole", "Maximum speed of the mole",
            "Decrease in healers & benign moles", "Increase in damage dealing moles"]
    }
};