let display = document.querySelector('#display');

let calcObj = {
  display: '',
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
  return parseInt(calcObj.last) + parseInt(calcObj.current);
};

const subtract = () => {
  return parseInt(calcObj.last) - parseInt(calcObj.current);
};

const multiply = () => {
  return parseInt(calcObj.last) * parseInt(calcObj.current);
};

const divide = () => {
  if (calcObj.current == '0') {
    return "I'm melting...";
  };
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
  display.textContent = result;
  calcObj.last = result;
  calcObj.current = '';
  currentObj();
  return result;
};

const calculateButton = document.querySelector('#calculate');
calculateButton.addEventListener('click', (e) =>{
  let solution = operate(calcObj.operator);
  calcObj.display = String(solution);
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', (e) => {
  calcObj.display = '';
  calcObj.current = '';
  calcObj.last = '';
  calcObj.operator = '';
  display.textContent = '';
});

// Add event listeners to operator keys
let oprBtns = document.querySelectorAll('.opr');

for (let i = 0; i < oprBtns.length; i++) {
  oprBtns[i].addEventListener('click', (e) => {
    calcObj.operator = e.target.textContent;
    if (calcObj.last !== '') operate();

    calcObj.last = calcObj.current;
    calcObj.current = '';
    calcObj.display = '';
  });
};

// Add event listeners to num keys
let numBtns = document.querySelectorAll('.num');

for (let i = 0; i < numBtns.length; i++) {
  numBtns[i].addEventListener('click', (e) => {
    let activeNum = e.target.textContent;
    calcObj.display = calcObj.display + activeNum;
    calcObj.current = calcObj.current + activeNum;
    display.textContent = calcObj.display;
  });
};