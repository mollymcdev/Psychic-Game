
var computerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var winsCount = 0;
var lossesCount = 0;
var guessesLeftCount = 9;
var userGuesses = [];

resetGame();


//creates a function that executes tasks when the user presses a key 
var userGuess = document.onkeyup = function (event) {
    var userGuess = event.key;
    userGuesses.push(userGuess);

    if (userGuess === computerChoice) {
        win();
        resetGame();
    }
    else if (guessesLeftCount - 1 === 0) {
        lose();
        resetGame();
    } else {
        fail();
    }

    var wins = document.getElementById("wins");
    var losses = document.getElementById("losses");
    var guessesLeft = document.getElementById("guessesLeft");
    wins.textContent = "Wins: " + winsCount;
    losses.textContent = "Losses: " + lossesCount;
    guessesLeft.textContent = "Guesses Left: " + guessesLeftCount;
    var userChoice = document.getElementById("userChoice");
    userChoice.textContent = "Your Guesses So Far: " + userGuesses.join(', ');



};



function win() {
    winsCount++;
    resetGame();
}

function lose() {
    lossesCount++;
    resetGame();
}

function fail() {
    guessesLeftCount--;
}

function resetGame() {
    guessesLeftCount = 10;
    userGuesses = [];
    computerChoice = computerLetter[Math.floor(Math.random() * computerLetter.length)];
    console.log("Letter to Guess: " + computerChoice);
}







