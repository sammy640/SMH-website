'use strict';
console.log("Here\'s a hidden message");

function scroll() {
    var description = document.querySelector('.description');
    var descriptionPosition = description.getBoundingClientRect().top;
    console.log(descriptionPosition);
    var screenPosition = window.innerHeight / 1.5;

    if(descriptionPosition < screenPosition) {
      description.classList.add('description_appear');
    }
  }

  window.addEventListener('scroll', scroll);

  

