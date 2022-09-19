'use strict';

$(document).ready(function () {
  $('.main-slider').slick({
    dots: true
  });
});
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  } // And if we need scrollbar

});
//# sourceMappingURL=app.js.map
