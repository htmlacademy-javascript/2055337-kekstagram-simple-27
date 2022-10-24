
const pictureTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const container = document.querySelector('.picture');

const createPicture = (data) => {
  const { comments, likes, url } = data;
  const picture = pictureTemplate.cloneNode(true);

  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__comments').textContent = comments;
  picture.querySelector('.picture__likes').textContent = likes;

  return picture;
};

const renderPicture = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const pictureElement = createPicture(picture);
    fragment.append(pictureElement);
  });

  container.append(fragment);
};

export {renderPicture};
