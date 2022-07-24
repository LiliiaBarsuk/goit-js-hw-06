const btnDecrement = document.querySelector("button[data-action='decrement'");
const btnIncrement = document.querySelector("button[data-action='increment'");
const valueEl = document.querySelector("#value");

let counterValue = 0;

function func() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}
function addF() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}

btnDecrement.addEventListener("click", func);
btnIncrement.addEventListener("click", addF);
