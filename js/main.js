$(function () {
  $(".bike__slider, .slider__items").slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".menu, .bike__column").on("click", "a", function (event) {
    event.preventDefault();

    //забираем идентификатор бока с атрибута href

    var id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якорь

      top = $(id).offset().top;

    $("body,html").animate({ scrollTop: top }, 1500);
  });
});
