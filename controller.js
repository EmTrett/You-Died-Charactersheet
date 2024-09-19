function rollWeapon(index){
    if(inventoryList.length < 2){
        let randomIndex = Math.floor(Math.random() * weaponsList[index].length);
        let weaponObj = weaponsList[index].splice(randomIndex, 1);
        weaponObj = weaponObj.pop()
        inventoryList.push(weaponObj);
        displayView();
    }

    return;
}

function removeItemFromInventory(index){
    inventoryList.splice(index, 1);
    displayView();
}


function useVialForHP(){
    if(blackenedBloodVailCurrentCharges >= 1){
        playerCurrentHealth += 4;
        blackenedBloodVailCurrentCharges--;
        if(playerCurrentHealth > playerMaxHealth){
            playerCurrentHealth = playerMaxHealth;
        }
        displayView();
    }
    else {return}
}

function useVialForReroll(){
    if(blackenedBloodVailCurrentCharges >= 1){
        blackenedBloodVailCurrentCharges--;
        displayView();
    }
    else {return}
}

function restAtCamp(){
    blackenedBloodVailCurrentCharges = blackenedBloodVailMaxCharges;
    playerCurrentHealth = playerMaxHealth;
    displayView();
}

function levelStat(index){
    let stat = stats[index];
    let boneFragments = currency[0]
    const levelCostList = [4, 8, 12, 16, ''];

    if(stat.level == 4){return}
    else if(boneFragments.amount >= stat.cost){
        stat.level++;
        boneFragments.amount -= stat.cost;
        stat.cost = levelCostList[stat.level];
        displayViewStats[index] = stat.level + equipStats[index].level;
    }

    displayView();
}

function addCurrency(index){
    let type = currency[index];

    type.amount++;
    displayView();
}

function playerTakeDamage(damage){
    playerCurrentHealth -= damage;

    displayView();
}

function calculateStat(statIndex, statValue){
    equippment = equipStats[statIndex];
    stat = stats[statIndex];

    equippment.level = statValue;
    displayViewStats[statIndex] = stat.level + equippment.level;

}

function getStatsFromEqiupment(itemIndex){
    let item = inventoryList[itemIndex].eqiuppedStat;

    for(let i = 0; i < item.length; i++){
        let index = item[i].statIndex;
        let change = item[i].statChange;

        calculateStat(index, change);
    }
    displayView();
}