// Inicialización de Slick Carousel
$(document).ready(function () {
  $(".client-carousel").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    // Mostrar los puntos de navegación
    // prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    // nextArrow: '<button type="button" class="slick-next">Next</button>',
  });
});
