const moisturizing_mousse = 'Images/moisturizing_mousse.png'
const moisturizing_mask = 'Images/moisturizing_mask.png'
const showering_gel = 'Images/showering_gel.png'
const gift_package_1 = 'Images/gift_package_1.png'
const gift_package_5 = 'Images/gift_package_5.png'

const cards = [
  {
    imageName: moisturizing_mousse,
    subheadingText: 'Для нормальной кожи',
    headingText: 'Увлажняющий мусс',
    descriptionText: 'Глубоко увлажняют кожу лица, оставляя её мягкой и гладкой.',
    priceValue: 2750,
    composition: ['активные натуральные комплексы', 'витамины С, А, РР, В И Е', 'солнцезащитные компоненты']
  },
  {
    imageName: moisturizing_mask,
    subheadingText: 'Для нормальной кожи',
    headingText: 'Увлажняющая маска',
    descriptionText: 'Способствует удерживанию влаги в верхних слоях кожи.',
    priceValue: 3500,
    composition: ['воски', 'минералы', 'масла']
  },
  {
    imageName: showering_gel,
    subheadingText: 'Для нормальной кожи',
    headingText: 'Гель для умывания',
    descriptionText: 'Интенсивно очищает, не повреждает защитный барьер кожи.',
    priceValue: 1650,
    composition: ['минералы', 'витамины С, А, РР, В И Е', 'солнцезащитные компоненты']
  },
  {
    imageName: gift_package_1,
    subheadingText: 'Для нормальной кожи',
    headingText: 'Подарочный набор №1',
    descriptionText: 'Набор, состоящий из увлажняющего крема и маски.',
    priceValue: 4750,
    composition: ['воски', 'минералы', 'масла']
  },
  {
    imageName: gift_package_5,
    subheadingText: 'Для нормальной кожи',
    headingText: 'Подарочный набор №5',
    descriptionText: 'Весь набор средств Invisible symphony, крем, маска, мусс и гель для умывания.',
    priceValue: 7520,
    composition: ['воски', 'минералы', 'масла']
  }
]

const cardsNameDescription = cards.reduce((acc, item) => {
  if(acc[`${item.headingText}`]) {
    acc[`${item.headingText}`].push(item.descriptionText);
  } else {
    acc[`${item.headingText}`] = [item.descriptionText];
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
      
      clone.querySelector('img').src = card.imageName;
      clone.querySelector('.card__subheading').textContent = card.subheadingText;
      clone.querySelector('.card__heading').textContent = card.headingText;
      clone.querySelector('.card__description').textContent = card.descriptionText;
      clone.querySelector('.card__price_value').textContent = `${card.priceValue} ₽`;
      
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

