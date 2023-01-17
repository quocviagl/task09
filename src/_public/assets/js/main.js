$('.c-mainvisual__slider').not('.slick-initialized').slick({
  fade: true,
  speed: 1100,
  infinite: true,
  autoplay: true,
  cssEase: "linear",
  arrows: false,
  });
//SCROLL BUTTON
$(".c-mainvisual__scrolltext--top").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 800,
      },
      1000
    );
  });
//SCROLL ANIMATE
  $(".c-gnav__item").each(function (i) {
      $(this).click(function(){
        var href = $(this).children().attr('href');
        $("html, body").animate(
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
  $(".p-scroll").each(function (i) {
    if (scroll_pos + 500 >= $(this).offset().top) {
      $(".c-gnav__item").siblings().removeClass("is-active");
      $(".c-gnav__item").eq(i).addClass("is-active");
   
    }
  });
//FADE IN ANIMATION
  $(".c-fadein").each(function(i){
    if(scroll_pos + 800 >= $(this).offset().top){
      $(this).addClass('is-fadein')
    }
  })
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
