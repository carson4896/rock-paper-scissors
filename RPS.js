// getComputerChoice() will randomly return rock, paper, or scissors for the computer
    // rand will generate a random number between 0 and 2
    // choices will be an array of rock, paper, and scissors
    // return a selction from the choices array, using the randomly generated number
function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3);
    const choices = ["rock", "paper", "scissors"];
    return choices[rand];
}

// getHumanChoice() will prompt the user to enter a value, and will convert it to lowercase
    // If the response is not valid, ask the user to re-enter
function getHumanChoice() {
    const choices = ["rock", "paper", "scissors"];
    while (true) {
        const choice = prompt("Please enter your choice of rock, paper, or scissors: ");
        const choiceLower = choice.toLowerCase();
        for (c of choices) {
            if (c === choiceLower) {
                return c;
            }
        }
        alert("Invalid Input. Try again");
    }
}

// playGame() contains the game logic, in this function you will have:
    // Two variables declared to track the human and computer score (starting at 0)
    // playRound() is a nested function that will hold the actual game evaluation logic (go to line 34 to read details)
function playGame() {
    let humanScore = 0
    let computerScore = 0    

    // playRound() is the nested function that contains the actual logic behind the winner/loser based on their respective choices
        // There are two parameters of humanChoice and computerChoice
        // If the human and computer choose the same, it's a tie
        // If the human chooses a winning option, alert the user that they won and add a point to the human score
        // Otherwise, the human chose a losing option, alert the user that they lost and add a point to the computer score
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            alert(`You both chose ${humanChoice}, so it's a tie!`)
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            alert(`You chose ${humanChoice}, Computer chose ${computerChoice}. You win!`);
            humanScore++;
        } else {
            alert(`You chose ${humanChoice}, Computer chose ${computerChoice}. You lose :(`);
            computerScore++;
        }
    }

    // This for loop will run for 5 rounds, each round will:
        // call the getHumanChoice function to get the input of the human
        // call the getComputerChoice function to get the input of the computer
        // call the playRound function to store the human and computer selections
        // alert the user of the score
        // increase the count of the round before moving to the next round
    for (let round = 1; round <=5; round++) {
        alert(`Round ${round}, Get Ready!`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        alert(`Your Score: ${humanScore}. Computer Score: ${computerScore}`)
    }

    if (humanScore > computerScore) {
        alert("You won the game!")
    } else if (computerScore > humanScore) {
        alert("You lose the game, sorry :(")
    } else {
        alert("The game was a draw!")
    }
}

let play = playGame();