//setting initial values of variables
var wins = 0;
var losses = 0;
var guesses = 10;

//define choices computer has
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//setting up an empty array to push guesses into
var alreadyGuessed = [];

var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guesses-left");
var guessesText = document.getElementById("guesses");

//gets computer to make a random choice
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);

winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
guessesLeftText.textContent = "Guess left: " + guesses;
guessesText.textContent = "Letters guessed: ";

document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    console.log(userGuess);

    if ((userGuess === computerGuess)) {
        wins++;
        alert("You got it!");
        //gets computer to make a random choice
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(computerGuess);
        guesses = 10;
        alreadyGuessed = [];
    } else {
        guesses--;
        alreadyGuessed.push(userGuess);
        console.log(alreadyGuessed);
    }

        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesLeftText.textContent = "Guess left: " + guesses;
        guessesText.textContent = "Letters guessed: " + alreadyGuessed;

    if (guesses === 0) {
        losses++;
        alert("Sorry, try again!");
        
        // gets computer to make a random choice again
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(computerGuess);
        guesses = 10;
        alreadyGuessed = [];
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesLeftText.textContent = "Guess left: " + guesses;
        guessesText.textContent = "Letters guessed: ";

    }



}  