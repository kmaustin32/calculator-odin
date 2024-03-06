let display = document.querySelector('#display');
let currentNumber = 0;
let lastNumber = 0;
let operator = '/';


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
  switch (operator) {
    case "+": {
      let result = add(currentNumber, lastNumber);
      return result;
    }  
    case "-": {
      let result = subtract(currentNumber, lastNumber);
      return result;
    }
    case "*": {
      let result = multiply(currentNumber, lastNumber);
      return result;
    }
    case "/": {
      let result = divide(currentNumber, lastNumber);
      return result;
    };
  };
};

const calculateButton = document.querySelector('#calculate');
calculateButton.addEventListener('click', (e) =>{
  let solution = operate(operator);
  console.log(solution);
  display.textContent = String(solution);
  console.log(display.textContent);
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', (e) => {
  display.textContent = '0';
  currentNumber = 0;
  lastNumber = 0;
  operator = '';
});

// Add event listeners to operator keys
let oprBtns = document.querySelectorAll('.opr');

for (let i = 0; i < oprBtns.length; i++) {
  oprBtns[i].addEventListener('click', (e) => {
    operator = e.target.textContent;
    console.log(e.target.textContent)
  });
};

// Add event listeners to num keys
let numBtns = document.querySelectorAll('.num');

for (let i = 0; i < numBtns.length; i++) {
  numBtns[i].addEventListener('click', (e) => {
    let activeNum = e.target.textContent;
    console.log(activeNum)
  })
}