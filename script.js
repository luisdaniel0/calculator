const buttonContainer = document.querySelector("#calc-buttons")
const display = document.querySelector("#display")

let inputString  = ""

buttonContainer.addEventListener('click',(event)=>{
    if(event.target.classList.contains('button')){
        const value = event.target.getAttribute('data-value')
        console.log(value)
        inputString = inputString+ value
        display.textContent = inputString
        
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

let firstNumber = 10
let secondNumber  = 10

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

console.log(operate("/",firstNumber,secondNumber))