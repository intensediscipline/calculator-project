let currentResult = 0;

// gets value from input field
function getNumberInput() {
    return parseInt(userInput.value)
}

// creates and writes output
function writeAndCreateOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor file
}

function add() {
    const enteredNumber = getNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    writeAndCreateOutput('+', initialResult, enteredNumber);
}

function subtract() {
    const enteredNumber = getNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    writeAndCreateOutput('-', initialResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    writeAndCreateOutput('*', initialResult, enteredNumber);
}

function divide() {
    const enteredNumber = getNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    writeAndCreateOutput('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
