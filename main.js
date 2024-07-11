let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

console.log(randomNumber);

function checkGuess(){
    let userGuess = Number(guessField.value);
    if(guessCount === 1){
        guesses.textContent = "Intentos anteriores: ";
    }
    guesses.textContent += userGuess + " ";

    if(userGuess === randomNumber){
        lastResult.textContent = "Felicidades! Lo adivinaste!";
        lastResult.computedStyleMap.backgroundColor = "green";
        lowOrHi.textContent = "";
        setGameOver();
    }else if (guessCount === 10){
        lastResult.textContent = "Fin del juego!!!";
        setGameOver();
    }else{
        lastResult.textContent = "Incorrecto!";
        lastResult.style.backgroundColor = "red";
    }
}

checkGuess();