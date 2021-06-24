document.addEventListener('DOMContentLoaded', () => {
  // initialize carousel
  var carousel = document.querySelectorAll('.carousel');
  M.Carousel.init(carousel, {
    fullWidth: true,
    indicators: true,
    duration: 300,
    padding: 10,
  });

  // autoplay custom function
  const indicatorItems = document.querySelectorAll('.carousel .indicator-item');
  const slideTime = 5000;
  const activeClass = 'active';

  setInterval(() => {
    indicatorItems.forEach((el) => {
      if (el.classList.contains(activeClass)) {
        let siblingEl = el.nextElementSibling;
        if (siblingEl == null) {
          indicatorItems[0].click();
        } else {
          siblingEl.click();
        }
      }
    });
  }, slideTime);
});
