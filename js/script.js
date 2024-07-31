"use strict";
import { rollDice, getDiceNumberFromClass, handleClose } from "./main.js";

// variables
let previousDiceNumber, currentScore, gameWorks, activePlayer;
const totalScore = [];
const WINNING_SCORE = 100;
let firstLoading = true;
// sounds
const diceRollSound = new Audio("../assets/sounds/dice-roll.mp3");
const diceRollSound2 = new Audio("../assets/sounds/dice-roll2.mp3");
const newGameSound = new Audio("../assets/sounds/new-game.mp3");
const pickSound = new Audio("../assets/sounds/pick.mp3");
const errorSound = new Audio("../assets/sounds/error.mp3");
const winningSound = new Audio("../assets/sounds/winning.mp3");
// DOM elements
const dice = document.querySelector(".dice-container");
const rollDiceBtn = document.querySelector(".roll-dice");
const addToTotalBtn = document.querySelector(".add-to-total");
const newGameBtn = document.querySelector(".new-game");

// error handling if effective elements didn't get loaded in the page
if (
  !dice ||
  !document.querySelector(".roll-dice") ||
  !document.querySelector(".add-to-total") ||
  !document.querySelector(".new-game")
) {
  alert("there is an error in loading the game");
  console.error("Required DOM elements are missing.");
  throw new Error("Initialization failed: Required DOM elements are missing.");
}

// functions

// this function will toggle between display: none and display: flex for any selector
const display = (selector, option = 1) => {
  document.querySelector(selector).style.display =
    option === 1 ? "flex" : "none";
};

// reset current scores and total scores in the UI, and reset the totalScore array
const resetPlayerScores = function () {
  for (let i = 0; i < 2; i++) {
    totalScore[i] = 0; // reset the two players' scores
    document.querySelector(`.player${i}-total-score`).textContent = 0;
    document.querySelector(`.player${i} .current-score-value`).textContent = 0;
  }
};

// event handlers
const initializeGame = function () {
  // to not reset the game when it is a new game
  if (totalScore[0] !== 0 || totalScore[1] !== 0) {
    // if it is a new game there will be active player. if it is the first game loaded, active player will be undefined, and no winner exists
    if (activePlayer === 1 || activePlayer === 0) {
      document
        .querySelector(`.player${activePlayer}`)
        .classList.remove("player-winner"); // if we executed this line at the first game loaded, there will be an error because activePlayer will be undefined
      document
        .querySelector(`.player${activePlayer}`)
        .classList.remove("active-player"); // if the game didn't finish, but it is a new game.
    }
    newGameSound.play();
    handleClose();
    firstLoading = false;
    activePlayer = Math.trunc(Math.random() * 2);
    currentScore = previousDiceNumber = 0; // reset the current score, and previous dice number = wrong dice number when it is a new game. so it will make the up-down animation work correctly in the new game like the first game
    gameWorks = true;
    resetPlayerScores(); // reset total and current scores in the UI
    display(".game-finished", 0); // hide the finish div
    display(".start"); // show the start div
  }
  else{
    errorSound.play();
  }
};

const switchActivePlayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0; // change player
  document.querySelector(`.player0`).classList.toggle("active-player");
  document.querySelector(`.player1`).classList.toggle("active-player");
};

const handleRoll = function () {
  // if the game didn't finish. this will prevent the user from clicking this btn again when the game is finished
  if (gameWorks) {
    /* 
    this condition to put the active player at the first roll, or when it is a new game, and will prevent adding this class when the active player still active and didn't get dice number of 1. notice the starting player will be random
     */
    if (
      !document
        .querySelector(".player" + activePlayer)
        .classList.contains("active-player")
    ) {
      document
        .querySelector(".player" + activePlayer)
        .classList.add("active-player");
      display(".start", 0); // hide the start div
    }
    let diceNumber = rollDice(); // make the animation and return the dice number
    if (previousDiceNumber !== diceNumber) {
      diceRollSound.play();
    } else {
      /*
    if the previous random number and the new random number are the same, then the dice will go up and down, so the user will feel a change in the dice. note: the rolling animation works only when the numbers are different
    */
      diceRollSound2.play();
      dice.style.bottom = "30px"; // go up
      setTimeout(() => {
        dice.style.bottom = "0px"; // then down
      }, 400);
    }
    setTimeout(() => {
      previousDiceNumber = getDiceNumberFromClass();

      if (diceNumber !== 1) {
        document.querySelector(
          `.player${activePlayer} .current-score-value`
        ).textContent = currentScore += diceNumber; // sum of all true rolls
      } else {
        currentScore = 0;
        document.querySelector(
          `.player${activePlayer} .current-score-value`
        ).textContent = currentScore;

        switchActivePlayer();
      }
    }, 700); // to synchronize the rolling animation with the current score apperance timing
  }
  else{
    errorSound.play();
  }
};

const handleAddToTotal = function () {
  // it work only when the game is on and there's a current score to add
  if (gameWorks && currentScore !== 0) {
    pickSound.play();
    totalScore[activePlayer] += currentScore;

    document.querySelector(
      `.player${activePlayer} .current-score-value`
    ).textContent = currentScore = 0; // reset the current score after clicking

    document.querySelector(`.player${activePlayer}-total-score`).textContent =
      totalScore[activePlayer];

    if (totalScore[activePlayer] >= WINNING_SCORE) {
      // winning case
      winningSound.play();
      document
        .querySelector(`.player${activePlayer}`)
        .classList.add("player-winner");

      gameWorks = false; // to stop the user from rolling the dice or adding to the total

      document
        .querySelector(`.player${activePlayer}`)
        .classList.remove("active-player");

      display(".game-finished"); // show finish div
    } else {
      switchActivePlayer();
    }
  }else{
    errorSound.play();
  }
};

//
function handleKeydown(event) {
  switch (
    event.key.toLowerCase() // convert the key to lower case
  ) {
    case "k":
      addToTotalBtn.click();
      break;
    case "r":
      event.preventDefault(); // Prevent the default action for the R key which is reload the page
      rollDiceBtn.click();
      break;
    case "n":
      newGameBtn.click();
      break;
    case "p":
      document.querySelector(".play").click();
    default:
      break;
  }
}

// event listeners for the 3 buttons
rollDiceBtn.addEventListener("click", handleRoll);
addToTotalBtn.addEventListener("click", handleAddToTotal);

newGameBtn.addEventListener("click", () => {
  if (!firstLoading) {
    // to prevent the user from starting a new game before the first loading
    initializeGame();
  }
});

document
  .querySelector(".close-modal")
  .addEventListener("click", initializeGame);

document.querySelector(".overlay").addEventListener("click", initializeGame);

document.querySelector(".play").addEventListener("click", initializeGame);

// event listeners for the keyboard
document.addEventListener("keydown", handleKeydown);

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    !document.querySelector(".modal").classList.contains("hidden")
  ) {
    initializeGame();
  }
});
