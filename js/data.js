import {
  getRandomArrayElement,
  checkMaxStringLength,
  getRandomIntInclusive
}from './util.js';

const IMAGES_COUNT = 25;

checkMaxStringLength ('',140);

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

const description = [
 'Летний отдых на югах. #лето #отдых #chill',
 'Тестим новую камеру. #new #camera #test',
 'Цените каждое мгновение!!! #travel #photo',
 'Незабываемое путешествие! #travel #fun #cool',
 'Отдыхаем... #relax #chill #group',
];

const createImageObj = () => {
  return {
    id: getRandomIntInclusive(1, IMAGES_COUNT),
    url: `images/${getRandomIntInclusive(1, IMAGES_COUNT)}.jpg`,
    descriptions: getRandomArrayElement(description),
    likes: getRandomIntInclusive(LikesCount.MIN, LikesCount.MAX),
    comments: getRandomIntInclusive(CommentsCount.MIN, CommentsCount.MAX),
  };
};

console.log (createImageObj());

export {
  IMAGES_COUNT,
  LikesCount,
  CommentsCount,
  getImages,
  description,
  createImageObj
};

export {
  createImageObj
};
