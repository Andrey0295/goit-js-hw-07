// Сколько символов должно быть в инпуте,
// указывается в его атрибуте data - length.
// Если введено подходящее количество,
// то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// Напиши скрипт,
//который бы при потере фокуса на инпуте,
//проверял его содержимое на правильное количество символов.

const inputEl = document.querySelector('#validation-input');

const handleValueCheckedInput = function (event) {
  console.log(event.currentTarget.value.length);
  console.log(Number(inputEl.dataset.length));
  event.currentTarget.value.length === Number(inputEl.dataset.length)
    ? inputEl.classList.replace('invalid', 'valid')
    : inputEl.classList.add('invalid');
};

inputEl.addEventListener('input', handleValueCheckedInput);

inputEl.addEventListener('blur', handleValueCheckedInput);
