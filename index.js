const options = ["rock", "paper", "scissors"]

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
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

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        return "It's a tie"
    }
    else if (result == "Player") {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
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

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    // Play to game to five rounds 
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        // Seperate rounds on the console
        console.log("---------------")
        if (checkWinner(playerSelection, computerSelection) == "Player") {
            scorePlayer++;
        }
        else if (checkWinner(playerSelection, computerSelection) == "Computer") {
            scoreComputer++;
        }
    }
    console.log("Game over")
    // Check winner
    if (scorePlayer > scoreComputer) {
        console.log("You won!")
    }
    else if (scorePlayer < scoreComputer) {
        console.log("Computer won!")
    }
    else {
        console.log("It's a tie")
    }
}

game()