// логику слайдера - новый обращение к свайперу js и потом к классу

new Swiper('.slider', {
  // direction: 'vertical',
  speed: 2400,
  mousewheel: {
    enabled: true,
    sansitivity: 2.4,
  },
  spaceBetween: 18,
  parallax: true,
  // freeMode: true,
  //  Движение слайдов свободно , а не постранично
});

// parallax: true, через атрибуты data-swiper-parallax в коде задается в % 
// на сколько быстро или медленно будет двигаться слайд
// чем больше % -  тем медленнее двигается слой
