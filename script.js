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
    if (selection == "rock" || selection == 'scissor' || selection == 'paper') {
      chosen = false;
      return capitalize(selection);
    } else {
      alert('not a valid selection');
    }
  }
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
  for (i = 0; i < 5; i++) {
    playRound(getPlayerChoice(), getComputerChoice())
    if (endCheck(playerScore, computerScore) == 'w') {
      alert('You won the games!');
      break;
    } else if (endCheck(playerScore, computerScore) == 'l') {
      alert('You lost the games!');
      break;
    } else if (endCheck(playerScore, computerScore) == 't') {
      alert('You tied!');
      break;
    }
  }
}

function endCheck(playerScore, computerScore) {
  if (playerScore === 3) {
    return 'w'
  } else if (computerScore === 3) {
    return 'l'
  } else if (playerScore === computerScore) {
    return 't'
  } 
}


game()
