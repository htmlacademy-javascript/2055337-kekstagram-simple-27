
function getRandomIntInclusive (min, max) {
  if (min < 0 || 0 > max) {
    return NaN;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

window.console.log (getRandomIntInclusive(1, 9));

function checkMaxStringLength (string, length) {

  return string.length <= length;
};

checkMaxStringLength ('',140);

const getRandomArrayElement = (array) =>
  array[getRandomIntInclusive(0, array.length - 1)];

export {
  getRandomArrayElement,
  checkMaxStringLength,
  getRandomIntInclusive
};
