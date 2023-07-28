// Your solution goes here
// API -> https://64b2e33138e74e386d55b072.mockapi.io/api/hanover
//menu objects
const menuItems = [];
//Dom elements-----------------------------------------------------------------------
//cart selection
let cart = document.querySelector("#iits-cart");
let cartCounter = document.querySelector("#iits-cart_counter");
let cartDecrement = document.querySelector("#iits-cart_dec");
let addToCartBtn = document.querySelectorAll(".addToCartBtn");
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
let Name = document.querySelector("#name");
let pic = document.querySelector("#pic");
let desc = document.querySelector("#desc");
let typeItem = document.querySelector("#typeItem");
//filtering section
let toggle = document.querySelector("#all_toggle");
let coffee = document.querySelector("#coffee_toggle");
let burger = document.querySelector("#burger_toggle");
//All items
let items = document.querySelector("#iits-items");
const allItems = items.querySelectorAll(".item");
let AdminButton = document.querySelector("#iits-adminBtn");
let developer = document.querySelector("#iits-developer");
//----------------------------------------------------------------------------------

//for taking innerhtml and menu object -------------------------------
function menuItemToShow(params) {
  return `<div class="item col-md-6 col-lg-4 p-3" data-category="${params.type}",
}">
  <div class="card">
    <div class="img-container">
      <img
        src="${params.url}"
        alt="${params.type}"
      />
      <span class="category-pill">${params.type}</span>
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
  items.innerHTML = "";
  menuItems.forEach((item) => {
    items.innerHTML += menuItemToShow(item);
  });
}
//fetching data from api--------------------------------
//fetching data from api--------------------------------
async function getMenus() {
  items.innerHTML = "loading...";
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
    });
  } catch {
    console.log("No Data found pls try again");
  }
  renderMenu();
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
    nameChange();
  }
  cancelBtn.addEventListener("click", hideAdmin);
}
AdminButton.addEventListener("click", showAdmin);
//Name change--------------------------------------------------------------
function nameChange(params) {
  developer.innerHTML = "Developed by Obaidul Haque";
}
//------------------------------------------------------------------------

//------------------------------------------------------------------------
//Add form information---------------------------------------------------
addNewForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let lastObject = menuItems[menuItems.length - 1];
  let lastId = lastObject.id | 0;
  if (typeItem.value == invalid) {
    alert("Please select a type");
    return;
  }
  let newObject = {
    id: lastId + 1,
    name: Name.value,
    url: pic.value,
    desc: desc.value,
    type: typeItem.value,
  };
  menuItems.push(newObject);
  Name.value = "";
  pic.value = "";
  desc.value = "";
  typeItem.value = "";
  renderMenu();
});
//------------------------------------------------------------------------
//cart number increement decrement-----------------------------------------------

//for search button functionality--------------------------------------------------------------------
let searchValue = "";
let notFoundMesseg = false;
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  searchValue = searchBox.value;
  // console.log(searchValue);
  items.innerHTML = "";
  menuItems.forEach(function (params) {
    if (params.name.toLowerCase().includes(searchValue.toLowerCase())) {
      items.innerHTML += menuItemToShow(params);
    } else {
      notFoundMesseg = true;
    }
  });
  if (notFoundMesseg) {
    items.innerHTML = "Not Found";
    notFoundMesseg = false;
  }
});
//--------------------------------------------------------------------------------------
//filtering section toggle---------------------------------------------------------------------
// let toggle = document.querySelector("#all_toggle");
// let coffee = document.querySelector("#coffee_toggle");
// let burger = document.querySelector("#burger_toggle");
// toggle.addEventListener("click", function (event) {
//   event.preventDefault();
// });
//-------------------------------------------------------------------------------------
