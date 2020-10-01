const listItemsEl = document.querySelectorAll('.item');
console.log(`В списке ${listItemsEl.length} категории`);

const itemTitleEl = document.querySelectorAll('.item>h2');
const underListQuantityEl = document.querySelectorAll('.item ul');

console.log(
  `Категория: ${itemTitleEl[0].textContent}, количество элементов: ${underListQuantityEl[0].children.length}`,
);

console.log(
  `Категория: ${itemTitleEl[1].textContent}, количество элементов: ${underListQuantityEl[1].children.length}`,
);

console.log(
  `Категория: ${itemTitleEl[2].textContent}, количество элементов: ${underListQuantityEl[2].children.length}`,
);

// Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента(тега h2)
// и количество элементов
// в категории(всех вложенных в него элементов li).
