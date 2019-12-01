# Holy Whack-a-Moley

###### Second assignment for the course Frontend Web development @ [Syntra-West](http://https://syntrawest.be) Brugge. 
Whack a mole recreated in React! 

*Assignment is found in the folder called **assignment**.*

![Holy Whack-a-Moley screenshot](https://imgur.com/53N23gd)

## How to play
The game contains 12 holes. After x random seconds a mole appears. It's up to the player to whack the mole before it crawls back in.
After scoring 1000 points, the player advances to the next level, up to a total of 26 levels. Some moles deal damage other moles have the ability to heal the player, others just do nothing.

#### Mole types

There are 4 types of moles.
-   **Benign**
    -   This mole just comes up & crawls back down without doing any damage.
    -   Can be hit from beginning to end
-   **Attacker**
    -   This mole scratches the player, doing damage that gradually increases as the levels progress
    -   Damage is done in 2 waves... If the player whacks the mole before the second wave. The player only takes the damage from the first wave.
    -   Can be hit from beginning to end
-   **Healer**
    -   This mole deals no damage, but heals the player when whacked
    -   Can be hit up until the mole pours the flask over itself & turns completely white
-   **Bomber**
    -   This mole deals the most damage & drops a bomb before crawling back in
    -   Can be hit up until the bomb explodes. Damage is unavoidable then
   
#### Difficulty

Each level has its own difficulty settings. The framerate of the animations are calculated using a random number between *minimum speed* & *maximum speed* for a given mole per (difficulty) level

The higher the level, the more difficult the levels gets. When the levels progress the following attributes can change.

- Damage done
- Minimum speed of the mole
- Maximum speed of the mole
- Chance Array, consisting of 20 indices with values from 0 - 3 for our 4 mole types

## How to install
**Clone** the repository & **Install** dependencies
```
> npm install
```

## How to run
Run the game by issuing

```
> npm start
```