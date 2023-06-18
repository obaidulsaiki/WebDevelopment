// Your solution goes here.
// Hints:
// -> Handle the onsubmit function using attribute or js event listener.
// -> Take the value of input, calculate the grade and update ui.
// -> Maximum number can be 100
// -> Clear the input field after value submission

//DOM elements
let formSubmit = document.getElementById("iits-formSubmit");
let inPut = document.getElementById("iits-inp");
let button = document.querySelector("button");
let aCount = document.getElementById("iits-a_count"); //81-100
let bpCount = document.getElementById("iits-bp_count"); //71-80
let bCount = document.getElementById("iits-b_count"); //61-70
let bmCount = document.getElementById("iits-bm_count"); //51-60
let cCount = document.getElementById("iits-c_count"); //40-50
let fpCount = document.getElementById("iits-f_count"); //0-40
//button
let ValueOfinput;
let i1 = 0,
  i2 = 0,
  i3 = 0,
  i4 = 0,
  i5 = 0,
  i6 = 0;
function selection() {
  if (ValueOfinput >= 81 && ValueOfinput <= 100) {
    i1++;
    aCount.textContent = i1;
  } else if (ValueOfinput >= 71 && ValueOfinput <= 80) {
    i2++;
    bpCount.textContent = i2;
  } else if (ValueOfinput >= 61 && ValueOfinput <= 70) {
    i3++;
    bCount.textContent = i3;
  } else if (ValueOfinput >= 51 && ValueOfinput <= 60) {
    i4++;
    bmCount.textContent = i4;
  } else if (ValueOfinput >= 40 && ValueOfinput <= 50) {
    i5++;
    cCount.textContent = i5;
  } else {
    i6++;
    fpCount.textContent = i6;
  }
}
formSubmit.addEventListener("submit", function eventbutton(event) {
  if (inPut.value <= 100) {
    ValueOfinput = parseFloat(inPut.value);
    console.log(ValueOfinput);
    event.preventDefault();
  } else {
    alert("Maximum value should be 100");
  }
  inPut.value = "";
  selection();
});
