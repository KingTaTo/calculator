// Basic calc operations
export const add = (num1, num2) => num1 + num2;
export const subtract = (num1, num2) => num1 - num2;
export const multiply = (num1, num2) => num1 * num2;
export const divide = (num1, num2) => {
  if (num2 == 0) return "Can't divide by 0";
  return (num1 / num2);
};

export const makeButton = (text) => {
  let btn = document.createElement("button");
  btn.textContent = text;
  return btn;
};

export const operate = (operation, num1, num2) => operation(num1, num2);

export const operateButton = (operator) => {

};

export const isNumber = (str) => str.trim() !== "" && !isNaN(str);