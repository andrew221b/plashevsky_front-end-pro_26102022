const firstNum = +prompt('Enter first number');
const secondNum = +prompt('Enter second number');
const thirdNum = +prompt('Enter third number');

if (!isNaN(firstNum) && !isNaN(secondNum) && !isNaN(thirdNum)) {
    const result = (firstNum + secondNum + thirdNum) / 3;
    alert(`Your answer is ${result}`);
  } else {
    alert("You've entered invalid value");
  }