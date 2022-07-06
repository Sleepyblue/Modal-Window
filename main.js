'use strict';

const modalObj = {
  title: 'Modal title',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore non eum nam nisi!',
  links: ['#', '#'],
};
const modal = document.querySelector('.modal');
const btn = document.querySelector('.btn');
let modalState = false;

const createModal = function (e) {
  const markup = `
    <div class="modal__btn"></div>
    <h2 class="modal__title">
      <span>${modalObj.title}</span>
    </h2>
    <p class="modal__description">
      <span>${modalObj.description}</span>
    </p>
    <div class="modal__languages">
      <div class="modal__icon">
        <ion-icon name="logo-html5"></ion-icon>
      </div>
      <div class="modal__icon">
        <ion-icon name="logo-sass"></ion-icon>
      </div>
      <div class="modal__icon">
        <ion-icon name="logo-javascript"></ion-icon>
      </div>
    </div>
    <div class="modal__links">
      <a class="modal__link" href="${modalObj.links[0]}" target="_blank">
        <ion-icon name="logo-codepen"></ion-icon>
      </a>
      <a class="modal__link" href="${modalObj.links[1]}" target="_blank">
       <ion-icon name="logo-github"></ion-icon>
      </a>
    </div>
    `;

  modal.innerHTML = '';
  modal.insertAdjacentHTML('afterbegin', markup);
};

const openModal = function (e) {
  createModal(e);
  modal.classList.add('open');
  modalState = true;
};

const closeModal = function () {
  modal.classList.remove('open');
  modalState = false;
};

btn.addEventListener('click', (e) => {
  openModal(e);
});

modal.addEventListener('click', function (e) {
  let modalBtn = e.currentTarget.querySelector('.modal__btn');

  if (e.target != modalBtn) return;
  closeModal();
});
