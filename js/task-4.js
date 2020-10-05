// Счетчик состоит из спана и кнопок,
//     которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// 1.Создать переменную, хранящую текущее значение счетчика.
let counterValue = 0;
let value = document.querySelector('#value');

// 2.Создать функции decrement и increment.

const hendleDecrementButtonClick = function () {
  counterValue -= 1;
  console.log(counterValue);
  return (value.textContent = `${counterValue}`);
};
const hendleIncrementButtonClick = function () {
  counterValue += 1;
  console.log(counterValue);
  return (value.textContent = `${counterValue}`);
};
// 3.Повесить слушателя на кнопки.
const actionsButton = document.querySelectorAll('#counter button');
actionsButton[0].addEventListener('click', hendleDecrementButtonClick);
actionsButton[1].addEventListener('click', hendleIncrementButtonClick);
