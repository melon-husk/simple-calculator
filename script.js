"use strict";
var Buttons;
(function (Buttons) {
    Buttons["square_root"] = "square-root";
    Buttons["pi"] = "pi";
    Buttons["power"] = "power";
    Buttons["factorial"] = "factorial";
    Buttons["sin"] = "sin";
    Buttons["cos"] = "cos";
    Buttons["tan"] = "tan";
    Buttons["log"] = "log";
    Buttons["ac"] = "ac";
    Buttons["parenthesis"] = "parenthesis";
    Buttons["percentage"] = "percentage";
    Buttons["divide"] = "divide";
    Buttons["seven"] = "seven";
    Buttons["eight"] = "eight";
    Buttons["nine"] = "nine";
    Buttons["multiply"] = "multiply";
    Buttons["four"] = "four";
    Buttons["five"] = "five";
    Buttons["six"] = "six";
    Buttons["subtract"] = "subtract";
    Buttons["one"] = "one";
    Buttons["two"] = "two";
    Buttons["three"] = "three";
    Buttons["add"] = "add";
    Buttons["zero"] = "zero";
    Buttons["decimal"] = "decimal";
    Buttons["backspace"] = "backspace";
    Buttons["equals"] = "equals";
})(Buttons || (Buttons = {}));
const elements = Array.from(document.querySelectorAll("div")).filter((element) => !element.classList.contains("container") &&
    !element.classList.contains("sub-menu") &&
    !element.classList.contains("input-output"));
elements.forEach((element) => { });
console.log(elements);
