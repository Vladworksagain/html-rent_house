  import Swiper from 'swiper';

  import 'swiper/swiper-bundle.css';

  import SwiperCore, { Navigation, Pagination } from 'swiper/core';

  SwiperCore.use([Navigation, Pagination]);

  let swiper = new Swiper('.header-slider', {
    containerModifierClass: 'header-slider',
    wrapperClass: 'slider-wrapper',
    slideClass: 'header-slide', 
    clickable: true,
    speed: 600,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
