let display = document.querySelector('#display');

let calcObj = {
  display: display.textContent,
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
  return calcObj.last + calcObj.current;
};

const subtract = () => {
  return calcObj.last - calcObj.current;
};

const multiply = () => {
  return calcObj.last * calcObj.current;
};

const divide = () => {
  return calcObj.last / calcObj.current;
};

const operate = () => {
  switch (calcObj.operator) {
    case "+": {
      let result = add();
      return result;
    }  
    case "-": {
      let result = subtract();
      return result;
    }
    case "*": {
      let result = multiply();
      return result;
    }
    case "/": {
      let result = divide();
      return result;
    };
  };
};

const calculateButton = document.querySelector('#calculate');
calculateButton.addEventListener('click', (e) =>{
  let solution = operate(calcObj.operator);
  console.log("calc button solution: " + solution);
  calcObj.display = String(solution);
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', (e) => {
  calcObj.display = '';
  calcObj.current = '';
  calcObj.last = '';
  calcObj.operator = '';
});

// Add event listeners to operator keys
let oprBtns = document.querySelectorAll('.opr');

for (let i = 0; i < oprBtns.length; i++) {
  oprBtns[i].addEventListener('click', (e) => {
    calcObj.operator = e.target.textContent;
    console.log("Operator: " + calcObj.operator);
    calcObj.last = calcObj.current;
    console.log("Last: " + calcObj.last)
    calcObj.current = '';
    console.log("Current: " + calcObj.current);
    calcObj.display = '';
  });
};

// Add event listeners to num keys
let numBtns = document.querySelectorAll('.num');

for (let i = 0; i < numBtns.length; i++) {
  numBtns[i].addEventListener('click', (e) => {
    let activeNum = e.target.textContent;
    calcObj.display = calcObj.display + activeNum;
    console.log(activeNum)
  });
};