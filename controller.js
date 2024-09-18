function rollWeapon(index){
    let randomIndex = Math.floor(Math.random() * weaponsList[index].length);
    let weaponObj = weaponsList[index].splice(randomIndex, 1);
    weaponObj = weaponObj.pop()
    inventoryList.push(weaponObj);
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
    }

    displayView();
}

function addCurrency(index){
    let type = currency[index];

    type.amount++;
    displayView();
}