jQuery(window).on("load", function (e) {

	if (jQuery('#juni-load').length) { 
     
        $('#juni-load').css('opacity','0');
		}
	setTimeout(function(){ 
    $('.contact-page').removeClass('animatable'); 
    $('.contact-page').addClass('slide-in-left'); 
    $('.about-page').removeClass('animatable'); 
    $('.about-page').addClass('slide-in-left'); 
    $('.home-page').removeClass('animatable'); 
    $('.home-page').addClass('slide-in-top'); 
    $('.category-page').removeClass('animatable'); 
    $('.category-page').addClass('slide-in-bottom'); 
    $('.project-page').removeClass('animatable'); 
    $('.project-page').addClass('slide-in-left'); 
    $('#juni-load').css('opacity','0'); 
    $('#juni-load').css('display','none');
	}, 400);	
});

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


$(document).ready(function(){
  
  if ($('.category-page').length) { 
    var navOffset = $('.navbar').height();
    $('.category-page').css('margin-top', navOffset);
  }
  if ($('.project-page').length) { 
    var navOffset = $('.navbar').height();
    $('.project-page').css('margin-top', navOffset);
  }
  if ($('.contact-page').length) { 
    var navOffset = $('.navbar').height();
    $('.contact-page').css('margin-top', navOffset);
  }
  if ($('.about-page').length) { 
    var navOffset = $('.navbar').height();
    $('.about-page').css('margin-top', navOffset);
  }
});

$(document).ready(function(){
  
  if ($('.animatable').length) { 
      $(".previous-project").click(function() { 
        $('.project-page').removeClass('animatable'); 
        $('.project-page').addClass('slide-in-left');    
      });
    
  }

});






