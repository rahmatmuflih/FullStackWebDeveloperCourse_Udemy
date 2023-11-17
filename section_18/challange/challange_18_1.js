function add(num1, num2) {
  return num1 + num2;
}
function substract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function operator(num1, num2, operator) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return operator(num1, num2);
  } else {
    return "you must input number!";
  }
}
