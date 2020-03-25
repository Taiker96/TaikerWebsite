var lastScrollTop = 0;
var navbar = document.querySelector('.topMenu');
window.addEventListener("scroll", function () {
    var scrollTop = window.pageTOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-120px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
})

//scroll
$(document).ready(function () {
    $('.scroll').click(function () {
        $('html, body').animate({
            scrollTop: $("section").offset().top
        }, 1000)
    })
});