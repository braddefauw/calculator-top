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
    })
}

let opBtns = document.querySelectorAll(".operator");
for(const btn of opBtns){
    btn.addEventListener('click', function (){
        valueOne = displayValue.innerText;
        displayValue.innerText += this.value;
        console.log(valueOne);
    })
}

let delBtn = document.querySelector(".delete")
delBtn.addEventListener('click', function () {
    if(displayValue.innerText != result){
        valueOne = parseInt(displayValue.innerText.slice(0, -1));
        displayValue.innerText = valueOne;
    } 
})

let resetBtn = document.querySelector(".reset")
resetBtn.addEventListener('click', function () {
    displayValue.innerText = "";
})

let equalBtn = document.querySelector(".equals")
equalBtn.addEventListener('click', function () {
    valueTwo = displayValue.innerText.slice(3, 5);
    console.log(valueTwo);
    if(displayValue.innerText.indexOf("+") !== -1){
        result = parseFloat(valueOne) + parseFloat(valueTwo);
    }else if(displayValue.innerText.indexOf("-") !== -1){
        result = parseFloat(valueOne) - parseFloat(valueTwo);
    }else if(displayValue.innerText.indexOf("x") !== -1){
        result = parseFloat(valueOne) * parseFloat(valueTwo);
    }else if(displayValue.innerText.indexOf("/") !== -1){
        result = parseFloat(valueOne) / parseFloat(valueTwo);
    }
    displayValue.innerText = result;
})

// function changeText() {
//     btnText = this.textContent || this.innerText;
//     displayValue.innerText += btnText;
//     valueOne = parseFloat(displayValue.innerText);
//     valueTwo = parseFloat(displayValue.innerText);
//     return valueOne, valueTwo;
// }

// const add = (valueOne, valueTwo) => {
//     operator = "+";
//     displayValue.innerText += " " + operator + " " + valueTwo;
//     result = valueOne + valueTwo;
// }

// const subtract = (valueOne, valueTwo) => {
//     operator = "-";
//     displayValue.innerText += " " + operator + " " + valueTwo;
//     result = valueOne - valueTwo;
// }

// const multiply = (valueOne, valueTwo) => {
//     operator = "*";
//     displayValue.innerText += " " + operator + " " + valueTwo;
//     result = valueOne * valueTwo;
// }

// const divide = (valueOne, valueTwo) => {
//     operator = "/";
//     displayValue.innerText += " " + operator + " " + valueTwo;
//     result = valueOne / valueTwo;
// }

// const operate = (operator, valueOne, valueTwo) => {
//     if(operator === "+"){
//         displayValue.innerText = result;
//     }else if(operator === "-"){
//         displayValue.innerText = result;
//     }else if(operator === "*"){
//         displayValue.innerText = result;
//     }else if(operator === "/"){
//         displayValue.innerText = result;
//     }
// }