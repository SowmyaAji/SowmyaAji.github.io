function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

let number = getRandomInt(15);
console.log(number);
let number1 = getRandomInt(15);
console.log(number1);
let x = getRandomInt(15);
let y = getRandomInt(15);
if (y === x) {
  console.log("Y is equal to X: " + "X: " + x + " Y: " + y);
  y = getRandomInt(15);
  console.log(`New Y: ${y}`);
}
console.log("We are the variables: {" + x + " " + y + "}");

let inEq1 = number * x + number * y;
let inEq2 = number1 * y + (number - y);
let inEq3 = number * y - number + y;
let inEq4 = number1 * x - number1 + x;

let eq1Text = [
  `${number}( x + ${y} ) > ${inEq1}`,
  `${number}x - ${number + y} >= ${inEq3}`,
];

let eq2Text = [
  `${number1}x + ${number - y} < ${inEq2}`,
  `${number1}x - ${number1 + x} <= ${inEq4}`,
];

const currentEq = (arr) => arr[Math.floor(Math.random() * arr.length)];
let eq1 = currentEq(eq1Text);
let eq2 = currentEq(eq2Text);

document.getElementById("inequal").innerHTML = `
Equation 1: ${eq1} <br> 
Equation 2: ${eq2}`;

document.getElementById("response").innerHTML = "";

function checkAnswers() {
  let answerX = +document.getElementById("myX").value;
  let answerY = +document.getElementById("myY").value;
  console.log(answerY, typeof answerY);
  console.log(answerX, typeof answerX);
  console.log("I'm at answerX: " + x);
  console.log("Im at answerY: " + y);
  if (answerX === x && answerY === y) {
    document.getElementById("response").innerHTML = `Yes! You got that right!`;
  } else {
    document.getElementById(
      "response"
    ).innerHTML = `Sorry you got that wrong. Try again. <br>
      Or click button below for answers `;
    document.getElementById("display").style.display = "inline-block";
  }
  document.getElementById("next").style.display = "inline-block";
}
// let equivalences = {
//   x: " * " + x,
//   y: " * " + y,
// };

// let solved = (eq) =>
//   eq.replace(/x|y/g, function (matched) {
//     return equivalences[matched];
//   });

function result() {
  let result = "";
  if (x < y) {
    result = `This is an OR inequality.`;
  } else {
    result = `The solution is all real numbers`;
  }
  return result;
}

document.getElementById("add").innerHTML = "";
function display() {
  document.getElementById("add").innerHTML = `Answers:<br><br>
  {  ${x}, ${y} } <br><br>
  ${result()} <br><br>
   How to solve linear inequalities:<br><br>

   <a href="https://www.khanacademy.org/test-prep/sat/sat-math-practice/new-sat-heart-of-algebra/v/sat-math-h6-easier" target="_blank">Tutorial</a>
  <br>  
  `;
}
function addListener(obj, type, fn) {
  // if browser supports event listener
  if (obj.addEventListener) {
    obj.addEventListener(type, fn);
  }
  // if browser supports attach event (older browsers)
  else {
    obj.attachEvent("on" + type, fn);
  }
}

addListener(document.getElementById("answer"), "click", checkAnswers);
