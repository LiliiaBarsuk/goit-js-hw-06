function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const btnEl = document.querySelector(".change-color");
const textEl = document.querySelector(".color");

btnEl.addEventListener("click", () => {
  textEl.textContent = `${getRandomHexColor()}`;
  bodyEl.style.backgroundColor = textEl.textContent;
});
