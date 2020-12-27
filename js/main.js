"use_strict";

(function($){
    $('.navbar__collapse').on('click', () => {
        $('#nav').toggleClass('menu-open');
    });
    
    ///////////////////////////
    // On Scroll
    $(window).on('scroll resize load', function() {
        var wWidth = $(this).width();
    
        // Fixed nav
        wWidth <= 768 ? $('#nav').addClass('fixed') : $('#nav').removeClass('fixed');
    });
    
    $('#slide-img img').slideshowify({
        parentEl : '#big-img',
        randomize    : true,
        aniSpeedMin  : 10000,
        aniSpeedMax  : 13000
    });
})(jQuery);