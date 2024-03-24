let display = document.querySelector('#display');

let calcObj = {
  current: '',
  last: '',
  operator: ''
};

// This function is for debugging purposes only
const currentObj = () => {
  Object.keys(calcObj).forEach(key => {
    let value = calcObj[key];
    console.log(`Key: ${key}, Value: ${value}`);
  });
};

const checkZero = () => {
  if (calcObj.operator == '/' && calcObj.current == '0') {
    display.textContent = "Bad!";
    setTimeout(() => {
      display.textContent = calcObj.last;
      calcObj.current = '';
    }, 800);
    currentObj();
    return true;
  };
  return false;
};

const calculate = () => {
  if(checkZero()) return;
  
  if (!calcObj.current || !calcObj.last) {
    currentObj();
    return;
  }
  let solution = operate(calcObj.operator);
  calcObj.last = solution;
  display.textContent = solution;
  calcObj.current = '';
  calcObj.operator = '';
  currentObj();
};

const clear = () => {
  calcObj.current = '';
  calcObj.last = '';
  calcObj.operator = '';
  display.textContent = '';
  currentObj();
};

const deleted = () => {
  if (!calcObj.current) return;
  
  let newCurrent = calcObj.current.slice(0, -1);
  calcObj.current = newCurrent;
  display.textContent = calcObj.current;
};

const add = () => {
  if (calcObj.last === '') calcObj.last = 0;
  return parseFloat(calcObj.last) + parseFloat(calcObj.current);
};

const subtract = () => {
  if (calcObj.last === '') calcObj.last = 0;
  return parseFloat(calcObj.last) - parseFloat(calcObj.current);
};

const multiply = () => {
  if (calcObj.last === '') calcObj.last = 1;
  return parseFloat(calcObj.last) * parseFloat(calcObj.current);
};

const divide = () => {
  if (calcObj.last === '') return;
  return parseFloat(calcObj.last) / parseFloat(calcObj.current);
};

const operate = () => {
  let result = 0;

  if (calcObj.current === '') return;

  switch (calcObj.operator) {
    case "+": {
      result = add();
      break;
    }; 
    case "-": {
      result = subtract();
      break;
    };
    case "*": {
      result = multiply();
      break
    };
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
  calculate();
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', (e) => {
  clear();
});

const deleteBtn = document.querySelector('#delete');
deleteBtn.addEventListener('click', (e) => {
  deleted();
});

// Add event listeners to operator keys
let oprBtns = document.querySelectorAll('.opr');

for (let i = 0; i < oprBtns.length; i++) {
  oprBtns[i].addEventListener('click', (e) => {
    if (!calcObj.current) {
      calcObj.current = calcObj.last;
      calcObj.last = '';
    };
    
    let calculated = operate(calcObj.operator);
    
    calcObj.operator = e.target.textContent;
    
    if (!calcObj.last) {
      calcObj.last = calcObj.current
    } else {
      calcObj.last = calculated;
    };

    display.textContent = calcObj.last;
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

// Add event listeners to operator and enter keys
let allBtns = document.querySelectorAll('.btn');
document.addEventListener('keydown', (e) => {
  let pressed = e.key;
  console.log(pressed);

  if(pressed === "=" || pressed === "Enter") {
    calculate()
  };

  if (pressed === "Backspace") {
    deleted();
  };

  if (pressed === 'Delete') {
    clear();
  };

  if (pressed === '+' || pressed === '-' || pressed === '*' || pressed === '/') {
    if (!calcObj.current) {
      calcObj.current = calcObj.last;
      calcObj.last = '';
    };
    
    let calculated = operate(calcObj.operator);
    
    calcObj.operator = pressed;
    
    if (!calcObj.last) {
      calcObj.last = calcObj.current
    } else {
      calcObj.last = calculated;
    };

    display.textContent = calcObj.last;
    calcObj.current = '';
    currentObj();
  };
  if (pressed === '.') {
    calcObj.current += '.';
    display.textContent = calcObj.current;
  };
  pressed = parseFloat(pressed);
  if (pressed >= 0 && pressed <= 9) {
    calcObj.current += String(pressed);
    display.textContent = calcObj.current;
  };
  return;
});