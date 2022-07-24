const inputEl = document.querySelector("#validation-input");
const length = Number(inputEl.dataset.length);

function checkInput(event) {
  if (event.currentTarget.value.length === length) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
inputEl.addEventListener("blur", checkInput);
