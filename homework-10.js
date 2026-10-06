import { cards } from "./cards.js";

let array = [];

const cardsNameDescription = cards.reduce((acc, item) => {
  acc[`${item.headingText}`] ? acc[`${item.headingText}`].push(item.descriptionText) : acc =  {[`${item.headingText}`]:`${item.descriptionText}`};
  array.push(acc);
  return array;
}, {});

console.log(cardsNameDescription);

const cardTemplate = document.querySelector('.card1');
const cardList = document.querySelector('.products__list');


function showUpCards() {
  const cardCount = parseFloat(prompt('Enter amount of cards to show from 1 to 5: '));
  if (cardCount >= 1 && cardCount <= 5) {
    cards.splice(0,cardCount).forEach(card => {
      const clone = cardTemplate.content.cloneNode(true);
      
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
    alert("Out of the range");
    showUpCards();
  }
}

showUpCards();

