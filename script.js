let playerScore = 0;
let computerScore = 0;
const score = document.createElement('p');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const results = document.querySelector('#results');
const instructions = document.createElement('p');
const roundResult = document.createElement('p');

instructions.innerHTML = 'Rock Paper Scissors against the computer. <br> First to win five rounds wins the game.';
results.appendChild(instructions);

rock.addEventListener('click', playButton);
paper.addEventListener('click', playButton);
scissors.addEventListener('click', playButton);

function playButton() {
    if (playerScore < 5 && computerScore < 5) {
        playRound(this.value, computerPlay());
    }
    if (playerScore == 5) {
        const p = document.createElement('p');
        p.textContent = `You won the game!`;
        results.appendChild(p);
        playerScore++;
    } else if (computerScore == 5) {
        const p = document.createElement('p');
        p.textContent = `You lost the game!`;
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
            score.textContent = `[ Player: ${playerScore} ][ Computer: ${computerScore} ]`;
            roundResult.textContent = 'This round is a tie! Both players chose rock.';
            results.appendChild(roundResult);
            results.appendChild(score);
        } else if (computerSelection === 'Paper') {
            computerScore++;
            score.textContent = `[ Player: ${playerScore} ][ Computer: ${computerScore} ]`;
            roundResult.textContent = 'You lost this round! Paper covers rock.';
            results.appendChild(roundResult);
            results.appendChild(score);
        } else if (computerSelection === 'Scissors') {
            playerScore++;
            score.textContent = `[ Player: ${playerScore} ][ Computer: ${computerScore} ]`;
            roundResult.textContent = 'You won this round! Rock crushes scissors.';
            results.appendChild(roundResult);
            results.appendChild(score);
        }
    } else if (caseInsensitivePlayerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            playerScore++;
            score.textContent = `[ Player: ${playerScore} ][ Computer: ${computerScore} ]`;
            roundResult.textContent = 'You won this round! Paper covers rock.';
            results.appendChild(roundResult);
            results.appendChild(score);
        } else if (computerSelection === 'Paper') {
            score.textContent = `[ Player: ${playerScore} ][ Computer: ${computerScore} ]`;
            roundResult.textContent = 'This round is a tie! Both players chose paper.';
            results.appendChild(roundResult);
            results.appendChild(score);
        } else if (computerSelection === 'Scissors') {
            computerScore++;
            score.textContent = `[ Player: ${playerScore} ][ Computer: ${computerScore} ]`;
            roundResult.textContent = 'You lost this round! Scissors cuts paper.';
            results.appendChild(roundResult);
            results.appendChild(score);
        }
    } else if (caseInsensitivePlayerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            computerScore++;
            score.textContent = `[ Player: ${playerScore} ][ Computer: ${computerScore} ]`;
            roundResult.textContent = 'You lost this round! Rock crushes scissors.';
            results.appendChild(roundResult);
            results.appendChild(score);
        } else if (computerSelection === 'Paper') {
            playerScore++;
            score.textContent = `[ Player: ${playerScore} ][ Computer: ${computerScore} ]`;
            roundResult.textContent = 'You won this round! Scissors cuts paper.';
            results.appendChild(roundResult);
            results.appendChild(score);
        } else if (computerSelection === 'Scissors') {
            score.textContent = `[ Player: ${playerScore} ][ Computer: ${computerScore} ]`;
            roundResult.textContent = 'This round is a tie! Both players chose scissors.';
            results.appendChild(roundResult);
            results.appendChild(score);
        }
    }
}