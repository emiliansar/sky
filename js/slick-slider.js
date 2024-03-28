$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		appendArrows: $('.slick__arrows'),
		dots: true,
		slidesToShow: 3,
		infinite: false,
		draggable: true,
		swipe: true,
	});
});