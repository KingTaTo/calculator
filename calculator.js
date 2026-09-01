import * as utils from "./utils.mjs";

// values to keep track of in the calculations
let answer, num2, currentOperation, equalLastPressed;
let resetDisplay = true;

// Implementing buttons
let numberGrid = document.querySelector("#numbers");
let display = document.querySelector("#display");


display.textContent = 0;

// Number grid creation + logic
for (let i = 9; i >= 0; i--) {
  let numberButton = utils.makeButton(i);
  numberButton.addEventListener("click", event => {
    if (resetDisplay) {
      display.textContent = "";
      resetDisplay = false;
    }
    display.textContent += i;
  });
  numberGrid.appendChild(numberButton);
}

// Equal button + logic
let equalBtn = utils.makeButton("=");
equalBtn.addEventListener("click", event => {
  if (resetDisplay || !num2 || !equalLastPressed) {
    num2 = Number(display.textContent);
  }
  answer = utils.operate(currentOperation, answer, num2);
  display.textContent = answer;
  equalLastPressed = true;
})
numberGrid.append(equalBtn);

// Clear button creation + logic
let clearBtn = utils.makeButton("CLEAR");
clearBtn.addEventListener("click", event => {
  display.textContent = "";
  answer = "";
  num2 = "";
  currentOperation = "";
});
numberGrid.append(clearBtn);


// Operator buttons
let addBtn = utils.makeButton("+");
addBtn.addEventListener("click", event => {
  currentOperation = utils.add;
  // If there isn't an answer, then set answer, otherwise treat is as num2
  if (!answer) {
    answer = Number(display.textContent);
    resetDisplay = true;
    equalLastPressed = false;
    return;
  }
  // Update num2 if resetDisplay is false to cover scenario of repeatedly pressing 
  // the operation
  if (!resetDisplay && !equalLastPressed) {
    num2 = Number(display.textContent);
    answer = utils.operate(currentOperation, answer, num2);
    display.textContent = answer;
  }
  resetDisplay = true;
  equalLastPressed = false;
});


let subtractBtn = utils.makeButton("-");
let multiplyBtn = utils.makeButton("*");
let divideBtn = utils.makeButton("/");

let operatorColumn = document.querySelector("#operators");
operatorColumn.appendChild(addBtn);
operatorColumn.appendChild(subtractBtn);
operatorColumn.appendChild(multiplyBtn);
operatorColumn.appendChild(divideBtn);






// console.log(operator(add, 4, 2));