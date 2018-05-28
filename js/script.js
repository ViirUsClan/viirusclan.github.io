// Menu Icon Knopf
$(document).ready(function() {
  $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("zeigebitte");
    $("div.menu-icon").toggleClass("gahtdas");
  });
});
// Scrolling Effect
$(window).on("scroll", function() {
  if ($(window).scrollTop() >= 222) {
    $('nav').addClass('black');
  } else {
    $('nav').removeClass('black');
  }
})
