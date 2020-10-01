const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const makeIngredientsList = document.querySelector('#ingredients');

const ingredientsListItems = ingredients.map(function (ingredient) {
  const ingredientItem = document.createElement('li');
  ingredientItem.textContent = ingredient;
  return ingredientItem;
});
// console.log(ingredientsListItems);

makeIngredientsList.append(...ingredientsListItems);

console.log(makeIngredientsList);

// Напиши скрипт,
// который для каждого элемента массива ingredients создаст отдельный li,
//после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().
