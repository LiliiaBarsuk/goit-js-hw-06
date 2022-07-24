function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const inputEl = document.querySelector("input");
const boxesEl = document.querySelector("#boxes");

let value;
inputEl.addEventListener("input", (event) => {
  value = event.currentTarget.value;
  return value;
});

function createBoxes(amount) {
  amount = value;
  const collectionOfBoxes = [];
  const size = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.backgroundColor = `${getRandomHexColor()}`;
    box.style.width = `${size + 10 * i}px`;
    box.style.height = `${size + 10 * i}px`;
    collectionOfBoxes.push(box);
  }

  boxesEl.append(...collectionOfBoxes);
}

function destroyBoxes() {
  boxesEl.remove();
}

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
