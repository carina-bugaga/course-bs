$(document).ready(function(){
    $('.carausel_inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 1500,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/arrow_L.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/arrow_R.png"></button>'
      }); 
  });