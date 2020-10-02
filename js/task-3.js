const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const getListEl = document.querySelector('#gallery');
getListEl.style.display = 'flex';
getListEl.style.flexDirection = 'column';
getListEl.style.alignItems = 'center';
getListEl.style.listStyle = 'none';

const makeItemGallery = images.map(function (image) {
  const imageUrl = image.url;
  const imageDescription = image.alt;
  return `<li><img src="${imageUrl}" alt="${imageDescription}" class="item-gallery"></li>`;
});

getListEl.insertAdjacentHTML('afterbegin', makeItemGallery);

console.log(getListEl);

const getImage = document.querySelectorAll('.item-gallery');
console.log(getImage);

const makeStyles = getImage.forEach(function (image) {
  image.style.width = '640px';
  return image;
});
console.log(makeStyles);

// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css - классы.
