function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

let number = getRandomInt(20);
let number1 = getRandomInt(20);
let x = getRandomInt(20);
let y = getRandomInt(20);
let z = getRandomInt(20);

let number2 = number * x + number1 * y;
let number3 = number * x - number1 * y;
let number4 = (number + z) * x - (number1 + z) * y;
let number5 = (number + z) * x + (number1 + z) * y;

let eq1Text = [
  `${number}x + ${number1}y = ${number2}`,
  `${number + z}x - ${number1 + z}y = ${number4}`,
];

let eq2Text = [
  `${number}x - ${number1}y = ${number3}`,
  `${number + z}x + ${number1 + z}y = ${number5}`,
];

const currentEq = (arr) => arr[Math.floor(Math.random() * arr.length)];
let eq1 = currentEq(eq1Text);
let eq2 = currentEq(eq2Text);

document.getElementById("equation").innerHTML = `
Equation 1: ${eq1} <br> 
Equation 2: ${eq2}`;

document.getElementById("response").innerHTML = "";

function checkAnswers() {
  let answerX = +document.getElementById("myX").value;
  let answerY = +document.getElementById("myY").value;
  console.log(answerY, typeof answerY);
  console.log(answerX, typeof answerX);
  console.log("I'm x: " + x);
  if (answerX === x && answerY === y) {
    document.getElementById("response").innerHTML = `Yes!!! That's the answer!`;
  } else {
    document.getElementById(
      "response"
    ).innerHTML = `Sorry you got that wrong. Try again. <br>
      Or click button below for answers `;
    document.getElementById("display").style.display = "inline-block";
  }
  document.getElementById("next").style.display = "inline-block";
}
let equivalences = {
  x: " * " + x,
  y: " * " + y,
};

let solved = (eq) =>
  eq.replace(/x|y/g, function (matched) {
    return equivalences[matched];
  });

document.getElementById("add").innerHTML = "";
function display() {
  document.getElementById("add").innerHTML = `Answers:<br><br>
  { x = ${x}, y = ${y} } <br>
  <br>
  Solutions:<br><br>
  Equation 1: ${eq1} <br>
  Solved: ${solved(eq1)} <br>
  <br>
  Equation 2: ${eq2}<br>
  Solved: ${solved(eq2)} <br>
  <br>
  Methods:<br><br> 
  1. Substitution <br>
  <a href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:systems-of-equations/x2f8bb11595b61c86:solving-systems-of-equations-with-substitution/v/solving-systems-with-substitution" target="_blank">Tutorial</a><br><br>
  2. Elimination <br>
  <a href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:systems-of-equations/x2f8bb11595b61c86:solving-systems-elimination/v/simple-elimination-practice" target="_blank">Tutorial</a><br><br>
  3. Graphing <br>
  <a href="https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-systems-topic/cc-8th-systems-graphically/v/solving-linear-systems-by-graphing" target="_blank">Tutorial</a><br>  
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
