// Напиши скрипт который,
// при наборе текста в инпуте input#name - input(событие input)
// подставляет его текущее значение в span#name - output.
// Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.

// 1.Создать переменну, с инпутом и аутпутом.
const nameInputEl = document.querySelector('#name-input');

let nameOutputEl = document.querySelector('#name-output');

// 2.Повесить слушателя событий на инпут с отдельной функцией.

const handleValueTextInput = function (event) {
  console.log(event.currentTarget.value);
  // 3.Подставить значение по результату слушателя в спан.
  nameOutputEl.textContent = event.currentTarget.value;
};

nameInputEl.addEventListener('input', handleValueTextInput);
