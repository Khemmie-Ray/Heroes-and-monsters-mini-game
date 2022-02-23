// Declaring varaibles

let playerOne = 60;
let playerTwo = 60;
let playerTurnOne = true;

let playerOneLife = document.getElementById('playerOne-life');
const playerTwoLife = document.getElementById('playerTwo-life');
const diceRollOne = document.getElementById('diceRoll-one');
const diceRollTwo = document.getElementById('diceRoll-two');
const heroMessage = document.getElementById('h-message');
const monsterMessage = document.getElementById('m-message');
const rollBtn = document.getElementById('roll');
const resetBtn = document.getElementById('resetbtn')
const doctorImg = document.getElementById('doctor');
const covidImg = document.getElementById('covid')

// Alternating between the roll and reset button

function displayButtons() {
    rollBtn.style.display = 'none';
    resetBtn.style.display = 'block';
}

// Eventlistener function for attack

rollBtn.addEventListener('click', function() {   
const randomNumber = Math.floor(Math.random() * 6) + 1;

    if (playerTurnOne) {
        playerOne -= randomNumber;
        playerOneLife.textContent = playerOne;
        diceRollOne.textContent = randomNumber;
        diceRollOne.classList.remove('highlight');
        diceRollTwo.classList.add('highlight');
        doctorImg.classList.remove('highlight');
        covidImg.classList.add('highlight');
    } else {    
        playerTwo -= randomNumber;
        playerTwoLife.textContent = playerTwo;
        diceRollTwo.textContent = randomNumber;
        diceRollTwo.classList.remove('highlight');
        diceRollOne.classList.add('highlight');
        covidImg.classList.remove('highlight');
        doctorImg.classList.add('highlight');
    }
    // Declaring a winner

    if (playerOne <= 0) {
        monsterMessage.textContent = 'Mask up world!😷😷 Covid is real'
        displayButtons();
    } else if (playerTwo <= 0) {
        heroMessage.textContent = '🛡Winning one variant to another🎉';
        displayButtons();
    }

    // Alternating between the players

    if (playerTurnOne === true) {
        playerTurnOne = false;
    } else {
        playerTurnOne = true;
    }
    })
     
// Eventlistener functions for reset

    resetBtn.addEventListener('click', function() {
        resetGame();
    })


function resetGame() {
    heroMessage.textContent = '';
    monsterMessage.textContent = '';
    playerOne = 60;
    playerTwo = 60;
    playerOneLife.textContent = playerOne;
    playerTwoLife.textContent = playerTwo;
    diceRollOne.textContent = 0;
    diceRollTwo.textContent = 0;
    playerTurnOne = true;
    resetBtn.style.display = 'none';
    rollBtn.style.display = 'block';
    diceRollTwo.classList.remove('highlight');
    diceRollOne.classList.add('highlight');
    covidImg.classList.remove('highlight');
    doctorImg.classList.add('highlight');
}