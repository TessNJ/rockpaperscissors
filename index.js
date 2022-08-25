//Start/Load (Instructions)
document.addEventListener("DOMContentLoaded", startGame);

let playerChoice;

function startGame() {
  console.log("hello");
  document.querySelector(".rock").addEventListener("click", playerRock);
  document.querySelector(".paper").addEventListener("click", playerPaper);
  document.querySelector(".scissors").addEventListener("click", playerScissors);
}
//Player 1 choice

function playerRock() {
  playerChoice = "rock";
  console.log(playerChoice);
  computerChoice();
}
function playerPaper() {
  playerChoice = "paper";
  console.log(playerChoice);
  computerChoice();
}
function playerScissors() {
  playerChoice = "scissors";
  console.log(playerChoice);
  computerChoice();
}
//Player 2 chooses losing hand
function computerChoice() {
  document.querySelector(".rock").removeEventListener("click", playerRock);
  document.querySelector(".paper").removeEventListener("click", playerPaper);
  document
    .querySelector(".scissors")
    .removeEventListener("click", playerScissors);

  console.log(playerChoice);
  if (playerChoice === "rock") {
    console.log("here");
  }
}
//Play animation
//Shows Hands
//Win pop-up
//Reload button
