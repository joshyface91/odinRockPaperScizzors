// Step 1: setup docs

// Step 2: build code for computer logic
// SET array choice equal to three options
// SET variable randomInt equal to getRandomInt function
// CALL function getRandomInt
// CALL function getComputerChoice
//  PASS parameters (choice, randomInt)
//  RETURN choice[randomInt]

const choice = [
    "Rock",
    "Paper",
    "Scizzors"
];

let randomInt = getRandomInt();

function getRandomInt () {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice(choice, randomInt) {
        return choice[randomInt];
}

// Test

// console.log(randomInt)

console.log(getComputerChoice(choice, randomInt))

// Step 3: human choice
// SET humanInput equal to prompt method
//  PASS message, options passed
// CALL getHumanChoice function
//  PASS humanInput
//  RETURN toUpperCase method for humanInput 

let humanInput = prompt("Rock? Paper? or Scizzors? MAKE YOUR CHOICE.", "Rock");

function getHumanChoice (humanInput) {
    return humanInput.charAt(0).toUpperCase() + humanInput.slice(1).toLowerCase();
}

// Test

console.log(getHumanChoice(humanInput))

// Step 4: score variables
// SET humanScore and computerScore equal to 0

let humanScore = 0;
let computerScore = 0;

// Step 5: playing a round
// SET humanChoice equal to getHumanChoice
// SET computerChoice equal to getComputerChoice
// CALL playRound function
//  PASS humanChoice and computerChoice
//  IF humanChoice is equal to computerChoice
//      RETURN "Draw" and no increment
//  ELSEIF humanChoice is equal to "Rock" and computerChoice is equal to "Paper"
//      RETURN "Defeat... Rock is smothered by Paper." and increment computerScore by 1
//  ELSEIF humanChoice is equal to "Rock" and computerChoice is equal to "Scizzors"
//      RETURN "Victory! Rock crushes Scizzors." and increment humanScore by 1
//  ELSEIF humanChoice is equal to "Paper" and computerChoice is equal to "Scizzors"
//      RETURN "Defeat... Paper is sliced by Scizzors." and increment computerScore by 1
//  ELSEIF humanChoice is equal to "Paper" and computerChoice is equal to "Rock"
//      RETURN "Victory! Paper smothers Rock." and increment humanScore by 1
//  ELSEIF humanChoice is equal to "Scizzors" and computerChoice is equal to "Rock"
//      RETURN "Defeat... Scizzors are crushed by Rock." and increment computerScore by 1
//  ELSEIF humanChoice is equal to "Scizzors" and computerChoice is equal to "Paper"
//      RETURN "Victory! Scizzors slice Paper." and increment humanScore by 1
//  ELSE
//      RETURN "Input Error. Try again."

const humanChoice = getHumanChoice(humanInput);
const computerChoice = getComputerChoice(choice, randomInt);

function playRound (humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return console.log("It is a draw, sir.");
    } else if (humanChoice == "Rock" && computerChoice == "Paper") {
        computerScore++
        return console.log("Defeat... Rock is smothered by Paper.");
    } else if (humanChoice == "Rock" && computerChoice == "Scizzors") {
        humanScore++
        return console.log("Victory! Rock crushes Scizzors.");
    } else if (humanChoice == "Paper" && computerChoice == "Scizzors") {
        computerScore++
        return console.log("Defeat... Paper is sliced by Scizzors.");
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        humanScore++
        return console.log("Victory! Paper smothers Rock.");
    } else if (humanChoice == "Scizzors" && computerChoice == "Rock") {
        computerScore++
        return console.log("Defeat... Scizzors are crushed by Rock.");
    } else if (humanChoice == "Scizzors" && computerChoice == "Paper") {
        humanScore++
        return console.log("Victory! Scizzors slice Paper.");
    } else {
        return console.log("Input Error. Try again.");
    }
}

// Test

playRound(humanChoice, computerChoice);

console.log("You: "+humanScore);
console.log("Them: "+computerScore);

// Step 6: