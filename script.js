function getComputerChoice() {
  let numChoice = Math.floor(Math.random() * 3);

  switch (numChoice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  return String(prompt("Rock, paper, or scissors?")).toLowerCase();
}

function printScores() {
  console.log("You: " + humanScore + "\nComputer: " + computerScore);
}

function printChoices(humanChoice, computerChoice) {
  console.log("You chose: " + humanChoice + "\nCPU chose: " + computerChoice);
}

function printWinner() {
  if (humanScore > computerScore) {
    console.log("You won the game! Final scores are: ");
  }
  else if (humanScore < computerScore) {
    console.log("You lost the game! Final scores are: ");
  }
  else {
    console.log("You tied! Final scores are: ");
  }

  printScores();
}

function playRound(computerChoice, humanChoice) {
  if (computerChoice === humanChoice) {
    console.log("It's a tie!");
  }
  else if (computerChoice === "rock") {
    if (humanChoice === "paper") {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
    } else if (humanChoice === "scissors") {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
    }
  } else if (computerChoice === "paper") {
    if (humanChoice === "scissors") {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
    } else if (humanChoice === "rock") {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
    }
  } else if (computerChoice === "scissors") {
    if (humanChoice === "rock") {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
    } else if (humanChoice === "paper") {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
    }
  }
}

let humanScore = 0;
let computerScore = 0;

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

printChoices(humanChoice, computerChoice);

playRound(humanChoice, computerChoice);

printScores();
