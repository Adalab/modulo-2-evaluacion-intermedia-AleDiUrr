'use strict';

const button = document.querySelector('.js-button');
const selectNumber = document.querySelector('.js-select');
const winLose = document.querySelector('.js-title');
const money = document.querySelector('.js-money');
const inputBet = document.querySelector('.js-input');





function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }

function generatorComparatorNum() {
    const getNumber = getRandomNumber(6);
    const selectNum = selectNumber;

if (getNumber === selectNum) {
winLose.innerHTML = `Has ganado el doble de lo apostado :)`;

} else { winLose.innerHTML = `Has perdido lo apostado :(`;

}
}


function moneyBet() {
    const chosenMoney = inputBet.value;
    
}

function handleClicKButton (event) {
    event.preventDefault();

    getRandomNumber(6);
    generatorComparatorNum ();
    moneyBet();
    
}


button.addEventListener('click' , handleClicKButton );