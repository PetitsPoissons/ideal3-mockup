require('materialize-css');

document.addEventListener('DOMContentLoaded', () => {
	// initialize sidenav
	var sidenavEl = document.querySelectorAll('.sidenav');
	M.Sidenav.init(sidenavEl);

	// initialize profile cards collapsible
	var collapsibleEl = document.querySelectorAll('.collapsible');
	M.Collapsible.init(collapsibleEl);

	// card reveals for team section

	// card reveal for Adam
	var adamRevealEl = document.querySelectorAll('.activator-adam');
	var closeAdamBioEl = document.getElementById('close-adam-bio');
	adamRevealEl.forEach((el) => {
		el.addEventListener('click', () => {
			document.getElementById('profile-img-adam').style.zIndex = 0;
		});
	});
	closeAdamBioEl.addEventListener('click', () => {
		document.getElementById('profile-img-adam').style.zIndex = 10;
	});

	// card reveal for Terri
	var terriRevealEl = document.querySelectorAll('.activator-terri');
	var closeTerriBioEl = document.getElementById('close-terri-bio');
	terriRevealEl.forEach((el) => {
		el.addEventListener('click', () => {
			document.getElementById('profile-img-terri').style.zIndex = 0;
		});
	});
	closeTerriBioEl.addEventListener('click', () => {
		document.getElementById('profile-img-terri').style.zIndex = 10;
	});

	// card reveal for Natalie
	var natiRevealEl = document.querySelectorAll('.activator-nati');
	var closeNatiBioEl = document.getElementById('close-nati-bio');
	natiRevealEl.forEach((el) => {
		el.addEventListener('click', () => {
			document.getElementById('profile-img-nati').style.zIndex = 0;
		});
	});
	closeNatiBioEl.addEventListener('click', () => {
		document.getElementById('profile-img-nati').style.zIndex = 10;
	});
});
