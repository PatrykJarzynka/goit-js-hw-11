const axios = require('axios');

const form = document.querySelector('.search-form');
const gallery = document.querySelector(".gallery")

const searchForImages = () => {
  return axios({
    method: 'get',
    url: 'https://pixabay.com/api/?key=24835588-34c67f39a9342d1bd89adf1b2&q=yellow+flowers&image_type=photo',
  }).then(response => {
      const { data } = response;
      return data;
  });
};

const placeImages = () => {
    searchForImages().then(element => createMarkup(element.hits));
}

const createMarkup = (elements) => {
    const markup = elements.map(element => {
        return `<div>
                <img src="${element.webformatURL}"/>
            </div>`;
    }).join("");
    gallery.innerHTML = markup;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    placeImages();
});
