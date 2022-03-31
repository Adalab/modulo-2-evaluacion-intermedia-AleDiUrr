'use strict';

/*const button = document.querySelector('.js-button');
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

if (getNumber === parseInt(selectNum.value)) {

winLose.innerHTML = `Has ganado el doble de lo apostado :)`;
money.innetHTML = inputBet.value * 2;

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
inputBet.addEventListener('keyup', moneyBet);*/

const button = document.querySelector('.js-button');
const selectNumber = document.querySelector('.js-select');
const winLose = document.querySelector('.js-title');
const money = document.querySelector('.js-money');
const inputBet = document.querySelector('.js-input');
let betBalance = 50;
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function moneyBet(selectMoney, numberRandom) {
  const moneyGot = parseInt(inputBet.value);

  if (selectMoney === numberRandom) {
    winLose.innerHTML = 'Has ganado el doble de lo apostado :)';
    betBalance = moneyGot * 2 + betBalance;
  } else {
    winLose.innerHTML = 'Has perdido lo apostado :(';
    betBalance = betBalance - moneyGot;
    console.log(betBalance);
  }
  money.innerHTML = `Saldo: ${betBalance}`;
}

function handleClickButton(event) {
  event.preventDefault();
  const selectMoney = parseInt(selectNumber.value);
  const numberRandom = getRandomNumber(6);
  moneyBet(selectMoney, numberRandom);
}

button.addEventListener('click', handleClickButton);
