//Player stats tracking
let playerMaxHealth = 4;
let playerCurrentHealth = 4;
let damageValue = 0;

let blackenedBloodVailMaxCharges = 1;
let blackenedBloodVailCurrentCharges = 1;

let inventoryList = [];

let equipStats = [
    {level: 0, displayName: 'Vitality'},
    {level: 0, displayName: 'Enduracne'},
    {level: 0, displayName: 'Strenght'},
    {level: 0, displayName: 'Dexterity'},
    {level: 0, displayName: 'Intelligence'},
    {level: 0, displayName: 'Faith'}
];

let displayViewStats = [
    stats[0].level + equipStats[0].level,
    stats[1].level + equipStats[1].level,
    stats[2].level + equipStats[2].level,
    stats[3].level + equipStats[3].level,
    stats[4].level + equipStats[4].level,
    stats[5].level + equipStats[5].level,
];