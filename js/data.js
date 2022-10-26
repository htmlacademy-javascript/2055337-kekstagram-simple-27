import {
  getRandomArrayElement,
  //checkMaxStringLength,
  getRandomIntInclusive
} from './util.js';

const IMAGES_COUNT = 25;

const LikesCount = {
  MIN: 15,
  MAX: 200,
};

const description = [
  'Летний отдых на югах. #лето #отдых #chill',
  'Тестим новую камеру. #new #camera #test',
  'Цените каждое мгновение!!! #travel #photo',
  'Незабываемое путешествие! #travel #fun #cool',
  'Отдыхаем... #relax #chill #group',
];

const CommentsCount = {
  MIN: 0,
  MAX: 200,
};

const createImageObj = () => ({
  id: getRandomIntInclusive(1, IMAGES_COUNT),
  url: `./images/${getRandomIntInclusive(1, IMAGES_COUNT)}.jpg`,
  descriptions: getRandomArrayElement(description),
  likes: getRandomIntInclusive(LikesCount.MIN, LikesCount.MAX),
  comments: getRandomIntInclusive(CommentsCount.MIN, CommentsCount.MAX),
});

const getImages = Array.from({length: IMAGES_COUNT}, createImageObj);

export {
  getImages
};

