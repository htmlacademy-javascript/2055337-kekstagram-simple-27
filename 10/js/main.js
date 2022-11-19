import {
  showAlert
} from './util.js';

import {
  renderPictures
} from './picture.js';

import './effect.js';

import './scale.js';

import {
  setUserFormSubmit, hideModal
} from './form.js';

import {
  getData
}from './api.js';

getData(renderPictures, showAlert);

setUserFormSubmit(hideModal);

