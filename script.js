let playerScore = 0;
let computerScore = 0;
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const results = document.querySelector('#results');

rock.addEventListener('click', playButton);
paper.addEventListener('click', playButton);
scissors.addEventListener('click', playButton);

function playButton() {
    if (playerScore < 5 && computerScore < 5) {
        playRound(this.value, computerPlay());
    }
    if (playerScore == 5) {
        const p = document.createElement('p');
        p.textContent = `You won the game! The final score is Player: ${playerScore}, Computer: ${computerScore}.`;
        p.style.fontWeight = 900;
        results.appendChild(p);
        playerScore++;
    } else if (computerScore == 5) {
        const p = document.createElement('p');
        p.textContent = `You lost the game! The final score is Player: ${playerScore}, Computer: ${computerScore}.`;
        p.style.fontWeight = 900;
        results.appendChild(p);
        computerScore++;
    }
}

function computerPlay() {
    let rockPaperScissors = ['Rock', 'Paper', 'Scissors'];
    return rockPaperScissors[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    let caseInsensitivePlayerSelection;
    let lowerCasePlayerSelection = playerSelection.toLowerCase();
    if (lowerCasePlayerSelection === 'rock' || lowerCasePlayerSelection === 'paper' || lowerCasePlayerSelection === 'scissors') {
        caseInsensitivePlayerSelection = lowerCasePlayerSelection.replace(lowerCasePlayerSelection[0], lowerCasePlayerSelection[0].toUpperCase());
    }
    if (caseInsensitivePlayerSelection === 'Rock') {
        if (computerSelection === 'Rock') {
            const p = document.createElement('p');
            p.textContent = `This round is a tie! Both players chose rock. The current score is Player: ${playerScore}, Computer: ${computerScore}.`;
            results.appendChild(p);
        } else if (computerSelection === 'Paper') {
            computerScore++;
            const p = document.createElement('p');
            p.textContent = `You lost this round! Paper covers rock. The current score is Player: ${playerScore}, Computer: ${computerScore}.`;
            results.appendChild(p);
        } else if (computerSelection === 'Scissors') {
            playerScore++;
            const p = document.createElement('p');
            p.textContent = `You won this round! Rock crushes scissors. The current score is Player: ${playerScore}, Computer: ${computerScore}.`;
            results.appendChild(p);
        }
    } else if (caseInsensitivePlayerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            const p = document.createElement('p');
            p.textContent = `You won this round! Paper covers rock. The current score is Player: ${playerScore}, Computer: ${computerScore}.`;
            results.appendChild(p);
            playerScore++;
        } else if (computerSelection === 'Paper') {
            const p = document.createElement('p');
            p.textContent = `This round is a tie! Both players chose paper. The current score is Player: ${playerScore}, Computer: ${computerScore}.`;
            results.appendChild(p);
        } else if (computerSelection === 'Scissors') {
            const p = document.createElement('p');
            p.textContent = `You lost this round! Scissors cuts paper. The current score is Player: ${playerScore}, Computer: ${computerScore}.`;
            results.appendChild(p);
            computerScore++;
        }
    } else if (caseInsensitivePlayerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            const p = document.createElement('p');
            p.textContent = `You lost this round! Rock crushes scissors. The current score is Player: ${playerScore}, Computer: ${computerScore}.`;
            results.appendChild(p);
            computerScore++;
        } else if (computerSelection === 'Paper') {
            const p = document.createElement('p');
            p.textContent = `You won this round! Scissors cuts paper. The current score is Player: ${playerScore}, Computer: ${computerScore}.`;
            results.appendChild(p);
            playerScore++;
        } else if (computerSelection === 'Scissors') {
            const p = document.createElement('p');
            p.textContent = `This round is a tie! Both players chose scissors. The current score is Player: ${playerScore}, Computer: ${computerScore}.`;
            results.appendChild(p);
        }
    }
}