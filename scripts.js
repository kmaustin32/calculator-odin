let display = document.querySelector('#display');

let calcObj = {
  current: '',
  last: '',
  operator: ''
};

const currentObj = () => {
  Object.keys(calcObj).forEach(key => {
    let value = calcObj[key];
    console.log(`Key: ${key}, Value: ${value}`);
  });
};

const add = () => {
  if (calcObj.last === '') calcObj.last = 0;
  return parseInt(calcObj.last) + parseInt(calcObj.current);
};

const subtract = () => {
  if (calcObj.last === '') calcObj.last = 0;
  return parseInt(calcObj.last) - parseInt(calcObj.current);
};

const multiply = () => {
  if (calcObj.last === '') calcObj.last = 1;
  return parseInt(calcObj.last) * parseInt(calcObj.current);
};

const divide = () => {
  if (calcObj.last === '') return;
  if (calcObj.current == '0') return "I'm melting...";
  return parseInt(calcObj.last) / parseInt(calcObj.current);
};

const operate = () => {
  let result = 0;

  if(calcObj.current === '') return;

  switch (calcObj.operator) {
    case "+": {
      result = add();
      break;
    }  
    case "-": {
      result = subtract();
      break;
    }
    case "*": {
      result = multiply();
      break
    }
    case "/": {
      result = divide();
      break;
    };
  };

  result = Math.round(result * 100) / 100;
  return result;
};

const calculateButton = document.querySelector('#calculate');
calculateButton.addEventListener('click', (e) =>{
  let solution = operate(calcObj.operator);
  calcObj.last = solution;
  display.textContent = solution;
  calcObj.current = '';
  calcObj.operator = '';
  currentObj();
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', (e) => {
  calcObj.current = '';
  calcObj.last = '';
  calcObj.operator = '';
  display.textContent = '';
  currentObj();
});

// Add event listeners to operator keys
let oprBtns = document.querySelectorAll('.opr');

for (let i = 0; i < oprBtns.length; i++) {
  oprBtns[i].addEventListener('click', (e) => {
    calcObj.operator = e.target.textContent;
    calcObj.last = calcObj.current;
    calcObj.current = '';
    currentObj();
  });
};

// Add event listeners to num keys
let numBtns = document.querySelectorAll('.num');

for (let i = 0; i < numBtns.length; i++) {
  numBtns[i].addEventListener('click', (e) => {
    let activeNum = e.target.textContent;
    calcObj.current = calcObj.current + activeNum;
    display.textContent = calcObj.current;
    currentObj();
  });
};

let allBtns = document.querySelectorAll('.btn');
document.addEventListener('keydown', (e) => {
  console.log(e.key);
})