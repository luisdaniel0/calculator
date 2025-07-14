const buttonContainer = document.querySelector("#calc-buttons")
const display = document.querySelector("#display")

let inputString  = ""
let firstNumber = null
let operator = null
let secondNumber = null

buttonContainer.addEventListener('click',(event)=>{
    if(event.target.classList.contains('button')){
        const value = event.target.getAttribute('data-value')
        // console.log(value)
    if(value){
        inputString += value 
        display.textContent = inputString
    } else if (event.target.getAttribute('data-action')==="clear"){
        inputString =""
        display.textContent = inputString
    } else if(["+","-","*","/"].includes(event.target.getAttribute('data-action'))){
        firstNumber = parseFloat(inputString)
        operator = event.target.getAttribute('data-action')
        inputString=""
        console.log("operator selectected: "+ operator)
        console.log("number selected: " + firstNumber)
    } else if (event.target.getAttribute('data-action')==="equals"){
        secondNumber= parseFloat(inputString)
        if(firstNumber!== null&& operator && !isNaN(secondNumber)){
            const result =operate(operator, firstNumber,secondNumber);
            display.textContent= result
            inputString = result.toString();
            firstNumber = null;
            secondNumber = null
        }
    }
    }
})


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