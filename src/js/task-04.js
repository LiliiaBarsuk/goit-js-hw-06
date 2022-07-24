const btnDecrement = document.querySelector("button[data-action='decrement'");
const btnIncrement = document.querySelector("button[data-action='increment'");
const valueEl = document.querySelector("#value");

let counterValue = 0;

function subtractionFunction() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}
function addFunction() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}

btnDecrement.addEventListener("click", subtractionFunction);
btnIncrement.addEventListener("click", addFunction);
