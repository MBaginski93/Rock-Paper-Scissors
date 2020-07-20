const startGameBtn = document.getElementById("start-game-btn");
const ROCK = `ROCK`;
const PAPER = `PAPER`;
const SCISSORS = `SCISSORS`;
const DEFAULT_CHOICE = ROCK;
const RESULT_DRAW = "IT IS A DRAW";
const RESULT_WIN = "YOU WON";
const RESULT_LOSE = "YOU LOST";
let gameIsRunning = false;

const getPlayerChoice = function () {
  const select = prompt(`chose ${ROCK}, ${PAPER} or ${SCISSORS}`).toUpperCase();
  if (select === ROCK || select === PAPER || select === SCISSORS) {
    return select;
  } else {
    alert(`Invalid choice! We chose ${DEFAULT_CHOICE} for you`);
    return DEFAULT_CHOICE;
  }
};

const getComputerChoice = function () {
  const randomValue = Math.random();

  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.64) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const declareWinner = function (computerChoice, playerChoice) {
  if (computerChoice === playerChoice) {
    return RESULT_DRAW;
  } else if (
    (computerChoice === ROCK && playerChoice === PAPER) ||
    (computerChoice === PAPER && playerChoice === SCISSORS) ||
    (computerChoice === SCISSORS && playerChoice === ROCK)
  ) {
    return RESULT_WIN;
  } else {
    return RESULT_LOSE;
  }
};

startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }

  gameIsRunning = true;
  console.log("Game is starting ...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = declareWinner(computerChoice, playerChoice);
  console.log(`You picked ${playerChoice}`);
  console.log(`Computer picked ${computerChoice}`);
  console.log(winner);
  const message = `You picked ${playerChoice}, computer picked ${computerChoice} therefore ${winner}`;
  alert(message);
  gameIsRunning = false;
});
