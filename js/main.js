// dice
const dice = document.getElementById("dice1");

export function rollDice() {
  // Generate a random dice number between 1 and 6
  const diceNumber = Math.trunc(Math.random() * 6) + 1;

  // Remove all 'show-*' classes
  for (let i = 1; i <= 6; i++) {
    dice.classList.remove("show-" + i);
  }

  // Apply the new face class and start animation
  dice.classList.add("show-" + diceNumber);
  dice.setAttribute("aria-label", `Dice showing a number ${diceNumber}`); // for accessibility
  dice.setAttribute("role", "img");

  return getDiceNumberFromClass();
}

export function getDiceNumberFromClass() {
  for (let i = 1; i <= 6; i++) {
    if (dice.classList.contains("show-" + i)) {
      return i; // Return the number corresponding to the applied class
    }
  }
  return null; // Default return value if no class is matched
}

// modal

export const handleClose = function () {
  document.querySelector(".modal").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
};
