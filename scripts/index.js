const gameBox = document.getElementById("gameBox");
const mathBox = document.getElementById("mathBox");

function getRandomNumber() {
    return Math.floor(Math.random() * 99) + 1; // Generates a random number between 1 to 99.
}

function createGameBox() {
    const testElement = document.createElement("div");
    testElement.classList.add("gameBox");
    testElement.innerHTML =
        `<div> 
            <p>Game BOX</p> 
        </div>`;
    gameBox.appendChild(testElement);
    const playArea = document.createElement("div");
    playArea.classList.add("eventBox");
    playArea.innerHTML = 
        `<div>
            <p>Game is played in this box</p>
        </div>`;
    testElement.appendChild(playArea);
}

function createEquationBox() {
    const equationBox = document.createElement("div");
    equationBox.classList.add("mathBox");
    equationBox.innerHTML = 
        `<div>
            <p>Math BOX</p>
        </div>`;
    mathBox.appendChild(equationBox);

    const numberBox = document.createElement("div");
    numberBox.classList.add("displayBox");
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
    const sum = firstNumber + secondNumber;
    numberBox.innerHTML = 
        `<div> 
            <h1>Math Game</h1>
            <h2>${firstNumber} + ${secondNumber} = 
            <input type="number" id="userAnswer" placeholder="Result"> 
            </h2>
            <h4>For Smart People</h4>
            <button onclick="checkAnswer()">Check Answer</button>
        </div>`;
    equationBox.appendChild(numberBox);
}

function checkAnswer() {
    const answerInput = document.getElementById("userAnswer");
    const userAnswer = parseInt(answerInput.value);
    const firstNumber = parseInt(answerInput.previousSibling.textContent);
    const secondNumber = parseInt(answerInput.previousSibling.textContent);
    const correctAnswer = firstNumber + secondNumber; 
    if (userAnswer === correctAnswer) {
        alert("Correct answer! Well done!");
    } else {
        alert("Incorrect answer. Please try again.");
    }
}

createGameBox();
createEquationBox();
