import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(`.gallery`);
const cardsMarkup = createImgCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML(`beforeend`, cardsMarkup);

function createImgCardsMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`;
    })
    .join(``);
}
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: `alt`,
  captionDelay: 250,
  doubleTapZoom: 1,
  scrollZoom: false,
});
