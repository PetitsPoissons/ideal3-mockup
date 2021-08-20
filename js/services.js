require('materialize-css');

document.addEventListener('DOMContentLoaded', () => {
	// initialize sidenav
	var sidenavEl = document.querySelectorAll('.sidenav');
	M.Sidenav.init(sidenavEl);

	// initialize parallax
	var parallaxEl = document.querySelectorAll('.parallax');
	M.Parallax.init(parallaxEl);
});
