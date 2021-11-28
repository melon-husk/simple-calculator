let expression = <string>"";
let expressionArray: string[] = [];
let inputArray: string[] = [];
let closingParenthesis = 0;
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
      output.innerText = eval(expressionArray.join("")).toString();
      console.log(expression, expressionArray, input.value);
    } catch (error) {
      output.innerText = "Error";
      console.log(error);
      console.log(expression, expressionArray, input.value);
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
          expressionArray.push("Math.sqrt(");
          inputArray.push("√(");
          setInputValue(inputArray.join(""));
          closingParenthesis++;
          break;
        case "π":
          expressionArray.push("Math.PI");
          inputArray.push("π");
          setInputValue(inputArray.join(""));
          break;
        case "^":
          expressionArray.push("**");
          inputArray.push("^");
          setInputValue(inputArray.join(""));
          break;
        case "!":
          expressionArray.push("factorial(");
          inputArray.push("!(");
          setInputValue(inputArray.join(""));
          closingParenthesis++;
          break;
        case "sin":
          expressionArray.push("sinD(");
          inputArray.push("sin(");
          setInputValue(inputArray.join(""));
          closingParenthesis++;
          break;
        case "cos":
          expressionArray.push("cosD(");
          inputArray.push("cos(");
          setInputValue(inputArray.join(""));
          closingParenthesis++;
          break;
        case "tan":
          expressionArray.push("tanD(");
          inputArray.push("tan(");
          setInputValue(inputArray.join(""));
          closingParenthesis++;
          break;
        case "log":
          expressionArray.push("Math.log10(");
          inputArray.push("log(");
          setInputValue(inputArray.join(""));
          closingParenthesis++;
          break;
        case "AC":
          resetCalculator();
          break;
        case "( )":
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
          break;
        case "%":
          expressionArray.push("* 0.01");
          inputArray.push("%");
          setInputValue(inputArray.join(""));
          break;
        case "÷":
          expressionArray.push("/");
          inputArray.push("÷");
          setInputValue(inputArray.join(""));
          break;
        case "7":
          expressionArray.push("7");
          inputArray.push("7");
          setInputValue(inputArray.join(""));
          break;
        case "8":
          expressionArray.push("8");
          inputArray.push("8");
          setInputValue(inputArray.join(""));
          break;
        case "9":
          expressionArray.push("9");
          inputArray.push("9");
          setInputValue(inputArray.join(""));
          break;
        case "×":
          expressionArray.push("*");
          inputArray.push("×");
          setInputValue(inputArray.join(""));
          break;
        case "4":
          expressionArray.push("4");
          inputArray.push("4");
          setInputValue(inputArray.join(""));
          break;
        case "5":
          expressionArray.push("5");
          inputArray.push("5");
          setInputValue(inputArray.join(""));
          break;
        case "6":
          expressionArray.push("6");
          inputArray.push("6");
          setInputValue(inputArray.join(""));
          break;
        case "-":
          expressionArray.push("-");
          inputArray.push("-");
          setInputValue(inputArray.join(""));
          break;
        case "1":
          expressionArray.push("1");
          inputArray.push("1");
          setInputValue(inputArray.join(""));
          break;
        case "2":
          expressionArray.push("2");
          inputArray.push("2");
          setInputValue(inputArray.join(""));
          break;
        case "3":
          expressionArray.push("3");
          inputArray.push("3");
          setInputValue(inputArray.join(""));
          break;
        case "+":
          expressionArray.push("+");
          inputArray.push("+");
          setInputValue(inputArray.join(""));
          break;
        case "0":
          expressionArray.push("0");
          inputArray.push("0");
          setInputValue(inputArray.join(""));
          break;
        case ".":
          if (inputArray.length === 0 && expressionArray.length === 0) {
            expressionArray.push("0.");
            inputArray.push("0.");
            setInputValue(inputArray.join(""));
          } else {
            expressionArray.push(".");
            inputArray.push(".");
            setInputValue(inputArray.join(""));
          }
          break;
        case "⌫":
          backspace();
          break;
        case "=":
          output.innerText = eval(expressionArray.join("")).toString();
          break;
        default:
          break;
      }
    } catch (error) {
      output.innerText = "Error";
      console.log(error);
      console.log(expression, expressionArray, input.value);
    }
  });
});

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

function scaleFontDown(inputElement: HTMLInputElement, scale: number = 10) {
  const fontSizeNumber = parseInt(
    window.getComputedStyle(inputElement).fontSize
  );
  const minimumFontSize = originalFontSize / 1.5;
  const inputLength = inputElement.value.length;
  const breakpoint = (fontSizeNumber * inputLength) / 2;
  const inputWidth = inputElement.clientWidth;
  console.log({ inputLength, breakpoint, inputWidth });
  if (breakpoint > inputWidth && fontSizeNumber > minimumFontSize) {
    inputElement.style.fontSize = `${fontSizeNumber - scale}px`;
    console.log(inputElement.style.fontSize);
  }
}
function scaleFontUp(inputElement: HTMLInputElement, scale: number = 10) {
  const fontSizeNumber = parseInt(
    window.getComputedStyle(inputElement).fontSize
  );
  if (fontSizeNumber < originalFontSize) {
    inputElement.style.fontSize = `${fontSizeNumber + scale}px`;
    console.log(inputElement.style.fontSize);
  }
}
function setInputValue(inputValue: string) {
  input.value = inputValue;
  scaleFontDown(input);
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
  scaleFontUp(input);
  expressionArray.pop();
  inputArray.pop();
  setInputValue(inputArray.join(""));
  output.innerText = "";
}
const resetFontSize = () => {
  input.style.fontSize = `${originalFontSize}px`;
  console.log({ originalFontSize });
};
