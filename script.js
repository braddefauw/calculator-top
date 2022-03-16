let valueOne = "first number";
let valueTwo = 7;
let displayValue = document.getElementById("output-h1");

function changeText() {
    let btnText = this.textContent || this.innerText;
    displayValue.innerText += btnText;
    valueOne = parseInt(displayValue.innerText);
    return valueOne;
}

const add = (valueOne, valueTwo) => {
    console.log(valueOne);
    console.log(valueTwo);
    displayValue.innerText = valueOne + valueTwo;
}

const subtract = (num1, num2) => {
    return num1 - num2
}

const multiply = (num1, num2) => {
    return num1 * num2
}

const divide = (num1, num2) => {
    return num1 / num2;
}

const operate = (operator, num1, num2) => {
    if(operator === "+"){
        return add(num1, num2)
    }else if(operator === "-"){
        return subtract(num1, num2)
    }else if(operator === "*"){
        return multiply(num1, num2)
    }else if(operator === "/"){
        return divide(num1, num2)
    }
}