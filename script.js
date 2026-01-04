function add(num1, num2) {
    return num1 + num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    switch (operator) {
        case "add":
        console.log(add(num1, num2));
        break;
        case "substract":
        console.log(substract(num1, num2));
        break;
        case "multiply":
        console.log(multiply(num1, num2));
        break;
        case "divide":
        console.log(divide(num1, num2));
        break;
    }
}

// Test (first run)
var number1 = 5;
var number2 = 2;
var operator = "multiply";

operate(number1, number2, operator); // 10