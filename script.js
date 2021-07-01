'use strict';

const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')
const score1 = document.getElementById('score--0');
const currScore1 = document.getElementById('current--0');
const score2 = document.getElementById('score--1');
const currScore2 = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Inital Conditions
score1.textContent = 0;
score2.textContent = 0;
diceEl.classList.add('hidden');

const switchPlayer = function (){
    currScore = 0;
    document.getElementById(`current--${currPlayer}`).textContent = 0;
    currPlayer = currPlayer ===0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

let currScore = 0
let currPlayer = 0;
let scoreArr = [0 , 0];

let playing = true;
//Conditions for Dice 
btnRoll.addEventListener('click' , function () {
    if(playing) {

        //Generating a random number
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);
        //roll dice and display the image corresponding to the number
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        
        //check for the number, if true switch the player
        if(dice!==1) {
            currScore += dice;
            document.getElementById(`current--${currPlayer}`).textContent = currScore;
            // currScore1.textContent = currScore;
        } else {
            //switch player
            // currScore = 0;
            // document.getElementById(`current--${currPlayer}`).textContent = 0;
            // currPlayer = currPlayer === 0 ? 1 : 0;
            // player0.classList.toggle('player--active');
            // player1.classList.toggle('player--active');
            switchPlayer();
        }
    }
})
    
btnHold.addEventListener('click' , function() {
    if(playing) {
        
        //1. Add score to total score
        scoreArr[currPlayer] += currScore;
        
        document.getElementById(`score--${currPlayer}`).textContent = scoreArr[currPlayer];
        
        console.log(scoreArr[currPlayer]);
        if(scoreArr[currPlayer]>=20) {

            diceEl.classList.add('hidden');
            playing = false;
            //Score>=100 Playr wins  ---> Finish the game
            document.querySelector(`.player--${currPlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${currPlayer}`).classList.remove('player--active');
            
        } else {
            //Score<100 Switch Player
            switchPlayer();
        }
    }
})

btnNew.addEventListener('click' , function() {
    currScore = 0;
    currPlayer = 0;
    scoreArr = [0 , 0];
    playing  = true;

    score1.textContent = 0;
    score2.textContent = 0;
    currScore1.textContent = 0;
    currScore2.textContent = 0;
    
    diceEl.classList.add('hidden');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    
})