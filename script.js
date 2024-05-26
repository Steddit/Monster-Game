let xp=0;
let gold=50;
let heath=100;
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
const monsterStats=document.querySelector("#monsterStats");
const monsterNameText=document.querySelector("#monsterName");
const nonsterHealthText=document.querySelector("#monsterHealth") ;

//initializing the buttons
btnOne.onclick=goStore;
btnTwo.onclick=goCave;
btnThree.onclick=fightDragon;

function goStore(){
    btnOne.innerText="Buy 10 health (10 gold)";
    btnTwo.innerText="Buy Weapon for 30 gold";
    btnThree.innerText="Go to town square";
    btnOne.onclick=buyHealth;
    btnTwo.onclick=buyWeapon;
    btnThree.onclick=goTown;
    text.innerText="You Entered the store";
}

function goCave(){
    console.log("going to cave")
}

function fightDragon(){
    console.log("fighting dragon")
}

function buyHealth(){

}

function buyWeapon(){

}

function goTown(){
    
}