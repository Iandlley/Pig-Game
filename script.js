"use strict";

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const score0 = document.querySelector("#score--0");
const score1 = document.getElementById("score--1");

const current0 = document.getElementById("#current--0");
const current1 = document.getElementById("#current--1");

const diceIMG = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

score0.textContent = 0;
score1.textContent = 0;
diceIMG.classList.add("hidden");

const displayDiceValue = function (imageSource) {
  document.querySelector(".dice").src = imageSource;
};

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  if (playing === true) {
    const diceValue = Math.trunc(Math.random() * 6) + 1;
    diceIMG.classList.remove("hidden");

    switch (diceValue) {
      case 1:
        displayDiceValue("dice-1.png");
        break;
      case 2:
        displayDiceValue("dice-2.png");
        break;
      case 3:
        displayDiceValue("dice-3.png");
        break;
      case 4:
        displayDiceValue("dice-4.png");
        break;
      case 5:
        displayDiceValue("dice-5.png");
        break;
      case 6:
        displayDiceValue("dice-6.png");
        break;
    }

    if (diceValue !== 1) {
      currentScore = currentScore + diceValue;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing === true) {
    scores[activePlayer] = scores[activePlayer] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
      document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
        
      diceIMG.classList.add("hidden");
      playing = false;
      
    } else {
      switchPlayer(); 
    }
  }
});
