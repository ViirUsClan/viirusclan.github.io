'use strict';
$(window).scroll(function () {
if ($(window).scrollTop() >= 47) {
$('div#navigation table tr td a').css('opacity','0.7');
} else {
$('div#navigation table tr td a').css('opacity','1');
}
});
