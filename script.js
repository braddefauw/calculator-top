let valueOne = 1;
let valueTwo = 2;
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
        if(valueOne !== "" && displayValue.innerText.indexOf(valueOne) !== -1){
            operate();
            displayValue.innerText += this.value; 
        }else{
            valueOne = parseFloat(displayValue.innerText);
            displayValue.innerText += this.value; 
        }
    })
}

let delBtn = document.querySelector(".delete")
delBtn.addEventListener('click', function () {
    if(displayValue.innerText != result){
        valueOne = parseFloat(displayValue.innerText.slice(0, -1));
        displayValue.innerText = valueOne;
    } 
})

let resetBtn = document.querySelector(".reset")
resetBtn.addEventListener('click', function () {
    displayValue.innerText = "";
    valueOne = "";
    valueTwo = "";
})

let equalBtn = document.querySelector(".equals")
equalBtn.addEventListener('click', operate);

function operate() {
    if(displayValue.innerText.indexOf("+") !== -1){
        valueTwo = parseFloat(displayValue.innerText.substring(displayValue.innerText.indexOf('+')+1));
        result = valueOne + valueTwo.toFixed(2);
    }else if(displayValue.innerText.indexOf("-") !== -1){
        valueTwo = parseFloat(displayValue.innerText.substring(displayValue.innerText.indexOf('-')+1));
        result = valueOne - valueTwo.toFixed(2);
    }else if(displayValue.innerText.indexOf("*") !== -1){
        valueTwo = parseFloat(displayValue.innerText.substring(displayValue.innerText.indexOf('*')+1));
        result = valueOne * valueTwo.toFixed(2);
    }else if(displayValue.innerText.indexOf("/") !== -1){
        valueTwo = parseFloat(displayValue.innerText.substring(displayValue.innerText.indexOf('/')+1));
        if(valueTwo === 0){
            result = "You can't divide by zero, fool!"
        }else{
            result = (valueOne / valueTwo).toFixed(2);  
        }
    }
    displayValue.innerText = result;
    valueOne = result;
}