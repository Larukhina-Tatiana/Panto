// var mixer = mixitup(".bestproduct__inner", {
//   load: {
//     filter: ".chair",
//   },
// });

// ! Tabs
$(".tabs__link").on("click", function (e) {
  e.preventDefault();

  $($(this).siblings()).removeClass("tabs__link--active");

  $($(this).closest(".tabs-wrapper").siblings().find("li")).removeClass(
    "tabs__content--active"
  );

  $(this).addClass("tabs__link--active");
  $($(this).attr("href")).addClass("tabs__content--active");

  // Инициализация слайдера
  $(".bestproduct__slider").slick("setPosition");
});

$(function () {
  $(".bestproduct__slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:
      '<button class="bestproduct__button-next swiper-button-left"><svg class="bestproduct__button-svg" width="21" height="15" aria-label="icon arrow next"><use href="./images/icons/icons.svg#arrow-next-black"></use></svg></button>',
    prevArrow:
      '<button class="bestproduct__button-prev swiper-button-right"><svg class="bestproduct__button-svg" width="21" height="15" aria-label="icon arrow prev"><use href="./images/icons/icons.svg#arrow-prev-black"></use></svg></button>',
    responsive: [
      {
        breakpoint: 1241,
        settings: {
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 3,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  });
});

$(function () {
  $(".testimonials__list").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow:
      '<button class="swiper-button-left"><svg class="bestproduct__button-svg" width="21" height="15" aria-label="icon arrow next"><use href="./images/icons/icons.svg#arrow-next-black"></use></svg></button>',
    prevArrow:
      '<button class="swiper-button-right"><svg class="bestproduct__button-svg" width="21" height="15" aria-label="icon arrow prev"><use href="./images/icons/icons.svg#arrow-prev-black"></use></svg></button>',
    // responsive: [
    //   {
    //     breakpoint: 1241,
    //     settings: {
    //       dots: true,
    //       arrows: false,
    //     },
    //   },
    //   {
    //     breakpoint: 1130,
    //     settings: {
    //       slidesToShow: 3,
    //       dots: true,
    //       arrows: false,
    //     },
    //   },
    //   {
    //     breakpoint: 870,
    //     settings: {
    //       slidesToShow: 2,
    //       dots: true,
    //       arrows: false,
    //     },
    //   },
    //   {
    //     breakpoint: 560,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       dots: true,
    //       arrows: false,
    //     },
    //   },
    // ],
  });
});
AOS.init();
