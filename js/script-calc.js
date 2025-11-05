let calculation = localStorage.getItem("calculation") || "0";
const displayCalEl = document.querySelector(".display-calc-js");
displayCalEl.textContent = calculation;

function updateCalculation(value) {
  calculation = calculation === "0" ? value : calculation + value;
  displayCalEl.textContent = calculation;
  localStorage.setItem("calculation", calculation);
}

function saveCalculation(calculation) {
  localStorage.setItem("calculation", calculation);
}

function calculateEqual() {
  console.log("eval", eval(calculation), "calculation", calculation);
  calculation = eval(calculation);
  displayCalEl.textContent = calculation;
  saveCalculation(calculation);
}

function clearCalculation() {
  calculation = "0";
  localStorage.setItem("calculation", calculation);
  displayCalEl.textContent = calculation;
  saveCalculation(calculation);
  console.log("Cleared.");
}

console.log("calculator");
