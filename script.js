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
    if (operator === "+") {
        return add(operand1, operand2);
    }
    else if (operator === "-") {
        return subtract(operand1, operand2);
    }
    else if (operator === "*") {
        return multiply(operand1, operand2);
    }
    else {
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

    updateScreen();
});

updateScreen();

//
// Operation logic
//
let operand1 = null;
let operand2 = null;
let operator = "";

const operatorBtns = document.querySelectorAll(".operator");

operatorBtns.forEach(button => {
    button.addEventListener("click", (e) => {
        let clickedOperator = e.target.className;
        switch (clickedOperator) {
            case "add":
                clickedOperator = "+";
                break;
            case "subtract":
                clickedOperator = "-";
                break;
            case "multiply":
                clickedOperator = "*";
                break;
            default:
                clickedOperator = "/";
        }

        if (operator === "") { // No calculation to perform
            operand1 = currentInput;
            operator = clickedOperator;
            currentInput += operator;

            updateScreen();
        }
        else { // Operator is non-empty string, chaining operation

        }
    });
});