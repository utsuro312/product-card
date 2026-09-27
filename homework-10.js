const cards = [
  {
    image_path: 'Images/moisturizing_mousse.png',
    subheading_text: 'Для нормальной кожи',
    heading_text: 'Увлажняющий мусс',
    description_text: 'Глубоко увлажняют кожу лица, оставляя её мягкой и гладкой.',
    price_value: '2 750 ₽',
    composition: ['активные натуральные комплексы', 'витамины С, А, РР, В И Е', 'солнцезащитные компоненты']
  },
  {
    image_path: 'Images/moisturizing_mask.png',
    subheading_text: 'Для нормальной кожи',
    heading_text: 'Увлажняющая маска',
    description_text: 'Способствует удерживанию влаги в верхних слоях кожи.',
    price_value: '3 500 ₽',
    composition: ['воски', 'минералы', 'масла']
  },
  {
    image_path: 'Images/showering_gel.png',
    subheading_text: 'Для нормальной кожи',
    heading_text: 'Гель для умывания',
    description_text: 'Интенсивно очищает, не повреждает защитный барьер кожи.',
    price_value: '1 650 ₽',
    composition: ['минералы', 'витамины С, А, РР, В И Е', 'солнцезащитные компоненты']
  },
  {
    image_path: 'Images/gift_package_1.png',
    subheading_text: 'Для нормальной кожи',
    heading_text: 'Подарочный набор №1',
    description_text: 'Набор, состоящий из увлажняющего крема и маски.',
    price_value: '4 750 ₽',
    composition: ['воски', 'минералы', 'масла']
  },
  {
    image_path: 'Images/gift_package_5.png',
    subheading_text: 'Для нормальной кожи',
    heading_text: 'Подарочный набор №5',
    description_text: 'Весь набор средств Invisible symphony, крем, маска, мусс и гель для умывания.',
    price_value: '7 520 ₽',
    composition: ['воски', 'минералы', 'масла']
  }
]

const cardsNameDescription = cards.reduce((acc, item) => {
  if(acc[`${item.heading_text}`]) {
    acc[`${item.heading_text}`].push(item.description_text);
  } else {
    acc[`${item.heading_text}`] = [item.description_text];
  }
  return acc;
}, {});

console.log(cardsNameDescription);

const cardTemplate = document.querySelector('.card1');
const cardList = document.querySelector('.products__list');


function showUpCards() {
  const cardCount = parseFloat(prompt('Enter amount of cards to show from 1 to 5: '));
  if (cardCount >= 1 && cardCount <= 5) {
    cards.splice(0,cardCount).forEach(card => {
      const clone = cardTemplate.content.cloneNode(true)
      
      clone.querySelector('img').src = card.image_path;
      clone.querySelector('.card__subheading').textContent = card.subheading_text;
      clone.querySelector('.card__heading').textContent = card.heading_text;
      clone.querySelector('.card__description').textContent = card.description_text;
      clone.querySelector('.card__price_value').textContent = card.price_value;
      
      const list = clone.querySelector('.card__composition_list');
      list.innerHTML = '';
      
      card.composition.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
      });
      
      cardList.appendChild(clone);
      })
  } else {
    alert("Out of the range")
    showUpCards()
  }
}

showUpCards()

