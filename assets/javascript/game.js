
var computerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var winsCount = 0;
var lossesCount = 0;
var guessesLeftCount = 9;
var guessedLetters = "";

resetGame();


//creates a function that executes tasks when the user presses a key 
var userGuess = document.onkeyup = function (event) {
  var userGuess = event.key;

if (userGuess === computerChoice) {
    win();
}
else if (guessesLeftCount - 1 === 0) {
    lose();
  } else {
    fail();
  }

var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guessesLeft = document.getElementById("guessesLeft");
var userChoice = document.getElementById("userChoice");
wins.textContent = "Wins: " + winsCount;
losses.textContent = "Losses: " + lossesCount;
guessesLeft.textContent = "Guesses Left: " + guessesLeftCount;
userChoice.textContent = "Your Guesses So Far: " + userGuess;
console.log(userChoice.textContent);
};

function win() {
    winsCount++;
    resetGame();
}

function lose(){
    lossesCount++;
    resetGame();
}

function fail() {
    guessesLeftCount--;
}

function resetGame() {
    guessesLeftCount = 9;
    guessedLetters = "";
    computerChoice = computerLetter[Math.floor(Math.random() * computerLetter.length)];
        console.log("Letter to Guess: " + computerChoice);
}





    

