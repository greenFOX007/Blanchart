const swiper1 = new Swiper('.swiper1', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: false,
  },
  autoplay: {
    delay: 9000,
  },
});
  const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 3,
    slidesPerColumnFill: 'row',
    slidesPerColumn: 2,
    spaceBetween: 50,
    direction: 'horizontal',
    slidesPerGroup: 3,
    pagination: {
      el: '.swiper-pagination2',
      type: 'fraction',
    },
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
    breakpoints: {
      150: {
        slidesPerView:1,
        slidesPerColumnFill: 'column',
       slidesPerColumn: 1,
       spaceBetween: 10,
       slidesPerGroup: 1,
      },
      768: {
        slidesPerView:2,
        slidesPerColumnFill: 'row',
       slidesPerColumn: 2,
       spaceBetween: 30,
       slidesPerGroup: 2,
      },
      1024: {
        slidesPerView:2,
        slidesPerColumnFill: 'row',
       slidesPerColumn: 2,
       spaceBetween: 30,
       slidesPerGroup: 2,
      },
      1300: {
        slidesPerView:2,
        slidesPerColumnFill: 'row',
       slidesPerColumn: 2,
       spaceBetween: 50,
       slidesPerGroup: 2,
      },
      1750: {
        slidesPerView:3,
        slidesPerColumnFill: 'row',
       slidesPerColumn: 2,
       spaceBetween: 20,
       slidesPerGroup: 3,
      },
      1920: {
        slidesPerView:3,
        slidesPerColumnFill: 'row',
       slidesPerColumn: 2,
       spaceBetween: 50,
       slidesPerGroup: 3,
      }
    }
  });

const swiper5 = new Swiper('.swiper5', {
slidesPerView: 3,
spaceBetween: 50,
direction: 'horizontal',
slidesPerGroup: 3,
loop: false,
navigation: {
  nextEl: '.swiper-button-next5',
  prevEl: '.swiper-button-prev5',
},
breakpoints: {
    150: {
        slidesPerView:1,
       spaceBetween: 5,
       slidesPerGroup: 1,
      },
      768: {
        slidesPerView:2,
       spaceBetween: 34,
       slidesPerGroup: 2,
      },
      1024: {
        slidesPerView:2,
       spaceBetween: 50,
       slidesPerGroup: 2,
      },
      1300: {
        slidesPerView:2,

       spaceBetween: 10,
       slidesPerGroup: 2,
      },
      1500: {
        slidesPerView:3,
       spaceBetween: 50,
       slidesPerGroup: 3,
      },
      1920: {
        slidesPerView:3,

       spaceBetween: 50,
       slidesPerGroup: 3,
      }
    }
});
