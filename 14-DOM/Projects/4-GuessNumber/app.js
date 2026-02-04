

let guessRandom = Math.floor(Math.random() * 100 + 1)

const submit = document.querySelector("#subt")
const userInput = document.querySelector(".guessField")
const guessSlots = document.querySelector(".guesses")
const guessLowOrHigh = document.querySelector(".lowOrHigh")
const remaining = document.querySelector(".lastResult")
const results = document.querySelector(".resultParas")

// Create a paragraph to stored some values
let p = document.createElement("p")
// create a variable where previous guesses are stored
let prevGuesses = []
// let start the guess from 1
let numGuesses = 1

// we assume as our game is start
let playGame = true

// User starts the game 
if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault()
        // convert string into int the values
        let user = parseInt(userInput.value)
        console.log(user);
        // function called which Check the Validations
        checkValidation(user)
    })
}

// Let Create some functions
// Check the Validation
function checkValidation(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number")
    }
    else if (guess < 1) {
        alert("Please enter a positive Number start from 1")
    }
    else if (guess > 100) {
        alert("Please enter a Number below from 100")
    }
    else{
        prevGuesses.push(guess)

        if (numGuesses >= 10) {
            cleanupGuesses(guess)
            displayMessage(`Game Over! Guess Number was ${guessRandom}`)
            gameEnd();
        }
        else{
            cleanupGuesses(guess)
            guessCheck(guess)
        }
    }
}

// Check the guess
function guessCheck(guess) {
    if (guess === guessRandom) {
        displayMessage(`Hurrah! you guess it Right, ${guess}`)
        gameEnd();
    }
    else if (guess < guessRandom) {
        displayMessage(`Number is Too Low`)
    }
    else if (guess > guessRandom) {
        displayMessage(`Number is Too High`)
    }
}

// Cleanup 
function cleanupGuesses(guess) {
    userInput.value = ''
    guessSlots.innerHTML += `${guess}, `
    numGuesses++
    remaining.innerHTML = `${11 - numGuesses}`
}

// Display Message
function displayMessage(msg) {
    guessLowOrHigh.innerHTML = `<h2><span>${msg}</span></h2>`
}

// end the Game
function gameEnd() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<button class='newGameClass'>Start New Game</button>`
    results.appendChild(p)
    playGame = false
    newGame();
}

// Start the new Game
function newGame() {
    const newGameButton = document.getElementsByClassName('newGameClass')
    newGameButton.addEventListener('click', function() {
        guessRandom = Math.floor(Math.random() * 100 + 1)
        prevGuesses = []
        numGuesses = 1
        guessSlots.innerHTML = ''
        userInput.removeAttribute('disabled')
        remaining.innerHTML = `${11 - numGuesses}`
        results.removeChild(p)
        playGame = true
    })
}