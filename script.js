const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');
const navItems = nav.querySelectorAll('a');
const body = document.body;

burger.addEventListener('click', () => {
	body.classList.toggle('stop-scroll');
	burger.classList.toggle('burger--active');
	nav.classList.toggle('nav--visible');
});


navItems.forEach(el => {
	el.addEventListener('click', () => {
		body.classList.remove('stop-scroll');
	burger.classList.remove('burger--active');
	nav.classList.remove('nav--visible');
	});
});


function formSend() {
	alert('Your email has been sent successfully!😊');
}


document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("year").textContent = new Date().getFullYear();
});

