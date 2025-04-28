const GAME_LENGTH = 5;
const beats = {
  rock:    "scissors",
  paper:   "rock",
  scissors:"paper"
};

const buttons = document.querySelector('.buttons');
const winnerContainer = document.querySelector('.winner-container');
const winnerHeader = document.createElement('h2');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');

buttons.addEventListener('click', (event) => {
  let targetedButton = event.target;
  playRound(getHumanChoice(targetedButton), getComputerChoice());
})

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  winnerContainer.appendChild(winnerHeader);
  winnerContainer.appendChild(p1);
  winnerContainer.appendChild(p2);
  winnerContainer.appendChild(p3);
  
  const roundWinner = determineWinner(humanChoice, computerChoice);
  if (roundWinner === "tie") {
      winnerHeader.textContent = "It's a tie! Doesn't count.";
      p2.textContent = `You both chose ${humanChoice}!`;
  }
  else if (roundWinner === "human") {
      winnerHeader.textContent = "You won!";
      p2.textContent = `${capitalizeString(humanChoice)} beats 
      ${computerChoice}.`;
  }
  else {
      winnerHeader.textContent = "You lose!";
      p2.textContent = `${capitalizeString(computerChoice)} beats 
      ${humanChoice}.`;
    }

  p3.textContent = "You: "+ humanScore + " - CPU: " + computerScore;
  p1.textContent = "CPU chose " + computerChoice + ".";
  
  const isGameOver = humanScore + computerScore === GAME_LENGTH;
  const isHumanLeading = humanScore > computerScore;
  
  if (isGameOver) {
    resetGame();
    
    if (isHumanLeading) {
      winnerHeader.textContent = "You won the game! Good job!";
    }
    else {
      winnerHeader.textContent = "You lost the game! Nice try.";
    }
  }
}

function determineWinner(computerChoice, humanChoice) {
  console.log(computerChoice);
  console.log(humanChoice);
  if (computerChoice === humanChoice) {
    return "tie";
  }

  const humanWins = beats[computerChoice] === humanChoice;

  if (humanWins) {
    humanScore++;
    return "human";
  }
  else {
    computerScore++;
    return "computer";
  }
}

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

function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  p1.textContent = `Click below to start a new game!`;
  winnerContainer.removeChild(p2);
}
