// var mixer = mixitup(".bestproduct__inner", {
//   load: {
//     filter: ".chair",
//   },
// });

$(".nav__menu-btn").on("click", function () {
  $(".nav__menu-btn").toggleClass("menu--open");
});
$(".nav__menu-btn").on("click", function () {
  $(".nav__list").toggleClass("menu--open");
});

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
      '<button class="swiper-button-left"><svg class="bestproduct__button-svg" width="21" height="15" aria-label="icon arrow next"><use href="./images/icons/icons.svg#arrow-next-black"></use></svg></button>',
    prevArrow:
      '<button class="swiper-button-right"><svg class="bestproduct__button-svg" width="21" height="15" aria-label="icon arrow prev"><use href="./images/icons/icons.svg#arrow-prev-black"></use></svg></button>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 877,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 649,
        settings: {
          slidesToShow: 1,
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
    responsive: [
      {
        breakpoint: 1164,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 794,
        settings: {
          dots: true,
          slidesToShow: 1,
        },
      },
    ],
  });
});

AOS.init();
