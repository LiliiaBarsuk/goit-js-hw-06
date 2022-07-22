// Порахує і виведе в консоль кількість категорій
// в ul#categories, тобто елементів li.item.
const listOfCategories = document.querySelector("#categories");
const item = listOfCategories.children;
console.log(`Number of categories: ${item.length}`);

console.log(``);

const categoriesItems = document.querySelectorAll("h2");

categoriesItems.forEach(function (element) {
  const elements = element.nextElementSibling.children;
  console.log(`Category: ${element.textContent}`);
  console.log(`Elements: ${elements.length}`);
  console.log(``);
});
