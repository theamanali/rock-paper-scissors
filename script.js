let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelector('.buttons');
buttons.addEventListener('click', (event) => {
  let targetedButton = event.target;
  playRound(getComputerChoice(), getHumanChoice(targetedButton));
})

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

function getHumanChoice(targetedButton) {
  switch (targetedButton.id) {
    case 'rock-button':
      return "rock";
    case 'paper-button':
      return "paper";
    case 'scissors-button':
      return "scissors";
  }
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
