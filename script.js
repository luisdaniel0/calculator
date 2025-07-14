const buttonContainer = document.querySelector("#calc-buttons")
const display = document.querySelector("#display")

let inputString  = ""
let firstNumber = null
let operator = null
let secondNumber = null
let justClickedOperator = false
let result;


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
        if(justClickedOperator){
            operator = action;
            console.log("operator replaced with: " + operator)
            return
        }

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
      operator = action;
      justClickedOperator = true;
    }

    // Handle NUMBER input
    if (value) {
  if (display.textContent === "0" || justClickedOperator) {
    inputString = value;
  } else {
    inputString += value;
  }

  display.textContent = inputString;
  justClickedOperator = false;
  }

  //handle delete
  if(action==='delete'){
    inputString = inputString.slice(0,-1)
    display.textContent = inputString || "0"
    return;
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
    if(b===0){
        return "can't divide by zero!"
    }
    return a/b 
}


const operate = (operator, a, b) => {
  if (operator === "+") return add(a, b);
  if (operator === "-") return subtract(a, b);
  if (operator === "*") return multiply(a, b);
  if (operator === "/") {
    let result = divide(a, b);
    if (typeof result === "string") {
      // it's our custom error message
      return result;
    }
    if (result % 1 !== 0) {
    result = roundResult(result)
  }
    return result;
  }
};

function roundResult(value) {
  return Math.round(value * 100) / 100; // Rounds to 2 decimal places
}



