//stat index
let vitality = 0;
let endurance = 1;
let strenght = 2;
let dexterity = 3;
let intelligence = 4;
let faith = 5;

let weaponsStart = [
    {
        weaponName: 'Warped Femur',
        requirementValue: 0, 
        requirementStat: '', 
        eqiuppedBenefitsText: '+1 Strength', 
        eqiuppedStat:
            [{
                statIndex: strenght, 
                statChange: +1,
            }],
        damage: 1
    },
    {
        weaponName: 'Blood-pricked Rib Bone', 
        requirementValue: 0, 
        requirementStat: '', 
        eqiuppedBenefitsText: '+1 Dexterity', 
        eqiuppedStat:
        [{
            statIndex: dexterity, 
            statChange: +1,
        }],
        damage: 1
    },
    {weaponName: 'Skullshard Staff', 
        requirementValue: 0, 
        requirementStat: '',
        eqiuppedBenefitsText: '+1 Intelligence', 
        eqiuppedStat:
        [{
            statIndex: intelligence, 
            statChange: +1,
        }],
        damage: 1
    },
    {
        weaponName: 'Bile-Soaked Sack', 
        requirementValue: 0, 
        requirementStat: '',
        eqiuppedBenefitsText: '+1 Faith', 
        eqiuppedStat:
        [{
            statIndex: faith, 
            statChange: +1,
        }],
        damage: 1},
];

let weaponsActOne = [
    {
        weaponName: 'Rotwood Hammer', 
        requirementValue: 1, 
        requirementStat: 'Strength', 
        eqiuppedBenefitsText: '+1 Strenght', 
        eqiuppedStat:
        [{
            statIndex: strenght, 
            statChange: +1,
        }],
        damage: 1
    },
    {
        weaponName: 'Sharpened Bone', 
        requirementValue: 1, 
        requirementStat: 'Dexterity', 
        eqiuppedBenefitsText: '+1 Dexterity', 
        eqiuppedStat:
        [{
            statIndex: dexterity, 
            statChange: +1,
        }],
        damage: 1
    },
    {
        weaponName: 'Wand of Fingers', 
        requirementValue: 1, 
        requirementStat: 'Intelligence', 
        eqiuppedBenefitsText: '+1 Intelligence', 
        eqiuppedStat:
        [{
            statIndex: intelligence, 
            statChange: +1,
        }],
        damage: 1
    },
    {weaponName: 'Pulsating Eyeball', 
        requirementValue: 1, 
        requirementStat: 'faith', 
        eqiuppedBenefitsText: '+1 Faith',
        eqiuppedStat:
        [{
            statIndex: faith, 
            statChange: +1,
        }], 
        damage: 1
    },
];

let weaponsActTwo = [
    {
        weaponName: 'Skin-Crested Mace',
        requirementValue: 2,
        requirementStat: 'Strength',
        eqiuppedBenefitsText: '+1 Strength, -1 Endurance', 
        eqiuppedStat: 
        [{
            statIndex: faith, 
            statChange: +1,
        },
        {
            statIndex: endurance, 
            statChange: -1,
        }],
        damage: '2'
    },
    {
        weaponName: 'Jawbone Dagger', 
        requirementValue: 2, 
        requirementStat: 'Dexterity', 
        eqiuppedBenefitsText: '+1 Dexterity, -1 Faith', 
        eqiuppedStat: 
        [{
            statIndex: dexterity, 
            statChange: +1,
        },
        {
            statIndex: faith, 
            statChange: -1,
        }],
        damage: '2'
    },
    {
        weaponName: 'Wicked Tongue Staff', 
        requirementValue: 2, 
        requirementStat: 'Intelligence', 
        eqiuppedBenefitsText: '+1 Intelligence, -1 Strenght', 
        eqiuppedStat: 
        [{
            statIndex: intelligence, 
            statChange: +1,
        },
        {
            statIndex: strenght, 
            statChange: -1,
        }],
        damage: '2'},
    {
        weaponName: 'Rotten Scab', 
        requirementValue: 2, 
        requirementStat: 'Faith', 
        eqiuppedBenefitsText: '+1 Faith, -1 Dexterity', 
        eqiuppedStat: 
        [{
            statIndex: faith, 
            statChange: +1,
        },
        {
            statIndex: dexterity, 
            statChange: -1,
        }],
        damage: '2'
    },
];

let weaponsActThree = [
    {
        weaponName: 'Shoulderblade Shield', 
        requirementValue: 3, 
        requirementStat: 'Strenght & Endurance', 
        eqiuppedBenefitsText: '+2 Strength, +2 Endurance',
        eqiuppedStat: 
        [{
            statIndex: strenght, 
            statChange: +2,
        },
        {
            statIndex: endurance, 
            statChange: +2,
        }], 
        damage: 2
    },
    {
        weaponName: 'Giant\'s Fingerbone', 
        requirementValue: 3, 
        requirementStat: 'Dexterity & Faith', 
        eqiuppedBenefitsText: '+2 Dexterity. Heal 1HP when you deal damage', 
        eqiuppedStat: 
        [{
            statIndex: dexterity, 
            statChange: +2,
        }],
        damage: 2
    },
    {
        weaponName: 'Brainclump Staff', 
        requirementValue: 3, 
        requirementStat: 'Intelligence & Dexterity', 
        eqiuppedBenefitsText: '+2 Intelligence. If you deal damage to and enemy, they cannot critical hit you on their next attack', 
        eqiuppedStat: 
        [{
            statIndex: intelligence, 
            statChange: +2,
        }],
        damage: 2
    },
    {
        weaponName: 'Sinnew Whip', 
        requirementValue: 3, 
        requirementStat: 'Faith & Intelligence', 
        eqiuppedBenefitsText: '+2 Faith. You attack once for free at the start of combat', 
        eqiuppedStat: 
        [{
            statIndex: faith, 
            statChange: +2,
        }],
        damage: 2
    },
];

let weaponsList = [weaponsStart, weaponsActOne, weaponsActTwo, weaponsActThree];