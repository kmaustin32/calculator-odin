const DisplayValue = document.querySelector('#display').textContent;
const CurrentNumber = 0;
const LastNumber = 0;
const Operator = '';


const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

const operate = () => {
  switch (Operator) {
    case "+": {
      let result = add(CurrentNumber, LastNumber);
      return result;
    }  
    case "-": {
      let result = subtract(CurrentNumber, LastNumber);
      return result;
    }
    case "*": {
      let result = multiply(CurrentNumber, LastNumber);
      return result;
    }
    case "-": {
      let result = divide(CurrentNumber, LastNumber);
      return result;
    };
  };
};