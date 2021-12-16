const axios = require('axios');
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const input = document.querySelector('input[name="searchQuery"]');

const searchForImages = async name => {
  try {
    const response = await axios({
      method: 'get',
      url: `https://pixabay.com/api/?key=24835588-34c67f39a9342d1bd89adf1b2&q=${name}&image_type=photo`,
    });
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const placeImages = () => {
  const name = input.value;
  searchForImages(name).then(element => createMarkup(element.hits));
};

const createMarkup = elements => {
  const markup = elements
    .map(element => {
      return `<div class="photo-card">
                <a href="${element.largeImageURL}">
                    <img src="${element.webformatURL}" alt="${element.tags}"/>
                </a>
            </div>`;
    })
    .join('');
  gallery.innerHTML = markup;
};

form.addEventListener('submit', event => {
  event.preventDefault();
  placeImages();
});


