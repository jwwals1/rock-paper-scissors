let scorePlayer = 0;
let scoreComputer = 0;
const options = ["rock", "paper", "scissors"]
const buttons = document.querySelectorAll('button')

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        return "Player";
    }
    else {
        return "Computer";
    }

}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    let result = ""
    if (winner == "Tie") {
        result = `It's a tie, computer also picked ${computerSelection}. 
        Your score: ${scorePlayer} Computer Score ${scoreComputer}`

    }
    else if (winner == "Player") {
        scorePlayer++
        result = `You Win! ${playerSelection} beats ${computerSelection}. 
        Your score: ${scorePlayer} Computer Score ${scoreComputer}`
        if (scorePlayer == 5) {
            result += '<br><br>You Win! You were the first to 5 points! <br>Reload the page to play again!'
            disableButtons()
        }
    }
    else {
        scoreComputer++
        result = `You Lose! ${computerSelection} beats ${playerSelection}. 
        Your score: ${scorePlayer} Computer Score ${scoreComputer}`
        if (scoreComputer == 5) {
            result += '<br><br>You Lose! Computer was the first to 5 points! <br> Reload the page to play again!'
            disableButtons()
        }
    }
    document.getElementById('result').innerHTML = result
    return
}

function getPlayerChoice() {
    let validatedInput = false;
    while (validatedInput == false) {
        const choice = prompt("Rock, Paper, or Scissors");
        if (choice == null) {
            continue;
        }
        const choiceInLowerCase = choice.toLowerCase();
        if (options.includes(choiceInLowerCase)) {
            validatedInput = true
            return choiceInLowerCase
        }
    }
}

buttons.forEach(button => {
    button.addEventListener('click', function () {
        playRound(button.id)
    })
})

