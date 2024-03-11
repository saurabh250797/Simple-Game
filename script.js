let num = Math.floor(Math.random() * 100) + 1;
let guesses = [];

function checkGuess() {
    let guessInput = document.getElementById('guessInput');
    let guess = parseInt(guessInput.value);
    let message = document.getElementById('message');

    if (guess < 1 || guess > 100 || isNaN(guess)) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    guesses.push(guess);

    if (guess === num) {
        message.textContent = `Congratulations, you guessed it in ${guesses.length} guesses!`;
    } else {
        let prevGuess = guesses.length > 1 ? guesses[guesses.length - 2] : null;
        let prevDistance = prevGuess ? Math.abs(num - prevGuess) : null;
        let currentDistance = Math.abs(num - guess);

        if (prevDistance !== null && currentDistance < prevDistance) {
            message.textContent = 'Warmer!';
        } else {
            message.textContent = 'Colder!';
        }
    }
}
