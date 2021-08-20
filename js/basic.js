require('materialize-css');
require('../images/ideal3-logo/ideal3-logo-best.png');
require('../images/ideal3-backgrounds/minneapolis-bg.jpeg');

document.addEventListener('DOMContentLoaded', () => {
	// initialize sidenav
	var sidenavEl = document.querySelectorAll('.sidenav');
	M.Sidenav.init(sidenavEl);
});
