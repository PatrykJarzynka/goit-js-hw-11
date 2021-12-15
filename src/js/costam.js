

const searchButton = document.querySelector('button');
// const gallery = document.querySelector(".gallery")

// const searchForImages = () => {
//   axios({
//     method: 'get',
//     url: 'https://pixabay.com/api/?key=24835588-34c67f39a9342d1bd89adf1b2&q=yellow+flowers&image_type=photo',
//   }).then(response => {
//       const { data } = response;
//       console.log(data);
//   });
// };

// const placeImages = () => {
//     searchForImages
// }

// const createMarkup = (elements) => {
//     const markup = elements.map(element => {
//         return `<div>
//                 <img src="${element.webformatURL}"/>
//             </div>`;
//     }).join("");
//     gallery.innerHTML = markup;
// }

searchButton.addEventListener('click', (event) => {
    event.preventDefault;
    console.log("xd");
});
