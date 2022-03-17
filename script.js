let valueOne = "first number";
let valueTwo = 7;
let result = "";
let displayValue = document.getElementById("output-h1");
let operator = "";

function changeText() {
    let btnText = this.textContent || this.innerText;
    displayValue.innerText += btnText;
    valueOne = parseInt(displayValue.innerText);
    valueTwo = parseInt(displayValue.innerText);
    return valueOne, valueTwo;
}

const add = (valueOne, valueTwo) => {
    operator = "+";
    displayValue.innerText += " " + operator + " " + valueTwo;
    result = valueOne + valueTwo;
}

const subtract = (valueOne, valueTwo) => {
    operator = "-";
    displayValue.innerText += " " + operator + " " + valueTwo;
    result = valueOne - valueTwo;
}

const multiply = (valueOne, valueTwo) => {
    operator = "*";
    displayValue.innerText += " " + operator + " " + valueTwo;
    result = valueOne * valueTwo;
}

const divide = (valueOne, valueTwo) => {
    operator = "/";
    displayValue.innerText += " " + operator + " " + valueTwo;
    result = valueOne / valueTwo;
}

const operate = (operator) => {
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

const deleteInt = () => {
    if(displayValue.innerText != result){
        valueOne = parseInt(displayValue.innerText.slice(0, -1));
        console.log(valueOne);
        displayValue.innerText = valueOne;
    } 
}

const reset = () => {
    displayValue.innerText = "";
}