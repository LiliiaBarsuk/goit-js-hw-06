const outputEL = document.querySelector("#name-output");
const inputEL = document.querySelector("#name-input");

function changeOutput() {
  outputEL.textContent = event.currentTarget.value;
}

inputEL.addEventListener("input", changeOutput);
