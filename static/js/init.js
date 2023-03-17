(function ($) {
    "use strict";  
    // loader
    var loader = function () {
      setTimeout(function () {
        if ($('#loader').length > 0) {
          $('#loader').removeClass('show');
        }
      }, 1);
    };
    loader();   
    // Initiate the wowjs
    new WOW().init();    
    // Sticky Navbar
    $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
        $('.navbar').addClass('nav-sticky');
      } else {
        $('.navbar').removeClass('nav-sticky');
      }
    });
          
})(jQuery);