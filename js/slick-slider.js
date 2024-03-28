$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		appendArrows: $('.slick__arrows'),
		dots: true,
		slidesToShow: 3,
		infinite: false,
		draggable: true,
		swipe: true,
		responsive: [
			{
				breakpoint: 1120,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
				}
			},
		],
	});
});