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

function add() {
    const enteredNumber = getNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    writeAndCreateOutput('+', initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
    //console.log(logEntry.result);
}

function subtract() {
    const enteredNumber = getNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    writeAndCreateOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
    const enteredNumber = getNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    writeAndCreateOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
    const enteredNumber = getNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    writeAndCreateOutput('/', initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
