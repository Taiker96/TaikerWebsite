//slide Quotes
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      responsiveClass:true,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      responsive:{
          0:{ //1 column all grid
              items:1,
              nav:false
          },
          600:{ //Small Screen 1 column
              items:1,
              nav:false
          },
          1000:{ //Large Screen 1 column
              items:1,
              nav:false
          }
      }
  })
  });
  