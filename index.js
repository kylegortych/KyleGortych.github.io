/*
  index
  Descript:
  minimal support

  File name:     index.js
  Maintainer:    Kyle Gortych
  Last Modified: 01/21/2023
 */

// navbar color transition on scroll
function changeBg() {
  var navbar = document.getElementById('navbar');
  var scrollValue = window.scrollY;
  if(scrollValue < 150) {
    navbar.classList.remove('bgColor');
  } else {
    navbar.classList.add('bgColor')
  }
}
window.addEventListener('scroll', changeBg);

// navbar mobile
