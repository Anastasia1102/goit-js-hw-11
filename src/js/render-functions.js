import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(image => {
      return `
        <li class="gallery-item">
  <a href="${image.largeImageURL}" class="gallery-link">
    <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
  </a>
  <div class="info">
    <p class="info-item"><b>Likes</b><span>${image.likes}</span></p>
    <p class="info-item"><b>Views</b><span>${image.views}</span></p>
    <p class="info-item"><b>Comments</b><span>${image.comments}</span></p>
    <p class="info-item"><b>Downloads</b><span>${image.downloads}</span></p>
  </div>
</li>`;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}
