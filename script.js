var number1 = "";
var number2 = "";
var operator = "";

function add(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}

function substract(num1, num2) {
    return parseInt(num1) - parseInt(num2);
}

function multiply(num1, num2) {
    return parseInt(num1) * parseInt(num2);
}

function divide(num1, num2) {
    return parseInt(num1) / parseInt(num2);
}

function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
        displayContainer.textContent = add(num1, num2);
        break;
        case "-":
        displayContainer.textContent = substract(num1, num2);
        break;
        case "*":
        displayContainer.textContent = multiply(num1, num2);
        break;
        case "/":
        displayContainer.textContent = divide(num1, num2);
        break;
    };
};


// Selectors
const btnSelector = document.querySelectorAll("button.calc-button");
const displayContainer = document.querySelector(".display");
const equalBtnSelector = document.querySelector("button.equal-btn")


btnSelector.forEach(button => {
    button.addEventListener('click', () => {
        if ((button.id < 9 || button.id) > 0 && operator === "") {
            number1 += button.id;
            displayContainer.textContent += button.id;
            console.log(`First number: ${button.id}`) // Debug
        } 
        else if (button.id == "+" || button.id == "-" || button.id == "*" || button.id == "/") {
            displayContainer.textContent += button.id;
            operator = button.id;
            console.log(`Operator: ${button.id}`) // Debug
        }
        else {
            number2 += button.id;
            displayContainer.textContent += button.id;
            console.log(`Second: ${button.id}`) // Debug
        }
        console.log(`${number1}, ${number2}, ${operator}`) // Debug
    });
});

equalBtnSelector.addEventListener('click', () => {
    displayContainer.textContent = "";
    operate(number1, number2, operator);
    number1 = ""; number2 = ""; operator = "";
});

// // Test (first run)
// console.log(operate(number1, number2, operator)); // 10