const deleteBtn = document.getElementById('delete-button');
const clearBtn = document.getElementById('clear-button');
const  percentageBtn = document.getElementById('percentage-button');
const divideBtn = document.getElementById('divide-button');
const multiplyBtn = document.getElementById('multiply-button');
const substractBtn = document.getElementById('substract-button');
const addBtn = document.getElementById('add-button');
const decimalBtn = document.getElementById('decimal-button');
const equalBtn = document.getElementById('equal-button');
const numberBtns = document.querySelectorAll('.number');

//initialise the variable
let output ="";
let operation ="";
let previousOperand =0;

//function to append number
const appendNumber =(number)=>{
  if(number ==='.'&& output.includes('.')){return}
  output=output+number;
  updateDisplay();
}


// function to update display
const updateDisplay = () => {
  if(operation){
    inputBox.placeholder = `${previousOperand} ${operation} ${output}`
  }
  else{
    inputBox.placeholder = output;
}
}


//function to select operator
  const selectOperator = (operatorValue) =>{
  if(output === ''){return ;}
  if(operation !==''&& previousOperand !==''){calculateResult();}
  // updateDisplay(); 
  operation = operatorValue;
  previousOperand = output; //
  output = ""; // ye wala puran ban gya jaise ku6 nhi diya ho
  updateDisplay();
}


//calu
 const calculateResult =()=>{
let evaluatedResult;
const prev = parseFloat(previousOperand);
const current = parseFloat(output);

if(isNaN(prev) || isNaN(current)) return;

switch (operation){
  case '+':
    evaluatedResult = prev + current;
    break;
    case '-':
    evaluatedResult = prev - current;
    break;
    case '*':
    evaluatedResult = prev * current;
    break;
    case '/':
    evaluatedResult = prev / current;
    break;
    default:
      return ;
}
output =evaluatedResult.toString();
operation ='';
previousOperand='';
 }

 //clearfunction
 const clear=()=>{
  output='';
  previousOperand='';
  operation='';
  updateDisplay();

 }


 //delete
 const deletelast=()=>{
  if(output ==='') return;
  output = output.slice(0,-1);
  updateDisplay();
 }


//add event listner to number button
numberBtns.forEach((button) =>{
  button.addEventListener('click', ()=>{
    appendNumber(button.innerHTML);
  });
});


//add event listner to number operator
divideBtn.addEventListener('click',()=>{
  // appendNumber('/');  
  // OR
  (selectOperator(divideBtn.innerHTML));
});

multiplyBtn.addEventListener('click',()=>{
  selectOperator('*');
});

substractBtn.addEventListener('click',()=>{
  selectOperator('-');
});

addBtn.addEventListener('click',()=>{
  selectOperator('+');
});

decimalBtn.addEventListener('click',()=>{
  appendNumber('.');
});

equalBtn.addEventListener('click',()=>{
  // if(result==='') return;
  calculateResult();
  updateDisplay();
});

clearBtn.addEventListener('click',clear);

deleteBtn.addEventListener('click',deletelast);
