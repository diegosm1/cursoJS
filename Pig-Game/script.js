'use strict';


const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

const player1ScoreElement = document.querySelector('#score--0');
const player2ScoreElement = document.querySelector('#score--1');

const diceElement = document.querySelector('.dice');

// const current1Element = document.getElementById('current--0');
// const current2Element = document.getElementById('current--1');


const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


player1ScoreElement.textContent = 0;
player2ScoreElement.textContent = 0;
diceElement.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

btnRollDice.addEventListener('click', function () {

    //funcionalidad del dado 
    const dice = Math.trunc(Math.random() * 6) + 1;

    //mostrar la imagen del dado en funcion del numero asignado
    
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;

    //checkar si el dado cae en 1 cambiar al siguiente jugador 

    if (dice !== 1) {
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
        // current1Element.textContent = currentScore;
    } else {

        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = 0
        player1.classList.remove('player--active');
        player2.classList.add('player--active')

    }
})