$('.slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow:
		'<div class="slick-arrow slick-prev"><div class="slick-circle"></div><img class="slick-img slick-img--mod" src="./img/chevron-left-white.svg"></div>',
	nextArrow:
		'<div class="slick-arrow slick-next"><div class="slick-circle"></div><img class="slick-img" src="./img/chevron-right-white.svg"></div>',
	mobileFirst: true,
	responsive: [
		{
			breakpoint: 576,
			settings: {
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 1,
			},
		},
	],
})
