// Menu Icon Knopf
$(document).ready(function() {
  $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("zeigebitte");
  });
});
// Scrolling Effect
$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
    $('nav').addClass('black');
  } else {
    $('nav').removeClass('black');
  }
})
