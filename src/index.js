// import $ from 'jquery'
//
const axios = require("axios");
$(document).ready(() => {
  getData(get_url)
  postData(post_url)

})


const get_url = "https://wordwatch-api.herokuapp.com/api/v1/top_word";
const getData = async url => {
  try {
    const response = await axios.get(get_url);
    const data = response.data.word;
    $(".top-word").append(Object.keys(data));
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const url = "https://wordwatch-api.herokuapp.com/api/v1/words";
const postData = async url => {
  axios.post(url, {
    word: 'Fred',
  })
  $("text-area").append(Object.keys(word));

  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
};



postData(url)
