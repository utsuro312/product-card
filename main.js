// Покрасить все карточки в фиолетовый

const cards = document.querySelectorAll('.card');
const turnCardsToPurple = document.querySelector('.button_panel__turnCardsPurple_buttton');
const purpleColor = '#6f00ff';
const pinkColor = '#cc00ff';

turnCardsToPurple.addEventListener('click', () => {
  cards.forEach((card) => card.style.backgroundColor = purpleColor)
})

// Покрасить первую карточку в розовый

const firstCard = document.querySelector('.card');
const turnFirstCardPink = document.querySelector('.button_panel__turnFirstCardPink_buttton');

turnFirstCardPink.addEventListener('click', () => {
  firstCard.style.backgroundColor = pinkColor;
})

// Открыть Google в новой вкладке

const newTabGoogleButton = document.querySelector('.button_panel__newTabGoogle_buttton');

newTabGoogleButton.addEventListener('click', newTabGoogle)

function newTabGoogle() {
  const answer = confirm('Действительно ли Вы хотите открыть Google в новой вкладке?')

  if (answer === true) {
    window.open('https://www.google.com')
  }
}

// Инвертировать цвет кнопки

const invertColorButton = document.querySelector('.button_panel__invertButtonColor_buttton');

invertColorButton.addEventListener('click', invertButtonColorToggle)

function invertButtonColorToggle() {
  invertColorButton.classList.toggle("button_panel__invertButtonColor_buttton__inverted_color");
}

// Отобразить содержание при наведении

const productsSectionTitle = document.querySelector('.products__section_title');
const elementText = document.querySelector('.products__section_title').innerText;

productsSectionTitle.addEventListener('mouseover', displayElementContainmentInConsole)

function displayElementContainmentInConsole() {
  console.log(elementText);
}