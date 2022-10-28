const lettersPicked = {}; // keep up with letters used 
const allLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
let currentLetters = [...allLetters];
const colorClasses = ['red', 'yellow', 'green', 'blue', 'purple'];
let currentColorClass = '';
let flashCardInitialized = false;
console.log(currentLetters);

document.querySelector('body').addEventListener('click', (e) => {
    letterContainer = document.querySelector('#letter-container');

    if (!flashCardInitialized) {
        letterContainer.classList.toggle('small-text');
        letterContainer.classList.toggle('large-text');
        flashCardInitialized = true;
    }

    let letterSelection = getRandomLetter();
    let colorSelection = colorClasses[Math.floor(Math.random() * colorClasses.length)]

    if (currentColorClass !== '') letterContainer.classList.toggle(currentColorClass);
    currentColorClass = colorSelection;
    letterContainer.classList.toggle(currentColorClass);

    letterContainer.innerHTML = letterSelection;
})

function getRandomLetter() {
    console.log(currentLetters);
    if (currentLetters.length === 0) startNewRound();
    const selectedIndex = Math.floor(Math.random() * currentLetters.length);
    let letterSelection  = currentLetters[selectedIndex];

    console.log(currentLetters.length, selectedIndex, letterSelection);
    currentLetters.splice(selectedIndex,1);

    return letterSelection;
}

function startNewRound() {
    currentLetters = [...allLetters];
}