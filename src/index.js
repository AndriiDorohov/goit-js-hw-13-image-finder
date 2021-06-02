import './styles.css';

import { error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

import cardMarkup from './templates/card';
import ImageApiService from './js/apiService';
import { onGalleryElClick } from './js/modal';
import LoadMoreBtn from './js/load-more-btn';

const refs = {
  searchForm: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
};

const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

const imageApiService = new ImageApiService();

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', onLoadMore);
refs.gallery.addEventListener('click', onGalleryElClick);

function onSearch(e) {
  e.preventDefault();

  clearGalleryContainer();
  imageApiService.query = e.currentTarget.elements.query.value;

  if (imageApiService.query === '') {
    loadMoreBtn.disable();
    return noResults();
  }

  loadMoreBtn.show();
  imageApiService.resetPage();
  fetchCards();
}

function fetchCards() {
  loadMoreBtn.disable();
  return imageApiService.fetchImage().then(cards => {
    renderMarkup(cards);

    scrollPage();
    loadMoreBtn.enable();

    if (cards.length === 0) {
      loadMoreBtn.hide();
      noMatchesFound();
    }
  });
}

function onLoadMore() {
  fetchCards();
}

function renderMarkup(hits) {
  refs.gallery.insertAdjacentHTML('beforeend', cardMarkup(hits));
}

function clearGalleryContainer() {
  refs.gallery.innerHTML = '';
}

function noResults() {
  error({
    text: 'Пожалуйста введите данные для поиска!',
    delay: 2000,
  });
}

function noMatchesFound() {
  error({
    text: 'Нет совпадений, пожалуйста сделайте корректный запрос!',
    delay: 2500,
  });
}

const element = document.getElementById("my-element-selector");

function scrollPage() {
    try {
      setTimeout(() => {
         element.scrollIntoView({
         behavior: 'smooth',
         block: 'end',        
        }
        );
    },1000);
  } catch (error) {
    console.log(error);
  }
}
