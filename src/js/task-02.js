const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const items = ingredients.map((ingridient) => {
  const item = document.createElement("li");
  item.textContent = ingridient;
  item.classList.add("item");
  return item;
});

list.append(...items);
console.log(list);
