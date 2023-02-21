$(function () {

    $('.design-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,

        responsive: [
            {
              breakpoint: 461,
              settings: {
                slidesToShow: 1,
                variableWidth: false,
              }
            },

          ]


    });

})


