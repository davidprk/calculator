function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operand1, operand2, operator) {
    
}

let operand1;
let operand2;
let operator;

// Display logic
const screenText = document.querySelector(".screen .text");
const digitBtns = document.querySelectorAll(".symbol");

let currentInput = "0";

function updateScreen() {
    screenText.textContent = currentInput;
}

digitBtns.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        if (currentInput === "0" && value !== ".") {
            currentInput = value;
        }
        else {
            currentInput += value;
        }
        updateScreen();
    })
})

const deleteBtn = document.querySelector(".delete");

deleteBtn.addEventListener("click", () => {
    currentInput = currentInput.slice(0, -1);

    updateScreen();
});

const clearBtn = document.querySelector(".clear");

clearBtn.addEventListener("click", () => {
    currentInput = "0";

    updateScreen();
})

updateScreen();