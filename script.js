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

function winCheck() {
  if (playerScore === 5) {
    myPopup.classList.add("show");
  }
}


function game(playerChoice) {
  let result = playRound(playerChoice, getComputerChoice());
  updateScore(result);
  winCheck();
}

getBtnPlayerChoice();
const closePopup = document.querySelector('#closePopup');
const myPopup = document.querySelector('#myPopup');

closePopup.addEventListener("click", function (event) {
  if (event.target == myPopup) {
      myPopup.classList.remove("show");
  }
});