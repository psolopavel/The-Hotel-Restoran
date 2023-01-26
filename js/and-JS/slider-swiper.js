const swiper = new Swiper('.main-swiper__slider', {
   loop: true,
   spaceBetween: 30,
   parallax: true,
   slidesPerView: 1,
   mousewheel: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   navigation: {
      nextEl: '.main-swiper__next',
      prevEl: '.main-swiper__prev',
   },
   speed: 1200,
   // pagination: {
   //    el: '.controll-main-block__dots',
   //    clickable: true,
   // },
   on: {
      //   init: function (swiper){
      //     const AllSlider = document.querySelector('.fraction-controll__all')
      //     AllSlider.innerHTML = swiper.slides.length - 2 < 10 ? `0${swiper.slides.length - 2}` : swiper.slides.length - 2;
      //   },
      //   slideChange: function (swiper){
      //     const CurentSlider = document.querySelector('.fraction-controll__current')
      //     CurentSlider.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex  + 1;
      //   },
   },
});