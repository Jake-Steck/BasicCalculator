const display = document.getElementById("display");
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const addition = document.getElementById("add");
const subtraction = document.getElementById("subtract");
const multiplication = document.getElementById("multiply");
const division = document.getElementById("divide");
const del1 = document.getElementById("delete");
const clear1 = document.getElementById("clear");
const decimals = document.getElementById("decimal");
const equals = document.getElementById("equal");

zero.addEventListener("click",numZero);
one.addEventListener("click",numOne);
two.addEventListener("click",numTwo);
three.addEventListener("click",numThree);
four.addEventListener("click",numFour);
five.addEventListener("click",numFive);
six.addEventListener("click",numSix);
seven.addEventListener("click",numSeven);
eight.addEventListener("click",numEight);
nine.addEventListener("click",numNine);
addition.addEventListener("click",add);
subtraction.addEventListener("click",subtract);
multiplication.addEventListener("click",multiply);
division.addEventListener("click",divide);
del1.addEventListener("click",del);
clear1.addEventListener("click",clear);
decimals.addEventListener("click",decimal);
equals.addEventListener("click",eval);

function operational() {
  if (operator === 1) {
    operator.pop();
    evaluatE();
  }
}


display.textContent = '';
let operator = [];

function add2(a,b) {
  display.textContent = parseFloat(a) + parseFloat(b);
  // return a + b;
}

function sub(a,b) {
  display.textContent = a - b;
  // return a - b;
}

function mult(a,b) {
  display.textContent = a * b;
  // return a * b;
}

function div(a,b) {
  display.textContent = a / b;
  // return a / b;
}

function operate(a,b,sign) {
  if (sign === '+') {
    return add2(a,b);
  }
  if (sign === '-') {
    return sub(a,b);
  }
  if (sign === '×') {
    return mult(a,b);
  }
  if (sign === '÷') {
    return div(a,b);
  }
}


function eval()  {
  let split = display.textContent.split(' ');
  return operate(split[0], split[2], split[1]);      
}


function numZero() {
  display.textContent += "0";
}

function numOne() {
  display.textContent += "1";
}

function numTwo() {
  display.textContent += "2";
}

function numThree() {
  display.textContent += "3";
}

function numFour() {
  display.textContent += "4";
}

function numFive() {
  display.textContent += "5";
}

function numSix() {
  display.textContent += "6";
}

function numSeven() {
  display.textContent += "7";
}

function numEight() {
  display.textContent += "8";
}

function numNine() {
  display.textContent += "9";
}

function add() {
  display.textContent += " + ";
  operator.push("+");
}

function subtract() {
  display.textContent += " - ";
  operator.push("-");

}

function multiply() {
  display.textContent += " × ";
  operator.push("×");
}

function divide() {
  display.textContent += " ÷ ";
  operator.push("÷");
}

function del() {
  display.textContent += "";
  let text = display.textContent.split("");
  text.pop();
  display.textContent = text.join("")
}

function clear() {
  display.textContent = "";
  operator= [];
}

function decimal() {
  display.textContent += ".";
}

function equal() {
  display.textContent += "=";
  
}


window.addEventListener('keydown',function(e) {
  e.preventDefault()
  switch(e.key) {
    case '0':
    numZero();
    break;
    case '1':
    numOne();
    break;
    case '2':
    numTwo();
    break;
    case '3':
    numThree();
    break;
    case '4':
    numFour();
    break;
    case '5':
    numFive();
    break;
    case '6':
    numSix();
    break;
    case '7':
    numSeven();
    break;
    case '8':
    numEight();
    break;
    case '9':
    numNine();
    break;
  }
})


