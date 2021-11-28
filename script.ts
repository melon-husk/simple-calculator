const allowedKeyboardKeys = [
  "^",
  "!",
  "*",
  "/",
  "+",
  "-",
  ".",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
];
const themeToggle = document.querySelector(".theme-toggle");
const input = <HTMLInputElement>document.querySelector("input.input");
const output = <HTMLDivElement>document.querySelector("div.output");
const originalFontSize = parseInt(window.getComputedStyle(input).fontSize);
let expressionArray: string[] = [];
let inputArray: string[] = [];
let closingParenthesis = 0;
themeToggle?.addEventListener("click", () => {
  if (
    document.documentElement.getAttribute("data-theme") === null ||
    document.documentElement.getAttribute("data-theme") === "light"
  ) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
});
// toggles the theme based on prefers-color-scheme
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.documentElement.setAttribute("data-theme", "dark");
} else {
  document.documentElement.setAttribute("data-theme", "light");
}
const buttons = <HTMLButtonElement[]>(
  Array.from(document.querySelectorAll("button.button"))
);
window.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    try {
      equals();
    } catch (error) {
      logError(error);
    }
  }
  if (event.key === "Backspace") {
    backspace();
  }
  if (allowedKeyboardKeys.includes(event.key)) {
    expressionArray.push(event.key);
    inputArray.push(event.key);
    setInputValue(inputArray.join(""));
  }
});
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    try {
      const btn = <HTMLButtonElement>event.target;
      const buttonValue = btn.innerText;
      switch (buttonValue) {
        case "√":
          squareRoot();
          break;
        case "π":
          pi();
          break;
        case "^":
          power();
          break;
        case "!":
          calculateFactorial();
          break;
        case "sin":
          sin();
          break;
        case "cos":
          cos();
          break;
        case "tan":
          tan();
          break;
        case "log":
          log();
          break;
        case "AC":
          resetCalculator();
          break;
        case "( )":
          parenthesis();
          break;
        case "%":
          percentage();
          break;
        case "÷":
          divide();
          break;
        case "7":
          numSeven();
          break;
        case "8":
          numEight();
          break;
        case "9":
          numNine();
          break;
        case "×":
          multiply();
          break;
        case "4":
          numFour();
          break;
        case "5":
          numFive();
          break;
        case "6":
          numSix();
          break;
        case "-":
          subtract();
          break;
        case "1":
          numOne();
          break;
        case "2":
          numTwo();
          break;
        case "3":
          numThree();
          break;
        case "+":
          add();
          break;
        case "0":
          numZero();
          break;
        case ".":
          period();
          break;
        case "⌫":
          backspace();
          break;
        case "=":
          equals();
          break;
      }
    } catch (error) {
      logError(error);
    }
  });
});

function logError(error: unknown) {
  output.innerText = "Error";
  output.style.color = "var(--error-text-color)";
  input.style.color = "var(--error-text-color)";
  console.log(error);
  console.log(expressionArray, inputArray);
}
function resetError() {
  output.style.color = `var(--secondary-text-color)`;
  input.style.color = `inherit`;
}
function equals() {
  output.innerText = eval(expressionArray.join("")).toString();
}

function period() {
  if (inputArray.length === 0 && expressionArray.length === 0) {
    expressionArray.push("0.");
    inputArray.push("0.");
    setInputValue(inputArray.join(""));
  } else {
    expressionArray.push(".");
    inputArray.push(".");
    setInputValue(inputArray.join(""));
  }
}

function numZero() {
  expressionArray.push("0");
  inputArray.push("0");
  setInputValue(inputArray.join(""));
}

function add() {
  expressionArray.push("+");
  inputArray.push("+");
  setInputValue(inputArray.join(""));
}

function numThree() {
  expressionArray.push("3");
  inputArray.push("3");
  setInputValue(inputArray.join(""));
}

function numTwo() {
  expressionArray.push("2");
  inputArray.push("2");
  setInputValue(inputArray.join(""));
}

function numOne() {
  expressionArray.push("1");
  inputArray.push("1");
  setInputValue(inputArray.join(""));
}

function subtract() {
  expressionArray.push("-");
  inputArray.push("-");
  setInputValue(inputArray.join(""));
}

function numSix() {
  expressionArray.push("6");
  inputArray.push("6");
  setInputValue(inputArray.join(""));
}

function numFive() {
  expressionArray.push("5");
  inputArray.push("5");
  setInputValue(inputArray.join(""));
}

function numFour() {
  expressionArray.push("4");
  inputArray.push("4");
  setInputValue(inputArray.join(""));
}

