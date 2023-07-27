// Your solution goes here
// API -> https://64b2e33138e74e386d55b072.mockapi.io/api/hanover
//menu objects
const menuItems = [];
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
let searchValue = searchBox.value.toLowerCase().trim();

searchForm.addEventListener("submit", renderMenu);
//for taking innerhtml and menu object -------------------------------
function menuItemToShow(params) {
  return `<div class="item col-md-6 col-lg-4 p-3" data-category="${params.typeItem}",
}">
  <div class="card">
    <div class="img-container">
      <img
        src="${params.thumbnail}"
        alt="${params.typeItem}"
      />
      <span class="category-pill">${params.cardType}</span>
    </div>
    <div class="card-body">
      <h5 class="card-title">${params.name}</h5>
      <p class="card-text">
        ${params.desc}
      </p>
      <button class="addToCartBtn btn w-100">Add to cart</button>
    </div>
  </div>
</div>`;
}
function renderMenu() {
  allItems.innerHTML = "";
  menuItems.forEach((item) => {
    if (item.name.toLowerCase().includes(searchValue)) {
      items.innerHTML += menuItemToShow(item);
    }
  });
}
/* {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }*/
//fetching data from api--------------------------------
async function getMenus() {
  allItems.innerHTML = "loading...";
  const apiUrl = "https://64b2e33138e74e386d55b072.mockapi.io/api/hanover";
  const option = {
    method: "GET",
  };
  try {
    let Response = await fetch(apiUrl, option);
    let data = await Response.json();
    data.forEach((current) => {
      menuItems.push(current);
      //console.log(menuItems);
      renderMenu();
    });
  } catch {
    console.log("No Data found pls try again");
  }
}
getMenus();

//-------------------------------------------------------------------
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
function filterFunction(params) {}

//------------------------------------------------------------------------
