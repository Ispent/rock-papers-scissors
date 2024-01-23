const pSCore = document.querySelector('.pSCore');
const cSCore = document.querySelector('.cSCore');
const closePopup = document.querySelector('#closePopup');
const myPopup = document.querySelector('.popup');
const outcome = document.querySelector('.resultText');
const pResult = document.querySelector('.playerResult');
const cResult = document.querySelector('.computerResult');
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
    pResult.innerText = playerChoice;
    cResult.innerText = computerChoice;
    console.log('Tied!');
    return 't'

  } else if (playerChoice === 'Rock' && computerChoice === 'Scissors'){
    pResult.innerText = playerChoice;
    cResult.innerText = computerChoice;
    console.log('You won!');
    playerScore++;
    return 'w'

  } else if (playerChoice === 'Paper' && computerChoice === 'Rock'){
    pResult.innerText = playerChoice;
    cResult.innerText = computerChoice;
    console.log('You won!');
    playerScore++;
    return 'w'

  } else if (playerChoice === 'Scissors' && computerChoice === 'Paper'){
    pResult.innerText = playerChoice;
    cResult.innerText = computerChoice;
    console.log('You won!');
    playerScore++;
    return 'w'

  } else {
    playAgain = false;
    pResult.innerText = playerChoice;
    cResult.innerText = computerChoice;
    console.log('You lose!');
    computerScore++;
    return 'l'
  }
}

function updateScore(result) {

  if (result === 'w') {
    pSCore.value = playerScore;
    outcome.innerText = 'You Won!';
  } else if (result === 'l') {
    cSCore.value = computerScore;
    outcome.innerText = 'You Lost!';
  } else if (result === 't') {
    outcome.innerText = 'You Tied!';
  }
}

function winCheck() {
  const displayText = document.querySelector('.displayText');
  if (playerScore === 5) {
    displayText.innerHTML = 'You Won!';
    myPopup.classList.add("show");
  } else if (computerScore === 5) {
    displayText.innerHTML = 'You Lost!';
    myPopup.classList.add('show');
  }
}

function game(playerChoice) {
  let result = playRound(playerChoice, getComputerChoice());
  updateScore(result);
  winCheck();
}

closePopup.addEventListener("click", function (event) {
  if (event.target == closePopup) {
      myPopup.classList.remove("show");
  }
  newGame();
});

function newGame() { 
  playerScore = 0;
  computerScore = 0;
  pSCore.value = playerScore;
  cSCore.value = computerScore;
  outcome.innerText = '';
  pResult.innerText = '';
  cResult.innerText = '';
}

getBtnPlayerChoice();