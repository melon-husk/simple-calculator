"use strict";
let expression = "";
let expressionArray = [];
let inputArray = [];
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
const input = document.querySelector("input.input");
const output = document.querySelector("div.output");
const originalFontSize = parseInt(window.getComputedStyle(input).fontSize);
themeToggle === null || themeToggle === void 0 ? void 0 : themeToggle.addEventListener("click", () => {
    if (document.documentElement.getAttribute("data-theme") === "null" ||
        document.documentElement.getAttribute("data-theme") === "light") {
        document.documentElement.setAttribute("data-theme", "dark");
    }
    else {
        document.documentElement.setAttribute("data-theme", "light");
    }
});
const buttons = (Array.from(document.querySelectorAll("button.button")));
window.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        try {
            output.innerText = eval(expressionArray.join("")).toString();
            console.log(expression, expressionArray, input.value);
        }
        catch (error) {
            output.innerText = "Error";
            console.log(error);
            console.log(expression, expressionArray, input.value);
        }
    }
    if (event.key === "Backspace") {
        if (expressionArray[expressionArray.length - 1] === "(") {
            closingParenthesis--;
        }
        expressionArray.pop();
        inputArray.pop();
        input.value = inputArray.join("");
    }
    if (allowedKeyboardKeys.includes(event.key)) {
        expressionArray.push(event.key);
        inputArray.push(event.key);
        input.value = inputArray.join("");
    }
});
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        try {
            const button = event.target;
            const buttonValue = button.innerText;
            switch (buttonValue) {
                case "√":
                    expressionArray.push("Math.sqrt(");
                    inputArray.push("√(");
                    input.value = inputArray.join("");
                    closingParenthesis++;
                    break;
                case "π":
                    expressionArray.push("Math.PI");
                    inputArray.push("π");
                    input.value = inputArray.join("");
                    break;
                case "^":
                    expressionArray.push("**");
                    inputArray.push("^");
                    input.value = inputArray.join("");
                    break;
                case "!":
                    expressionArray.push("factorial(");
                    inputArray.push("!(");
                    input.value = inputArray.join("");
                    closingParenthesis++;
                    break;
                case "sin":
                    expressionArray.push("sinD(");
                    inputArray.push("sin(");
                    input.value = inputArray.join("");
                    closingParenthesis++;
                    break;
                case "cos":
                    expressionArray.push("cosD(");
                    inputArray.push("cos(");
                    input.value = inputArray.join("");
                    closingParenthesis++;
                    break;
                case "tan":
                    expressionArray.push("tanD(");
                    inputArray.push("tan(");
                    input.value = inputArray.join("");
                    closingParenthesis++;
                    break;
                case "log":
                    expressionArray.push("Math.log10(");
                    inputArray.push("log(");
                    input.value = inputArray.join("");
                    closingParenthesis++;
                    break;
                case "AC":
                    expressionArray = [];
                    inputArray = [];
                    closingParenthesis = 0;
                    input.value = inputArray.join("");
                    output.innerText = "";
                    break;
                case "( )":
                    if (closingParenthesis > 0) {
                        expressionArray.push(")");
                        inputArray.push(")");
                        input.value = inputArray.join("");
                        closingParenthesis--;
                    }
                    else {
                        expressionArray.push("(");
                        inputArray.push("(");
                        input.value = inputArray.join("");
                        closingParenthesis++;
                    }
                    break;
                case "%":
                    expressionArray.push("* 0.01");
                    inputArray.push("%");
                    input.value = inputArray.join("");
                    break;
                case "÷":
                    expressionArray.push("/");
                    inputArray.push("÷");
                    input.value = inputArray.join("");
                    break;
                case "7":
                    expressionArray.push("7");
                    inputArray.push("7");
                    input.value = inputArray.join("");
                    break;
                case "8":
                    expressionArray.push("8");
                    inputArray.push("8");
                    input.value = inputArray.join("");
                    break;
                case "9":
                    expressionArray.push("9");
                    inputArray.push("9");
                    input.value = inputArray.join("");
                    break;
                case "×":
                    expressionArray.push("*");
                    inputArray.push("×");
                    input.value = inputArray.join("");
                    break;
                case "4":
                    expressionArray.push("4");
                    inputArray.push("4");
                    input.value = inputArray.join("");
                    break;
                case "5":
                    expressionArray.push("5");
                    inputArray.push("5");
                    input.value = inputArray.join("");
                    break;
                case "6":
                    expressionArray.push("6");
                    inputArray.push("6");
                    input.value = inputArray.join("");
                    break;
                case "-":
                    expressionArray.push("-");
                    inputArray.push("-");
                    input.value = inputArray.join("");
                    break;
                case "1":
                    expressionArray.push("1");
                    inputArray.push("1");
                    input.value = inputArray.join("");
                    break;
                case "2":
                    expressionArray.push("2");
                    inputArray.push("2");
                    input.value = inputArray.join("");
                    break;
                case "3":
                    expressionArray.push("3");
                    inputArray.push("3");
                    input.value = inputArray.join("");
                    break;
                case "+":
                    expressionArray.push("+");
                    inputArray.push("+");
                    input.value = inputArray.join("");
                    break;
                case "0":
                    expressionArray.push("0");
                    inputArray.push("0");
                    input.value = inputArray.join("");
                    break;
                case ".":
                    if (inputArray.length === 0 && expressionArray.length === 0) {
                        expressionArray.push("0.");
                        inputArray.push("0.");
                        input.value = inputArray.join("");
                    }
                    else {
                        expressionArray.push(".");
                        inputArray.push(".");
                        input.value = inputArray.join("");
                    }
                    break;
                case "⌫":
                    if (expressionArray[expressionArray.length - 1] === "(") {
                        closingParenthesis--;
                    }
                    expressionArray.pop();
                    inputArray.pop();
                    input.value = inputArray.join("");
                    output.innerText = "";
                    break;
                case "=":
                    output.innerText = eval(expressionArray.join("")).toString();
                    console.log(expression, expressionArray, input.value);
                default:
                    break;
            }
            changeFontSize(input);
        }
        catch (error) {
            output.innerText = "Error";
            console.log(error);
            console.log(expression, expressionArray, input.value);
        }
    });
});
input.addEventListener("change", (event) => {
    const i = event.target;
    console.log(i.value);
});
function factorial(x) {
    return x > 1 ? x * factorial(x - 1) : 1;
}
function sinD(angle) {
    return Math.sin(angle * (Math.PI / 180));
}
function cosD(angle) {
    return Math.cos(angle * (Math.PI / 180));
}
function tanD(angle) {
    // Check if the angle is a multiple of 90
    if (angle % 90 === 0) {
        return Infinity;
    }
    return Math.tan(angle * (Math.PI / 180));
}
function changeFontSize(inputElement, scale = 10) {
    const fontSizeNumber = parseInt(window.getComputedStyle(inputElement).fontSize);
    const minimumFontSize = originalFontSize / 1.5;
    const inputLength = inputElement.value.length;
    const breakpoint = (fontSizeNumber * inputLength) / 2;
    const inputWidth = inputElement.clientWidth;
    console.log({
        breakpoint,
        inputWidth,
        inputLength,
        fontSizeNumber,
        originalFontSize,
    });
    if (breakpoint > inputWidth && fontSizeNumber > minimumFontSize) {
        inputElement.style.fontSize = `${fontSizeNumber - scale}px`;
        console.log(inputElement.style.fontSize);
    }
}
