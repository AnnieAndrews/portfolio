$(window).scroll(function(){
    $(".my-name, .name-detail, .logo").css("opacity", 1 - $(window).scrollTop() / 250);
  });


$(document).on('click', 'a[href^="#view"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
