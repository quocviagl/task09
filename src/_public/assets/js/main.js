// $('.c-mainvisual__slider').not('.slick-initialized').slick({
//   fade: true,
//   speed: 1100,
//   infinite: true,
//   autoplay: true,
//   cssEase: "linear",
//   arrows: false,
//   });
$(function () {
  slideinout();
});
function slideinout() {
  if (!$("#c-jstopslider").length) return;
  var slider = $("#c-jstopslider");
  slider.on("init", function () {
    slider.find(".slick-current").removeClass("slick-animated");
  });
  slider.slick({
    fade: true,
    dots: false,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 5000,
    speed: 2000,
    cssEase: "cubic-bezier(0.25, 0.1, 0.25, 1)",
    pauseOnFocus: false,
    pauseOnHover: false,
    swipe: false,
  });
  slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    slick.$slides.eq(nextSlide).addClass("slick-animated");
    setTimeout(function () {
      slider
        .find(".slick-slide:not(.slick-current)")
        .removeClass("slick-animated");
    }, 1500);
  });
  setTimeout(function () {
    slider.slick("slickPlay");
    slider.find(".slick-current").addClass("slick-animated");
  }, 2000);
}
//SCROLL BUTTON
$(".c-mainvisual__scrolltext--top").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 900,
      },
      1000
    );
  });
//SCROLL ANIMATE
  $(".c-gnav__item").each(function (i) {
      $(this).click(function(){
        var href = $(this).children().attr('href');
        $(this).children().addClass("is-active").siblings().removeClass("is-active");
        $("html,body").animate(
          {
            scrollTop: $(href).offset().top - 80,
          },
          1000
        );
      })
  });
//SWITCH TAB
$(".c-table__tab").click(function(){
  $(this).addClass("is-active");
  $(this).siblings().removeClass("is-active");
  if ($('.c-table__tab--left').hasClass('is-active'))
  {
    $('.c-table__content--1').addClass('is-active');
    $('.c-table__content--2').removeClass('is-active')
  }
  else
  {
    $('.c-table__content--1').removeClass('is-active');
    $('.c-table__content--2').addClass('is-active')
  }
})
//MENU ACTIVE BORDER
$(window).scroll(function () {
  let scroll_pos = $(window).scrollTop();
  var arr = [];
  $(".p-scroll").each(function (i,val) {
    if (scroll_pos + 600 > $(val).offset().top ){
      $(".c-gnav__item").eq(i).addClass("is-active").siblings().removeClass("is-active");
    }
  });

//FADE IN ANIMATION
  $(".c-fadein").each(function(i){
    if(scroll_pos + 800 >= $(this).offset().top){
      $(this).addClass('is-fadein')
    }
  });
});
//OPEN MESSAGE MODAL
$( ".c-messages__item" ).click(function() {
      var index = $(".c-messages__item").index( this );
      var modal = "c-messages__modal"
      $('#p-main').addClass("is-hidden")
      $("."+modal+"--"+(index+1)).addClass("is-active")
  });
//OPEN IMG MODAL

$( ".c-collection__img" ).click(function() {
    var index = $(".c-collection__img").index( this )
    var modal = "c-collection__modal"
    $('#p-main').addClass("is-hidden")
    $("."+modal+"--"+(index+1)).addClass("is-active")
});
//CLOSE MODAL BUTTON
$('.c-closebtn').click(function(){
  var modal = $(this).parent().parent().parent()
  if(modal.hasClass('is-active')){
    modal.removeClass('is-active')
    $('#p-main').removeClass("is-hidden")
  }
})
///
