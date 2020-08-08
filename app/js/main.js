$(function () {

   $('.product__filter-btn--list').on('click', function () {
      $('.product').addClass('product--list');
      $('.product__filter-btn--list').addClass('product__filter-btn--active');
      $('.product__filter-btn--large').removeClass('product__filter-btn--active');
   });

   $('.product__filter-btn--large').on('click', function () {
      $('.product').removeClass('product--list');
      $('.product__filter-btn--large').addClass('product__filter-btn--active');
      $('.product__filter-btn--list').removeClass('product__filter-btn--active');
   });

   // * --------------------------------------------------------



   // * --------------------------------------------------------

   $(".product__item").addClass("wow flipInX");
   $(".header__logo").addClass("wow fadeInLeft");
   $(".header__box").addClass("wow fadeInDown");
   $(".product__filter-btn").addClass("wow fadeInLeftBig");
   $(".product__link").addClass("wow headShake");


   new WOW().init();

});
