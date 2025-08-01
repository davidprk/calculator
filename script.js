function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return +a - +b;
}

function multiply(a, b) {
    return +a * +b;
}

function divide(a, b) {
    return +a / +b;
}

function operate(operand1, operand2, operator) {
    switch (operator) {
        case "+": 
            return add(operand1, operand2);
        case "-":
            return subtract(operand1, operand2);
        case "*":
            return multiply(operand1, operand2);
        default:
            return divide(operand1, operand2);
    }
}

//
// Display logic
//
const screenText = document.querySelector(".screen .text");
const screenEquation = document.querySelector(".screen .equation");
const digitBtns = document.querySelectorAll(".symbol");

let currentInput = "0";
let currentEquation = "";

function updateScreen() {
    screenText.textContent = currentInput;
}

function updateEquation() {
    screenEquation.textContent = currentEquation;
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
    });
});

const deleteBtn = document.querySelector(".delete");

deleteBtn.addEventListener("click", () => {
    currentInput = currentInput.slice(0, -1);

    updateScreen();
});

const clearBtn = document.querySelector(".clear");

clearBtn.addEventListener("click", () => {
    currentInput = "0";
    currentEquation = "";

    updateScreen();
    updateEquation();
});

updateScreen();
updateEquation();

//
// Operation logic
//
let operand1 = null;
let operand2 = null;
let operator = "";

const operatorBtns = document.querySelectorAll(".operator");

operatorBtns.forEach(button => {
    button.addEventListener("click", (e) => {
        const operations = {
            "plus operator": "+",
            "minus operator": "-",
            "multiply operator": "*",
            "divide operator": "/"
        }
        let clickedOperator = operations[e.target.className];

        if (operator === "") { // No calculation to perform
            operand1 = currentInput;
            operator = clickedOperator;
        }
        else { // Operator is non-empty string, chaining operation
            operand2 = currentInput;
            operand1 = operate(operand1, operand2, operator);
            operator = clickedOperator;
        }

        currentInput = "";
        currentEquation = operand1 + operator;

        updateScreen();
        updateEquation();
    });
});

const equalBtn = document.querySelector(".equals");

equalBtn.addEventListener("click", () => {
    operand2 = currentInput;
    currentInput = operate(operand1, operand2, operator);
    currentEquation += operand2 + "=";

    operand1 = null;
    operand2 = null;
    operator = "";

    updateScreen();
    updateEquation();
});