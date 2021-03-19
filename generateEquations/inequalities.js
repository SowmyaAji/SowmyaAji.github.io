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

document.getElementById("equation").innerHTML = `
Equation 1: ${currentEq(eq1Text)} <br> 
Equation 2: ${currentEq(eq2Text)}`;

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

document.getElementById("add").innerHTML = "";
function display() {
  document.getElementById("add").innerHTML = `Answers:  x = ${x}, y = ${y}`;
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
