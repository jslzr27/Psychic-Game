
//determine the computer choices
var computerChoices = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];

//grabbing the strings
var textWins = document.getElementById("wins");
var textLosses = document.getElementById("losses");
var textGuessleft = document.getElementById("guessleft");
var textTotguess = document.getElementById("totguess");

//set the values of the variables
var wins = 0;
var loss = 0;
var guessLeft = 9;

var compChoice = computerChoices [Math.floor(Math.random() * computerChoices.length)];

document.onkeyup = function (_event) {

if (event.key === compChoice) {
    wins++;
    textWins.textContent = wins;
    //reset the game
    textTotguess.textContent = "";
    guessLeft = 9;
    textGuessleft.textContent = guessLeft;
    compChoice = computerChoices [Math.floor(Math.random() * computerChoices.length)];
} else {
    //guess left by -1
    guessLeft+=-1;
    textGuessleft.textContent = guessLeft;
    //write the letters next to your guesses
    textTotguess.textContent = event.key;
}

if (guessLeft === 0){
    loss++;
    textLosses.textContent = loss;
    //reset game
    textTotguess.textContent = "";
    
    guessLeft = 9 + 1 ;
    
}

console.log(event.key);
console.log(compChoice);
console.log(guessLeft);

}
