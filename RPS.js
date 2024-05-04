//Write a function that randomly returns rock, paper, or scissors from the computer
    //FUNCTION getComputerChoice
    //Get a random value between 0 and 100
    //If value is between 0 and 33, return "Rock"
    //If value is between 33 and 66, return "Paper"
    //If value is between 66 and 100, return "Scissors"
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*100);
    if (randomNumber >= 0 && randomNumber < 33) {
        return "rock"
    } else if (randomNumber >=33 && randomNumber <67) {
        return "paper"
    } else if (randomNumber >=67 && randomNumber <= 100) {
        return "scissors"
    }
}

//Write a function to get the human choice//Convert the human selection to be lowercase so that the way it was entered by the user does not matter
    //FUNCTION getHumanChoice
    //Provide an input prompt for the user to enter rock, paper, or scissors
    //Convert the human selection to be lowercase so that the way it was entered by the user does not matter
function getHumanChoice() {
    let humanChoice = prompt("Please enter your choice of rock, paper, or scissors: ");
        return humanChoice.toLowerCase();
}

//Declare Player Score variables to keep track of player score
    //Create a global variable for the human score and initialize it to zero
    //Create a global variable for the computer score and initalize it to zero
let humanScore = 0
let computerScore = 0

//Write a function to evaluate the human and computer choices to determine the winner
    //FUNCTION playRound with two parameters (humanChoice, and computerChoice)
    //Create an if statement that first evaluates if there is a tie
    //Else if computer rock beats scissors, respond with "You lose! Rock beats Scissors"
    //Else if computer paper beats rock, "You lose! Paper beats Rock"
    //Else if computer scissors beat paper "You lose! Scissors beat Paper"
    //Else if user rock beats scissors, respond with "You Win! Rock beats Scissors"
    //Else if user paper beats rock, "You Win! Paper beats Rock"
    //Else if user scissors beat paper "You Win! Scissors beat Paper"
    //Increment the winner's score by 1 with the round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie! Go again!"
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore = computerScore + 1
        return "You lose! Rock beats Scissors"
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore = computerScore + 1
        return "You lose! Paper beats Rock"
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore = computerScore + 1
        return "You lose! Scissors beats Paper"
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore = humanScore + 1
        return "You win! Paper beats Rock" 
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore = humanScore + 1
        return "You win! Rock beats Scissors"
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore = humanScore + 1
        return "You win! Scissors beat Paper"
    }
}

// Declare variables that will store each choice
const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

// Display the values of each selection in the console
console.log(humanSelection);
console.log(computerSelection);

// Display the outcome of the round
console.log(playRound(humanSelection, computerSelection))

//Display the new score after the round has concluded
console.log(humanScore)
console.log(computerScore)