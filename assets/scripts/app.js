let currentResult = 0;
let logEntries = [];

// gets value from input field
function getNumberInput() {
    return parseInt(userInput.value)
}

// creates and writes output
function writeAndCreateOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(operation, prevResult, numEntered, result) {
    const logEntry = {
        operation: operation,
        prevResult: prevResult,
        numEntered: numEntered,
        result: result,
    }
    // push object to array
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult(calculationType) {

    const enteredNumber = getNumberInput();

    if(
        calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE' ||
        enteredNumber === 0
    ) {
        return;
    }

    const initialResult = currentResult;
    let mathOperator;
    if(calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+'
    } else if(calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-'
    } else if(calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*'
    } else {
        currentResult /= enteredNumber;
        mathOperator = '/'
    }
    
    writeAndCreateOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
    //console.log(logEntry.result);
}

function add() {
    calculateResult('ADD');
}

function subtract() {
   calculateResult('SUBTRACT');
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
