const outputEL = document.querySelector("#name-output");
const inputEL = document.querySelector("#name-input");

function changeOutput() {
  if (event.currentTarget.value === "" || null || undefined) {
    outputEL.textContent = "Anonymus";
  } else {
    outputEL.textContent = event.currentTarget.value;
  }
}

inputEL.addEventListener("input", changeOutput);
