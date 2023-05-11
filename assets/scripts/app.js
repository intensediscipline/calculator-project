let currentResult = 0;

function getNumberInput() {
    return parseInt(userInput.value)
}

function writeAndCreateOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function add() {
    const enteredNumber = getNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    writeAndCreateOutput('+', initialResult, enteredNumber);
}

function subtract() {
    const enteredNumber = getNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    writeAndCreateOutput('-', initialResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    writeAndCreateOutput('*', initialResult, enteredNumber);
}

function divide() {
    const enteredNumber = getNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    writeAndCreateOutput('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
