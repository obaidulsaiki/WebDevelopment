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
let userDefinedColor = prompt("Enter color: ");
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
leftImage.src = prompt("Enter your image link: ");
//copyRight comment linking......
copyRight.textContent = prompt("Enter your Copywrite comment: ");
//input - passage......
username.textContent = prompt(" give name : ");
profession.textContent = prompt("your profession : ");
education.textContent = prompt("Your Current Level of Education: ");
fieldOfStudy.textContent = prompt("Your Field of Study: ");
school.textContent = prompt("Your School Name: ");
passion.textContent = prompt("Your Passion and Interest: ");
numYear.textContent = parseFloat(prompt("Number of Years: "));
hobby.textContent = prompt("Your Hobbies or Interests: ");
characteristics.textContent = prompt(
  "Your Personal Traits or Characteristics: "
);
ability.textContent = prompt("Your Strengths or Abilities: ");
goal.textContent = prompt("Your Goals or Vision: ");
//links linking
fbLink.href = prompt("Give the profile link: ");
gmail.href = prompt("Give the profile link: ");
github.href = prompt("Give the profile link: ");
