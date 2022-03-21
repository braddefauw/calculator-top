let valueOne = 1;
let valueTwo = "test";
let result = "";
let displayValue = document.getElementById("output-h1");
let operator = "";
let btnText = "";
let decimalCount = 0;

let numBtns = document.querySelectorAll(".number");
for(const btn of numBtns){
    btn.addEventListener('click', function (){
        if(this.value === "."){
            decimalCount++;
        }
        if(this.value === "." && decimalCount > 1){
            return;
        }
        displayValue.innerText += this.value;
    })
}

let opBtns = document.querySelectorAll(".operator");
for(const btn of opBtns){
    btn.addEventListener('click', operation)
}

function operation(){
    if(valueOne !== "" && displayValue.innerText.indexOf(valueOne) !== -1){
        operate();
        displayValue.innerText += this.value; 
    }else{
        valueOne = parseFloat(displayValue.innerText);
        displayValue.innerText += this.value; 
    }
    decimalCount = 0;
}

let delBtn = document.querySelector(".delete")
delBtn.addEventListener('click', function () {
    displayValue.innerText = displayValue.innerText.slice(0, -1);
})

let resetBtn = document.querySelector(".reset")
resetBtn.addEventListener('click', function () {
    displayValue.innerText = "";
    valueOne = "";
    valueTwo = "";
    result = "";
})

let equalBtn = document.querySelector(".equals")
equalBtn.addEventListener('click', operate);

function operate() {
    if(displayValue.innerText.indexOf("+") !== -1){
        valueTwo = parseFloat(displayValue.innerText.substring(displayValue.innerText.indexOf('+')+1));
        result = valueOne + valueTwo;
    }else if(displayValue.innerText.indexOf("-") !== -1){
        valueTwo = parseFloat(displayValue.innerText.substring(displayValue.innerText.indexOf('-')+1));
        result = valueOne - valueTwo;
    }else if(displayValue.innerText.indexOf("*") !== -1){
        valueTwo = parseFloat(displayValue.innerText.substring(displayValue.innerText.indexOf('*')+1));
        result = valueOne * valueTwo;
    }else if(displayValue.innerText.indexOf("/") !== -1){
        valueTwo = parseFloat(displayValue.innerText.substring(displayValue.innerText.indexOf('/')+1));
        if(valueTwo === 0){
            result = "You can't divide by zero, fool!"
        }else{
            result = Math.round((valueOne / valueTwo)*100)/100;
        }
    }
    displayValue.innerText = result;
    valueOne = result;
}

let toggle = document.querySelector(".slider")
toggle.addEventListener('click', function (){
    let element = document.body;
    element.classList.toggle("light-mode");
})

let calcContainer = document.querySelector(".calc-container");
document.addEventListener('keypress', function(e){
    console.log(e.key);
    if (e.key >= 0 && e.key <= 9){
        displayValue.innerText += `${e.key}`;
    }else if(e.key === "."){
        displayValue.innerText += `${e.key}`;
        decimalCount++;
    }else if(e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/"){
        if(valueOne !== "" && displayValue.innerText.indexOf(valueOne) !== -1){
            operate();
            displayValue.innerText += `${e.key}`; 
        }else{
            valueOne = parseFloat(displayValue.innerText);
            displayValue.innerText += `${e.key}`; 
        }
        decimalCount = 0;
    }else if(e.key === "Enter"){
        if(displayValue.innerText.indexOf("+") !== -1){
            valueTwo = parseFloat(displayValue.innerText.substring(displayValue.innerText.indexOf('+')+1));
            result = Math.round((valueOne + valueTwo)*100)/100;
        }else if(displayValue.innerText.indexOf("-") !== -1){
            valueTwo = parseFloat(displayValue.innerText.substring(displayValue.innerText.indexOf('-')+1));
            result = Math.round((valueOne - valueTwo)*100)/100;
        }else if(displayValue.innerText.indexOf("*") !== -1){
            valueTwo = parseFloat(displayValue.innerText.substring(displayValue.innerText.indexOf('*')+1));
            result = Math.round((valueOne * valueTwo)*100)/100;
        }else if(displayValue.innerText.indexOf("/") !== -1){
            valueTwo = parseFloat(displayValue.innerText.substring(displayValue.innerText.indexOf('/')+1));
            if(valueTwo === 0){
                result = "You can't divide by zero, fool!"
            }else{
                result = Math.round((valueOne / valueTwo)*100)/100;
            }
        }
        displayValue.innerText = result;
        valueOne = result;
    }
    console.log(result, displayValue.innerText);
})