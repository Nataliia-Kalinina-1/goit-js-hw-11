import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = document.querySelector("input[name='search-text']");

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const query = input.value.trim(); // FIXED

  if (query === '') {
    iziToast.warning({
      message: 'Please enter a search query!',
      position: 'topCenter',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query) // FIXED
    .then(data => {
      hideLoader();

      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topCenter',
        });
        return;
      }

      createGallery(data.hits); // переконайся, що додає в DOM
    })
    .catch(() => {
      hideLoader();
      iziToast.error({
        message: 'Something went wrong. Please try again later.',
        position: 'topCenter',
      });
    });
}
