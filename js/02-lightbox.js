import { galleryItems } from './gallery-items.js';

const galleryContainerEl = document.querySelector('.gallery');
const imagesMarkup = createItemsMarkup(galleryItems);
galleryContainerEl.insertAdjacentHTML('beforeend', imagesMarkup);

function createItemsMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li>
      <a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"          
          alt="${description}"
        />
      </a>
      </li>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
