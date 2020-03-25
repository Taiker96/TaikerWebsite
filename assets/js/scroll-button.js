// Scroll Back To Top
$(document).ready(function () {
    $(".topPage").click(function () {
      $('html, body').animate({
        scrollTop: $(".myPage").offset().top
      }, 1500);
    });
  });
  $(document).ready(function () {
    $(".scroll").click(function () {
      $('html, body').animate({
        scrollTop: $(".stop-scroll").offset().top
      }, 1000);
    });
  });
  $(document).ready(function () {
    $(".skills").click(function () {
      $('html, body').animate({
        scrollTop: $(".my-skills").offset().top
      }, 1000);
    });
  });
  $(document).ready(function () {
    $(".infor").click(function () {
      $('html, body').animate({
        scrollTop: $(".my-infor").offset().top
      }, 1000);
    });
  });