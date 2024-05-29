let xp=0;
let gold=50;
let health=100;
let currentWeapon=0;
let fighting;
let monsterHealth;
let inventory=["stick"]

const btnOne=document.getElementById("btn-1");
const btnTwo=document.getElementById("btn-2");
const btnThree=document.getElementById("btn-3");
const text=document.getElementById("text");
const xpText=document.getElementById("xp");
const goldText=document.querySelector("#gold");
const heathText=document.getElementById("health");
const monsterStats=document.querySelector("#btns2");
const monsterNameText=document.querySelector("#monsterName");
const nonsterHealthText=document.querySelector("#monsterHealth") ;
const weapons=[
    {
    name: "stick",
    power: 5
    },
    {
    name: "stick",
    power: 5
    },
    {
    name: "stick",
    power: 5
    }
]
const monsters=[
    {
        name: "slime",
        level:2,
        health:15
    },
    {
        name: "fanged beast",
        level:8,
        health:60
    },
    {
        name: "dragon",
        level:20,
        health:300
    }
]
const locations=[
    {
        name:"town square",
        "button text":["Go to Store", "Go to Cave", "Fight Dragon"],
        "button functions":[goStore, goCave, fightDragon],
        text:"You Entered the town, You see a sign that Says \"store\""
    },
    {
        name:"store",
        "button text":["Buy 10 health (10 gold)", "Buy Weapon for 30 gold", "Go to town square"],
        "button functions":[buyHealth, buyWeapon, goTown],
        text:"You Entered the store"
    },
    {
        name:"cave",
        "button text":["fight slime", "fight Fanged beast", "Go to town square"],
        "button functions":[fightSlime, fightBeast, goTown],
        text:"You Enter the cave, You see some monsters."
    },
    {
        name:"fight",
        "button text":["attack", "dodge", "Run"],
        "button functions":[attack, dodge, goTown],
        text:"You are Fighting a Monster."
    }
]

//initializing the buttons
btnOne.onclick=goStore;
btnTwo.onclick=goCave;
btnThree.onclick=fightDragon;

function update(location){
    btnOne.innerText=location["button text"][0];
    btnTwo.innerText=location["button text"][1];
    btnThree.innerText=location["button text"][2];
    btnOne.onclick=location["button functions"][0];
    btnTwo.onclick=location["button functions"][1];
    btnThree.onclick=location["button functions"][2];
    text.innerText=location.text;
}

function goTown(){
    update(locations[0]);
}

function goStore(){
    update(locations[1]);
}

function goCave(){
    update(locations[2]);
}


function buyHealth(){
    if (gold>=10) {
        gold-=10;
        health+=10;
        goldText.innerText=gold;
        heathText.innerText=health; 
    } else{
        text.innerText="You do not have Enough Gold to Buy Health";
    }

}

function buyWeapon(){
    if (currentWeapon<weapons.length-1) {
        if (gold>=30) {
            gold-=30
            currentWeapon++
            goldText.innerText=gold
            let newWeapon=weapons[currentWeapon].name
            text.innerText="You now have a "+newWeapon+"."
            inventory.push(newWeapon)
            text.innerText+= "in Your inventory you have:" + inventory
        }else{
            text.innerText="You do not Have Enough Gold to buy a weapon"
        }
    }else{
        text.innerText="You have all the weapons"
        btnTwo.innerText="Sell weapon for 15 Gold"
        btnTwo.onclick=sellWeapon
    }

}

function sellWeapon() {
    if (inventory.length>1) {
        gold+=15
        goldText.innerText=gold
        let currentWeapon=inventory.shift()
        text.innerText="You sold a "+ currentWeapon+"."
        text.innerText+="In your inventory you have:" +inventory
    }else{
        text.innerText="Don't sell your only weapon!!"
    }
}

function fightSlime(){
    fighting=0
    goFight()
}

function fightBeast() {
    fighting=1
    goFight()
}

function fightDragon(){
    fighting=2
    goFight()
}

function goFight() {
    update(locations[3])
    monsterHealth=monsters[fighting].health
    monsterStats.style.display="block"
    monsterNameText.innerText=monsters[fighting].name
    monsterHealth.innerText=monsterHealth
}

function attack() {
    text.innerText="The " +monsters[fighting].name +" attacks."
    text.innerText+="You attack with a "+ weapons[currentWeapon].name +"."
    health-=monsters[fighting].level
    monsterHealth-=weapons[currentWeapon].power
}

function dodge(){

}