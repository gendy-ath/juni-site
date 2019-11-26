$(document).ready(function(){
   
  $('.collapse').on('hidden.bs.collapse', function () {
    $('.menu-trigger').removeClass('menu-expanded')
    $('.brand-link').removeClass('brand-container-expanded')
  }) 
  $('.collapse').on('shown.bs.collapse', function () {
    $('.menu-trigger').addClass('menu-expanded')
    $('.brand-link').addClass('brand-container-expanded')
  }) 
 
  
});


