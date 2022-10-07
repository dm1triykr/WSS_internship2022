'use strict';

$(document).ready(function () {
  $('.main-slider').slick({
    dots: true
  });
  $('.bestsellers-slider__wrapper').slick({
    dots: true,
    centerMode: true,
    centerPadding: '131px',
    slidesToShow: 5,
    arrows: false,
    responsive: [{
      breakpoint: 1441,
      settings: {
        centerPadding: '227px',
        slidesToShow: 3
      }
    }, {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2.3,
        centerMode: false,
        infinite: false //currentSlide: 2,
        //centerPadding: '46px'

      }
    }]
  });
  $('.favorite-books-slider__wrapper').slick({
    dots: false,
    arrows: true,
    slidesToShow: 2
  });
  $('.meet-with-team-slider__tabs').slick({
    dots: false,
    arrow: false,
    slidesToShow: 3,
    asNavFor: '.meet-with-team-slider__slides',
    focusOnSelect: true
  });
  $('.meet-with-team-slider__wrapper').slick({
    customPaging: function (slider, i) {
      var slidernav = $(slider.$slides[i]).data('slidernav');
      return '<a>' + slidernav + '</a>';
    },
    dots: true,
    //speed: 500,
    fade: true,
    cssEase: 'linear'
  });
  $('.categories-slider__slides').slick({
    arrows: false,
    dots: false,
    slidesToShow: 5,
    // centerMode: true,
    infinite: false,
    //initialSlide: 2,
    responsive: [{
      breakpoint: 1441,
      settings: {
        slidesToShow: 4.22
      }
    }]
  });
  $('.retailer-stores-slider__slides').slick({
    dots: true,
    arrows: false
  });
  $('.content-follow-us__slider').slick({
    dots: false,
    arrows: false,
    slidesToShow: 6,
    responsive: [{
      breakpoint: 1200,
      settings: {
        centerMode: true,
        slidesToShow: 3,
        infinite: false,
        initialSlide: 1,
        centerPadding: "25px"
      }
    }]
  });
});
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    1200: {
      slidesPerView: 3 //spaceBetween: 20,

    },
    750: {
      slidesPerView: 2
    }
  } // And if we need scrollbar

});
$('.burger-btn').click(function (e) {
  e.preventDefault();
  var target = $(this).toggleClass('burger-btn_active').attr('data-target');
  $(target).toggleClass('active');
});
jQuery('.burger-menu__item .icon-arrow').click(function (e) {
  e.preventDefault();
  jQuery(this).parent('.burger-menu__link').next('.burger-menu__sub-menu').slideToggle();
});
//# sourceMappingURL=app.js.map
