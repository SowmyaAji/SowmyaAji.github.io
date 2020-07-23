// dynamically add employment
function addEmpt() {
  let empt = document.createElement("div");
  empt.setAttribute("id", "empt");
  let para = document.createElement("p");
  let label = document.createElement("label");
  label.htmlFor = "startDate";
  let labelText = document.createTextNode(
    "Enter the start date for employment: "
  );
  label.appendChild(labelText);
  let linebreak = document.createElement("br");
  label.appendChild(linebreak);
  let input = document.createElement("input");
  input.setAttribute("type", "date");
  input.setAttribute("name", "startDate");
  input.setAttribute("class", "startDate");
  label.appendChild(input);
  para.appendChild(label);
  empt.appendChild(para);
  para = document.createElement("p");
  label = document.createElement("label");
  label.htmlFor = "endDate";
  labelText = document.createTextNode("Enter the end date for employment: ");
  label.appendChild(labelText);
  linebreak = document.createElement("br");
  label.appendChild(linebreak);
  input = document.createElement("input");
  input.setAttribute("type", "date");
  input.setAttribute("name", "endDate");
  input.setAttribute("class", "endDate");
  label.appendChild(input);
  para.appendChild(label);
  empt.appendChild(para);
  para = document.createElement("p");
  label = document.createElement("label");
  label.htmlFor = "employment";
  labelText = document.createTextNode("Enter your employment experience: ");
  label.appendChild(labelText);
  linebreak = document.createElement("br");
  label.appendChild(linebreak);
  let textArea = document.createElement("textarea");
  textArea.setAttribute("name", "employment");
  textArea.setAttribute("cols", "72");
  textArea.setAttribute("class", "employment");
  textArea.setAttribute("rows", "10");
  label.appendChild(textArea);
  para.appendChild(label);
  empt.appendChild(para);
  document.getElementById("employmentDeets").appendChild(empt);
}

// remove employment
function removeEmpt() {
  const empt = document.getElementById("empt");
  document.getElementById("employmentDeets").removeChild(empt);
}

// add education
function addEdu() {
  let edu = document.createElement("div");
  edu.setAttribute("id", "edu");
  let para = document.createElement("p");
  let label = document.createElement("label");
  label.htmlFor = "degree";
  let labelText = document.createTextNode(
    "Enter degree, certificate or course name: "
  );
  label.appendChild(labelText);
  let linebreak = document.createElement("br");
  label.appendChild(linebreak);
  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "degree");
  input.setAttribute("class", "degree");
  label.appendChild(input);
  para.appendChild(label);
  edu.appendChild(para);

  para = document.createElement("p");
  label = document.createElement("label");
  label.htmlFor = "major";
  labelText = document.createTextNode("Enter major(s): ");
  label.appendChild(labelText);
  linebreak = document.createElement("br");
  label.appendChild(linebreak);
  input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "major");
  input.setAttribute("class", "major");
  label.appendChild(input);
  para.appendChild(label);
  edu.appendChild(para);

  para = document.createElement("p");
  label = document.createElement("label");
  label.htmlFor = "gpa";
  labelText = document.createTextNode(
    "Enter GPA/Grade or score out of total:  "
  );
  label.appendChild(labelText);
  linebreak = document.createElement("br");
  label.appendChild(linebreak);
  input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "gpa");
  input.setAttribute("class", "gpa");
  label.appendChild(input);
  para.appendChild(label);
  edu.appendChild(para);

  para = document.createElement("p");
  label = document.createElement("label");
  label.htmlFor = "year";
  labelText = document.createTextNode(
    "Enter date or expected date of completion: "
  );
  label.appendChild(labelText);
  linebreak = document.createElement("br");
  label.appendChild(linebreak);
  input = document.createElement("input");
  input.setAttribute("type", "date");
  input.setAttribute("name", "year");
  input.setAttribute("class", "year");
  label.appendChild(input);
  para.appendChild(label);
  edu.appendChild(para);
  document.getElementById("educationDeets").appendChild(edu);
}

// remove education
function removeEdu() {
  const edu = document.getElementById("edu");
  document.getElementById("educationDeets").removeChild(edu);
}

