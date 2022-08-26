//Start/Load (Instructions) - Not included
document.addEventListener("DOMContentLoaded", startGame);

let playerChoice;
let computerHand;
let outcome;

function startGame() {
  // console.log("hello");
  document.querySelector(".rock").addEventListener("click", playerRock);
  document.querySelector(".paper").addEventListener("click", playerPaper);
  document.querySelector(".scissors").addEventListener("click", playerScissors);
}
//Player 1 choice

function playerRock() {
  playerChoice = "rock";
  // console.log(playerChoice);
  document.querySelector("#buttons").classList.add(".disabled");
  computerChoice();
}
function playerPaper() {
  playerChoice = "paper";
  // console.log(playerChoice);
  computerChoice();
}
function playerScissors() {
  playerChoice = "scissors";
  // console.log(playerChoice);
  computerChoice();
}
// //Player 2 chooses losing hand
//Randomized//

function computerChoice() {
  document.querySelector(".rock").removeEventListener("click", playerRock);
  document.querySelector(".paper").removeEventListener("click", playerPaper);
  document
    .querySelector(".scissors")
    .removeEventListener("click", playerScissors);
  document.querySelector("#buttons").classList.add("disabled");

  var computerOptions = ["rock", "paper", "scissors"];
  var choice = computerOptions[(Math.random() * computerOptions.length) | 0];
  // console.log(choice);
  computerHand = choice;

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
  // endScreen();
  determineWinner();
}

//Determine Winner
function determineWinner() {
  if (playerChoice === computerHand) {
    document.querySelector("#draw").classList.remove("hidden");
    document.querySelector("#replay").classList.remove("hidden");
  } else if (playerChoice === "paper" && computerHand === "rock") {
    outcome = true;
    // console.log("win?" + outcome);
  } else if (playerChoice === "paper" && computerHand === "scissors") {
    outcome = false;
    // console.log("lose?" + outcome);
  } else if (playerChoice === "rock" && computerHand === "scissors") {
    outcome = true;
    // console.log("win?" + outcome);
  } else if (playerChoice === "rock" && computerHand === "paper") {
    outcome = false;
    // console.log("lose?" + outcome);
  } else if (playerChoice === "scissors" && computerHand === "paper") {
    outcome = true;
    // console.log("win?" + outcome);
  } else if (playerChoice === "scissors" && computerHand === "rock") {
    outcome = false;
    // console.log("lose?" + outcome);
  }
  endScreen();
}

//Win pop-up
function endScreen() {
  if (outcome === true) {
    document.querySelector("#win").classList.remove("hidden");
  } else if (outcome === false) {
    document.querySelector("#lose").classList.remove("hidden");
  }
  document.querySelector("#replay").classList.remove("hidden");
}
//Reload button
function restart() {
  location.reload();
}

// //Player 2 chooses losing hand

//Forced//

// function computerChoice() {
//   document.querySelector(".rock").removeEventListener("click", playerRock);
//   document.querySelector(".paper").removeEventListener("click", playerPaper);
//   document
//     .querySelector(".scissors")
//     .removeEventListener("click", playerScissors);

//   console.log(playerChoice);
//   if (playerChoice === "rock") {
//     computerHand = "scissors";
//     console.log(computerHand);
//   } else if (playerChoice === "paper") {
//     computerHand = "rock";
//     console.log(computerHand);
//   } else if (playerChoice === "scissors") {
//     computerHand = "paper";
//     console.log(computerHand);
//   } else {
//     alert("Error");
//   }
//   playAnimation();
// }
