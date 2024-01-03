let playerOne = 0;
let playerTwo = 0;
let gameOver = false; // Add a variable to track if the game is over

const button1 = document.querySelector('.btn1');
const button2 = document.querySelector('.btn2');
const button3 = document.querySelector('.btn3');
const racelimitSelect = document.querySelector('#racelimit');
const playerOneScore = document.getElementById('playerOne');
const playerTwoScore = document.getElementById('playerTwo');

button1.addEventListener('click', () => {
    if (!gameOver) {
        if (playerOne === parseInt(racelimitSelect.value) - 1) {
            playerOneScore.textContent = "Player 1 wins";
            gameOver = true; // Set game over to true
            disableButtons(); // Disable buttons when a player wins
        } else {
            playerOne++;
            playerOneScore.textContent = playerOne;
        }
    }
});

button2.addEventListener('click', () => {
    if (!gameOver) {
        if (playerTwo === parseInt(racelimitSelect.value) - 1) {
            playerTwoScore.textContent = "Player 2 wins";
            gameOver = true; // Set game over to true
            disableButtons(); // Disable buttons when a player wins
        } else {
            playerTwo++;
            playerTwoScore.textContent = playerTwo;
        }
    }
});

button3.addEventListener('click', () => {
    resetGame();
});

function disableButtons() {
    button1.disabled = true;
    button2.disabled = true;
}

function resetGame() {
    playerOne = 0;
    playerTwo = 0;
    playerOneScore.textContent = playerOne;
    playerTwoScore.textContent = playerTwo;
    gameOver = false; // Reset the game over flag
    button1.disabled = false; // Enable the buttons
    button2.disabled = false;
}
