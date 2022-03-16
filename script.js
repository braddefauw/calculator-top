let valueOne = "test";
let valueTwo = "hello";

function changeText() {
    let displayValue = document.getElementById("output-h1");
    let btnText = this.textContent || this.innerText;
    displayValue.innerText += btnText;
    valueOne = displayValue.innerText;
    return valueOne;
}

const add = (num1, num2) => {
    console.log(valueOne);
    return num1 + num2
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