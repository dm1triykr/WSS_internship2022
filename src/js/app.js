'use strict'
$( document ).ready(
	function() {
		$('.main-slider').slick({
			dots:true,
		});

		$('.bestsellers-slider__wrapper').slick({
			dots: true,
			centerMode: true,
			centerPadding: '131px',
			slidesToShow: 5,
			arrows: false,
			responsive: [
				{
					breakpoint: 1441,
					settings: {
						centerPadding: '227px',
						slidesToShow: 3
					}
				}
			]
		})

		$('.favorite-books-slider__wrapper').slick({
			dots: false,
			arrows: true,
			slidesToShow: 2,
		})
	}
);

const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,
	slidesPerView: 3,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
});

