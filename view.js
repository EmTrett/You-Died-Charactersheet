
function displayView(){
    let statHTML = '';
    let currencyHTML = '';
    let inventoryHTML = '';
    let indexStats = 0;
    let indexCurrency = 0;
    
    for(let stat of stats){
        statHTML += createStatTableHTML(stat, indexStats);
        indexStats++;
    }

    for(let type of currency){
        currencyHTML += createCurrencyTableHTML(type, indexCurrency);
        indexCurrency++;
    }

    for(let index = 0; index < inventoryList.length; index++){
        inventoryHTML += createInventoryItem(index);
    }

    calculatePlayerHealth();
    if(playerCurrentHealth > 0){
        document.body.innerHTML = /*HTML*/ `
            <div class="statPage">
                Player HP: ${playerCurrentHealth}
                <br />
                <input id="dmgInput" type="number" onchange="damageValue = this.valueAsNumber"/>
                <button onclick="playerTakeDamage(damageValue)">Take damage</button>
                <br />
                <br />
                <button onclick="restAtCamp()">Go to camp</button>
                <br />
                Blackened Blood Vial Charges: ${blackenedBloodVailCurrentCharges}
                <br />
                <button onclick="useVialForHP()">Drink for HP</button>
                <button onclick="useVialForReroll()">Drink for Reroll</button>
                <button onclick="blackenedBloodVailMaxCharges++">Add charge</button>
                <br />
                <table>
                    ${currencyHTML}
                    <tr>
                        <th>Player Stats</th>
                        <td>Max level</td>
                        <td class="number">4</td>
                        <td>Level cost</td>
                    </tr>
                    ${statHTML}
                </table>
                <br />
                <button onclick="rollWeapon(0)">Roll for starter weapon</button>
                <br />
                <br />
                <button onclick="rollWeapon(1)">Roll for act 1 weapon</button>
                <br />
                <br />
                <button onclick="rollWeapon(2)">Roll for act 2 weapon</button>
                <br />
                <br />
                <button onclick="rollWeapon(3)">Roll for act 3 weapon</button>
                <br />
            </div>
            <div class="inventoryPage">
                <table>
                    ${inventoryHTML}
                </table>
            </div>
        `;
    }
    else {
        deathButton();
        document.body.style.backgroundColor = 'black';
        document.body.innerHTML = /*HTML*/`
            <div class="fadeInImage">
                <img src="img/youdied.png" />
            </div>
            <div id="deathButton">
                <button onClick="window.location.reload();" style="font-size: 300%">
                    Restart Game
                </button>
            </div>
        `
    }
}

function createCurrencyTableHTML(type, i){
    return /*HTML*/ `
        <tr>
            <th>${type.displayName}</th>
            <td class="number">${type.amount}</td>
            <td><button onclick="addCurrency(${i})">+</button></td>
        </tr>
    `;
}

function createStatTableHTML(stat, i){
    if(stat.cost > currency[0].amount || stat.cost == ''){
        return /*HTML*/ `
        <tr>
            <th>${stat.displayName}</th>
            <td class="number">${displayViewStats[i]}</td>
            <td></td>
            <td class="number">${stat.cost}</td>
        </tr>
    `;  
    }
    return /*HTML*/ `
        <tr>
            <th>${stat.displayName}</th>
            <td class="number">${displayViewStats[i]}</td>
            <td><button onclick="levelStat(${i})">+</button></td>
            <td class="number">${stat.cost}</td>
        </tr>
    `;
}

function createInventoryItem(index){
    item = inventoryList[index];

    if(item.isNotEquipped == true){
        return /*HTML*/ `
            <tr>
                <th>Item name:</th>
                <td>${item.weaponName}</td>
                <th><button onclick="removeItemFromInventory(${index})">Remove item</button></th>
                <th><button onclick="getStatsFromEqiupment(${index})">Equip item</button></th>
            </tr>
            <tr>
                <th>Requirements:</th>
                <td>${item.requirementValue} ${item.requirementStat}</td>
            </tr>
            <tr>
                <th>
                    Equipped 
                    Benefits:
                </th>
                <td>${item.eqiuppedBenefitsText}</td>
            </tr>
            <tr>
                <th>Damage:</th>
                <td>${item.damage}</td>
            </tr>
        `;
    }
    else {
        {
            return /*HTML*/ `
                <tr>
                    <th>Item name:</th>
                    <td>${item.weaponName}</td>
                    <th><button onclick="removeItemFromEquippment(${index})">Unequip tem</button></th>
                </tr>
                <tr>
                    <th>Requirements:</th>
                    <td>${item.requirementValue} ${item.requirementStat}</td>
                </tr>
                <tr>
                    <th>
                        Equipped 
                        Benefits:
                    </th>
                    <td>${item.eqiuppedBenefitsText}</td>
                </tr>
                <tr>
                    <th>Damage:</th>
                    <td>${item.damage}</td>
                </tr>
            `;
        }
    }
}

function calculatePlayerHealth(){
    playerMaxHealth = 4 + (2 * stats[0].level)
}

function deathButton(){
    setTimeout(() => {
        document.getElementById("deathButton").style.visibility = 'visible';
    }, 5000);
}