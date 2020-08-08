$(function () {

   $('.icon-th-list').on('click', function () {
      $('.product__item').addClass('product__item--list');
      $('.icon-th-list').addClass('product__filter-btn--active');
      $('.icon-th').removeClass('product__filter-btn--active');

   });


   $('.icon-th').on('click', function () {
      $('.product__item').removeClass('product__item--list');
      $('.icon-th').addClass('product__filter-btn--active');
      $('.icon-th-list').removeClass('product__filter-btn--active');
   });

   // * --------------------------------------------------------

   $(".footer-copy").addClass("wow fadeInDown");

   new WOW().init();


});
