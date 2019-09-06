//variables

let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

let wins = 0;
let losses = 0;
let guessesRemaining = 9;
let guessesSoFar = [];
let psychicGuess = [];



// psychic choice function

// for loop set up - don't know if I need this: 
// for (let i=0; i<letters.length, i++) {

let randomLetter = function(){
psychic = letters[Math.floor(Math.random() * letters.length)];


};


// win & lose alerts
// not working though - get a string error in the console

let userWin = {
	alert("You win! The psychic also chose" + psychicGuess);
};

let userLose = {
    alert("You lose. The psychic chose" + psychicGuess + " but you chose" + userGuess);
}



    


// user choice event
document.onkeyup = function (event) {
    let userGuess = event.key.toLowerCase();
    randomLetter();

    console.log(userGuess);


if (userGuess === psychicGuess)
    wins++;
    userWin();
}

if (userGuess !== psychicGuess) {
    guessesRemaining--;
    guessesSoFar.push(userGuess);
}


 
    



// trying different things??? 

// let guesses = function(){
//   document.getElementById()
// }

// let guessesRemaining = function(){
//    document.getElementById()
// }


    