// 0 = benign
// 1 = attacker
// 2 = healer
// 3 = bomber

export const difficulty = [
    {
        damAttack1: 5, damAttack2: 2, damageBomber: 14, maxSpeedBenign: 11, minSpeedBenign: 8,
        maxSpeedAttack: 13, minSpeedAttack: 10, maxSpeedHealer: 10, minSpeedHealer: 7,
        maxSpeedBomber: 8, minSpeedBomber: 6,
        chanceArray: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3]
    },
    {
        damAttack1: 5, damAttack2: 2, damageBomber: 14, maxSpeedBenign: 12, minSpeedBenign: 8,
        maxSpeedAttack: 13, minSpeedAttack: 10, maxSpeedHealer: 10, minSpeedHealer: 7,
        maxSpeedBomber: 8, minSpeedBomber: 6,
        chanceArray: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3]
    },
    {
        damAttack1: 5, damAttack2: 2, damageBomber: 14, maxSpeedBenign: 12, minSpeedBenign: 8,
        maxSpeedAttack: 13, minSpeedAttack: 10, maxSpeedHealer: 10, minSpeedHealer: 7,
        maxSpeedBomber: 8, minSpeedBomber: 6,
        chanceArray: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3]
    },
    {
        damAttack1: 5, damAttack2: 2, damageBomber: 14, maxSpeedBenign: 12, minSpeedBenign: 9,
        maxSpeedAttack: 14, minSpeedAttack: 11, maxSpeedHealer: 11, minSpeedHealer: 8,
        maxSpeedBomber: 9, minSpeedBomber: 7,
        chanceArray: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3]
    },
    {
        damAttack1: 5, damAttack2: 2, damageBomber: 16, maxSpeedBenign: 12, minSpeedBenign: 9,
        maxSpeedAttack: 14, minSpeedAttack: 11, maxSpeedHealer: 11, minSpeedHealer: 8,
        maxSpeedBomber: 9, minSpeedBomber: 7,
        chanceArray: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3]
    },
    {
        damAttack1: 6, damAttack2: 3, damageBomber: 16, maxSpeedBenign: 13, minSpeedBenign: 9,
        maxSpeedAttack: 14, minSpeedAttack: 11, maxSpeedHealer: 11, minSpeedHealer: 8,
        maxSpeedBomber: 9, minSpeedBomber: 7,
        chanceArray: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3]
    },
    {
        damAttack1: 6, damAttack2: 3, damageBomber: 16, maxSpeedBenign: 13, minSpeedBenign: 9,
        maxSpeedAttack: 15, minSpeedAttack: 12, maxSpeedHealer: 12, minSpeedHealer: 9,
        maxSpeedBomber: 10, minSpeedBomber: 8,
        chanceArray: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3]
    },
    {
        damAttack1: 6, damAttack2: 3, damageBomber: 16, maxSpeedBenign: 13, minSpeedBenign: 9,
        maxSpeedAttack: 15, minSpeedAttack: 12, maxSpeedHealer: 12, minSpeedHealer: 9,
        maxSpeedBomber: 10, minSpeedBomber: 8,
        chanceArray: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3]
    },
    {
        damAttack1: 6, damAttack2: 3, damageBomber: 16, maxSpeedBenign: 14, minSpeedBenign: 10,
        maxSpeedAttack: 15, minSpeedAttack: 12, maxSpeedHealer: 13, minSpeedHealer: 9,
        maxSpeedBomber: 10, minSpeedBomber: 8,
        chanceArray: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3]
    },
    {
        damAttack1: 6, damAttack2: 4, damageBomber: 16, maxSpeedBenign: 14, minSpeedBenign: 11,
        maxSpeedAttack: 16, minSpeedAttack: 13, maxSpeedHealer: 13, minSpeedHealer: 10,
        maxSpeedBomber: 11, minSpeedBomber: 9,
        chanceArray: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3]
    },
    {
        damAttack1: 6, damAttack2: 4, damageBomber: 16, maxSpeedBenign: 15, minSpeedBenign: 12,
        maxSpeedAttack: 16, minSpeedAttack: 13, maxSpeedHealer: 14, minSpeedHealer: 10,
        maxSpeedBomber: 11, minSpeedBomber: 9,
        chanceArray: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3]
    },
    {
        damAttack1: 6, damAttack2: 4, damageBomber: 18, maxSpeedBenign: 15, minSpeedBenign: 13,
        maxSpeedAttack: 16, minSpeedAttack: 14, maxSpeedHealer: 14, minSpeedHealer: 11,
        maxSpeedBomber: 12, minSpeedBomber: 9,
        chanceArray: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3]
    },
    {
        damAttack1: 8, damAttack2: 4, damageBomber: 18, maxSpeedBenign: 16, minSpeedBenign: 13,
        maxSpeedAttack: 17, minSpeedAttack: 14, maxSpeedHealer: 15, minSpeedHealer: 11,
        maxSpeedBomber: 12, minSpeedBomber: 10,
        chanceArray: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3]
    },
    {
        damAttack1: 8, damAttack2: 4, damageBomber: 18, maxSpeedBenign: 16, minSpeedBenign: 13,
        maxSpeedAttack: 17, minSpeedAttack: 15, maxSpeedHealer: 15, minSpeedHealer: 12,
        maxSpeedBomber: 13, minSpeedBomber: 10,
        chanceArray: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3]
    },
    {
        damAttack1: 8, damAttack2: 4, damageBomber: 18, maxSpeedBenign: 17, minSpeedBenign: 13,
        maxSpeedAttack: 18, minSpeedAttack: 15, maxSpeedHealer: 16, minSpeedHealer: 12,
        maxSpeedBomber: 13, minSpeedBomber: 10,
        chanceArray: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3]
    },
    {
        damAttack1: 8, damAttack2: 5, damageBomber: 19, maxSpeedBenign: 17, minSpeedBenign: 13,
        maxSpeedAttack: 18, minSpeedAttack: 16, maxSpeedHealer: 16, minSpeedHealer: 13,
        maxSpeedBomber: 14, minSpeedBomber: 11,
        chanceArray: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3]
    },
    {
        damAttack1: 8, damAttack2: 5, damageBomber: 19, maxSpeedBenign: 17, minSpeedBenign: 14,
        maxSpeedAttack: 19, minSpeedAttack: 16, maxSpeedHealer: 17, minSpeedHealer: 13,
        maxSpeedBomber: 14, minSpeedBomber: 11,
        chanceArray: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3]
    },
    {
        damAttack1: 8, damAttack2: 5, damageBomber: 19, maxSpeedBenign: 18, minSpeedBenign: 14,
        maxSpeedAttack: 19, minSpeedAttack: 17, maxSpeedHealer: 17, minSpeedHealer: 14,
        maxSpeedBomber: 15, minSpeedBomber: 12,
        chanceArray: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3]
    },
    {
        damAttack1: 8, damAttack2: 5, damageBomber: 19, maxSpeedBenign: 18, minSpeedBenign: 14,
        maxSpeedAttack: 20, minSpeedAttack: 17, maxSpeedHealer: 18, minSpeedHealer: 14,
        maxSpeedBomber: 15, minSpeedBomber: 12,
        chanceArray: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3]
    },
    {
        damAttack1: 10, damAttack2: 6, damageBomber: 19, maxSpeedBenign: 18, minSpeedBenign: 14,
        maxSpeedAttack: 20, minSpeedAttack: 18, maxSpeedHealer: 18, minSpeedHealer: 15,
        maxSpeedBomber: 16, minSpeedBomber: 13,
        chanceArray: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3]
    },
    {
        damAttack1: 10, damAttack2: 6, damageBomber: 20, maxSpeedBenign: 18, minSpeedBenign: 14,
        maxSpeedAttack: 21, minSpeedAttack: 18, maxSpeedHealer: 19, minSpeedHealer: 15,
        maxSpeedBomber: 16, minSpeedBomber: 13,
        chanceArray: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3]
    },
    {
        damAttack1: 10, damAttack2: 6, damageBomber: 20, maxSpeedBenign: 18, minSpeedBenign: 15,
        maxSpeedAttack: 21, minSpeedAttack: 19, maxSpeedHealer: 19, minSpeedHealer: 16,
        maxSpeedBomber: 17, minSpeedBomber: 14,
        chanceArray: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3]
    },
    {
        damAttack1: 10, damAttack2: 7, damageBomber: 20, maxSpeedBenign: 19, minSpeedBenign: 16,
        maxSpeedAttack: 22, minSpeedAttack: 19, maxSpeedHealer: 20, minSpeedHealer: 17,
        maxSpeedBomber: 17, minSpeedBomber: 14,
        chanceArray: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3]
    },
    {
        damAttack1: 10, damAttack2: 7, damageBomber: 20, maxSpeedBenign: 20, minSpeedBenign: 17,
        maxSpeedAttack: 22, minSpeedAttack: 20, maxSpeedHealer: 21, minSpeedHealer: 18,
        maxSpeedBomber: 18, minSpeedBomber: 15,
        chanceArray: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3]
    },
    {
        damAttack1: 10, damAttack2: 7, damageBomber: 20, maxSpeedBenign: 20, minSpeedBenign: 17,
        maxSpeedAttack: 25, minSpeedAttack: 20, maxSpeedHealer: 22, minSpeedHealer: 20,
        maxSpeedBomber: 20, minSpeedBomber: 16,
        chanceArray: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3]
    }
];

