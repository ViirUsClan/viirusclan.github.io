// Menu Icon Knopf
$(document).ready(function() {
  $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("zeigebitte");
    $("div.menu-icon").toggleClass("gahtdas");
  });
});
// Menuband wird schwarz beim Scrollen
/*
$(window).on("scroll", function() {
  if ($(window).scrollTop() >= 222) {
    $('nav').addClass('black');
  } else {
    $('nav').removeClass('black');
  }
})
*/
$(window).on("scroll", function() {
  if ($(window).scrollTop() >= 222) {
    $('nav').css({
      'background: rgba(0, 0, 0, 0.8)',
    });
  } else {
    $('nav').css({
      'background: rgba(0, 0, 0, 0)';
    });
  }
})
