require('materialize-css');
require('../images/ideal3-logo/ideal3-logo-best.png');
require('../images/ideal3-backgrounds/handshake.jpeg');
require('../images/ideal3-backgrounds/kart.jpg');
require('../images/ideal3-backgrounds/gym.jpg');
require('../images/ideal3-backgrounds/ferris-wheel2.jpg');
require('../images/ideal3-backgrounds/claims.jpg');
require('../images/ideal3-backgrounds/risk-mgmt2.jpg');
require('../images/ideal3-backgrounds/waterslide.jpg');

document.addEventListener('DOMContentLoaded', () => {
	// initialize sidenav
	var sidenavEl = document.querySelectorAll('.sidenav');
	M.Sidenav.init(sidenavEl);

	// initialize parallax
	var parallaxEl = document.querySelectorAll('.parallax');
	M.Parallax.init(parallaxEl);
});
