// Напиши скрипт который,
// при наборе текста в инпуте input#name - input(событие input)
// подставляет его текущее значение в span#name - output.
// Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.

// 1.Создать переменну, с инпутом и аутпутом.
// 2.Повесить слушателя событий на инпут с отдельной функцией.
// 3.Подставить значение по результату слушателя в спан.

const nameInputEl = document.querySelector('#name-input');
let nameOutputEl = document.querySelector('#name-output');

const handleValueTextInput = function (event) {
  console.log(event);
  console.log(event.currentTarget.value);
  if (event.currentTarget.value !== '') {
    nameOutputEl.textContent = event.currentTarget.value;
  } else {
    nameOutputEl.textContent = 'незнакомец';
  }
};

nameInputEl.addEventListener('input', handleValueTextInput);
