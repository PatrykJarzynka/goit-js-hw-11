import axios from 'axios';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const input = document.querySelector('input[name="searchQuery"]');
const moreImages = document.querySelector('.load-more');
let previousName = ' ';
let page = 1;
let sumOfImages = 0;

const searchForImages = async newName => {
  try {
    const params = new URLSearchParams({
      page: page,
      per_page: 40,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    });
    const response = await axios({
      method: 'get',
      url: `https://pixabay.com/api/?key=24835588-34c67f39a9342d1bd89adf1b2&q=${newName}&${params}`,
    });
    const { data } = response;
    console.log(data)
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const placeImages = () => {
  const name = input.value;
  searchForImages(name)
    .then(element => createMarkup(element.hits, name, element.totalHits))
    .then(() => new SimpleLightbox('.gallery a'));
};

const createMarkup = (elements, newName, allHits) => {
  sumOfImages += elements.length;
  if(sumOfImages >= allHits) console.log("")
  const markup = elements
    .map(({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => {
      return `<div class="photo-card">
                <a href="${largeImageURL}">
                    <img src="${webformatURL}" alt="${tags}"/>
                </a>
                <div class="info" >
                  <p class="info-item">
                    <b>Likes</b> ${likes}
                  </p>
                  <p class="info-item"> 
                     <b>Views</b> ${views}
                  </p>
                  <p class="info-item"> 
                    <b>Comments</b> ${comments}
                  </p>
                  <p class="info-item">
                    <b>Downloads</b> ${downloads}
                  </p>
                </div>
              </div>
            `;
    })
    .join('');
  if (newName !== previousName) {
    gallery.innerHTML = markup;
  } else gallery.insertAdjacentHTML('beforeend', markup);
  previousName = newName;
};

const loadMore = () => {
  page = page + 1;
  placeImages();
};

form.addEventListener('submit', event => {
  event.preventDefault();
  if (input.value !== previousName) {
    page = 1;
    placeImages();
    moreImages.classList.remove("not__visable");
  } else return;
});

moreImages.addEventListener('click', loadMore);
