const defaultResult = 0;
let currentResult = defaultResult;
// Creating Empty Array
let logEntries = [];

function getUserInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCal, calNumber) {
    const calDescription = `${resultBeforeCal} ${operator} ${calNumber}`;
    outputResult(currentResult, calDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  // Creating Object
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  if (
    calculateResult === 'ADD' ||
    calculateResult === 'SUBTRACT' ||
    calculateResult === 'MULTIPLY' ||
    calculateResult === 'DIVIDE'
  ) {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
      currentResult += enteredNumber;
      mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
      currentResult -= enteredNumber;
      mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
      currentResult *= enteredNumber;
      mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
      currentResult /= enteredNumber;
      mathOperator = '/';
    } else {
      alert('This is not a valid Math Operator !');
    }
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
  }
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

// Find in vendor.js
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
