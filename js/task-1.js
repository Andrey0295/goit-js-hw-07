const listItemsEl = document.querySelectorAll('.item');
console.log(`В списке ${listItemsEl.length} категории`);

listItemsEl.forEach(listItem =>
  console.log(
    `Категория: ${
      listItem.firstElementChild.textContent
    }, количество элементов: ${listItem.querySelectorAll('li').length}`,
  ),
);

// Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента(тега h2)
// и количество элементов
// в категории(всех вложенных в него элементов li).
