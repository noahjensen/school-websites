$(document).ready(function () {

    /* ---	Code for Menu ---- */

    $('.menu-wrap .second-nav li ul').parent().addClass('has-child');

    $('html').click(function () {
        $(".schools-menu.menu-wrap").removeClass('active');
        $("#right-nav .menu-btn > span").removeClass('active');
        $(".left-nav.menu-wrap").removeClass('active');
       $('body').removeClass('overflow-hidden');
    });
    $('.menu-btn, .left-nav.menu-wrap').click(function (e) {
        e.stopPropagation();
    });

    $("#left-nav .menu-btn > span, .menu-close").click(function (e) {
        $(".schools-menu.menu-wrap").removeClass('active');
        $(".left-nav.menu-wrap").toggleClass('active');
       $('body').toggleClass('overflow-hidden');
        $("#right-nav .menu-btn > span").removeClass('active');
    });

    $("#right-nav .menu-btn > span").click(function (e) {
        $(".schools-menu.menu-wrap").toggleClass('active');
        $(".left-nav.menu-wrap").removeClass('active');
        $(this).toggleClass('active');
      $('body').toggleClass('overflow-hidden');
    });

    if ($(window).width() > 980) {

        $(".second-nav li.has-child").hover(
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
    $('.second-nav li.has-child span').click(function () {
        $(this).next().slideToggle("slow");
        $(this).parent().toggleClass("open");
    });







    /* ---	Equal height function resizeable on window resize ---- */
    if ($(window).width() > 900) {
        var headerheight = $('#header').height();
        var windowheight = $(window).height();
        var imgheight = windowheight - 71;
        //$('.left-nav.menu-wrap').css("min-height", imgheight);


        delay(function () {
            $('.main .col-item.equal-col').css('height', 'inherit'); //solve for all you browser stretchers out there!
            setEqualHeight($('.main .col-item.equal-col'));
        }, 500);
    }
    $(window).resize(function () {
        if ($(window).width() > 900) {
            var headerheight = $('#header').height();
            var windowheight = $(window).height();
            var imgheight = windowheight - 71;
            //$('.left-nav.menu-wrap').css("min-height", imgheight);

            delay(function () {
                //$('.main .col-item.equal-col').css('height', 'auto'); //solve for all you browser stretchers out there!
                setEqualHeight($('.main .col-item.equal-col'));
            }, 500);

        } else {
            //$('.left-nav.menu-wrap').css("min-height", "inherit");
            $(".main .col-item.equal-col").css('min-height', 'inherit');
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
