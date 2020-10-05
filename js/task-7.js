// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет инлайн - стиль
// span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const sizeControlInput = document.querySelector('#font-size-control');

const text = document.querySelector('#text');

const handleControlFontSize = function (event) {
  console.log(event.currentTarget.value);
  text.style.fontSize = `${Number(event.currentTarget.value)}px`;
};

sizeControlInput.addEventListener('input', handleControlFontSize);
