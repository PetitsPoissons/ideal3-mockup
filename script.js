document.addEventListener('DOMContentLoaded', () => {
  // initialize sidenav
  var sidenavEl = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenavEl);

  // initialize slider
  var sliderEl = document.querySelectorAll('.slider');
  M.Slider.init(sliderEl, {
    indicators: false,
    height: 500,
  });

  // initialize parallax
  var parallaxEl = document.querySelectorAll('.parallax');
  M.Parallax.init(parallaxEl);
});
