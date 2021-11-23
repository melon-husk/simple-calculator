enum Buttons {
  square_root = "square-root",
  pi = "pi",
  power = "power",
  factorial = "factorial",
  sin = "sin",
  cos = "cos",
  tan = "tan",
  log = "log",
  ac = "ac",
  parenthesis = "parenthesis",
  percentage = "percentage",
  divide = "divide",
  seven = "seven",
  eight = "eight",
  nine = "nine",
  multiply = "multiply",
  four = "four",
  five = "five",
  six = "six",
  subtract = "subtract",
  one = "one",
  two = "two",
  three = "three",
  add = "add",
  zero = "zero",
  decimal = "decimal",
  backspace = "backspace",
  equals = "equals",
}

const elements = Array.from(document.querySelectorAll("div")).filter(
  (element) =>
    !element.classList.contains("container") &&
    !element.classList.contains("sub-menu") &&
    !element.classList.contains("input-output")
);
elements.forEach((element) => {});
console.log(elements);
