$(document).ready(function(){

  $('#menu').slicknav();

    $('.banner-area').slick({
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            // {
            //   breakpoint: 768,
            //   settings: {
            //     arrows: false,
            //     slidesToShow: 1
            //   }
            // },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
    }),

    $('.testimonials').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        loop: true,
        arrows: false,
        slidesToShow: 2,
        dots: true,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
              },
        ]
      });
  });