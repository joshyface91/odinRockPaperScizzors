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

// console.log(getComputerChoice(choice, randomInt))

// Step 3: 
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

// console.log(getHumanChoice(humanInput))