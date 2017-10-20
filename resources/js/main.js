// SLICK CAROUSEL ---------------------------
$(document).ready(function(){
  $('.carousel').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          autoplay: false
        }
      }
    ]
  });

// HIDDEN THE HEADER ---------------------------
 var lastScrollTop = 0;
  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    if (scrollTop - lastScrollTop > 50){
      var navHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navHeight}, 150);
      lastScrollTop = scrollTop;
    } else if (lastScrollTop - scrollTop > 50) {
      $('.navbar').animate({top: 0 + "px"}, 150);
      lastScrollTop = scrollTop;
    }
  });
});
