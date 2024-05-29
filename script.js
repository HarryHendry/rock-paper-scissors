let playerScore = 0;
let computerScore = 0;

const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const resultsDisplay = document.getElementById('results');

document.getElementById('rock').addEventListener('click', () => {
    playRound('rock');
});
document.getElementById('paper').addEventListener('click', () => {
    playRound('paper');
});
document.getElementById('scissors').addEventListener('click', () => {
    playRound('scissors');
});

function computerPlay() {
    let choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerChoice) {
    let result;
    const computerChoice = computerPlay();

    if (playerChoice === computerChoice) {
        result = 'This round is a DRAW!';
        playerScore++;
        computerScore++;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') || 
        (playerChoice === 'paper' && computerChoice === 'rock') || 
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = `You WIN this round since your choice of ${playerChoice} beats the computer's choice of ${computerChoice}!`;
        playerScore++;
    } else {
        result =  `You LOSE this round since your choice of ${playerChoice} loses to the computer's choice of ${computerChoice}!`;
        computerScore++;
    }

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    resultsDisplay.textContent = result;

    if (playerScore === 5 || computerScore === 5) {
        announceWinner();
    }
}

function announceWinner() {
    if (playerScore > computerScore) {
        resultsDisplay.textContent = 'Congratulations! You win the game!';
    } else if (computerScore > playerScore) {
        resultsDisplay.textContent = 'Unlucky, the computer wins the game!';
    } else {
        resultsDisplay.textContent = 'The game ends in a draw!';
    }

    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}
