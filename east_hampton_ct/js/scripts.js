$(document).ready(function () {

    /* ---	Code for Menu ---- */

     $('.menu-wrap ul.second-nav li ul').parent().addClass('has-child');

            /* $('html').click(function() {
                $(".menu-wrap").slideUp();
                $("#left-nav").removeClass('active');
                
            });
            $('.menu-btn').click(function(e) {
                e.stopPropagation();
            });
*/
	
				var headerheight = $('#header').height();
				var windowheight = $(window).height();
				var imgheight = windowheight - headerheight;
				$('#left-nav .menu-wrap').css('max-height', imgheight);
	
            $("#left-nav .menu-btn > span, .menu-close").click(function(e) {
                $("#left-nav .menu-wrap").slideToggle();
                $("#left-nav").toggleClass('active');
                $("body").toggleClass('no-overflow');

            });
            $('#left-nav .schools-menu').click(function() {                
              
              if (!$(this).hasClass('active')) {
                   $("#left-nav .menu-wrap").slideDown();
					    $("body").removeClass('no-overflow');
                } else {
                   $("#left-nav .menu-wrap").slideUp();
						 $("body").removeClass('no-overflow');
                }
              
                $('.menu-wrap ul.first-nav, .menu-wrap .second-nav').hide();
                $('.menu-wrap .schools-nav').slideToggle();
                $('#left-nav.active .first-menu').removeClass('active');
                $(this).toggleClass('active');
                $('.menu-wrap').toggleClass('school-wrap');
                $('#left-nav .menu-btn').toggleClass('school-active-btn');
					
            });
            $('#left-nav .first-menu').click(function() {
              
              if (!$(this).hasClass('active')) {
                   $("#left-nav .menu-wrap, .menu-wrap .first-nav, .menu-wrap .second-nav").slideDown();
					    $("body").addClass('no-overflow');
                } else {
                   $("#left-nav .menu-wrap, .menu-wrap .first-nav, .menu-wrap .second-nav").slideUp();
						 $("body").removeClass('no-overflow');
                }              
                $('.menu-wrap .schools-nav').hide();

                $('#left-nav .schools-menu').removeClass('active');
                $(this).toggleClass('active');
                $('.menu-wrap').removeClass('school-wrap');
                $('#left-nav .menu-btn').removeClass('school-active-btn');
            });
	
				$(window).resize(function() {
					var headerheight = $('#header').height();
					var windowheight = $(window).height();
					var imgheight = windowheight - headerheight;
					$('#left-nav .menu-wrap').css('max-height', imgheight);
			  });

            
    if ($(window).width() > 980) {

        $("ul.second-nav li.has-child").hover(
            function () {
                $(this).children('ul').stop().slideDown("slow");
                $(this).addClass("open");
            },
            function () {
                $(this).children('ul').stop().slideUp("slow");
                $(this).removeClass("open");
            }
        );

    }
    $('ul.second-nav li.has-child span').click(function () {
        $(this).next().slideToggle("slow");
        $(this).parent().toggleClass("open");
    });







    /* ---	Equal height function resizeable on window resize ---- */
    if ($(window).width() > 880) {
        delay(function () {
            $('.main .col-item').css('height', 'auto'); //solve for all you browser stretchers out there!
            setEqualHeight($('.main .col-item'));
        }, 500);
    }
    $(window).resize(function () {
        if ($(window).width() > 880) {
            delay(function () {
                $('.main .col-item').css('height', 'auto'); //solve for all you browser stretchers out there!
                setEqualHeight($('.main .col-item'));
            }, 500);

        } else {
            $(".main .col-item").css('height', 'auto');
        }
    });



});




//set max height----------------------------------------------//
function setEqualHeight(columns) {
    var tallestcolumn = 0;
    columns.each(
        function () {
            currentHeight = $(this).height();
            if (currentHeight > tallestcolumn) {
                tallestcolumn = currentHeight;
            }
        }
    );
    columns.height(tallestcolumn);
}

var delay = (function () {
    var timer = 0;
    return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();
//vertically align----------------------------------------------//
jQuery.fn.verticalAlign = function () {
    return this
        .css("margin-top", ($(this).parent().height() - $(this).height()) / 2 + 'px')
};

//$('.live-feeds-wrapper .avatar').verticalAlign();
