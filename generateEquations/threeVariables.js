function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

let number = getRandomInt(20);
console.log(number);
let number1 = getRandomInt(20);
console.log(number1);
let number10 = getRandomInt(20);
console.log(number10);
let x = getRandomInt(20);
let y = getRandomInt(20);
let z = getRandomInt(20);
let w = getRandomInt(20);
if (w === x || w === y || w === z) {
  console.log(
    "W is equal to X, Y or Z: " +
      w +
      " " +
      "Z: " +
      z +
      " " +
      "X: " +
      x +
      " Y: " +
      y
  );
  z = getRandomInt(20);
  console.log(`New Z: ${z}`);
}
console.log(`We are the variables: {${w} ${x} ${y} ${z}}`);
let number2 = number * x + number1 * y + number10 * z;
let number3 = number * x - number1 * y + number10 * z;
let number4 = number * x - number1 * y - number10 * z;
let number5 = number * x + number1 * y - number10 * z;

let number6 = (number - w) * x - (number1 - w) * y - (number10 - w) * z;
let number7 = (number - w) * x + (number1 - w) * y + (number10 - w) * z;
let number8 = (number + w) * x + (number1 + w) * y + (number10 + w) * z;
let number9 = (number + w) * x - (number1 + w) * y - (number10 + w) * z;

let number11 = (number - w) * x + (number1 - w) * y - (number10 - w) * z;
let number12 = (number - w) * x - (number1 - w) * y + (number10 - w) * z;
let number13 = (number + w) * x + (number1 + w) * y - (number10 + w) * z;
let number14 = (number + w) * x - (number10 + w) * z;

let eq1Text = [
  `${number}x + ${number1}y + ${number10}z = ${number2}`,
  `${number}x - ${number1}y - ${number10}z = ${number4}`,
  `${number - w}x + ${number1 - w}y + ${number10 - w}z = ${number7}`,
  `${number + w}x - ${number1 + w}y - ${number10 + w}z = ${number9}`,
];

let eq2Text = [
  `${number}x - ${number1}y + ${number10}z = ${number3}`,
  `${number}x + ${number1}y - ${number10}z = ${number5}`,
  `${number - w}x - ${number1 - w}y  - ${number10 - w}z = ${number6}`,
  `${number + w}x + ${number1 + w}y + ${number10 + w}z = ${number8}`,
];

let eq3Text = [
  `${number - w}x + ${number1 - w}y  - ${number10 - w}z = ${number11}`,
  `${number - w}x - ${number1 - w}y + ${number10 - w}z = ${number12}`,
  `${number + w}x + ${number1 + w}y - ${number10 + w}z = ${number13}`,
  `${number + w}x -  ${number10 + w}z = ${number14}`,
];

const currentEq = (arr) => arr[Math.floor(Math.random() * arr.length)];
let eq1 = currentEq(eq1Text);
let eq2 = currentEq(eq2Text);
let eq3 = currentEq(eq3Text);

document.getElementById("equation").innerHTML = `
Equation 1: ${eq1} <br> 
Equation 2: ${eq2} <br>
Equation 3: ${eq3}`;

document.getElementById("response").innerHTML = "";

function checkAnswers() {
  let answerX = +document.getElementById("myX").value;
  let answerY = +document.getElementById("myY").value;
  let answerZ = +document.getElementById("myZ").value;
  console.log(answerY, typeof answerY);
  console.log(answerX, typeof answerX);
  console.log(answerZ, typeof answerZ);
  console.log("I'm at answerX: " + x);
  console.log("Im at answerY: " + y);
  console.log("Im at answerZ: " + z);
  if (answerX === x && answerY === y && answerZ === z) {
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
  z: " * " + z,
};

let solved = (eq) =>
  eq.replace(/x|y|z/g, function (matched) {
    return equivalences[matched];
  });

document.getElementById("add").innerHTML = "";
function display() {
  document.getElementById("add").innerHTML = `Answers:<br><br>
  { x = ${x}, y = ${y} , z = ${z} } <br>
  <br>
  Solutions:<br><br>
  Equation 1: ${eq1} <br>
  Solved: ${solved(eq1)} <br>
  <br>
  Equation 2: ${eq2}<br>
  Solved: ${solved(eq2)} <br>
  <br>
  Equation 3: ${eq3}<br>
  Solved: ${solved(eq3)} <br>
  <br>
  How To Solve:<br><br> 
  
  <a href="https://www.khanacademy.org/math/algebra-home/alg-system-of-equations/alg-systems-with-three-variables/v/systems-of-three-variables-2" target="_blank">Tutorial</a><br><br>  
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
