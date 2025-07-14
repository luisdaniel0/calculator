const buttonContainer = document.querySelector("#calc-buttons")
const display = document.querySelector("#display")

let inputString  = ""
let firstNumber = null
let operator = null
let secondNumber = null

buttonContainer.addEventListener('click',(event)=>{
  if(event.target.classList.contains('button')) {
    const value = event.target.getAttribute('data-value');
    const action = event.target.getAttribute('data-action');

    // Handle CLEAR
    if (action === "clear") {
      inputString = "";
      firstNumber = null;
      secondNumber = null;
      operator = null;
      display.textContent = "0";
      return;
    }

    // Handle EQUALS
    if (action === "equals") {
      secondNumber = parseFloat(inputString);
      if(firstNumber !== null && operator && !isNaN(secondNumber)) {
        const result = operate(operator, firstNumber, secondNumber);
        display.textContent = result;
        inputString = result.toString();
        firstNumber = null;
        secondNumber = null;
        operator = null;
      }
      return;
    }

    // Handle OPERATOR
    if (["+", "-", "*", "/"].includes(action)) {
      if(operator!==null&&inputString!==""){
        secondNumber = parseFloat(inputString)
        const result = operate(operator,firstNumber,secondNumber)
        display.textContent = result;

        firstNumber=result
        operator=action
        inputString=""
      } else {
        firstNumber = parseFloat(inputString)
        operator= action
        inputString=""
      }
    }

    // Handle NUMBER input
    if (value) {
      inputString += value;
      display.textContent = inputString;
    }
  }
});



const add = (a,b)=>{
    return a+b
}

const subtract = (a,b)=>{
    return a-b
}

const multiply = (a,b)=>{
    return a*b 
}

const divide = (a,b)=>{
    return a/b 
}

// console.log(add(1,2)) //3
// console.log(subtract(3,2)) //1
// console.log(multiply(10,10)) //100
// console.log(divide(10,5)) //2

// let firstNumber = 10
// let secondNumber  = 10

const operate = (operator,a,b) =>{
    if(operator === "+"){
        return add(a,b)
    } else if(operator=== "-"){
        return subtract(a,b)
    } else if(operator==="*"){
        return multiply(a,b)
    } else if(operator==="/"){
        return divide(a,b)
    }
}

// console.log(operate("/",firstNumber,secondNumber))