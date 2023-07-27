// Your solution goes here
// API -> https://64b2e33138e74e386d55b072.mockapi.io/api/hanover
const apiUrl = "https://64b2e33138e74e386d55b072.mockapi.io/api/hanover";
async function fetchAndDisplayItems() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
function initApp() {
  fetchAndDisplayItems();
}
document.addEventListener("DOMContentLoaded", initApp);

//Dom elements-----------------------------------------------------------------------
//cart selection
let cart = document.querySelector("#iits-cart");
let cartCounter = document.querySelector("#iits-cart_counter");
let cartDecrement = document.querySelector("#iits-cart_dec");
//search
let searchSection = document.querySelector("#searchSection");
const searchForm = document.querySelector("#searchForm");
let searchBox = document.querySelector("#iits-searchBox");
let searchBtn = document.querySelector("#btn");
//admin section
let adminSection = document.querySelector("#iits-adminSection");
let cancelBtn = document.querySelector("#iits-cancelBtn");
let addNewForm = document.querySelector("#iits-addNewForm");
//input div
let name = document.querySelector("#name");
let pic = document.querySelector("#pic");
let desc = document.querySelector("#desc");
let typeItem = document.querySelector("#typeItem");
//filtering section
let toggle = document.querySelector("#all_toggle");
let coffee = document.querySelector("#coffee_toggle");
let burger = document.querySelector("#burger_toggle");
//All items
let items = document.querySelector("#iits-items");
const allItems = items.querySelectorAll(".items");
let addToCartBtn = document.querySelector("addToCartBtn");
let AdminButton = document.querySelector("#iits-adminBtn");
let developer = document.querySelector("#iits-developer");
//----------------------------------------------------------------------------------
//for search button
function searchFunction(params) {
  params.preventDefault(); // Prevents the form from submitting and refreshing the page
  let searchValue = searchBox.value.toLowerCase().trim();
  allItems.forEach((item) => {
    if (
      item
        .querySelector(".card-title")
        .textContent.trim()
        .toLowerCase()
        .includes(searchValue)
    ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
searchForm.addEventListener("submit", searchFunction);
//for admin button-----------------------------------------------------
function hideAdmin(params) {
  adminSection.style.display = "none";
}
hideAdmin();
function showAdmin(params) {
  let name = prompt("Enter your name: ");
  let password = prompt("Enter your password: ");
  if (name === "iits" && password === "23") {
    adminSection.style.display = "block";
  }
  cancelBtn.addEventListener("click", hideAdmin);
}
AdminButton.addEventListener("click", showAdmin);
//------------------------------------------------------------------------
//filtering ---------------------------------------------------------------

//------------------------------------------------------------------------
