import { galleryItems } from "./gallery-items.js";


const galleryContainer = document.querySelector(`.gallery`);
const cardsMarkup = createImgCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML(`beforeend`, cardsMarkup);

galleryContainer.addEventListener(`click`, onGalleryContainerClick);

function onGalleryContainerClick(evt) {
  evt.preventDefault();
  const imageLink = evt.target.dataset.source;
  const imageAlt = evt.target.alt;
  const imageToShow = `<img 
    src="${imageLink}", alt= "${imageAlt}"
    >`;
  if (evt.target.nodeName !== `IMG`) {
    return;
  }

  const makeLightbox = basicLightbox.create(imageToShow);

  makeLightbox.show();
  window.addEventListener(`keydown`, onEscKeyPress);
  function onEscKeyPress(evt) {
    if (evt.code === `Escape`) {
      makeLightbox.close();
      window.removeEventListener(`keydown`, onEscKeyPress);
    }
  }
}

function createImgCardsMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join(``);
}
