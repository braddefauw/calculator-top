let valueOne = "first number";
let valueTwo = 7;
let result = "";
let displayValue = document.getElementById("output-h1");
let operator = "";
let btnText = "";

let numBtns = document.querySelectorAll(".number");
for(const btn of numBtns){
    btn.addEventListener('click', function (){
        displayValue.innerText += this.value;
        valueOne = parseFloat(displayValue.innerText);
        valueTwo = parseFloat(displayValue.innerText);
        console.log(valueOne, valueTwo)
    })
}

// function changeText() {
//     btnText = this.textContent || this.innerText;
//     displayValue.innerText += btnText;
//     valueOne = parseFloat(displayValue.innerText);
//     valueTwo = parseFloat(displayValue.innerText);
//     return valueOne, valueTwo;
// }

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