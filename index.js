//Start/Load (Instructions)
document.addEventListener("DOMContentLoaded", startGame);

let playerChoice;
let computerHand;

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
    computerHand = "scissors";
    console.log(computerHand);
  } else if (playerChoice === "paper") {
    computerHand = "rock";
    console.log(computerHand);
  } else if (playerChoice === "scissors") {
    computerHand = "paper";
    console.log(computerHand);
  } else {
    alert("Error");
  }
  playAnimation();
}
//Play animation
function playAnimation() {
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");
  document
    .querySelector("#player1")
    .addEventListener("animationend", changeHand);
}
//Shows Hands
function changeHand() {
  document.querySelector("#player1").style.backgroundImage =
    "url(assets/hand_" + playerChoice + ".png)";
  document.querySelector("#player2").style.backgroundImage =
    "url(assets/hand_" + computerHand + ".png)";
  endScreen();
}
//Win pop-up
function endScreen() {
  document.querySelector("#win").classList.remove("hidden");
  document.querySelector("#replay").classList.remove("hidden");
}
//Reload button
function restart() {
  location.reload();
}
