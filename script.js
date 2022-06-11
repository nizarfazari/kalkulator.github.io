const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    inputNumber(e.target.value);
    updateScreen(currentNumber);
  });
});

let prevNumber = "";
let calculationOperator = "";
let currentNumber = "";

const inputNumber = (number) => {
  console.log(number);
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

const operator = document.querySelectorAll(".operator");

operator.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    inputOperator(e.target.value);
  });
});

const inputOperator = (operator) => {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }
  prevNumber = currentNumber;
  calculationOperator = operator;
  currentNumber = "";
};

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    default:
      break;
  }
  currentNumber = result;
  calculationOperator = "";
};

const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

const clearAll = () => {
  prevNumber = " ";
  calculationOperator = "";
  currentNumber = "0";
};

const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (e) => {
  inputDecimal(e.target.value);
  updateScreen(currentNumber);
});

inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};
