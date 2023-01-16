$('.c-mainvisual__slider').not('.slick-initialized').slick({
    infinite: true,
    autoplay: false,
    speed: 1000,
    fade: true,
    cssEase: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    dots: false,
    arrows: false,
    swipe: false
  });

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

$(window).scroll(function () {
  let scroll_pos = $(window).scrollTop();
  $(".p-scroll").each(function (i) {
    if (scroll_pos + 500 >= $(this).offset().top) {
      $(".c-gnav__item").siblings().removeClass("is-active");
      $(".c-gnav__item").eq(i).addClass("is-active");
    }
  });
});

$( ".c-messages__item" ).click(function() {
      var index = $(".c-messages__item").index( this );
      var modal = "c-messages__modal"
      $('#p-main').addClass("is-hidden")
      if( (index+1) == 1){
        $("."+modal+"--"+(index+1)).addClass("is-active")
      } else if((index+1) == 2){
        $("."+modal+"--"+(index+1)).addClass("is-active")

      } else{
        $("."+modal+"--"+(index+1)).addClass("is-active")
      }
  });

$('.c-messages__modalcontent--bottom').click(function(){
  var modal = $(this).parent().parent().parent()
  $('.c-messages__list').scrollTop(600)
  if(modal.hasClass('is-active')){
    modal.removeClass('is-active')
    $('#p-main').removeClass("is-hidden")
  }
})

