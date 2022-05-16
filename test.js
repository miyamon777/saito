'use strict'
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: 'bullets',
      clickable: true,
    },
  });