function multiply() {
  expressionArray.push("*");
  inputArray.push("×");
  setInputValue(inputArray.join(""));
}

function numNine() {
  expressionArray.push("9");
  inputArray.push("9");
  setInputValue(inputArray.join(""));
}

function numEight() {
  expressionArray.push("8");
  inputArray.push("8");
  setInputValue(inputArray.join(""));
}

function numSeven() {
  expressionArray.push("7");
  inputArray.push("7");
  setInputValue(inputArray.join(""));
}

function divide() {
  expressionArray.push("/");
  inputArray.push("÷");
  setInputValue(inputArray.join(""));
}

function percentage() {
  expressionArray.push("* 0.01");
  inputArray.push("%");
  setInputValue(inputArray.join(""));
}

function parenthesis() {
  if (closingParenthesis > 0) {
    expressionArray.push(")");
    inputArray.push(")");
    setInputValue(inputArray.join(""));
    closingParenthesis--;
  } else {
    expressionArray.push("(");
    inputArray.push("(");
    setInputValue(inputArray.join(""));
    closingParenthesis++;
  }
}

function log() {
  expressionArray.push("Math.log10(");
  inputArray.push("log(");
  setInputValue(inputArray.join(""));
  closingParenthesis++;
}

function tan() {
  expressionArray.push("tanD(");
  inputArray.push("tan(");
  setInputValue(inputArray.join(""));
  closingParenthesis++;
}

function cos() {
  expressionArray.push("cosD(");
  inputArray.push("cos(");
  setInputValue(inputArray.join(""));
  closingParenthesis++;
}

function sin() {
  expressionArray.push("sinD(");
  inputArray.push("sin(");
  setInputValue(inputArray.join(""));
  closingParenthesis++;
}

function calculateFactorial() {
  expressionArray.push("factorial(");
  inputArray.push("!(");
  setInputValue(inputArray.join(""));
  closingParenthesis++;
}

function power() {
  expressionArray.push("**");
  inputArray.push("^");
  setInputValue(inputArray.join(""));
}

function pi() {
  expressionArray.push("Math.PI");
  inputArray.push("π");
  setInputValue(inputArray.join(""));
}

function squareRoot() {
  expressionArray.push("Math.sqrt(");
  inputArray.push("√(");
  setInputValue(inputArray.join(""));
  closingParenthesis++;
}

function factorial(x: number): number {
  return x > 1 ? x * factorial(x - 1) : 1;
}

function sinD(angle: number): number {
  return Math.sin(angle * (Math.PI / 180));
}

function cosD(angle: number): number {
  return Math.cos(angle * (Math.PI / 180));
}

function tanD(angle: number): number {
  // Check if the angle is a multiple of 90
  if (angle % 90 === 0) {
    return Infinity;
  }
  return Math.tan(angle * (Math.PI / 180));
}

function scaleFontDown(scale: number = 10) {
  const fontSizeNumber = parseInt(window.getComputedStyle(input).fontSize);
  const minimumFontSize = originalFontSize / 1.5;
  const inputLength = input.value.length;
  const breakpoint = (fontSizeNumber * inputLength) / 2;
  const inputWidth = input.clientWidth;
  console.log({ inputLength, breakpoint, inputWidth });
  if (breakpoint > inputWidth && fontSizeNumber > minimumFontSize) {
    input.style.fontSize = `${fontSizeNumber - scale}px`;
    console.log(input.style.fontSize);
  }
}
function scaleFontUp(scale: number = 10) {
  const fontSizeNumber = parseInt(window.getComputedStyle(input).fontSize);
  if (fontSizeNumber < originalFontSize) {
    input.style.fontSize = `${fontSizeNumber + scale}px`;
    console.log(input.style.fontSize);
  }
}
function setInputValue(inputValue: string) {
  input.value = inputValue;
  resetError();
  scaleFontDown();
}
function resetCalculator() {
  expressionArray = [];
  inputArray = [];
  closingParenthesis = 0;
  setInputValue(inputArray.join(""));
  output.innerText = "";
  resetFontSize();
}
function backspace() {
  if (expressionArray[expressionArray.length - 1] === "(") {
    closingParenthesis--;
  }
  scaleFontUp();
  expressionArray.pop();
  inputArray.pop();
  setInputValue(inputArray.join(""));
  output.innerText = "";
  resetError();
}
function resetFontSize() {
  input.style.fontSize = `${originalFontSize}px`;
  console.log({ originalFontSize });
}
