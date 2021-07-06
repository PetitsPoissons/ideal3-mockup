document.addEventListener('DOMContentLoaded', () => {
  // navbar appears on scroll down for index page only
  if (document.getElementById('showcase-wrapper')) {
    var navbar = document.getElementById('nav-holder');
    var hiddenElList = document.querySelectorAll('.hidden');
    var scrolled = false;

    window.onscroll = function () {
      if (window.pageYOffset / window.innerHeight > 0.05) {
        hiddenElList.forEach((el) => {
          el.classList.remove('hidden');
          if (!scrolled) {
            // el.style.transform = `translateX(-${window.innerWidth})`;
          }
          // setTimeout(function () {
          //   el.style.transform = 'translateX(0)';
          // }, 500);
          scrolled = true;
        });
      } else {
        hiddenElList.forEach((el) => el.classList.add('hidden'));
        scrolled = false;
      }
      if (window.pageYOffset / window.innerHeight > 0.9) {
        navbar.classList.remove('nav-transparent');
      } else {
        navbar.classList.add('nav-transparent');
      }
    };
  }
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
