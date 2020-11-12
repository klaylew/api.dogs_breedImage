'use strict';

let html = ""
let address = 'https://dog.ceo/api/breeds/image/random/';

function watchForm() {
  $("form").submit(event => {
    event.preventDefault();
    html = address + $("#number").val();
    console.log(html);
    generateImages();
  });
}

function generateImages() {
  fetch(html)
    .then((res) => res.json())
    .then((resJson) => {
      let output = "";
      resJson.message.forEach(function(html){
        console.log(html);
        output += 
        `
        <div class="gallery">
          <img src=${html} alt="Img" height="400">
        </div>      
        `;
      });
      document.getElementById('photos').innerHTML = output;
    })
    .catch(error => alert('Something went wrong. Try again later.'));
}


$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});