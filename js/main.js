"use strict";

(function($) {
    $('.slider__img img').slideshowify({
        parentEl : '#big-main-img',
        randomize    : true,
        aniSpeedMin  : 10000,
        aniSpeedMax  : 13000
    });


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
    // menu--1
    $('.menu--1').on('click', function () {

        $('body').toggleClass('no-scroll');
        $('#nav').toggleClass('menu-open');


        $(this).data('count') ? $(this).data('count', $(this).data('count') + 1) : $(this).data('count', 1);
        
        if ($(this).data('count') % 2 == 0) {
            $('.menu--1 span').removeClass('active');
            $('.menu--1 span').addClass('active-remove');
            setTimeout( function () {
                $('.menu--1 span').removeClass('active-remove');
            }, 800);
        } else {
            $('.menu--1 span').addClass('active');
            $('.menu--1 span').removeClass('active-remove');
        }
    });

})(jQuery);