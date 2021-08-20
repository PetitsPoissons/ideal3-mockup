require('materialize-css');
require('../images/ideal3-logo/ideal3-logo-best.png');
require('../images/ideal3-backgrounds/losAngeles-bg.jpeg');
require('../images/ideal3-backgrounds/waterslide2.jpg');
require('../images/ideal3-backgrounds/bridge.jpg');
require('../images/ideal3-backgrounds/concert.jpg');

document.addEventListener('DOMContentLoaded', () => {
	// initialize sidenav
	var sidenavEl = document.querySelectorAll('.sidenav');
	M.Sidenav.init(sidenavEl);

	// initialize slider
	var sliderEl = document.querySelectorAll('.slider');
	M.Slider.init(sliderEl, {
		indicators: false,
		height: 500,
		interval: 3000,
	});

	// navbar effect on scroll down for homepage
	if (document.getElementById('showcase-wrapper')) {
		var navbarEl = document.getElementById('nav-holder');
		var hamburgerEl = document.querySelector('.hamburger');
		var navLinksEl = document.querySelectorAll('.nav-link-border');

		window.onscroll = function () {
			if (window.pageYOffset / window.innerHeight > 0.9) {
				navbarEl.classList.remove('nav-transparent');
				navbarEl.classList.remove('z-depth-0');
				hamburgerEl.classList.remove('yellow-txt');
				hamburgerEl.classList.add('grey-txt');
				navLinksEl.forEach((el) => el.classList.remove('nav-link-border'));
			} else {
				navbarEl.classList.add('nav-transparent');
				navbarEl.classList.add('z-depth-0');
				hamburgerEl.classList.remove('grey-txt');
				hamburgerEl.classList.add('yellow-txt');
				navLinksEl.forEach((el) => el.classList.add('nav-link-border'));
			}
		};
	}
});
