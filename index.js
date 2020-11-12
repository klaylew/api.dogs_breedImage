'use strict';

let breed = ""

function watchForm() {
  $("form").submit(event => {
    event.preventDefault();
    breed = $("#breed").val().toLowerCase();
    console.log(breed);
    generateImages();
  });
}

function generateImages() {
  fetch('https://dog.ceo/api/breed/'+ breed + '/images/random')
    .then((res) => res.json())
    .then((resJson) => {    
      if (resJson.code == "404") {
        alert(resJson.message);
      }else{
      document.getElementById('photos').innerHTML = 
      `
      <div class="gallery">
        <img src=${resJson.message} alt="Img" height="400">
      </div>      
      `;
    }
    })
    .catch(error => alert('Something went wrong. Try again later.'));
}


$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});