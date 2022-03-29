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
    const number = inputBet.value * 2;
winLose.innerHTML = `Has ganado el doble de lo apostado :)`;
money.innetHTML = number

} else { winLose.innerHTML = `Has perdido lo apostado :(`;
money.innerHTML = 0;

}
}


function moneyBet() {
    const chosenMoney = inputBet.value;
    money.innerHTML = chosenMoney;

    
}

function handleClicKButton (event) {
    event.preventDefault();

    getRandomNumber(6);
    generatorComparatorNum ();
    
}


button.addEventListener('click' , handleClicKButton );
inputBet.addEventListener('keyup', moneyBet);

