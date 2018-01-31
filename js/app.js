$(document).ready(function(){
  $(".slide-five").owlCarousel({
    loop:false,
    nav:true,
    margin:10,
    navText: [],
    responsive:{
      0:{
        items:3
      },
      600:{
        items:3
      },
      1000:{
        items:5
      }
    }
  });



  $('.cat').click(function(){
    cat = $(this).attr('data-cat');

    $('.slide-five .item').removeClass('ancor');


    $('.slide-five').find('.'+cat).addClass('ancor');


    num = $('.ancor').first().attr('data-num');




    var carousel = $(".slide-five");
    carousel.owlCarousel();
    carousel.trigger("to.owl.carousel", [num, 500, true]);

  });



});