let valueOne = "first number";
let valueTwo = 7;
let result = "";
let displayValue = document.getElementById("output-h1");
let operator = "";

function changeText() {
    let btnText = this.textContent || this.innerText;
    displayValue.innerText += btnText;
    valueOne = parseInt(displayValue.innerText);
    return valueOne;
}

const add = (valueOne, valueTwo) => {
    operator = "+";
    result = valueOne + valueTwo;
}

const subtract = (valueOne, valueTwo) => {
    operator = "-";
    result = valueOne - valueTwo;
}

const multiply = (valueOne, valueTwo) => {
    operator = "*";
    result = valueOne * valueTwo;
}

const divide = (valueOne, valueTwo) => {
    operator = "/";
    result = valueOne / valueTwo;
}

const operate = (operator, valueOne, valueTwo) => {
    if(operator === "+"){
        displayValue.innerText = result;
    }else if(operator === "-"){
        displayValue.innerText = result;
    }else if(operator === "*"){
        displayValue.innerText = result;
    }else if(operator === "/"){
        displayValue.innerText = result;
    }
}