import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import './css/styles.css';

const form = document.querySelector('.form');
const input = form.elements['search-text'];

form.addEventListener('submit', async e => {
  e.preventDefault();
  const query = input.value.trim();

  if (query === '') {
    iziToast.error({
      message: 'Please enter a search term.',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const { hits } = await getImagesByQuery(query);

    if (hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    } else {
      createGallery(hits);
    }
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Try again later!',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }

  form.reset();
});
