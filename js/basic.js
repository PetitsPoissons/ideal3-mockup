require('materialize-css');

document.addEventListener('DOMContentLoaded', () => {
	// initialize sidenav
	var sidenavEl = document.querySelectorAll('.sidenav');
	M.Sidenav.init(sidenavEl);
});
