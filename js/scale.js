const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview img');

let currentValue = parseInt(scaleInput.value, 10);

const scaleImage = (value = DEFAULT_SCALE) => {
  image.style.transform = `scale(${value / 100})`;
  scaleInput.value = `${value}%`;
};

const onSmallerButtonClick = () => {
  currentValue = currentValue - SCALE_STEP;
  if (currentValue < MIN_SCALE) {
    currentValue = MIN_SCALE;
  }
  scaleImage(currentValue);
};

const onBiggerButtonClick = () => {
  currentValue = currentValue + SCALE_STEP;
  if (currentValue > MAX_SCALE) {
    currentValue = MAX_SCALE;
  }
  scaleImage(currentValue);
};

const resetScale = () => {
  scaleImage();
};

smallerButton.addEventListener('click', onSmallerButtonClick);
biggerButton.addEventListener('click', onBiggerButtonClick);

export { resetScale };

