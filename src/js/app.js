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

		$('.meet-with-team-slider__tabs').slick({
			dots: false,
			arrow: false,
			slidesToShow: 3,
			asNavFor: '.meet-with-team-slider__slides',
			focusOnSelect: true,
		})

		$('.meet-with-team-slider__wrapper').slick({
			customPaging : function(slider, i) {
				var slidernav = $(slider.$slides[i]).data('slidernav');
				return '<a>'+slidernav+'</a>';
			},
			dots: true,
			//speed: 500,
			fade: true,
			cssEase: 'linear',
		})

		$('.categories-slider__slides').slick({
			arrows: false,
			dots: false,
			slidesToShow: 5,
			// centerMode: true,
			infinite: false,
			//initialSlide: 2,
			responsive: [
				{
					breakpoint: 1441,
					settings: {
						slidesToShow: 4.22
					}
				}
			]
		})

		$('.retailer-stores-slider__slides').slick({
			dots: true,
			arrows: false,
		})

		$('.content-follow-us__slider').slick({
			dots: false,
			arrows: false,
			slidesToShow: 6,
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

// function openTab(evt, tabName) {
// 	// Declare all variables
// 	var i, tabcontent, tablinks;
//
// 	// Get all elements with class="tabcontent" and hide them
// 	tabcontent = document.getElementsByClassName("tab__content");
// 	console.log(tabcontent);
// 	for (i = 0; i < tabcontent.length; i++) {
// 		tabcontent[i].style.display = "none";
// 	}
//
// 	// Get all elements with class="tablinks" and remove the class "active"
// 	tablinks = document.getElementsByClassName("tab__link");
// 	console.log(tablinks);
// 	for (i = 0; i < tablinks.length; i++) {
// 		tablinks[i].className = tablinks[i].className.replace(" active", "");
// 	}
//
// 	// Show the current tab, and add an "active" class to the button that opened the tab
// 	document.getElementById(tabName).style.display = "block";
// 	evt.currentTarget.className += " active";
//
// 	$('#'+tabName).find('.meet-with-team-slider__slides:not(.refreshed)').slick('reinit').addClass('refreshed');
// }

