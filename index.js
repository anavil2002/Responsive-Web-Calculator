const displayInput = document.getElementById('inputValue')

// Variables
const operator = ['-', '+', '%', '*', '/']
let operations = []
let currValue = ''

// functions & operations

function handleInteraction(value) {
    console.log(value);
    if(operator.includes(value)){
        console.log('Clicked an operator: ', value)
        handleOperatorInput(value)
    } else {
        console.log('Clicked a numeric value: ', value)
        handleNumericInput(value)
    }
    updateUI()
}

function handleNumericInput (value) {
    if (value === '.' && currValue.includes('.')) { return }
    currValue += value
}

function handleOperatorInput(value) {
    if (!currValue) {
        return
    }

    operations.push(currValue)
    operations.push(value)
    currValue = ''
}

function handleEvaluate() {
    if(operations.lenght === 0) { return }
    let finalAmount = operations[0]
    let prevOperator = null
    if(!currValue){
        operations.pop()
    } else {
        operations.push(currValue)
        currValue = ''
    }
    for(let i = 1; i < operations.length; i++){
        if (i % 2 === 0){
            // Numeric Value
            finalAmount = eval(`${finalAmount} ${prevOperator} ${operations[i]}`)
        } else {
            // Operator Value
            prevOperator = operations[i]
        }
    }
    operations= []
    currValue = finalAmount.toFixed(2)
    updateUI()
}

function handleReset() {
    currValue = ''
    operations = []
    updateUI()
}

function updateUI() {
   const displayString = operations.join(' ') + ' ' + currValue
   displayInput.innerText = displayString.trim() ? displayString : '0'
}