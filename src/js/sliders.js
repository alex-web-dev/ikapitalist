import Swiper, {Pagination, Navigation, Grid} from 'swiper';

Swiper.use([Pagination, Navigation, Grid]);

const $cardsSlider = new Swiper('.cards-slider__main', {
  direction: 'horizontal',
  slidesPerView: 1,
  speed: 400,
  spaceBetween: 30,
  watchOverflow: false,
  navigation: {
    nextEl: '.cards-slider__next',
    prevEl: '.cards-slider__prev',
  },
  breakpoints: {
    991: {
      slidesPerView: 3
    },
    640: {
      slidesPerView: 2
    }
  }
});

const $newsSlider = new Swiper('.news-slider__main', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 600,
  watchOverflow: false,
  navigation: {
    nextEl: '.news-slider__next',
    prevEl: '.news-slider__prev',
  },
});

// const $newsSlider = new Swiper('.news-slider__main', {
//   direction: 'horizontal',
//   slidesPerView: 3,
//   spaceBetween: 0,
//   speed: 600,
//   watchOverflow: false,
//   navigation: {
//     nextEl: '.news-slider__next',
//     prevEl: '.news-slider__prev',
//   },
//   grid: {
//     rows: 2,
//     fill: 'row',
//   },
// });

const $casesSlider = new Swiper('.cases__main', {
  direction: 'horizontal',
  slidesPerView: 1,
  speed: 400,
  grid: {
    rows: 1,
    fill: 'row',
  },
  spaceBetween: 16,
  navigation: {
    nextEl: '.cases__next',
    prevEl: '.cases__prev',
  },
  breakpoints: {
    991: {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
    },
    640: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
    }
  }
});

const $dealsSlider = new Swiper('.deals__list', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 400,
  watchOverflow: false,
  navigation: {
    nextEl: '.deals__next',
    prevEl: '.deals__prev',
  },
  breakpoints: {
    991: {
      slidesPerView: 3
    },
    640: {
      slidesPerView: 2
    }
  }
});

const $mediaSlider = new Swiper('.media__main', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 400,
  watchOverflow: false,
  navigation: {
    nextEl: '.media__next',
    prevEl: '.media__prev',
  },
  breakpoints: {
    991: {
      slidesPerView: 3
    },
    640: {
      slidesPerView: 2
    }
  }
});

const $newsItemSlider = new Swiper('.news-item_slider', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 400,
  watchOverflow: false,
  loop: true,
  pagination: {
    el: '.news-item__pagination',
    type: 'bullets',
    clickable: true
  },
});

const $newsInfoSlider = new Swiper('.news-info_slider', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 400,
  watchOverflow: false,
  loop: true,
  pagination: {
    el: '.news-info__pagination',
    type: 'bullets',
    clickable: true
  },
  navigation: {
    nextEl: '.news-info__next',
    prevEl: '.news-info__prev',
  }
});