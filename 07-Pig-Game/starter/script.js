'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0E1 = document.getElementById('score--0');
const score1E1 = document.getElementById('score--1');
let current0El = document.querySelector('#current--0');
const current1El = document.getElementById('current--1');

let dice = document.querySelector('.dice');
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');


// current0E1.textContent=0;
// current1E1.textContent=0
score0E1.textContent = 0;
score1E1.textContent = 0;

let  currentScore, activePlayer, playing;


function init(){
  playing = true;
  currentScore = 0;
  activePlayer = 0;
  score0E1.textContent = 0;
  score1E1.textContent = 0;
  document.querySelector('#current--0').textContent=0
  document.querySelector('#current--1').textContent=0
  document
    .querySelector('.player--0')
    .classList.remove('player--winner');
  document
    .querySelector(`.player--0`)
    .classList.add('player--active');
  document
    .querySelector('.player--1')
    .classList.remove('player--winner');
  document
    .querySelector(`.player--1`)
    .classList.add('player--active');
}
function move() {
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer == 0 ? 1 : 0;
}
const scores = [0, 0];
init();

btnRoll.addEventListener('click', function () {
  if (playing) {
    dice.classList.remove('hidden');
    let roll = Math.trunc(Math.random() * 6 + 1);
    dice.src = `dice-${roll}.png`;
    console.log(roll, typeof roll);
    if (roll != 1) {
      currentScore += roll;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      move();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    console.log(scores);
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      move();
    }
  }
});
btnNew.addEventListener('click', function () {
  init();  
});
