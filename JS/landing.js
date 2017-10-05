$(window).scroll(function(){
    $(".hero-title, .hero-subtitle, .hero-text").css("opacity", 1 - $(window).scrollTop() / 250);
  });
