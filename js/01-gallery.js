import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const markup = createGallery(galleryItems);
gallery.insertAdjacentHTML('beforeend', markup);
function createGallery(galleryItems) {
  return galleryItems
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
    .join('');
}

const instance = basicLightbox.create(`<img src="" alt="">`);

const onClick = event => {
  event.preventDefault();
  if (event.target.classList.contains('gallery')) {
    return;
  }
  instance.element().querySelector('img').src = event.target.dataset.source;
  instance.element().querySelector('img').alt =
    event.target.getAttribute('alt');

  instance.show();
};

gallery.addEventListener('click', onClick);
