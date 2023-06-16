// Your solution goes here
// Hints:
// 1. Assign a id to the tags you want to select
// 2. Use appropriate methods and properties to complete the specified task.
// Example:
// (style) property to change style
// (classList) property to modify class
// (getAttribute) and (setAttribute) to modify attributes

//left side pic,copyRight,background.....
let leftImage = document.getElementById("iits-img");
let copyRight = document.getElementById("iits-cr-msg");
let bkgroundColor = document.getElementById("iits-bg");
//passage.....
let username = document.getElementById("iits-name");
let profession = document.getElementById("iits-prof");
let education = document.getElementById("iits-edu");
let fieldOfStudy = document.getElementById("iits-study");
let school = document.getElementById("iits-school");
let passion = document.getElementById("iits-passion");
let numYear = document.getElementById("iits-numYears");
let hobby = document.getElementById("iits-hobby");
let characteristics = document.getElementById("iits-crc");
let ability = document.getElementById("iits-ability");
let goal = document.getElementById("iits-goal");
//links.....
let fbLink = document.getElementById("iits-fb-link");
let gmail = document.getElementById("iits-email");
let github = document.getElementById("iits-github-link");
//button.....
let button = document.getElementById("iits-btn");
//input color....
let userDefinedColor = "orange";
//for background......
bkgroundColor.classList.remove("bg-danger");
bkgroundColor.style.backgroundColor = userDefinedColor;
//passage......
username.classList.remove("text-danger");
username.style.color = userDefinedColor;
profession.classList.remove("text-danger");
profession.style.color = userDefinedColor;
education.classList.remove("text-danger");
education.style.color = userDefinedColor;
fieldOfStudy.classList.remove("text-danger");
fieldOfStudy.style.color = userDefinedColor;
school.classList.remove("text-danger");
school.style.color = userDefinedColor;
passion.classList.remove("text-danger");
passion.style.color = userDefinedColor;
numYear.classList.remove("text-danger");
numYear.style.color = userDefinedColor;
hobby.classList.remove("text-danger");
hobby.style.color = userDefinedColor;
characteristics.classList.remove("text-danger");
characteristics.style.color = userDefinedColor;
ability.classList.remove("text-danger");
ability.style.color = userDefinedColor;
goal.classList.remove("text-danger");
goal.style.color = userDefinedColor;
//button......
button.classList.remove("btn-danger");
button.style.backgroundColor = userDefinedColor;
//image linking.......
leftImage.src =
  "data:image/jpeg;base64,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";
//copyRight comment linking......
copyRight.textContent = "by obaidul haque";
//input - passage......
username.textContent = "Obaidul Haque";
profession.textContent = "Student";
education.textContent = "bachelor";
fieldOfStudy.textContent = "CSE";
school.textContent = "IUBAT";
passion.textContent = "Programming";
numYear.textContent = "1 year";
hobby.textContent = "Watching anime,playing games";
characteristics.textContent = "Hardworking";
ability.textContent = "develope my working skill";
goal.textContent = "learn and be a developer";
//links linking
fbLink.href = "https://www.facebook.com/obidul.saki/";
gmail.href = "mailto:saki.obidul@gmail.com";
github.href = "https://github.com/obaidulsaiki";
