$(function () {

   $('.product__filter-btn--large').on('click', function () {
      $('.product__item').addClass('product__item--large');
      $('.product__filter-btn--large').addClass('product__filter-btn--active');
      $('.product__filter-btn--list').removeClass('product__filter-btn--active');
   });


   $('.product__filter-btn--list').on('click', function () {
      $('.product__item').removeClass('product__item--large');
      $('.product__filter-btn--list').addClass('product__filter-btn--active');
      $('.product__filter-btn--large').removeClass('product__filter-btn--active');
   });

   // * --------------------------------------------------------

   // $(".footer-copy").addClass("wow fadeInDown");

   new WOW().init();


});
