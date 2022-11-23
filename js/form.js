import {
  resetScale
} from './scale.js';

import {
  resetEffects
} from './effect.js';

import {
  sendData
} from './api.js';

import { showSuccessTemplate, showErrorTemplate } from './response.js';

const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const cancelButton = document.querySelector('#upload-cancel');
const fileField = document.querySelector('#upload-file');
const commentField = document.querySelector('.text__description');
const imgButtonSubmit = document.querySelector('.img-upload__submit');

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  resetScale();
  document.addEventListener('keydown', onEscKeyDown);
};

const hideModal = () => {
  form.reset();
  resetScale();
  resetEffects();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
};

const isTextFieldFocused = () =>
  document.activeElement === commentField;

function onEscKeyDown(evt) {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
}

const onCancelButtonClick = () => {
  hideModal();
};

const onFileInputChange = () => {
  showModal();
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
};

fileField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelButtonClick);
form.addEventListener('submit', onFormSubmit);

function blockSubmitButton () {
  imgButtonSubmit.disabled = true;
  imgButtonSubmit.textContent = 'Публикую...';
}

function unblockSubmitButton () {
  imgButtonSubmit.disabled = false;
  imgButtonSubmit.textContent = 'Опубликовать';
}


form.addEventListener('submit', (evt) => {
  blockSubmitButton();
  sendData(
    () => {
      unblockSubmitButton();
      showSuccessTemplate();
    },
    () => {
      document.removeEventListener('keydown', onEscKeyDown);
      showErrorTemplate();
      unblockSubmitButton();
    },
    new FormData(evt.target),
  );
});

export { onEscKeyDown };
