// Get references to the HTML elements with IDs "gameBox" and "mathBox"
const gameBox = document.getElementById("gameBox");
const mathBox = document.getElementById("mathBox");

// Function to generate a random number between 1 and 99
function getRandomNumber() {
    return Math.floor(Math.random() * 99) + 1; // Generates a random number between 1 to 99.
}

// Function to create the game box with a play area
function createGameBox() {
    // Create a new div element for the gameBox
    const testElement = document.createElement("div");
    testElement.classList.add("gameBox");
    // Set inner HTML for the gameBox div
    testElement.innerHTML =
        `<div> 
            <p>Game BOX</p> 
        </div>`;
    // Append the gameBox div to the HTML element with ID "gameBox"
    gameBox.appendChild(testElement);
    
    // Create a play area inside the gameBox
    const playArea = document.createElement("div");
    playArea.classList.add("eventBox");
    // Set inner HTML for the play area div
    playArea.innerHTML = 
        `<div>
            <p>Game is played in this box</p>
        </div>`;
    // Append the play area div to the gameBox
    testElement.appendChild(playArea);
}

// Function to create the math box with an equation
function createEquationBox() {
    // Create a new div element for the mathBox
    const equationBox = document.createElement("div");
    equationBox.classList.add("mathBox");
    // Set inner HTML for the mathBox div
    equationBox.innerHTML = 
        `<div>
            <p>Math BOX</p>
        </div>`;
    // Append the mathBox div to the HTML element with ID "mathBox"
    mathBox.appendChild(equationBox);

    // Create a number display box inside the mathBox
    const numberBox = document.createElement("div");
    numberBox.classList.add("displayBox");
    // Generate two random numbers and calculate their sum
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
    const sum = firstNumber + secondNumber;
    // Set inner HTML for the number display box
    numberBox.innerHTML = 
        `<div> 
            <h1>Math Game</h1>
            <h2>${firstNumber} + ${secondNumber} = 
            <input type="number" id="userAnswer" placeholder="Result"> 
            </h2>
            <h4>For Smart People</h4>
            <button onclick="checkAnswer()">Check Answer</button>
        </div>`;
    // Append the number display box to the equationBox
    equationBox.appendChild(numberBox);
}

// Function to check the user's answer against the correct sum
function checkAnswer() {
    // Get the user's answer input element
    const answerInput = document.getElementById("userAnswer");
    // Parse user's answer to an integer
    const userAnswer = parseInt(answerInput.value);
    // Parse the displayed numbers to integers
    const firstNumber = parseInt(answerInput.previousSibling.textContent);
    const secondNumber = parseInt(answerInput.previousSibling.textContent);
    // Calculate the correct answer
    const correctAnswer = firstNumber + secondNumber; 
    // Compare user's answer with the correct answer and display an alert
    if (userAnswer === correctAnswer) {
        alert("Correct answer! Well done!");
    } else {
        alert("Incorrect answer. Please try again.");
    }
}

// Call functions to create the gameBox and equationBox
createGameBox();
createEquationBox();
