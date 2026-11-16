// Уровень 1, добавления футера

const emailForm = document.querySelector('.email_subscription');

emailForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const formObject = Object.fromEntries(formData.entries());
  console.log(formObject);
});

// Уровень 2, добавления модального окна регистрации

const registrationButton = document.querySelector('.button_panel__registration_buttton');
const overlay = document.querySelector('.overlay');
const registrationModal = document.querySelector('.modal');
const closeModalButton = document.querySelector('.modal__close_modal');

registrationButton.addEventListener('click', () => {
  registrationModal.classList.add("modal-showed");
  overlay.classList.add("overlay-showed");
});

closeModalButton.addEventListener('click', () => {
  registrationModal.classList.remove("modal-showed");
  overlay.classList.remove("overlay-showed");
});

// Уровень 2, валидация пароля

const passwordInput = document.querySelector('input[name=password]');
const confirmInput = document.querySelector('input[name=password_confirmation]');

function passwordConfirmValidity() {
  confirmInput.setCustomValidity(
    confirmInput.value === passwordInput.value ? '' : 'Пароли не совпадают'
  );
}

// Уровень 2, выведение формы в консоль

const registrationForm = document.querySelector('.modal__registration_form');

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const createdOn = new Date();
  const form = event.target;
  const formData = new FormData(form);
  const formObject = Object.fromEntries(formData.entries());
  Object.assign(formObject, { createdOn: createdOn });
  console.log(formObject);
  registrationModal.classList.remove("modal-showed");
  overlay.classList.remove("overlay-showed");
})

