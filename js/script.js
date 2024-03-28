const menuBtn = document.querySelector(".burger__menu");
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
	menu.classList.toggle('menu--active');
});