function validateInput(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validateEmail(email) {
  if (validateInput(email)) {
    return email;
  } else {
    document.getElementById("error").innerHTML =
      "Please enter a valid email address";
    document.getElementById("email").focus();
  }
}

// get the year from the date input or return blank
function getYear(date) {
  if (date == "") {
    return date;
  } else {
    let year = date.slice(0, 4);
    return year;
  }
}

// get the start year; if both start and end year are the same, do not return start year
function getStartYear(date1, date2) {
  if (date2 == date1) {
    date1 = "";
  }
  return date1;
}

// get the month from the date input and return in correct format
function getMonth(date) {
  // months in the format we want
  const months = [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "June",
    "July",
    "Aug.",
    "Sept.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];
  if (date == "") {
    return date;
  } else {
    let month = date.slice(5, 7);
    let monthday = 0;
    if (month < 10) {
      monthday = parseInt(month[1]);
    } else {
      monthday = parseInt(month);
    }
    let formattedMonth = months[monthday - 1];
    return formattedMonth;
  }
}

function getEducation(degree, major, gpa, year) {
  let myText =
    "<div><div class='left'>" +
    degree +
    "</div><div class='right'>" +
    major +
    "<br>GPAGrade: " +
    gpa +
    "<br>Year completed or expected: " +
    year +
    "</div></div><br>\n";
  return myText;
}

// set the employment years and details in columns for each entry
function getEmployment(startDate, endDate, employment) {
  let endYear = getYear(endDate);
  let startYear = getStartYear(getYear(startDate), endYear);

  let myText =
    "<div><div class='left'>" +
    getMonth(startDate) +
    " " +
    startYear +
    " " +
    "-" +
    " " +
    getMonth(endDate) +
    " " +
    endYear +
    "</div><div class='right'>" +
    employment +
    "</div></div><br>\n";
  return myText;
}

// get all the inputs and put them into formatted html
function generateHTML() {
  const fullName = document.getElementById("fullName").value;
  const fullAddress = document.getElementById("fullAddress").value;
  const phone = document.getElementById("telePhone").value;
  const email = document.getElementById("email").value;
  const website = document.getElementById("website").value;
  // get validated email
  const validatedEmail = validateEmail(email);
  const career = document.getElementById("careerObj").value;
  const personal = document.getElementById("peronalInfo").value;
  const education = document.getElementById("educationDeets").childNodes;
  // convert the child nodelist into an array
  const eduArray = [...education];
  const employments = document.getElementById("employmentDeets").childNodes;

  const empArray = [...employments];
  const references = document.getElementById("references").value;
  const bizReferences = document.getElementById("bizReferences").value;

  // return html only if the email input is valid
  if (validateInput(email)) {
    let myText =
      "<html>\n<head>\n<title>My Resume</title>\n<link rel='stylesheet' type='text/css' href='project.css' />\n</head>\n<body>\n";

    myText += "<div>" + fullName + "</div>";
    myText += "<div>" + fullAddress + " / " + phone + "</div>";
    myText += "<div>" + validatedEmail + "</div>";
    myText += "<div>" + website + "</div>";
    myText += "<hr>";
    myText +=
      "<div><div class='left'> CAREER SKILLS </div><div class='right'>" +
      career +
      "</div></div><br>";
    myText +=
      "<div><div class='left'> PERSONAL DATA </div><div class='right'>" +
      personal +
      "</div></div><br>";
    myText +=
      "<div><div class='left'> EDUCATION </div></div>";
      //  class='right'>" +
      // education +
      // "</div></div><br>";
    if (eduArray.length > 0) {
      for (let i = 1; i < eduArray.length; i++) {
        let degree = eduArray[i].querySelector(".degree").value;
        let major = eduArray[i].querySelector(".major").value;
        let gpa = eduArray[i].querySelector(".gpa").value;
        let year = eduArray[i].querySelector(".year").value;
        myText += getEducation(degree, major, gpa, year);
      }
    }
    myText += "<div><div class='left'> EMPLOYMENT DETAILS </div></div>";
    if (empArray.length > 0) {
      for (let i = 1; i < empArray.length; i++) {
        let startDate = empArray[i].querySelector(".startDate").value;
        console.log(startDate);
        let endDate = empArray[i].querySelector(".endDate").value;
        console.log(endDate);
        let employment = empArray[i].querySelector(".employment").value;
        console.log(employment);
        myText += getEmployment(startDate, endDate, employment);
      }
    }

    myText +=
      "<div><div class='left'> CHARACTER REFERENCES </div><div class='right'>" +
      references +
      "</div></div><br>";
    myText +=
      "<div><div class='left'> BUSINESS REFERENCES </div><div class='right'>" +
      bizReferences +
      "</div></div>\n";
    // give print option from browser
    myText +=
      "<div class='right'><br><input type='button' id='download' name='download' value='Download' onclick='window.print()' /></div>";
    myText += "</body>\n</html>";
    return myText;
  }
}

// generate a window with the html input
function createResume() {
  const myText = generateHTML();
  // create window only if email is valid and returns myText
  if (myText) {
    let flyWindow = window.open(
      "about:blank",
      "myResume",
      "width=800,height=800,left=200,top=200"
    );
    flyWindow.document.write(myText);
  }
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


addListener(document.getElementById("addEdu"), "click", addEdu);
addListener(document.getElementById("removeEdu"), "click", removeEdu);
addListener(document.getElementById("add"), "click", addEmpt);
addListener(document.getElementById("remove"), "click", removeEmpt);
addListener(document.getElementById("create"), "click", createResume);
