let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

let wins = 0;
let losses = 0;
let guessesRemaining = 9;
let guessesSoFar = [];
let psychicGuess = [];
// for (let i=0; i<letters.length, i++) {

// let randomLetter = function(){
//    psychic = letters[Math.floor(Math.random() * letters.length)];
//    console.log(psychicGuess[0]);
// };


document.onkeyup = function (event) {
    let userGuess = event.key;
    //guessesSoFar.push(userGuess);
    console.log(psychicGuess[0]);
}

if (userGuess === psychicGuess[0]) (guessesRemaining > 0)
    wins++;
    guessesRamining = 9;
    guessesSoFar.length= 0;
    psychicGuess.length= 0;

    let randomLetter = function(){
        psychic = letters[Math.floor(Math.random() * letters.length)];
        console.log(psychicGuess[0]);
    };

    console.log(computerGuess[0]);
 
    

elseif (userGuess !== psychicGuess[0]) (guessesRemianing > 0)
    guessesRemaining = guessesRemaining -1;
    

else {

    losses++;
    guessesRemaining= 9;
    guessesSoFar.length=0;
    psychicGuess.length=0;

    let randomLetter = function(){
        psychic = letters[Math.floor(Math.random() * letters.length)];
        console.log(psychicGuess[0]);
    };

    console.log(psychicGuess[0]);



}



// let guesses = function(){
//   document.getElementById()
// }

// let guessesRemaining = function(){
//    document.getElementById()
// }


    