"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

console.log(btnOpenModal);

//funtion-open model
const openModal = function () {
  console.log("Button CLicked");
  modal.classList.remove("hidden");

  //to blur the background
  overlay.classList.remove("hidden");
};

//funtion-close by outer side
const closeModal = function () {
  console.log("Button closed");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

//press anyrhing in keyboard
/* document.addEventListener('keydown',function(e){
    console.log(e);}); */

document.addEventListener("keydown", function (e) {
  //it shows only the pressed Key
  console.log(e.key);
  //closing the modal by clicking esc button
  if (e.key === "Escape") {
    console.log("esc is pressed");
    closeModal();
  }
});


const btnFull = document.querySelector('.btn--full');
const btnOutline = document.querySelector('.btn--outline');

btnFull.addEventListener('click', function(event) {
  event.preventDefault();
  console.log('Start saving Life');
  // Add your code here for the action of the "Start saving Life" button
});

btnOutline.addEventListener('click', function(event) {
  event.preventDefault();
  console.log('Learn More');
  // Add your code here for the action of the "Learn More" button
});
const sectionHero = document.querySelector('.section-hero');

window.addEventListener('load', function() {
  sectionHero.classList.add('fade-in');
});
