const ALERT_SHOW_TIME = 5000;

function getRandomIntInclusive (min, max) {
  if (min < 0 || 0 > max) {
    return NaN;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function checkMaxStringLength (string, length) {
  return string.length <= length;
}
const getRandomArrayElement = (array) =>
  array[getRandomIntInclusive(0, array.length - 1)];

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

function isEscapeKey(evt) {
  return evt.key === 'Escape';
}

export { getRandomArrayElement, checkMaxStringLength, getRandomIntInclusive, showAlert, isEscapeKey };

