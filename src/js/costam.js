const axios = require('axios').default;

axios({
  method: 'get',
  url: 'https://pixabay.com/api/?key=24835588-34c67f39a9342d1bd89adf1b2&q=yellow+flowers&image_type=photo'
}).then(function (response) {
    const { data } = response;
    console.log(data);
});
