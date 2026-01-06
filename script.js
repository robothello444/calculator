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
        return add(num1, num2);
        case "-":
        return substract(num1, num2);
        case "*":
        return multiply(num1, num2);
        case "/":
        return divide(num1, num2);
    };
};


// Selectors
const numberBtn = document.querySelectorAll("button.number-btn");
const operatorBtn = document.querySelectorAll("button.operator-btn")
const displayContainer = document.querySelector(".display");
const equalBtn = document.querySelector("button.equal-btn");
const clearBtn = document.querySelector(".btn-clear");


numberBtn.forEach(button => {
    button.addEventListener('click', () => {
        if (operator == '') {
            // Checks if there's a zero in the display to remove it
            if (displayContainer.textContent == 0) {
                displayContainer.textContent = '';
            }
            number1 += button.id;
            displayContainer.textContent += button.id;
        }
        else {
            displayContainer.textContent = '';
            number2 += button.id;
            displayContainer.textContent += button.id;
        }
    });
});

operatorBtn.forEach(button => {
    button.addEventListener('click', () => {
        if (number1 != '' && number2 != '') {
            const results = operate(number1, number2, operator);
            number1 = results;
            number2 = '';
            operator = button.id;
            displayContainer.textContent = results;
        }
        else {
            operator = button.id;
        } 
    });
});

equalBtn.addEventListener('click', () => {
    var results = operate(number1, number2, operator)
    displayContainer.textContent = results;
    number1 = results;
    number2 = '';
    operator = '';
});

clearBtn.addEventListener('click', () => {
    displayContainer.textContent = "0";
    number1 = ""; number2 = ""; operator = "";
});


// // Test (first run)
// console.log(operate(number1, number2, operator)); // 10