/*
let playerScore = 0;
let computerScore = 0;
let winner = '';
let playAgain = true;

function getComputerChoice() {
  // goal is to create function that will choose between options
  // generate a random pick, out of three
  let randNumb = Math.floor(Math.random() * 3) + 1;
  return randNumb == 1 ? 'Rock'
    : randNumb == 2 ? 'Paper'
    : 'Scissors';
}

function getPlayerChoice() {
  let chosen = true;
  while (chosen) {
    let selection = (prompt('Enter your Input: ')).toLowerCase();
    if (selection == "rock" || selection == 'scissors' || selection == 'paper') {
      chosen = false;
      return capitalize(selection);
    } else {
      alert('not a valid selection');
    }
  }
}

function getBtnPlayerChoice() {
  const buttons = document.querySelectorAll('.rpc');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      return(button.id);
    });
  });
}


function capitalize(choice) {
  return choice.charAt(0).toUpperCase() + choice.slice(1);
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    console.log(playerChoice);
    console.log(computerChoice);
    console.log('Tied!');

  } else if (playerChoice === 'Rock' && computerChoice === 'Scissors'){
    console.log(playerChoice);
    console.log(computerChoice);
    console.log('You won!');
    playerScore++;

  } else if (playerChoice === 'Paper' && computerChoice === 'Rock'){
    console.log(playerChoice);
    console.log(computerChoice);
    console.log('You won!');
    playerScore++;

  } else if (playerChoice === 'Scissors' && computerChoice === 'Paper'){
    console.log(playerChoice);
    console.log(computerChoice);
    console.log('You won!');
    playerScore++;

  } else {
    playAgain = false;
    console.log(playerChoice);
    console.log(computerChoice);
    console.log('You lose!');
    computerScore++;
  }
}

function game() {
    playRound(getPlayerChoice(), getComputerChoice())
    if (endCheck(playerScore, computerScore) == 'w') {
      alert('You won!');
    } else if (endCheck(playerScore, computerScore) == 'l') {
      alert('You lost!');
    } else if (endCheck(playerScore, computerScore) == 't') {
      alert('You tied!');
    }
}

function endCheck(playerScore, computerScore) {
  if (playerScore === 1) {
    return 'w'
  } else if (computerScore === 1) {
    return 'l'
  } else if (playerScore == computerScore) {
    return 't'
  }
}


game()
getBtnPlayerChoice();
*/
const pSCore = document.querySelector('.pSCore');
const cSCore = document.querySelector('.cSCore');
playerScore = pSCore.value;
computerScore = cSCore.value;

function getBtnPlayerChoice() {
  const buttons = document.querySelectorAll('.rpc');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      game(button.id);
    });
  });
}

function getComputerChoice() {
  // goal is to create function that will choose between options
  // generate a random pick, out of three
  let randNumb = Math.floor(Math.random() * 3) + 1;
  return randNumb == 1 ? 'Rock'
    : randNumb == 2 ? 'Paper'
    : 'Scissors';
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    console.log(playerChoice);
    console.log(computerChoice);
    console.log('Tied!');
    return 't'

  } else if (playerChoice === 'Rock' && computerChoice === 'Scissors'){
    console.log(playerChoice);
    console.log(computerChoice);
    console.log('You won!');
    playerScore++;
    return 'w'

  } else if (playerChoice === 'Paper' && computerChoice === 'Rock'){
    console.log(playerChoice);
    console.log(computerChoice);
    console.log('You won!');
    playerScore++;
    return 'w'

  } else if (playerChoice === 'Scissors' && computerChoice === 'Paper'){
    console.log(playerChoice);
    console.log(computerChoice);
    console.log('You won!');
    playerScore++;
    return 'w'

  } else {
    playAgain = false;
    console.log(playerChoice);
    console.log(computerChoice);
    console.log('You lose!');
    computerScore++;
    return 'l'
  }
}

function updateScore(result) {
  if (result === 'w') {
    pSCore.value = playerScore;
  } else if (result === 'l') {
    cSCore.value = computerScore;
  }
}

function game(playerChoice) {
  let result = playRound(playerChoice, getComputerChoice());
  updateScore(result);
}

getBtnPlayerChoice();