//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5_%D1%81%D0%BB%D1%83%D1%87%D0%B0%D0%B9%D0%BD%D0%BE%D0%B3%D0%BE_%D1%86%D0%B5%D0%BB%D0%BE%D0%B3%D0%BE_%D1%87%D0%B8%D1%81%D0%BB%D0%B0_%D0%B2_%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%BD%D0%BE%D0%BC_%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B2%D0%B0%D0%BB%D0%B5_%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE

function getRandomIntInclusive (min, max) {
  if (min < 0 || 0 > max) {
    return NaN;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.console.log (getRandomIntInclusive(1, 9));

function checkMaxStringLength (string, length) {

  return string.length <= length;
}

checkMaxStringLength ('',140);

const IMAGES_COUNT = 25;

const LikesCount = {
  MIN: 15,
  MAX: 200,
};

const CommentsCount = {
  MIN: 0,
  MAX: 200,
};

const getImages = () =>
  Array.from({length:IMAGES_COUNT}, (_, imagesIndex) =>
  createImageObj(imagesIndex + 1)
  );

getImages();

const getRandomArrayElement = (array) =>
  array[getRandomIntInclusive(0, array.length - 1)];

const description = [
 'Летний отдых на югах. #лето #отдых #chill',
 'Тестим новую камеру. #new #camera #test',
 'Цените каждое мгновение!!! #travel #photo',
 'Незабываемое путешествие! #travel #fun #cool',
 'Отдыхаем... #relax #chill #group',
]

const createImageObj = () => {
  return {
    id: getRandomIntInclusive(1, IMAGES_COUNT),
    url: `images/${getRandomIntInclusive(1, IMAGES_COUNT)}.jpg`,
    descriptions: getRandomArrayElement(description),
    likes: getRandomIntInclusive(LikesCount.MIN, LikesCount.MAX),
    comments: getRandomIntInclusive(CommentsCount.MIN, CommentsCount.MAX),
  };
};

console.log (createImageObj())
